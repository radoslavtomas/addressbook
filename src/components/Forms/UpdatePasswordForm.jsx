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
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { namedUrls } from '../../routes/routesConfig.js'
import PropTypes from 'prop-types'
import passwordRegex from '../../services/regex/password.js'
import { useState } from 'react'

const UpdatePasswordForm = ({ handleUpdatePassword }) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      current_password: '',
      password: '',
      password_confirmation: ''
    },
    validationSchema: Yup.object({
      current_password: Yup.string()
        .min(8, t('validation.password.min'))
        .required(t('validation.password.required')),
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
      setIsLoading(true)
      await handleUpdatePassword(values)
      setIsLoading(false)
    }
  })

  return (
    <>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t('updatePasswordForm.name')}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form onSubmit={formik.handleSubmit}>
            <FormControl mb={8} isRequired
                         isInvalid={formik.touched.current_password && formik.errors.current_password}>
              <FormLabel htmlFor="current_password">{t('updatePasswordForm.form.current_password')}</FormLabel>
              <Input
                id="current_password"
                type="password"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.current_password}
              />
              {formik.touched.current_password && formik.errors.current_password ? (
                <FormErrorMessage>{formik.errors.current_password}</FormErrorMessage>
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
              {t('updatePasswordForm.savePasswordButton')}
            </Button>

          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textTransform={'uppercase'}>
          <Link to={namedUrls.contacts}><Text
            color={useColorModeValue('orange.600', 'gray.400')}>{t('updatePasswordForm.backToContacts')}</Text></Link>
        </Center>
      </Box>
    </>
  )
}

UpdatePasswordForm.propTypes = {
  handleUpdatePassword: PropTypes.func.isRequired
}

export default UpdatePasswordForm