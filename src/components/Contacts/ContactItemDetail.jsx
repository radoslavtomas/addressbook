import { Box, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ContactItemDetail = ({ contact }) => {
  const { date_of_birth, email, phone } = contact

  const format_date = (str) => {
    let date = Date.parse(str)

    if (!date) {
      return str
    }

    return new Date(date).toLocaleString('en-UK', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
  }

  return (
    <Box>
      {date_of_birth && <Text pt="2" fontSize="sm">Date of birth: {format_date(date_of_birth)}</Text>}
      {email && <Text pt="2" fontSize="sm">Email: {email}</Text>}
      {phone && <Text pt="2" fontSize="sm">Phone: {phone}</Text>}
    </Box>
  )
}

ContactItemDetail.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItemDetail