import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import countries from '../../assets/countries.json'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const AddressForm = (props) => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    console.log(props.mode)
  }, [])

  const formik = useFormik({
    initialValues: {
      address_line_1: '',
      address_line_2: '',
      address_line_3: '',
      address_line_4: '',
      postcode: '',
      country: '',
    },
    validationSchema: Yup.object({
      address_line_1: Yup.string().min(3, t('validation.addres_line_1.min')).required(t('validation.address_line_1.required')),
      address_line_2: Yup.string().min(3, t('validation.addres_line_2.min')),
      address_line_3: Yup.string().min(3, t('validation.addres_line_3.min')),
      address_line_4: Yup.string().min(3, t('validation.addres_line_4.min')).required(t('validation.address_line_4.required')),
      postcode: Yup.string().min(4, t('validation.postocde.min')).required(t('validation.postocde.required')),
      country: Yup.string().min(2, t('validation.country.min')).required(t('validation.country.required')),
    }),
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <Container maxW="container.md" py={10}>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t(`addressForm.name_${props.mode}`)}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form>
            <FormControl mb={4} isRequired isInvalid={formik.touched.address_line_1 && formik.errors.address_line_1}>
              <FormLabel htmlFor="address_line_1">{t('addressForm.form.address_line_1')}</FormLabel>
              <Input
                id="address_line_1"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address_line_1}

              />
              {formik.touched.address_line_1 && formik.errors.address_line_1 ? (
                <FormErrorMessage>{formik.errors.address_line_1}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isRequired isInvalid={formik.touched.address_line_2 && formik.errors.address_line_2}>
              <FormLabel htmlFor="address_line_2">{t('addressForm.form.address_line_2')}</FormLabel>
              <Input
                id="address_line_2"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address_line_2}

              />
              {formik.touched.address_line_2 && formik.errors.address_line_2 ? (
                <FormErrorMessage>{formik.errors.address_line_2}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isRequired isInvalid={formik.touched.address_line_3 && formik.errors.address_line_3}>
              <FormLabel htmlFor="address_line_3">{t('addressForm.form.address_line_3')}</FormLabel>
              <Input
                id="address_line_3"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address_line_3}

              />
              {formik.touched.address_line_3 && formik.errors.address_line_3 ? (
                <FormErrorMessage>{formik.errors.address_line_3}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isRequired isInvalid={formik.touched.address_line_4 && formik.errors.address_line_4}>
              <FormLabel htmlFor="address_line_4">{t('addressForm.form.address_line_4')}</FormLabel>
              <Input
                id="address_line_4"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address_line_4}

              />
              {formik.touched.address_line_4 && formik.errors.address_line_4 ? (
                <FormErrorMessage>{formik.errors.address_line_4}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isRequired isInvalid={formik.touched.postcode && formik.errors.postcode}>
              <FormLabel htmlFor="postcode">{t('addressForm.form.postcode')}</FormLabel>
              <Input
                id="postcode"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postcode}

              />
              {formik.touched.postcode && formik.errors.postcode ? (
                <FormErrorMessage>{formik.errors.postcode}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isInvalid={formik.touched.country && formik.errors.country}>
              <FormLabel htmlFor="country">{t('addressForm.form.country')}</FormLabel>
              <Select
                placeholder={t('addressForm.form.selectCountry')}
                id="country"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              >
                {countries.map(country => {
                  const opt = country[`name_${i18n.language}`]
                  return <option key={country.code} value={country.code}>{opt}</option>
                })}

              </Select>
              {formik.touched.country && formik.errors.country ? (
                <FormErrorMessage>{formik.errors.country}</FormErrorMessage>
              ) : null}
            </FormControl>

            <Button
              type="submit"
              rightIcon={<ChevronRightIcon/>}
              colorScheme="orange"
              variant="solid"
              w="100%"
            >
              {t(`addressForm.${props.mode}AddressButton`)}
            </Button>
          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textTransform={'uppercase'}>
          <Link to={'/contacts'}><Text
            color={useColorModeValue('orange.600', 'gray.400')}>{t('addContact.backToContacts')}</Text></Link>
        </Center>
      </Box>
    </Container>
  )
}

AddressForm.propTypes = {
  mode: PropTypes.oneOf(['add', 'edit']).isRequired
}

export default AddressForm