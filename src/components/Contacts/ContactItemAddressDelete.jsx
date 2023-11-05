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

const ContactItemAddressDelete = ({ addressId, contactId, addressCity, isOpen, onClose }) => {
  const cancelRef = useRef()
  const toast = useToast()
  const navigate = useNavigate()

  const handleDeleteAddress = async (addressId) => {
    try {
      await deleteAddress(contactId, addressId)

      toast({
        description: 'The address has been successfully deleted',
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
      console.log(error)
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
            Delete address for {addressCity}
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You cannot undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={() => handleDeleteAddress(addressId)} ml={3}>
              Delete
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