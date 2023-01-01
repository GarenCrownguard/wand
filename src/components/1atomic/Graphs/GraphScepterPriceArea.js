import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import { prettifyamounts } from 'resources/utilities'
import { connect } from 'react-redux'

import MainBlock1Card from '../MainBlock1Card'

const GraphScepterPriceArea = ({ stats }) => {
  const [parsedData, setParsedData] = useState([])
  const [lastValue, setLastValue] = useState(0)
  var total = []

  useEffect(() => {
    var sptrPrice = []
    const getdata = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/sptrprice`)
          .then((res) => {
            sptrPrice.push(...res.data)
          })

        for (var i = 0; i < sptrPrice.length; i++) {
          total[i] = {
            timestamp: sptrPrice[i].timestamp,
            value: sptrPrice[i].value,
          }
        }
        // console.log(total)

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
    yAxis: {
      maxLimit: 1,
      //   min: 0,
      minLimit: 0.56,
      // tickInterval: 0.01
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
            SCEPTER Backing Price
          </Text>
          <Text variant="value" color="white" textAlign="left">
            {prettifyamounts(stats.scepterBackingPrice ?? lastValue)}
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

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
  }
}

export default connect(mapStateToProps)(GraphScepterPriceArea)
