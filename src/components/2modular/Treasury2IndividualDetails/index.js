import React, { useState } from 'react'

import { connect } from 'react-redux'

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Tooltip,
  Flex,
} from '@chakra-ui/react'

import GraphTotalValueDepositArea from 'components/1atomic/Graphs/GraphTotalValueDepositArea'
import GraphTreasurySPTRArea from 'components/1atomic/Graphs/GraphTreasurySPTRArea'
import GraphTreasuryBATONArea from 'components/1atomic/Graphs/GraphTreasuryBATONArea'
import GraphTreasuryRiskArea from 'components/1atomic/Graphs/GraphTreasuryRiskArea'

const tooltipselectedstyles = {
  w: '85px',
  h: '5px',
  placement: 'top',
  hasArrow: true,
  arrowSize: 7,
  bg: 'wandGreen',
}

const tooltipunselectedstyles = {
  w: '85px',
  h: '5px',
  placement: 'top',
  arrowSize: 7,
  bg: '#B1AFCD',
}

const Treasury2IndividualDetails = (props) => {
  // const { stats, localwalletstats } = props
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <Tabs isLazy variant="unstyled" onChange={(index) => setTabIndex(index)}>
      <TabList>
        <Tab _selected={{}}>
          {tabIndex === 0 ? (
            <Tooltip
              {...tooltipselectedstyles}
              isOpen={tabIndex === 0}
              offset={[0, -38]}
              label="&nbsp;"
            >
              <Text variant="value" color="white" fontSize={18}>
                SCEPTER
              </Text>
            </Tooltip>
          ) : (
            <Tooltip
              {...tooltipunselectedstyles}
              isOpen={tabIndex !== 0}
              offset={[0, -38]}
              label="&nbsp;"
            >
              <Text variant="value" color="#B1AFCD" fontSize={18}>
                SCEPTER
              </Text>
            </Tooltip>
          )}
        </Tab>
        <Tab _selected={{}}>
          {tabIndex === 1 ? (
            <Tooltip
              {...tooltipselectedstyles}
              isOpen={tabIndex === 1}
              offset={[0, -38]}
              label="&nbsp;"
              w="70px"
            >
              <Text variant="value" color="white" fontSize={18}>
                BATON
              </Text>
            </Tooltip>
          ) : (
            <Tooltip
              {...tooltipunselectedstyles}
              isOpen={tabIndex !== 1}
              offset={[0, -38]}
              label="&nbsp;"
              w="70px"
            >
              <Text variant="value" color="#B1AFCD" fontSize={18}>
                BATON
              </Text>
            </Tooltip>
          )}
        </Tab>
        <Tab _selected={{}}>
          {tabIndex === 2 ? (
            <Tooltip
              {...tooltipselectedstyles}
              isOpen={tabIndex === 2}
              offset={[0, -38]}
              label="&nbsp;"
              w="50px"
            >
              <Text variant="value" color="white" fontSize={18}>
                RISK
              </Text>
            </Tooltip>
          ) : (
            <Tooltip
              {...tooltipunselectedstyles}
              isOpen={tabIndex !== 2}
              offset={[0, -38]}
              label="&nbsp;"
              w="50px"
            >
              <Text variant="value" color="#B1AFCD" fontSize={18}>
                RISK
              </Text>
            </Tooltip>
          )}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel p="0" pt="35px">
          <Flex flexDirection={['column', 'column', 'row']}>
            <GraphTreasurySPTRArea />
            <GraphTotalValueDepositArea />
          </Flex>
        </TabPanel>
        <TabPanel p="0" pt="35px">
          <Flex flexDirection={['column', 'column', 'row']}>
            <GraphTreasuryBATONArea />
            <GraphTotalValueDepositArea />
          </Flex>
        </TabPanel>
        <TabPanel p="0" pt="35px">
          <Flex flexDirection={['column', 'column', 'row']}>
            <GraphTreasuryRiskArea />
            <GraphTotalValueDepositArea />
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,

    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(Treasury2IndividualDetails)
