import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import { prettifyamounts } from 'resources/utilities'

import MainBlock1Card from '../MainBlock1Card'

const GraphEvolutionOfTreasuriesStacked = () => {
  const [parsedData, setParsedData] = useState([])
  const [lastSptrValue, setLastSptrValue] = useState(0)
  const [lastBatonValue, setLastBatonValue] = useState(0)
  const [lastRiskValue, setLastRiskValue] = useState(0)

  useEffect(() => {
    var total = []

    const getdata = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/sptr`).then((res) => {
          total.push(...res.data)
          setLastSptrValue(res.data[res.data.length - 1].value)
        })
        await axios
          .get(`${process.env.REACT_APP_API_URL}/baton`)
          .then((res) => {
            total.push(...res.data)
            setLastBatonValue(res.data[res.data.length - 1].value)
          })
        await axios.get(`${process.env.REACT_APP_API_URL}/risk`).then((res) => {
          total.push(...res.data)
          setLastRiskValue(res.data[res.data.length - 1].value)
        })

        total.sort((total, totalTemp) => {
          return new Date(total.timestamp) - new Date(totalTemp.timestamp)
        })

        setParsedData(total)
      } catch (error) {
        console.log('fetch data failed', error)
      }
    }
    getdata()
  }, [])

  const config = {
    data: parsedData,
    height: 200,
    xField: 'timestamp',
    yField: 'value',
    seriesField: 'treasury',
    smooth: true,

    color: ['#FF409A', '#1F8FDF', '#B1AFCD'],
    areaStyle: {
      fillOpacity: 1,
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
      start: 0.1,
      end: 0.9,
      height: 10,
    },
    theme: {
      styleSheet: {
        backgroundColor: 'transparent',
      },
    },
  }

  return parsedData && (
    <MainBlock1Card
      minHeight="345px"
      minWidth={['320px', '356px', '356px']}
      p="20px"
      flexDirection="column"
      flexGrow={1}
    >
      <Box flex={1} h="55px">
        <Text variant="title" textAlign="left">
          Treasury Allocation
        </Text>
        <Text variant="value" color="white" textAlign="left">
          {prettifyamounts(lastSptrValue + lastBatonValue + lastRiskValue)}
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
}

export default GraphEvolutionOfTreasuriesStacked
