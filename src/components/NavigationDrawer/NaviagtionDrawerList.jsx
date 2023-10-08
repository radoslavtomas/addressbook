// import { useTranslation } from 'react-i18next'
import { Flex, List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { EmailIcon, PlusSquareIcon, SettingsIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

const NavigationDrawerList = ({ onClose }) => {
  const { t } = useTranslation()

  return (
    <List spacing={4} mt={4}>
      <ListItem>
        <NavLink to="/contacts" onClick={onClose}>
          <Flex alignItems="center">
            <ListIcon as={EmailIcon}/>
            {t('navigation.contacts')}
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/add-contact" onClick={onClose}>
          <Flex alignItems="center">
            <ListIcon as={PlusSquareIcon}/>
            {t('navigation.addContact')}
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <Flex alignItems="center" onClick={onClose}>
            <ListIcon as={SettingsIcon}/>
            {t('navigation.profile')}
          </Flex>
        </NavLink>
      </ListItem>
    </List>
  )
}

export default NavigationDrawerList