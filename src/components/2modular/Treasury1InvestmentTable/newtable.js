import React from 'react'

import {
  useColorModeValue,
  Flex,
  Stack,
  SimpleGrid,
  Button,
  IconButton,
  ButtonGroup,
  chakra,
} from '@chakra-ui/react'

const Newtable = () => {
  const data = [
    {
      name: 'Daggy',
      created: '7 days ago',
    },
    {
      name: 'Anubra',
      created: '23 hours ago',
    },
    {
      name: 'Josef',
      created: 'A few seconds ago',
    },
    {
      name: 'Sage',
      created: 'A few hours ago',
    },
  ]

  const bg = useColorModeValue('white', 'gray.800')
  const bg2 = useColorModeValue('white', 'gray.800')
  const bg3 = useColorModeValue('gray.100', 'gray.700')

  return (<Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{
          base: "column",
        }}
        w="full"
        bg={{
          md: bg,
        }}
        shadow="lg"
      >
        {data.map((token, tid) => {
          return (
            <Flex
              direction={{
                base: 'row',
                md: 'column',
              }}
              bg={bg2}
              key={tid}
            >
              <SimpleGrid
                spacingY={3}
                columns={{
                  base: 1,
                  md: 5,
                }}
                w={{
                  base: 120,
                  md: 'full',
                }}
                textTransform="uppercase"
                bg={bg3}
                color={'gray.500'}
                py={{
                  base: 1,
                  md: 4,
                }}
                px={{
                  base: 2,
                  md: 10,
                }}
                fontSize="md"
                fontWeight="hairline"
              >
                <span>Name</span>
                <span>Created</span>
                <span>Data</span>
                <span>Mehul</span>
                <chakra.span
                  textAlign={{
                    md: 'right',
                  }}
                >
                  Actions
                </chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{
                  base: 1,
                  md: 5,
                }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  color="black"
                >
                  {token.name}
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  color="black"
                >
                  {token.created}
                </chakra.span>
                <Flex>
                  <Button size="sm" variant="solid" colorScheme="purple">
                    View Profile
                  </Button>
                </Flex>
                <Flex>
                  <Button size="sm" variant="solid" colorScheme="purple">
                    View Mehul
                  </Button>
                </Flex>
                <Flex
                  justify={{
                    md: 'end',
                  }}
                >
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton colorScheme="blue" aria-label="Up" />
                    <IconButton colorScheme="green" aria-label="Edit" />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      aria-label="Delete"
                    />
                  </ButtonGroup>
                </Flex>
              </SimpleGrid>
            </Flex>
          )
        })}
      </Stack>
    </Flex>
  )
}

export default Newtable
