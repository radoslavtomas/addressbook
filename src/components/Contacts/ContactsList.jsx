import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box
} from '@chakra-ui/react'
import ContactItem from './ContactItem.jsx'
import ContactAdd from './ContactAdd.jsx'
import { useSelector } from 'react-redux'

const ContactsList = () => {
  const user = useSelector((state) => state.user.user)

  console.log(user)

  let content

  if (!user.contacts.length) {
    content = (
      <Alert borderRadius={4} status="info">
        <AlertIcon/>
        No contacts yet. Add new one now!
      </Alert>
    )
  } else {
    content = (
      <Accordion allowToggle>
        {user.contacts.map(contact => {
          return (
            <AccordionItem key={contact.id}>
              <h2>
                <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
                  <Box as="span" flex="1" textAlign="left">
                    {`${contact.first_names} ${contact.last_name}`}
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ContactItem contact={contact}/>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }

  return (
    <>
      <ContactAdd/>
      {content}
    </>
  )
}

export default ContactsList