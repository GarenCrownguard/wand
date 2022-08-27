import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Box, Link } from '@chakra-ui/react'
import { convertSlugToUrl } from 'resources/utilities'
import IconSoon from './icon-soon'

const buttonstyle = {
  bg: 'tranparent',
  color: 'grey',
  size: 'lg',
  fontSize: 'lg',
  fontWeight: 400,
  w: '100%',
  pl: '25px',
  pt: '10px',
  pb: '10px',
  _hover: {
    color: 'white',
  },
  _active: {
    color: 'white',
    borderColor: 'white',
  },
  _visited: {
    color: 'white',
    borderColor: 'white',
  },
}

const linkstyle = {
  _hover: { textDecoration: 'none' },
}

const SideBar2MenuItem = ({ icon: Icon, href, isexternal, title, soon }) => {
  const { push } = useHistory()

  function onClick(slug, external, parameters = {}) {
    if (external) {
      window.open(slug, '_blank')
      return
    }
    push(convertSlugToUrl(slug, parameters))
  }

  return soon ? (
    <Link
      // href={href}
      isExternal={isexternal}
      {...linkstyle}
      w="100%"
    >
      <Button
        sx={buttonstyle}
        leftIcon={<Icon fill="currentColor" />}
        variant="link"
        display="flex"
        justifyContent="flex-start"
        iconSpacing="15px"
        onClick={() => onClick(href)}
      >
        {title}
        <Box mr="30px" ml="auto">
          <IconSoon />
        </Box>
      </Button>
    </Link>
  ) : (
    <Link
      // href={href}
      isExternal={isexternal}
      {...linkstyle}
    >
      <Button
        sx={buttonstyle}
        leftIcon={<Icon fill="currentColor" />}
        variant="link"
        iconSpacing="15px"
        onClick={() => onClick(href, isexternal)}
      >
        {title}
      </Button>
    </Link>
  )
}

export default SideBar2MenuItem
