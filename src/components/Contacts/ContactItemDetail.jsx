import { Box, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ContactItemDetail = ({ contact }) => {
  const { date_of_birth, email, phone } = contact

  return (
    <Box>
      {date_of_birth && <Text pt="2" fontSize="sm">Date of birth: {date_of_birth}</Text>}
      {email && <Text pt="2" fontSize="sm">Email: {email}</Text>}
      {phone && <Text pt="2" fontSize="sm">Phone: {phone}</Text>}
    </Box>
  )
}

ContactItemDetail.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItemDetail