import { useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Center,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { deleteContact } from '../../api/contactApi.js'
import { namedUrls } from '../../routes/routesConfig.js'
import { DeleteIcon } from '@chakra-ui/icons'

const ContactDelete = ({ contactId, fullName }) => {
  const cancelRef = useRef()
  const toast = useToast()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDeleteContact = async () => {
    try {
      await deleteContact(contactId)

      toast({
        description: 'The contact has been successfully deleted',
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
    <>
      <Center>
        <Button
          onClick={onOpen}
          colorScheme="red"
          size="sm"
          variant="link"
          rightIcon={<DeleteIcon/>}
        >
          Delete contact
        </Button>
      </Center>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete contact for {fullName}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You cannot undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => handleDeleteContact()} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>

  )
}

ContactDelete.propTypes = {
  contactId: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired
}

export default ContactDelete