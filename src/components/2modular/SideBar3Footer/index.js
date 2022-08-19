import React from 'react'
import { chakra, Stack, useColorModeValue } from '@chakra-ui/react'
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaDiscord,
} from 'react-icons/fa'
import links from 'resources/links'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      {children}
    </chakra.button>
  )
}

const SideBar3Footer = () => {
  return (
    <Stack direction={'row'} w='100%' mb="30px">
      <SocialButton href={links.telegram}>
        <FaTelegramPlane />
      </SocialButton>
      <SocialButton href={links.twitter}>
        <FaTwitter />
      </SocialButton>
      <SocialButton href={links.youtube}>
        <FaYoutube />
      </SocialButton>
      <SocialButton href={links.medium}>
        <FaMedium />
      </SocialButton>
      <SocialButton href={links.discord}>
        <FaDiscord />
      </SocialButton>
    </Stack>
  )
}

export default SideBar3Footer
