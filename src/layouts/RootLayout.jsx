import { motion } from 'framer-motion'
import ThemeToggleButton from '../components/ThemeToggleButton.jsx'
import { Flex, HStack, Image, useColorModeValue } from '@chakra-ui/react'
import logo from '../assets/img/logo.png'
import NavLink from '../components/NavLink/NavLink.jsx'
import { Outlet } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggleButton/LanguageToggle.jsx'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const RootLayout = () => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Flex flexDirection="column" justifyContent={'space-between'} minHeight={'100vh'}>

        <Flex bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2} alignItems={'center'}
              justifyContent={'space-between'}>
          <NavLink target="/">
            <Image
              boxSize="35px"
              objectFit="cover"
              src={logo}
              alt="logo"
            />
          </NavLink>
          <HStack>
            <LanguageToggle/>
            <ThemeToggleButton/>
          </HStack>
        </Flex>

        <Flex flex={'1'} justifyContent={'center'} alignItems={'center'}>
          <Outlet/>
        </Flex>
      </Flex>
    </motion.div>
  )
}

export default RootLayout