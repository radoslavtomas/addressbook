import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { namedUrls } from '../../routes/routesConfig.js'

const ContactForm = ({ contact, handleFormSubmit, mode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [initialValues, setInitialValues] = useState({
    first_names: '',
    last_name: '',
    date_of_birth: '',
    email: '',
    phone: ''
  })
  const { t } = useTranslation()

  useEffect(() => {
    console.log(contact)
    if (contact) {
      console.log('effect')
      handleInitialValues()
    }
  }, [contact])

  const handleInitialValues = () => {
    let newInitialValues = { ...initialValues }

    for (const key in newInitialValues) {
      if (contact[key]) {
        newInitialValues[key] = contact[key]
      }
    }

    console.log(newInitialValues)

    setInitialValues(newInitialValues)
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: Yup.object({
      first_names: Yup.string().min(2, t('validation.first_names.min')).required(t('validation.first_names.required')),
      last_name: Yup.string().min(2, t('validation.last_name.min')).required(t('validation.last_name.required')),
      date_of_birth: Yup.date().max(new Date(), t('validation.date_of_birth.max')),
      email: Yup.string().email(t('validation.email.invalidFormat')),
      phone: Yup.string().min(10, t('validation.phone.min'))
    }),
    onSubmit: async data => {
      setIsLoading(true)
      await handleFormSubmit(cleanEmptyValues(data))
      setIsLoading(false)
    }
  })

  const cleanEmptyValues = data => {
    let noEmptyValues = {}

    for (const key in data) {
      if (data[key]) {
        noEmptyValues[key] = data[key]
      }
    }

    return noEmptyValues
  }

  return (
    <>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t(`contactForm.name_${mode}`)}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form onSubmit={formik.handleSubmit}>
            <FormControl mb={4} isRequired isInvalid={formik.touched.first_names && formik.errors.first_names}>
              <FormLabel htmlFor="first_names">{t('contactForm.form.first_names')}</FormLabel>
              <Input
                id="first_names"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_names}

              />
              {formik.touched.first_names && formik.errors.first_names ? (
                <FormErrorMessage>{formik.errors.first_names}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isRequired isInvalid={formik.touched.last_name && formik.errors.last_name}>
              <FormLabel htmlFor="last_name">{t('contactForm.form.last_name')}</FormLabel>
              <Input
                id="last_name"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}

              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <FormErrorMessage>{formik.errors.last_name}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isInvalid={formik.touched.date_of_birth && formik.errors.date_of_birth}>
              <FormLabel htmlFor="date_of_birth">{t('contactForm.form.date_of_birth')}</FormLabel>
              <Input
                id="date_of_birth"
                type="date"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date_of_birth}

              />
              {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                <FormErrorMessage>{formik.errors.date_of_birth}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isInvalid={formik.touched.phone && formik.errors.phone}>
              <FormLabel htmlFor="phone">{t('contactForm.form.phone')}</FormLabel>
              <Input
                id="phone"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}

              />
              {formik.touched.phone && formik.errors.phone ? (
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">{t('contactForm.form.email')}</FormLabel>
              <Input
                id="email"
                type="email"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              ) : null}
            </FormControl>

            <Button
              type="submit"
              isLoading={isLoading}
              rightIcon={<ChevronRightIcon/>}
              colorScheme="orange"
              variant="solid"
              w="100%"
            >
              {t(`contactForm.${mode}ContactButton`)}
            </Button>
          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textTransform={'uppercase'}>
          <Link to={namedUrls.contacts}><Text
            color={useColorModeValue('orange.600', 'gray.400')}>{t('contactForm.backToContacts')}</Text></Link>
        </Center>
      </Box>
    </>
  )
}

ContactForm.propTypes = {
  contact: PropTypes.object,
  handleFormSubmit: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['create', 'edit']).isRequired,
}

export default ContactForm