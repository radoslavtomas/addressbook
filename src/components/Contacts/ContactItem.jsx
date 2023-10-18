import { Stack, StackDivider } from '@chakra-ui/react'

import ContactItemDetail from './ContactItemDetail.jsx'
import ContactItemAddress from './ContactItemAddress.jsx'
import ContactItemActions from './ContactItemActions.jsx'

const ContactItem = () => {
  return (
    <Stack divider={<StackDivider/>} spacing={4}>
      <ContactItemDetail/>
      <ContactItemAddress/>
      <ContactItemActions/>
    </Stack>
  )
}

export default ContactItem