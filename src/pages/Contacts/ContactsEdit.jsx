import ContactForm from '../../components/Forms/ContactForm.jsx'
import { Container, useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateContact } from '../../api/contactApi.js'
import { namedUrls } from '../../routes/routesConfig.js'

const ContactsEdit = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const [contact, setContact] = useState(null)
  const user = useSelector((state) => state.user.user)
  const { contactId } = useParams()

  useEffect(() => {
    const filteredArray = user.contacts.filter(contact => contact.id === parseInt(contactId))
    setContact(filteredArray[0])
  }, [contactId])

  const handleContactEdit = async (data) => {
    console.log('url id', contactId)
    console.log(data)
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
  }
  return (
    <Container maxW="container.md" py={10}>
      <ContactForm mode="edit" contact={contact} handleFormSubmit={handleContactEdit}/>
    </Container>
  )
}

export default ContactsEdit