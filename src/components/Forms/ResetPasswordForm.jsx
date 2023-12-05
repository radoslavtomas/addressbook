import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import passwordRegex from '../../services/regex/password.js'
import PropTypes from 'prop-types'
import { useLocation, useParams } from 'react-router-dom'

const ResetPasswordForm = ({ handleResetPassword }) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const { token } = useParams('token')

  const initialValues = {
    email: new URLSearchParams(location.search).get('email') ?? '',
    password: '',
    password_confirmation: ''
  }

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t('validation.email.invalidFormat'))
        .required(t('validation.email.required')),
      password: Yup.string()
        .min(8, t('validation.password.min'))
        .matches(passwordRegex, t('validation.password.matches'))
        .required(t('validation.password.required')),
      password_confirmation: Yup.string()
        .min(8, t('validation.password.min'))
        .matches(passwordRegex, t('validation.password.matches'))
        .oneOf([Yup.ref('password'), null], t('validation.password.confirm'))
        .required(t('validation.password.required'))
    }),
    onSubmit: async (values) => {
      values['token'] = token
      console.log(values)
      setIsLoading(true)
      await handleResetPassword(values)
      setIsLoading(false)
    }
  })

  return (
    <>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t('resetPasswordForm.name')}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form onSubmit={formik.handleSubmit}>
            <FormControl mb={8} isRequired
                         isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">{t('resetPasswordForm.form.email')}</FormLabel>
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
              <FormLabel htmlFor="password">{t('updatePasswordForm.form.password')}</FormLabel>
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

            <FormControl mb={8} isRequired
                         isInvalid={formik.touched.password_confirmation && formik.errors.password_confirmation}>
              <FormLabel
                htmlFor="password_confirmation">{t('updatePasswordForm.form.password_confirmation')}</FormLabel>
              <Input
                id="password_confirmation"
                type="password"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password_confirmation}
              />
              {formik.touched.password_confirmation && formik.errors.password_confirmation ? (
                <FormErrorMessage>{formik.errors.password_confirmation}</FormErrorMessage>
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
              {t('resetPasswordForm.savePasswordButton')}
            </Button>

          </form>
        </Box>
      </Box>
    </>
  )
}

ResetPasswordForm.propTypes = {
  handleResetPassword: PropTypes.func.isRequired
}

export default ResetPasswordForm