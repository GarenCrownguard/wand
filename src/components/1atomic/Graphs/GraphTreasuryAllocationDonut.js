import React, { useState, useEffect } from 'react'
import { prettifyamounts } from 'resources/utilities'
import MainBlock1Card from '../MainBlock1Card'
import { ResponsivePie } from '@nivo/pie'
import axios from 'axios'
import { Box, Text } from '@chakra-ui/react'

import { connect } from 'react-redux'

const GraphTreasuryAllocationDonut = (props) => {
  const {
    scepterTreasuryValue: SCEPTER,
    batonTreasuryValue: BATON,
    riskTreasuryValue: RISK,
  } = props.stats

  const [data, setData] = useState()

  useEffect(() => {
    const currentData = [
      {
        id: 'SCEPTER',
        // label: "SCEPTER",
        value: SCEPTER,
        formattedValue: `${Number(
          ((SCEPTER * 100) / (SCEPTER + RISK + BATON)).toFixed(2)
        )}%`,
        color: 'hsl(276, 70%, 50%)',
      },
      {
        id: 'BATON',
        // label: "BATON",
        value: BATON,
        formattedValue: `${Number(
          ((BATON * 100) / (SCEPTER + RISK + BATON)).toFixed(2)
        )}%`,
        color: 'hsl(227, 70%, 50%)',
      },
      {
        id: 'RISK',
        // label: "RISK",
        value: RISK,
        formattedValue: `${Number(
          ((RISK * 100) / (SCEPTER + RISK + BATON)).toFixed(2)
        )}%`,
        color: 'hsl(332, 100%, 63%)',
      },
    ]

    setData(currentData)
  }, [BATON, RISK, SCEPTER])

  return (
    data && (
      <MainBlock1Card
        minHeight="345px"
        minWidth={['320px', '356px', '356px']}
        p="20px"
        flexDirection="column"
      >
        <Box flex={1}>
          <Text variant="title" textAlign="left">
            Treasury Allocation
          </Text>
          <Text variant="value" color="white" textAlign="left">
            {prettifyamounts(data[0].value + data[1].value + data[2].value)}
            <Text as="sup" color="#FF409A" fontSize={12} ml="9px">
              Total in USD
            </Text>
          </Text>
        </Box>

        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.45}
          padAngle={2}
          cornerRadius={7}
          activeOuterRadiusOffset={6}
          enableArcLabels={true}
          arcLabel={(d) => `${d.data.formattedValue}`}
          arcLabelsRadiusOffset={0.5}
          tooltip={({ datum }) => {
            return (
              <Box
                display="flex"
                p={0}
                alignItems="center"
                backgroundColor="white"
                borderRadius="5px"
                border="2px solid #2AE0BF"
              >
                <Box backgroundColor={datum.color} mr="5px" h="15px" w="15px" />
                <Box
                  p={0}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Text fontSize={12} color="black" mt="3px">
                    {datum.data.id} : ${datum.data.value}
                  </Text>
                </Box>
              </Box>
            )
          }}
          arcLabelsTextColor="black"
          // arcLinkLabel='id'
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#2AE0BF"
          arcLinkLabelsThickness={2}
          arcLinkLabelsDiagonalLength={10}
          arcLinkLabelsStraightLength={10}
          arcLinkLabelsTextOffset={5}
          arcLinkLabelsColor="#2AE0BF"
          colors={['#FF409A', '#1F8FDF', '#B1AFCD']}
        />
      </MainBlock1Card>
    )
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
  }
}

export default connect(mapStateToProps)(GraphTreasuryAllocationDonut)
