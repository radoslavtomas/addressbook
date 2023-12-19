import AddressForm from '../../components/Forms/AddressForm.jsx'
import { Alert, AlertIcon, Box, Center, Container, Spinner, useToast } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import { storeAddress } from '../../api/addressApi.js'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const AddressCreate = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [validContact, setValidContact] = useState(false)
  const { contactId } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const toast = useToast()

  useEffect(() => {
    const contact = user.contacts.filter(item => item.id === parseInt(contactId))

    if (contact.length) {
      setValidContact(true)
    }

    setIsLoading(false)
  }, [contactId, user.contacts])

  const handleAddressStore = async (data) => {
    setError('')
    setIsLoading(true)

    try {
      await storeAddress(contactId, data)

      toast({
        description: 'Your address has been successfully created',
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
      if (error.code === 'ERR_NETWORK') {
        setError(t('errors.noConnection'))
        return
      }

      setError(error.response.data.message)
    }

    setIsLoading(false)
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
      {error && <Box maxW="350px" mx="auto">
        <Alert mb={6} borderRadius={4} status="error">
          <AlertIcon/>
          {error}
        </Alert>
      </Box>}
      
      {content}
    </Container>
  )
}

export default AddressCreate