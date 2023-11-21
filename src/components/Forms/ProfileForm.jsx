import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const ProfileForm = ({ handleUpdateProfile }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, t('validation.name.min')).required(t('validation.name.required')),
      email: Yup.string().email(t('validation.email.invalidFormat')).required(t('validation.email.required'))
    }),
    onSubmit: values => {
      values['user_id'] = user.id
      console.log(values)
      handleUpdateProfile(values)
    }
  })

  return (
    <>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t('profileForm.name')}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form onSubmit={formik.handleSubmit}>
            <FormControl mb={4} isRequired isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="name">{t('profileForm.form.name')}</FormLabel>
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
              <FormLabel htmlFor="email">{t('profileForm.form.email')}</FormLabel>
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
              {t('profileForm.updateProfileButton')}
            </Button>
          </form>

          <Box mt={4}>
            <Button
              onClick={() => navigate(namedUrls.contacts)}
              rightIcon={<EmailIcon/>}
              colorScheme="green"
              variant="solid"
              w="100%"
            >
              {t('profileForm.backToContacts')}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

ProfileForm.propTypes = {
  handleUpdateProfile: PropTypes.func.isRequired
}

export default ProfileForm