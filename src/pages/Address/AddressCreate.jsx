import AddressForm from '../../components/Forms/AddressForm.jsx'
import { Alert, AlertIcon, Center, Container, Spinner } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import { storeAddress } from '../../api/addressApi.js'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const AddressCreate = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [validContact, setValidContact] = useState(false)
  const navigate = useNavigate()
  const { contactId } = useParams()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    const contact = user.contacts.filter(item => item.id === parseInt(contactId))

    if (contact.length) {
      setValidContact(true)
    }

    setIsLoading(false)
  }, [])

  const handleAddressStore = async (data) => {
    try {
      setIsLoading(true)
      const response = await storeAddress(contactId, data)
      setIsLoading(false)
      console.log(response)

      navigate(namedUrls.getUser, {
        state: {
          redirectTo: namedUrls.contacts
        }
      })
    } catch (err) {
      // TODO: handle error
      console.log(err)
    }
  }

  let content

  if (validContact) {
    content = <AddressForm mode="create" handleFormSubmit={handleAddressStore}/>
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
    <Container maxW="container.md" pt={10}>
      {content}
    </Container>
  )
}

export default AddressCreate