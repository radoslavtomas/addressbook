import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

const Register = () => {
  const { t } = useTranslation()
  const isError = false

  return (
    <Container maxW="container.md" pt={10}>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              {t('register.name')}
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form>
            <FormControl mb={4} isRequired isInvalid={isError}>
              <FormLabel htmlFor="email">{t('register.form.name')}</FormLabel>
              <Input
                id="name"
                autoFocus
                type="name"
              />
              <FormErrorMessage>Email is required</FormErrorMessage>
            </FormControl>

            <FormControl mb={4} isRequired isInvalid={isError}>
              <FormLabel htmlFor="email">{t('register.form.email')}</FormLabel>
              <Input
                id="email"
                type="email"
              />
              <FormErrorMessage>Email is required</FormErrorMessage>
            </FormControl>

            <FormControl mb={8} isRequired isInvalid={isError}>
              <FormLabel htmlFor="password">{t('register.form.password')}</FormLabel>
              <Input
                id="password"
                type="password"
              />
              <FormErrorMessage>Password is required</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              rightIcon={<ChevronRightIcon/>}
              colorScheme="blue"
              variant="solid"
              w="100%"
            >
              {t('register.registerButton')}
            </Button>
          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textColor={'gray.500'} fontSize={'sm'} mb={1}>
          <p>{t('register.haveAccount')}</p>
        </Center>
        <Center textTransform={'uppercase'}>
          <Link to={'/ '}>{t('register.loginHere')}</Link>
        </Center>
      </Box>
    </Container>
  )
}

export default Register