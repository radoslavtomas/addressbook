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

const RegisterForm = () => {
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, t('validation.name.min')).required(t('validation.name.required')),
      email: Yup.string().email(t('validation.email.invalidFormat')).required(t('validation.email.required')),
      password: Yup.string().min(6, t('validation.password.min')).required(t('validation.password.required'))
    }),
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <Container maxW="container.md" pt={10}>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t('registerForm.name')}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form>
            <FormControl mb={4} isRequired isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="name">{t('registerForm.form.name')}</FormLabel>
              <Input
                id="name"
                type="text"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}

              />
              {formik.touched.name && formik.errors.name ? (
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={4} isRequired isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">{t('registerForm.form.email')}</FormLabel>
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

            <FormControl mb={8} isRequired isInvalid={formik.touched.password && formik.errors.password}>
              <FormLabel htmlFor="password">{t('registerForm.form.password')}</FormLabel>
              <Input
                id="password"
                type="password"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              ) : null}
            </FormControl>

            <Button
              type="submit"
              rightIcon={<ChevronRightIcon/>}
              colorScheme="orange"
              variant="solid"
              w="100%"
            >
              {t('registerButton')}
            </Button>
          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textColor={'gray.500'} fontSize={'sm'} mb={1}>
          <p>{t('registerForm.haveAccount')}</p>
        </Center>
        <Center textTransform={'uppercase'}>
          <Link to={'/login'}><Text
            color={useColorModeValue('orange.600', 'gray.400')}>{t('registerForm.loginHere')}</Text></Link>
        </Center>
      </Box>
    </Container>
  )
}

export default RegisterForm