import { Alert, AlertIcon, Center, Container, Spinner, useToast } from '@chakra-ui/react'
import AddressForm from '../../components/Forms/AddressForm.jsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateAddress } from '../../api/addressApi.js'
import { namedUrls } from '../../routes/routesConfig.js'

const AddressEdit = () => {
  const [address, setAddress] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [validContact, setValidContact] = useState(false)
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const { addressId, contactId } = useParams()
  const toast = useToast()

  useEffect(() => {
    const contact = user.contacts.filter(item => item.id === parseInt(contactId))

    if (!contact.length) {
      setIsLoading(false)
      return
    }

    const address = contact[0].addresses.filter(address => address.id === parseInt((addressId)))

    if (address.length) {
      setAddress(address[0])
      setValidContact(true)
    }

    setIsLoading(false)
  }, [])

  const handleAddressEdit = async (data) => {
    try {
      setIsLoading(true)
      const response = await updateAddress(contactId, addressId, data)
      setIsLoading(false)
      console.log(response)

      toast({
        description: 'Your address has been successfully updated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      navigate(namedUrls.getUser, {
        state: {
          redirectTo: namedUrls.contacts
        }
      })
    } catch (err) {
      // TODO: handle error
      console.log('We have error')
      console.log(err)
    }
  }

  let content

  if (validContact) {
    content = <AddressForm mode="edit" address={address} handleFormSubmit={handleAddressEdit}/>
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

export default AddressEdit