import AddressForm from '../../components/Forms/AddressForm.jsx'
import { Alert, AlertIcon, Center, Container, Spinner, useToast } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import { storeAddress } from '../../api/addressApi.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { clearAppError, setAppError } from '../../store/errorSlice.js'

const AddressCreate = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [validContact, setValidContact] = useState(false)
  const { contactId } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const toast = useToast()
  const dispatch = useDispatch()

  useEffect(() => {
    const contact = user.contacts.filter(item => item.id === parseInt(contactId))

    if (contact.length) {
      setValidContact(true)
    }

    setIsLoading(false)
  }, [contactId, user.contacts])

  const handleAddressStore = async (data) => {
    dispatch(clearAppError())
    setIsLoading(true)

    try {
      await storeAddress(contactId, data)

      toast({
        description: t('toasts.addressCreated'),
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
      dispatch(setAppError({
        code: error.code,
        errorMessage: error.response.data.message
      }))
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
        {t('errors.unauthorised')}
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