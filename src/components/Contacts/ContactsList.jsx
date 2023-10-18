import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import ContactItem from './ContactItem.jsx'

const ContactsList = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
            <Box as="span" flex="1" textAlign="left">
              Elvis Presley
            </Box>
            <AccordionIcon/>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ContactItem/>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
            <Box as="span" flex="1" textAlign="left">
              John Doe
            </Box>
            <AccordionIcon/>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ContactItem/>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
            <Box as="span" flex="1" textAlign="left">
              Chuck Norris
            </Box>
            <AccordionIcon/>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ContactItem/>
        </AccordionPanel>
      </AccordionItem>

    </Accordion>
  )
}

export default ContactsList