import countries from '../../assets/countries.json'
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
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const ContactItemAddress = ({ addresses }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  const getCountryName = (code) => {
    const country = countries.filter(country => country.code === code)
    if (!country.length) return 'Unknown country'

    return country[0][`name_${i18n.language}`]
  }

  return (
    addresses.map(address => {
      return (
        <Box key={address.id}>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete address for {address.city}
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
            Address for {address.city}
          </Heading>
          <Text pt="2" fontSize="sm">{address.address_line_1}</Text>
          {address.address_line_2 && <Text pt="2" fontSize="sm">{address.address_line_2}</Text>}
          {address.address_line_3 && <Text pt="2" fontSize="sm">{address.address_line_3}</Text>}
          <Text pt="2" fontSize="sm">{address.city}</Text>
          <Text pt="2" fontSize="sm">{address.postcode}</Text>
          <Text pt="2" fontSize="sm" textTransform="uppercase">{getCountryName(address.country)}</Text>
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
              onClick={() => navigate(resolveUrl(namedUrls.addressEdit, { addressId: address.id }))}
            >
              Edit Address
            </Button>
          </HStack>
        </Box>
      )
    })

  )
}

ContactItemAddress.propTypes = {
  addresses: PropTypes.array.isRequired
}

export default ContactItemAddress