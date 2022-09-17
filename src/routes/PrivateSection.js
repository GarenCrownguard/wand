import React, { useState } from 'react'

import { useBreakpointValue, Box } from '@chakra-ui/react'

import SideBar from '../components/3components/SideBar'
import Header from '../components/3components/Header'
import MainDisplayBlock from '../components/3components/MainDisplayBlock'

import PrivateRoutes from './PrivateRoutes'

import { connect } from 'react-redux'

const PrivateSection = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const variantScreenSize = useBreakpointValue({
    base: {
      size: 'base',
      variant: 'drawer',
      burgerButton: true,
      isMobile: true,
    },
    md: {
      size: 'md',
      variant: 'sidebar',
      burgerButton: false,
      isMobile: false,
    },
  })
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
  console.log(
    process.env.REACT_APP_DEV
      ? 'Development Mode'
      : 'Production Mode! Welcome to WAND. Developed by Garen https://twitter.com/0xgaren :)'
  )

  // console.log(
  //   `[PrivateSection]: Size of the screen is: ${variantScreenSize.size}`
  // );

  return (
    <>
      <SideBar
        isOpen={isSidebarOpen}
        variant={variantScreenSize.variant}
        onClose={toggleSidebar}
      />
      <Box
        w="100%"
        h="100vh"
        top={0}
        p={variantScreenSize.isMobile ? '20px' : '35px'}
      >
        <Header
          isMobile={variantScreenSize.isMobile}
          onBurgerButtonClick={toggleSidebar}
        />
        <MainDisplayBlock isMobile={variantScreenSize.isMobile}>
          <PrivateRoutes />
        </MainDisplayBlock>
      </Box>
    </>
  )
}

export default connect()(PrivateSection)
