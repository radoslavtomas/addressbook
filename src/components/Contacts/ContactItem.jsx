import { Stack, StackDivider } from '@chakra-ui/react'

import ContactItemDetail from './ContactItemDetail.jsx'
import ContactItemAddress from './ContactItemAddress.jsx'
import ContactItemActions from './ContactItemActions.jsx'
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
  console.log(contact)
  const showItemDetail = contact.date_of_birth || contact.email || contact.phone
  return (
    <Stack divider={<StackDivider/>} spacing={4}>
      {showItemDetail && <ContactItemDetail contact={contact}/>}

      {contact.addresses.length && <ContactItemAddress addresses={contact.addresses}/>}

      <ContactItemActions contactId={contact.id}/>
    </Stack>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem