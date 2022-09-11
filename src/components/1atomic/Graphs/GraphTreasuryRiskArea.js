import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import { prettifyamounts } from 'resources/utilities'

import MainBlock1Card from '../MainBlock1Card'

const GraphTreasuryRiskArea = () => {
  const [parsedData, setParsedData] = useState([])
  const [lastValue, setLastValue] = useState(0)

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/risk`).then((res) => {
          const total = res.data

          total.sort((total, totalTemp) => {
            return new Date(total.timestamp) - new Date(totalTemp.timestamp)
          })

          setParsedData(total)
          setLastValue(total[total.length - 1].value)
        })
      } catch (error) {
        console.log('fetch data failed', error)
      }
    }
    getdata()
  }, [])

  const config = {
    data: parsedData,
    xField: 'timestamp',
    yField: 'value',
    height: 200,
    seriesField: 'treasury',
    smooth: true,

    color: '#3fe3c5',
    areaStyle: {
      fillOpacity: 0.3,
      // fill: "yellow",
      fill: 'linear-gradient(70.04deg, #CBCBCB 1.97%, #000000 61.13%)',
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
          Current RISK Treasury
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
}

export default GraphTreasuryRiskArea
