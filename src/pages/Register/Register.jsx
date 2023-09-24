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
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../../layouts/Guest.jsx'

const Register = () => {

  const isError = false

  return (
    <Layout>
      <Container maxW="container.md">
        <Box display={{ md: 'flex' }} mb={6}>
          <Box flexGrow={1}>
            <Center>
              <Heading as="h2" variant="page-title" textAlign="center">
                Register
              </Heading>
            </Center>
          </Box>
        </Box>

        <Box delay={0.1} mb={6}>
          <Box maxW="350px" mx="auto">
            <form>
              <FormControl mb={4} isRequired isInvalid={isError}>
                <FormLabel htmlFor="email">Name</FormLabel>
                <Input
                  id="name"
                  autoFocus
                  type="name"
                />
                <FormErrorMessage>Email is required</FormErrorMessage>
              </FormControl>

              <FormControl mb={4} isRequired isInvalid={isError}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                />
                <FormErrorMessage>Email is required</FormErrorMessage>
              </FormControl>

              <FormControl mb={8} isRequired isInvalid={isError}>
                <FormLabel htmlFor="password">Password</FormLabel>
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
                Register
              </Button>
            </form>
          </Box>
        </Box>

        <Box delay={0.2}>
          <Center textColor={'gray.500'} fontSize={'sm'} mb={1}>
            <p>Already have an account?</p>
          </Center>
          <Center textTransform={'uppercase'}>
            <a href={'/login'}>Login here</a>
          </Center>
        </Box>
      </Container>
    </Layout>
  )
}

export default Register