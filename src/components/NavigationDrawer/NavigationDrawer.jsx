import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  IconButton,
  Image,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { HamburgerIcon, LockIcon } from '@chakra-ui/icons'

import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.jsx'
import LanguageToggle from '../LanguageToggleButton/LanguageToggle.jsx'
import NavigationDrawerList from './NaviagtionDrawerList.jsx'
import logo from '../../assets/img/bear_logo.svg'
import { useTranslation } from 'react-i18next'

const NavigationDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()

  return (
    <>
      <IconButton
        aria-label="Open navigation drawer"
        onClick={onOpen} icon={<HamburgerIcon/>}
        colorScheme={useColorModeValue('orange', 'gray')}/>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader borderBottomWidth="1px">
            <HStack>
              <Image
                boxSize="2.5em"
                objectFit="cover"
                src={logo}
                alt="logo"
              />
              <Heading
                as="h1"
                fontFamily={'Lobster'}
                color={useColorModeValue('orange.500', 'orange.300')}
                size={'lg'}

              >{t('siteTitle')}</Heading>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={10} alignItems="start">
              <NavigationDrawerList/>
              <HStack spacing={3}>
                <LanguageToggle/>
                <ThemeToggleButton/>
              </HStack>
            </VStack>
          </DrawerBody>

          <DrawerFooter justifyContent="start">
            <Button colorScheme="red" rightIcon={<LockIcon/>}>{t('logoutButton')}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavigationDrawer