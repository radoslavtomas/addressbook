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
import PropTypes from 'prop-types'
import { useState } from 'react'
import { namedUrls } from '../../routes/routesConfig.js'

const LoginForm = ({ handleLogin }) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('validation.email.invalidFormat')).required(t('validation.email.required')),
      password: Yup.string().min(8, t('validation.password.min')).required(t('validation.password.required'))
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      await handleLogin(values)
      setIsLoading(false)
    }
  })

  return (
    <>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t('loginForm.name')}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form onSubmit={formik.handleSubmit}>
            <FormControl mb={4} isRequired isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">{t('loginForm.form.email')}</FormLabel>
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
              <FormLabel htmlFor="password">{t('loginForm.form.password')}</FormLabel>
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
              isLoading={isLoading}
              type="submit"
              rightIcon={<ChevronRightIcon/>}
              colorScheme="orange"
              variant="solid"
              w="100%"
            >
              {t('loginButton')}
            </Button>
          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textColor={'gray.500'} fontSize={'sm'} mb={1}>
          <p>{t('loginForm.forgotPassword')}</p>
        </Center>
        <Center textTransform={'uppercase'}>
          <Link to={namedUrls.forgotPassword}><Text
            color={useColorModeValue('orange.600', 'gray.400')}>{t('loginForm.resetHere')}</Text></Link>
        </Center>
      </Box>
    </>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default LoginForm