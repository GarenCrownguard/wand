import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import { prettifyamounts } from 'resources/utilities'

import MainBlock1Card from '../MainBlock1Card'

const GraphTotalValueDepositArea = () => {
  const [parsedData, setParsedData] = useState([])
  const [lastValue, setLastValue] = useState(0)
  var total = []

  useEffect(() => {
    var sptr = []
    var baton = []
    var risk = []
    const getdata = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/sptr`).then((res) => {
          sptr.push(...res.data)
        })
        await axios
          .get(`${process.env.REACT_APP_API_URL}/baton`)
          .then((res) => {
            baton.push(...res.data)
          })
        await axios.get(`${process.env.REACT_APP_API_URL}/risk`).then((res) => {
          risk.push(...res.data)
        })

        for (var i = 0; i < sptr.length; i++) {
          total[i] = {
            timestamp: sptr[i].timestamp,
            value:
              Number(
                (sptr[i]?.value + baton[i]?.value + risk[i]?.value).toFixed(3)
              ) ?? null,
          }
        }

        total.sort((total, totalTemp) => {
          return new Date(total.timestamp) - new Date(totalTemp.timestamp)
        })

        setParsedData(total)
        setLastValue(total[total.length - 1].value)
      } catch (error) {
        console.log('fetch data failed', error)
      }
    }
    getdata()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const config = {
    data: parsedData,
    xField: 'timestamp',
    yField: 'value',
    height: 200,
    seriesField: 'treasury',
    smooth: true,

    // color: '#3fe3c5',
    areaStyle: {
      fillOpacity: 0.3,
      // fill: "yellow",
      fill: '#B1AFCD',
    },
    axis: {
      grid: {
        line: null,
      },
    },
    legend: {
      layout: 'horizontal',
      position: 'bottom-right',
    },
    slider: {
      start: 0,
      end: 1,
      height: 10,
    },
    theme: {
      styleSheet: {
        backgroundColor: 'transparent',
      },
    },
  }

  return (
    total && (
      <MainBlock1Card
        minHeight="345px"
        minWidth={['320px', '356px', '356px']}
        p="20px"
        flexDirection="column"
      >
        <Box flex={1} h="55px">
          <Text variant="title" textAlign="left">
            Total Value Deposited in USD
          </Text>
          <Text variant="value" color="white" textAlign="left">
            {prettifyamounts(lastValue)}
            <Text as="sup" color="#FF409A" fontSize={12} ml="9px">
              Total in USD
            </Text>
          </Text>
        </Box>
        <Box h="225px" w="100%">
          <Area {...config} />
        </Box>
      </MainBlock1Card>
    )
  )
}

export default GraphTotalValueDepositArea
