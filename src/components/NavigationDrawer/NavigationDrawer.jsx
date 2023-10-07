import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { HamburgerIcon, LockIcon } from '@chakra-ui/icons'
import SiteLogo from '../SiteLogo/SiteLogo.jsx'
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.jsx'
import LanguageToggle from '../LanguageToggleButton/LanguageToggle.jsx'
import NavigationDrawerList from './NaviagtionDrawerList.jsx'
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
            <SiteLogo/>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={10} alignItems="start">
              <NavigationDrawerList onClose={onClose}/>
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