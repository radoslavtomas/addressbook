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
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { namedUrls, resolveUrl } from '../../routes/routesConfig.js'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { deleteAddress } from '../../api/addressApi.js'

const ContactItemAddress = ({ addresses, contactId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  const getCountryName = (code) => {
    const country = countries.filter(country => country.code === code)
    if (!country.length) return 'Unknown country'

    return country[0][`name_${i18n.language}`]
  }

  const handleDeleteAddress = async (addressId) => {
    console.log('yep, delete')
    try {
      const result = await deleteAddress(contactId, addressId)
      console.log(result)

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

  const leftBorderColor = useColorModeValue('orange.300', 'orange.600')

  return (
    <Stack divider={<StackDivider/>} spacing={6}>
      {addresses.map(address =>
        <Box borderLeft="4px" borderColor={leftBorderColor} pl={4} key={address.id}>
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
                  <Button colorScheme="red" onClick={() => handleDeleteAddress(address.id)} ml={3}>
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
              onClick={() => navigate(resolveUrl(namedUrls.addressEdit, {
                addressId: address.id,
                contactId: contactId
              }))}
            >
              Edit Address
            </Button>
          </HStack>
        </Box>
      )}
    </Stack>
  )
}

ContactItemAddress.propTypes = {
  addresses: PropTypes.array.isRequired,
  contactId: PropTypes.number.isRequired
}

export default ContactItemAddress