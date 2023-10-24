import { motion } from 'framer-motion'
import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import SiteLogo from '../components/SiteLogo/SiteLogo.jsx'
import ThemeToggleButton from '../components/ThemeToggleButton/ThemeToggleButton.jsx'
import LanguageToggle from '../components/LanguageToggleButton/LanguageToggle.jsx'
import NavigationDrawer from '../components/NavigationDrawer/NavigationDrawer.jsx'
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
      <Box minHeight={'100vh'}>
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

        <Box as={'main'} minHeight={'calc(100vh - 3.5em)'} bg={useColorModeValue('red.50', 'gray.800')}>
          <Outlet/>
        </Box>
      </Box>
    </motion.div>
  )
}

export default RootLayout