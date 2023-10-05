// import { useTranslation } from 'react-i18next'
import { Flex, List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { EmailIcon, PlusSquareIcon, SettingsIcon } from '@chakra-ui/icons'

const NavigationDrawerList = () => {
  // const { t } = useTranslation()

  return (
    <List spacing={4} mt={4}>
      <ListItem>
        <NavLink to="/contacts">
          <Flex alignItems="center">
            <ListIcon as={EmailIcon}/>
            Contacts
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/add-contact">
          <Flex alignItems="center">
            <ListIcon as={PlusSquareIcon}/>
            Add contact
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <Flex alignItems="center">
            <ListIcon as={SettingsIcon}/>
            Profile
          </Flex>
        </NavLink>
      </ListItem>
    </List>
  )
}

export default NavigationDrawerList