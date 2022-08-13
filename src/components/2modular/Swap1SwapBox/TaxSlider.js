import React from 'react'
import {
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  SliderMark,
} from '@chakra-ui/react'

const TaxSlider = ({ taxSliderValue, setTaxSliderValue }) => {
//   console.log(taxSliderValue)
  return (
    <Slider
      defaultValue={0}
      min={0}
      max={9}
      step={1}
      onChange={(val) => setTaxSliderValue(val)}
      mb="20px"
      w="95%"
    >
      <SliderMark value={0} mt="13" ml="0">
        <Text variant="title">0 Days</Text>
      </SliderMark>
      <SliderMark value={5} mt="13" ml="-19">
        <Text variant="title">5 Days</Text>
      </SliderMark>
      <SliderMark value={9} mt="13" ml="-49">
        <Text variant="title">10 Days</Text>
      </SliderMark>
      <SliderTrack bg="#B1AFCD" h="13px" borderRadius="10px">
        <SliderFilledTrack bg="white" />
      </SliderTrack>
      <Tooltip
        hasArrow
        isOpen
        bg="wandGreen"
        arrowSize={5}
        fontSize="12px"
        placement="top"
        label={`${(9 - taxSliderValue) * 10}% Tax`}
        borderRadius="10px"
      >
        <SliderThumb boxSize={6} />
      </Tooltip>
    </Slider>
  )
}

export default TaxSlider
