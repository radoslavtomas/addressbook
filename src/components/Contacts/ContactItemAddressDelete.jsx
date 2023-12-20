import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast
} from '@chakra-ui/react'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import { deleteAddress } from '../../api/addressApi.js'
import { namedUrls } from '../../routes/routesConfig.js'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { clearAppError, setAppError } from '../../store/errorSlice.js'

const ContactItemAddressDelete = ({ addressId, contactId, addressCity, isOpen, onClose }) => {
  const cancelRef = useRef()
  const toast = useToast()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleDeleteAddress = async (addressId) => {
    dispatch(clearAppError())

    try {
      await deleteAddress(contactId, addressId)

      toast({
        description: t('toasts.addressDeleted'),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      onClose()

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

      onClose()
    }
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {t('addressForm.deleteAddressFor') + ' ' + addressCity}
          </AlertDialogHeader>

          <AlertDialogBody>
            {t('addressForm.deleteAddressConfirmation')}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {t('addressForm.cancelFooterButton')}
            </Button>
            <Button colorScheme="red" onClick={() => handleDeleteAddress(addressId)} ml={3}>
              {t('addressForm.deleteFooterButton')}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

ContactItemAddressDelete.propTypes = {
  addressId: PropTypes.number.isRequired,
  contactId: PropTypes.number.isRequired,
  addressCity: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ContactItemAddressDelete