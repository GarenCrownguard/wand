import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { prettifyGrowthPercentage } from 'resources/utilities';

const MainBlock2StatsText = (props) => {
    const { title, value, growthDirection, percentageValue } = props;

  return (
    <Box flex={1}>
      <Text variant="title">{title}</Text>
      <Text variant="value">
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