import { Box, Button, Flex } from '@chakra-ui/react'
import { EmailIcon, SettingsIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const ContactItemActions = () => {
  let navigate = useNavigate()

  return (
    <Box py={6}>
      <Flex justifyContent="center" direction={{ base: 'column-reverse', sm: 'row' }} gap={4}>
        <Button
          colorScheme="orange"
          rightIcon={<SettingsIcon/>}
          onClick={() => navigate('/add-address')}
        >
          Manage contact
        </Button>
        <Button
          colorScheme="green"
          rightIcon={<EmailIcon/>}
          onClick={() => navigate('/add-address')}
        >
          Add new address
        </Button>
      </Flex>
    </Box>
  )
}

export default ContactItemActions