// import { useTranslation } from 'react-i18next'
import { Flex, List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { EmailIcon, PlusSquareIcon, SettingsIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

const NavigationDrawerList = (props) => {
  const { t } = useTranslation()

  return (
    <List spacing={4} mt={4}>
      <ListItem>
        <NavLink to="/contacts" onClick={props.onClose}>
          <Flex alignItems="center">
            <ListIcon as={EmailIcon}/>
            {t('navigation.contacts')}
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/add-contact">
          <Flex alignItems="center">
            <ListIcon as={PlusSquareIcon}/>
            {t('navigation.addContact')}
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <Flex alignItems="center">
            <ListIcon as={SettingsIcon}/>
            {t('navigation.profile')}
          </Flex>
        </NavLink>
      </ListItem>
    </List>
  )
}

export default NavigationDrawerList