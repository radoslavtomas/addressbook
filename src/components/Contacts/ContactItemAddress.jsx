import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { namedUrls, resolveUrl } from '../../routes/routesConfig.js'

const ContactItemAddress = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const navigate = useNavigate()

  return (
    <Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete address for Neverland
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You cannot undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Heading size="xs" textTransform="uppercase">
        Address for Neverland
      </Heading>
      <Text pt="2" fontSize="sm">Somewhere 123</Text>
      <Text pt="2" fontSize="sm">Neverland</Text>
      <Text pt="2" fontSize="sm">111 22</Text>
      <Text pt="2" fontSize="sm">UNITED KINGDOM</Text>
      <HStack justifyContent="end" spacing={8} mt={4}>
        <Button
          onClick={onOpen}
          colorScheme="red"
          size="sm"
          variant="link"
          rightIcon={<DeleteIcon/>}
        >
          Delete
        </Button>
        <Button
          colorScheme="blue"
          size="sm"
          variant="link"
          rightIcon={<EditIcon/>}
          onClick={() => navigate(resolveUrl(namedUrls.addressEdit, { addressId: 1 }))}
        >
          Edit Address
        </Button>
      </HStack>
    </Box>
  )
}

export default ContactItemAddress