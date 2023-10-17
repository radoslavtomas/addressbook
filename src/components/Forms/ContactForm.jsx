import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
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
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const ContactForm = () => {
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      phone: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, t('validation.firstName.min')).required(t('validation.firstName.required')),
      lastName: Yup.string().min(2, t('validation.lastName.min')).required(t('validation.lastName.required')),
      dateOfBirth: Yup.string().min(2, t('validation.dateOfBirth.min')).required(t('validation.dateOfBirth.required')),
      email: Yup.string().email(t('validation.email.invalidFormat')).required(t('validation.email.required')),
      phone: Yup.string().min(10, t('validation.phone.min')).required(t('validation.phone.required'))
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
              {t('contactForm.name')}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form>
            <FormControl mb={4} isRequired isInvalid={formik.touched.firstName && formik.errors.firstName}>
              <FormLabel htmlFor="firstName">{t('contactForm.form.firstName')}</FormLabel>
              <Input
                id="firstName"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}

              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isRequired isInvalid={formik.touched.lastName && formik.errors.lastName}>
              <FormLabel htmlFor="lastName">{t('contactForm.form.lastName')}</FormLabel>
              <Input
                id="lastName"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}

              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isInvalid={formik.touched.dateOfBirth && formik.errors.dateOfBirth}>
              <FormLabel htmlFor="dateOfBirth">{t('contactForm.form.dateOfBirth')}</FormLabel>
              <Input
                id="dateOfBirth"
                type="date"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateOfBirth}

              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <FormErrorMessage>{formik.errors.dateOfBirth}</FormErrorMessage>
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
              rightIcon={<ChevronRightIcon/>}
              colorScheme="orange"
              variant="solid"
              w="100%"
            >
              {t('contactForm.addContactButton')}
            </Button>
          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textTransform={'uppercase'}>
          <Link to={'/contacts'}><Text
            color={useColorModeValue('orange.600', 'gray.400')}>{t('contactForm.backToContacts')}</Text></Link>
        </Center>
      </Box>
    </Container>
  )
}

export default ContactForm