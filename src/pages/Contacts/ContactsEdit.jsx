import ContactForm from '../../components/Forms/ContactForm.jsx'
import { Alert, AlertIcon, Center, Container, Spinner, useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateContact } from '../../api/contactApi.js'
import { namedUrls } from '../../routes/routesConfig.js'

const ContactsEdit = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const [contact, setContact] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const user = useSelector((state) => state.user.user)
  const { contactId } = useParams()

  useEffect(() => {
    setIsLoading(true)

    const filteredArray = user.contacts.filter(contact => contact.id === parseInt(contactId))

    setContact(filteredArray[0])
    setIsLoading(false)
  }, [contactId, user.contacts])

  const handleContactEdit = async (data) => {
    setIsLoading(true)

    try {
      const response = await updateContact(contactId, data)
      console.log(response)

      toast({
        description: 'Your contact has been successfully updated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      navigate(namedUrls.getUser, {
        state: {
          redirectTo: namedUrls.contacts
        }
      })
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  let content

  if (contact) {
    content = <ContactForm mode="edit" contact={contact} handleFormSubmit={handleContactEdit}/>
  } else {
    content = (
      <Alert status="error">
        <AlertIcon/>
        Unauthorised
      </Alert>
    )
  }

  if (isLoading) {
    content = <Center>Loading <Spinner ml={2}/></Center>
  }

  return (
    <Container maxW="container.md" py={10}>
      {content}
    </Container>
  )
}

export default ContactsEdit