import { motion } from 'framer-motion'
import ThemeToggleButton from '../components/ThemeToggleButton.jsx'
import { Box, Flex, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggleButton/LanguageToggle.jsx'
import { useTranslation } from 'react-i18next'
import logo from './../assets/img/logo.png'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const RootLayout = () => {
  const { t } = useTranslation()

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
        <Flex as={'header'} h={'3.5em'} bg={useColorModeValue('gray.200', 'gray.900')} px={4} py={2}
              alignItems={'center'}
              justifyContent={'space-between'}>
          <HStack>
            <Image
              boxSize="35px"
              objectFit="cover"
              src={logo}
              alt="logo"
            />
            <Link to="/">

              <Text as={'span'} fontFamily={'Lobster'} fontSize={'1.6em'}>{t('siteTitle')}</Text>
            </Link>
          </HStack>

          <HStack>
            <LanguageToggle/>
            <ThemeToggleButton/>
          </HStack>
        </Flex>

        <Box as={'main'} minHeight={'calc(100vh - 3.5em)'}>
          <Outlet/>
        </Box>
      </Box>
    </motion.div>
  )
}

export default RootLayout