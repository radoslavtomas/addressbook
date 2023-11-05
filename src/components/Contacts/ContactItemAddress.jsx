import countries from '../../assets/countries.json'
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { namedUrls, resolveUrl } from '../../routes/routesConfig.js'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import ContactItemAddressDelete from './ContactItemAddressDelete.jsx'

const ContactItemAddress = ({ addresses, contactId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  const getCountryName = (code) => {
    const country = countries.filter(country => country.code === code)
    if (!country.length) return 'Unknown country'

    return country[0][`name_${i18n.language}`]
  }

  const leftBorderColor = useColorModeValue('orange.300', 'orange.600')

  return (
    <Stack divider={<StackDivider/>} spacing={6}>
      {addresses.map(address =>
        <Box borderLeft="4px" borderColor={leftBorderColor} pl={4} key={address.id}>

          <ContactItemAddressDelete
            onClose={onClose}
            isOpen={isOpen}
            contactId={contactId}
            addressId={address.id}
            addressCity={address.city}
          />

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