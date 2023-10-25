// import { useTranslation } from 'react-i18next'
import { Flex, List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { EmailIcon, PlusSquareIcon, SettingsIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { namedUrls } from '../../routes/routesConfig.js'

const NavigationDrawerList = ({ onClose }) => {
  const { t } = useTranslation()

  return (
    <List spacing={4} mt={4}>
      <ListItem>
        <NavLink to={namedUrls.contacts} onClick={onClose}>
          <Flex alignItems="center">
            <ListIcon as={EmailIcon}/>
            {t('navigation.contacts')}
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={namedUrls.contactsCreate} onClick={onClose}>
          <Flex alignItems="center">
            <ListIcon as={PlusSquareIcon}/>
            {t('navigation.addContact')}
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={namedUrls.profile}>
          <Flex alignItems="center" onClick={onClose}>
            <ListIcon as={SettingsIcon}/>
            {t('navigation.profile')}
          </Flex>
        </NavLink>
      </ListItem>
    </List>
  )
}

NavigationDrawerList.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default NavigationDrawerList