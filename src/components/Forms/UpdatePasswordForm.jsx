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

const UpdatePasswordForm = () => {
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().min(6, t('validation.currentPassword.min')).required(t('validation.currentPassword.required')),
      newPassword: Yup.string().min(6, t('validation.newPassword.min')).required(t('validation.newPassword.required')),
      confirmPassword: Yup.string().min(6, t('validation.confirmPassword.min')).required(t('validation.confirmPassword.required'))
    }),
    onSubmit: values => {
      console.log(values)
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
          <form>
            <FormControl mb={8} isRequired isInvalid={formik.touched.password && formik.errors.password}>
              <FormLabel htmlFor="currentPassword">{t('updatePasswordForm.form.currentPassword')}</FormLabel>
              <Input
                id="currentPassword"
                type="password"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.currentPassword && formik.errors.currentPassword ? (
                <FormErrorMessage>{formik.errors.currentPassword}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={8} isRequired isInvalid={formik.touched.password && formik.errors.password}>
              <FormLabel htmlFor="newPassword">{t('updatePasswordForm.form.newPassword')}</FormLabel>
              <Input
                id="newPassword"
                type="password"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <FormErrorMessage>{formik.errors.newPassword}</FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl mb={8} isRequired isInvalid={formik.touched.password && formik.errors.password}>
              <FormLabel htmlFor="confirmPassword">{t('updatePasswordForm.form.confirmPassword')}</FormLabel>
              <Input
                id="confirmPassword"
                type="password"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
              ) : null}
            </FormControl>

            <Button
              type="submit"
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
        <Center textColor={'gray.500'} fontSize={'sm'} mb={1}>
          <p>{t('registerForm.haveAccount')}</p>
        </Center>
        <Center textTransform={'uppercase'}>
          <Link to={'/login'}><Text
            color={useColorModeValue('orange.600', 'gray.400')}>{t('registerForm.loginHere')}</Text></Link>
        </Center>
      </Box>
    </>
  )
}

export default UpdatePasswordForm