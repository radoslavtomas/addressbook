import { Box, Button, Flex } from '@chakra-ui/react'
import { EmailIcon, SettingsIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { namedUrls, resolveUrl } from '../../routes/routesConfig.js'
import PropTypes from 'prop-types'

const ContactItemActions = ({ contactId }) => {
  const navigate = useNavigate()

  return (
    <Box py={6}>
      <Flex justifyContent="center" wrap="wrap-reverse" gap={4}>
        <Button
          variant="link"
          size="sm"
          colorScheme="orange"
          rightIcon={<SettingsIcon/>}
          onClick={() => navigate(resolveUrl(namedUrls.contactsEdit, { contactId: contactId }))}
        >
          Manage contact
        </Button>
        <Button
          variant="link"
          size="sm"
          colorScheme="green"
          rightIcon={<EmailIcon/>}
          onClick={() => navigate(resolveUrl(namedUrls.addressCreate, { contactId: contactId }))}
        >
          Add new address
        </Button>
      </Flex>
    </Box>
  )
}

ContactItemActions.propTypes = {
  contactId: PropTypes.number.isRequired
}

export default ContactItemActions