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
import { namedUrls } from '../../routes/routesConfig.js'
import PropTypes from 'prop-types'

const ForgotPasswordForm = ({ handleForgotPassword }) => {
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('validation.email.invalidFormat')).required(t('validation.email.required')),
    }),
    onSubmit: values => {
      handleForgotPassword(values)
    }
  })

  return (
    <>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t('forgotPasswordForm.name')}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">

          <form onSubmit={formik.handleSubmit}>
            <FormControl mb={4} isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">{t('forgotPasswordForm.form.email')}</FormLabel>
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
              {t('forgotPasswordForm.resetButton')}
            </Button>
          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textTransform={'uppercase'}>
          <Link to={namedUrls.login}><Text
            color={useColorModeValue('orange.600', 'gray.400')}>{t('forgotPasswordForm.backToLogin')}</Text></Link>
        </Center>
      </Box>
    </>
  )
}

ForgotPasswordForm.propTypes = {
  handleForgotPassword: PropTypes.func.isRequired
}

export default ForgotPasswordForm