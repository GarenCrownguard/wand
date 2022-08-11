import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { prettifyGrowthPercentage } from 'resources/utilities';

const MainBlock2StatsText = (props) => {
    const { title, value, align, growthDirection, percentageValue } = props;

  // const alignResponsive = useBreakpointValue(["left", "left", "center"]);
  const alignResponsive = 'center';
  
  return (
    <Box flex={1}>
      <Text variant="title" textAlign={align ? align : alignResponsive}>
        {title}
      </Text>
      <Text variant="value" textAlign={align ? align : alignResponsive}>
        {value}
        {growthDirection && percentageValue && (
          <Text
            as="sup"
            variant={
              growthDirection === "positive"
                ? "positiveGrowth"
                : "negativeGrowth"
            }
          >
            {prettifyGrowthPercentage(growthDirection, percentageValue)}
          </Text>
        )}
      </Text>
    </Box>
  );
};
 
export default MainBlock2StatsText;