import React, { useState, useEffect } from 'react'
import { prettifyamounts } from 'resources/utilities'
import MainBlock1Card from '../MainBlock1Card'
import { ResponsivePie } from '@nivo/pie'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'

const GraphTreasuryAllocationDonut = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getdata() {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/treasury-allocation`)
          .then((res) => {
            setData([
              {
                id: 'SCEPTER',
                // label: "SCEPTER",
                value: res.data.SCEPTER,
                formattedValue: `${Number(
                  (
                    (res.data.SCEPTER * 100) /
                    (res.data.SCEPTER + res.data.RISK + res.data.BATON)
                  ).toFixed(1)
                )}%`,
                color: 'hsl(276, 70%, 50%)',
              },
              {
                id: 'BATON',
                // label: "BATON",
                value: res.data.BATON,
                formattedValue: `${Number(
                  (
                    (res.data.BATON * 100) /
                    (res.data.SCEPTER + res.data.RISK + res.data.BATON)
                  ).toFixed(1)
                )}%`,
                color: 'hsl(227, 70%, 50%)',
              },
              {
                id: 'RISK',
                // label: "RISK",
                value: res.data.RISK,
                formattedValue: `${Number(
                  (
                    (res.data.RISK * 100) /
                    (res.data.SCEPTER + res.data.RISK + res.data.BATON)
                  ).toFixed(1)
                )}%`,
                color: 'hsl(332, 100%, 63%)',
              },
            ])
          })
      } catch (error) {
        console.log('fetch data failed', error)
      }
    }
    getdata()
  }, [])

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
        <Box h="250px" w="100%" alignSelf="center">
          <ResponsivePie
            data={data}
            margin={{ top: 20, bottom: 20, right: 60 }}
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
                  p="3px"
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="5px"
                  border="2px solid #2AE0BF"
                >
                  <Box
                    backgroundColor={datum.color}
                    mr="5px"
                    h="15px"
                    w="15px"
                  />
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
        </Box>
      </MainBlock1Card>
    )
  )
}

export default GraphTreasuryAllocationDonut
