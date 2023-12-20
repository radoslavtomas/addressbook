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
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { clearAppError, setAppError } from '../../store/errorSlice.js'

const ContactDelete = ({ contactId, fullName }) => {
  const cancelRef = useRef()
  const toast = useToast()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleDeleteContact = async () => {
    dispatch(clearAppError())

    try {
      await deleteContact(contactId)

      toast({
        description: t('toasts.contactDeleted'),
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
    <>
      <Center>
        <Button
          onClick={onOpen}
          colorScheme="red"
          size="sm"
          variant="link"
          rightIcon={<DeleteIcon/>}
        >
          {t('contactForm.deleteContactButton')}
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
              {t('contactForm.deleteContactFor') + ' ' + fullName}
            </AlertDialogHeader>

            <AlertDialogBody>
              {t('contactForm.deleteContactConfirmation')}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {t('contactForm.cancelFooterButton')}
              </Button>
              <Button colorScheme="red" onClick={() => handleDeleteContact()} ml={3}>
                {t('contactForm.deleteFooterButton')}
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