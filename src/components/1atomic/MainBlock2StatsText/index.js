import React from 'react';
import { Box, Text, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { prettifyGrowthPercentage } from 'resources/utilities';

const MainBlock2StatsText = (props) => {
    const { title, value, valueColor, align, growthDirection, percentageValue, tooltipLabel } = props;

  // const alignResponsive = useBreakpointValue(["left", "left", "center"]);
  const alignResponsive = 'center';
  
  return (
    <Box flex={1}>
      <Text variant="title" textAlign={align ? align : alignResponsive}>
        {title}
      </Text>
      <Text variant="value" color={valueColor} textAlign={align ? align : alignResponsive}>
        {value}
        {growthDirection && percentageValue && (
          <Text
            as="sup"
            variant={
              growthDirection === 'positive'
                ? 'positiveGrowth'
                : 'negativeGrowth'
            }
          >
            {prettifyGrowthPercentage(growthDirection, percentageValue)}
          </Text>
        )}
        {tooltipLabel && (
          <Tooltip hasArrow label={tooltipLabel} bg="wandGreen" color="black">
            <InfoOutlineIcon
              color="wandGreen"
              sx={{ ml: '5px', fontSize: 'sm' }}
            />
          </Tooltip>
        )}
      </Text>
    </Box>
  )
};
 
export default MainBlock2StatsText;