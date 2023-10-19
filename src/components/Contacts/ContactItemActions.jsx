import { Box, Button, Flex } from '@chakra-ui/react'
import { EmailIcon, SettingsIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const ContactItemActions = () => {
  const navigate = useNavigate()

  return (
    <Box py={6}>
      <Flex justifyContent="center" direction={{ base: 'column-reverse', sm: 'row' }} gap={4}>
        <Button
          colorScheme="orange"
          rightIcon={<SettingsIcon/>}
          onClick={() => navigate('/contacts/1/edit')}
        >
          Manage contact
        </Button>
        <Button
          colorScheme="green"
          rightIcon={<EmailIcon/>}
          onClick={() => navigate('/address/create')}
        >
          Add new address
        </Button>
      </Flex>
    </Box>
  )
}

export default ContactItemActions