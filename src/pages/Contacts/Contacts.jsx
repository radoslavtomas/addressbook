import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon, EmailIcon, SettingsIcon } from '@chakra-ui/icons'

const Contacts = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
              <Box as="span" flex="1" textAlign="left">
                Anton Tomas
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack divider={<StackDivider/>} spacing={4}>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Circ
                </Heading>
                <Text pt="2" fontSize="sm">Circ 212</Text>
                <Text pt="2" fontSize="sm">Circ</Text>
                <Text pt="2" fontSize="sm">097 11</Text>
                <Text pt="2" fontSize="sm">Slovakia</Text>
                <HStack justifyContent="end" spacing={4}>
                  <Button colorScheme="red" size="sm" rightIcon={<DeleteIcon/>}>Delete</Button>
                  <Button colorScheme="blue" size="sm" rightIcon={<EditIcon/>}>Edit Address</Button>
                </HStack>
              </Box>

              <Box py={6}>
                <Flex justifyContent="center" direction={{ base: 'column-reverse', sm: 'row' }} gap={4}>
                  <Button colorScheme="orange" rightIcon={<SettingsIcon/>}>Manage contact</Button>
                  <Button colorScheme="green" rightIcon={<EmailIcon/>}>Add new address</Button>
                </Flex>
              </Box>s
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
              <Box as="span" flex="1" textAlign="left">
                Kristina Tomasova
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack divider={<StackDivider/>} spacing="4">
              <Box>
                <Text pt="2" fontSize="sm">Date of birth: 31/05/1984</Text>
                <Text pt="2" fontSize="sm">Email: ktomasova@gmail.com</Text>
                <Text pt="2" fontSize="sm">Phone: 01612233445</Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Velke Ulany
                </Heading>
                <Text pt="2" fontSize="sm">Ulica 1. maja</Text>
                <Text pt="2" fontSize="sm">Velke Ulany</Text>
                <Text pt="2" fontSize="sm">097 11</Text>
                <Text pt="2" fontSize="sm">Slovakia</Text>
                <HStack justifyContent="end" spacing={4}>
                  <Button colorScheme="red" size="sm" rightIcon={<DeleteIcon/>}>Delete</Button>
                  <Button colorScheme="blue" size="sm" rightIcon={<EditIcon/>}>Edit</Button>
                </HStack>
              </Box>

              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Trnava
                </Heading>
                <Text pt="2" fontSize="sm">Hospodarska 65</Text>
                <Text pt="2" fontSize="sm">Trnava</Text>
                <Text pt="2" fontSize="sm">097 11</Text>
                <Text pt="2" fontSize="sm">Slovakia</Text>
                <HStack justifyContent="end" spacing={4}>
                  <Button colorScheme="red" size="sm" rightIcon={<DeleteIcon/>}>Delete</Button>
                  <Button colorScheme="blue" size="sm" rightIcon={<EditIcon/>}>Edit</Button>
                </HStack>
              </Box>

              <Box py={6}>
                <Flex justifyContent="center" direction={{ base: 'column-reverse', sm: 'row' }} gap={4}>
                  <Button colorScheme="orange" rightIcon={<SettingsIcon/>}>Manage contact</Button>
                  <Button colorScheme="green" rightIcon={<EmailIcon/>}>Add new address</Button>
                </Flex>
              </Box>

            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  )
}

export default Contacts