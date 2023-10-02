import { motion } from 'framer-motion'
import ThemeToggleButton from '../components/ThemeToggleButton.jsx'
import { Box, Flex, HStack, Image, Show, Text, useColorModeValue } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggleButton/LanguageToggle.jsx'
import { useTranslation } from 'react-i18next'
import logo from './../assets/img/bear_logo.svg'

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
        <Flex as={'header'} h={'3.5em'} bg={useColorModeValue('orange.100', 'gray.900')} px={4} py={2}
              boxShadow="sm"
              alignItems={'center'}
              justifyContent={'space-between'}>
          <Link to="/">
            <HStack>
              <Image
                boxSize="53px"
                objectFit="cover"
                src={logo}
                alt="logo"
              />
              <Show above="sm">
                <Text as={'span'} fontFamily={'Lobster'} color={useColorModeValue('orange.500', 'orange.300')}
                      _hover={{ color: useColorModeValue('orange.600', 'orange.400') }}
                      fontSize={'1.6em'}>{t('siteTitle')}</Text>
              </Show>
            </HStack>
          </Link>

          <HStack>
            <LanguageToggle/>
            <ThemeToggleButton/>
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