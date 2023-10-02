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
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Login = () => {

  const isError = false

  return (
    <Container maxW="container.md" pt={10}>
      <Box display={{ md: 'flex' }} mb={6}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title" textAlign="center">
              Login
            </Heading>
          </Center>
        </Box>
      </Box>

      <Box delay={0.1} mb={6}>
        <Box maxW="350px" mx="auto">
          <form>
            <FormControl mb={4} isRequired isInvalid={isError}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                autoFocus
                type="email"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
              />
              <FormErrorMessage>Email is required</FormErrorMessage>
            </FormControl>

            <FormControl mb={8} isRequired isInvalid={isError}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                errorBorderColor="red.400"
                focusBorderColor="gray.500"
              />
              <FormErrorMessage>Password is required</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              rightIcon={<ChevronRightIcon/>}
              colorScheme="orange"
              variant="solid"
              w="100%"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>

      <Box delay={0.2}>
        <Center textColor={'gray.500'} fontSize={'sm'} mb={1}>
          <p>Don&apos;t have an account?</p>
        </Center>
        <Center textTransform={'uppercase'}>
          <Link to="/register"><Text color={useColorModeValue('orange.600', 'gray.400')}>Register here</Text></Link>
        </Center>
      </Box>
    </Container>
  )
}

export default Login