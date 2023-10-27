import { Box, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { namedUrls } from '../../routes/routesConfig.js'
import { useNavigate } from 'react-router-dom'

const ContactAdd = () => {
  const navigate = useNavigate()

  return (
    <Box mt={6} mb={10} textAlign="right">
      <Button
        colorScheme="green"
        rightIcon={<AddIcon/>}
        onClick={() => navigate(namedUrls.contactsCreate)}
      >
        Add new contact
      </Button>
    </Box>
  )
}

export default ContactAdd