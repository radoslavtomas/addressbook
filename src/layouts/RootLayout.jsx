import { motion } from 'framer-motion'
import { Box, Flex, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import SiteLogo from '../components/SiteLogo/SiteLogo.jsx'
import ThemeToggleButton from '../components/ThemeToggleButton/ThemeToggleButton.jsx'
import LanguageToggle from '../components/LanguageToggleButton/LanguageToggle.jsx'
import NavigationDrawer from '../components/NavigationDrawer/NavigationDrawer.jsx'
import AppError from '../components/AppError/AppError.jsx'
import { useSelector } from 'react-redux'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const RootLayout = () => {
  const user = useSelector((state) => state.user.user)

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Box pb={10} bg={useColorModeValue('red.50', 'gray.800')}>
        <Flex as={'header'} h={'3.5em'} bg={useColorModeValue('orange.100', 'gray.900')} px={4} py={2}
              boxShadow="sm"
              alignItems={'center'}
              justifyContent={'space-between'}>
          <Link to="/">
            <SiteLogo/>
          </Link>

          <HStack>
            <LanguageToggle/>
            <ThemeToggleButton/>
            {user && <NavigationDrawer/>}
          </HStack>
        </Flex>

        <Box as={'main'} minHeight={'calc(100vh - 6em)'}>
          <AppError/>
          <Outlet/>
        </Box>
      </Box>

      <Flex as={'footer'} bg={useColorModeValue('orange.100', 'gray.900')} px={4} py={6}
            boxShadow="sm"
            alignItems={'center'}
            justifyContent={'center'}>
        <VStack>
          <Text as="p" fontSize="sm">&copy; Radoslav Tomas</Text>
          <a href="https://storyset.com/work"
             rel="noreferrer"
             target="_blank">
            <Text fontSize="xs">Work illustrations by Storyset</Text>
          </a>
        </VStack>
      </Flex>
    </motion.div>
  )
}

export default RootLayout