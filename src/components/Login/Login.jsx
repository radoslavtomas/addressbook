import { Box, Button, Center, Container, Heading, Input } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../../layouts/Guest.jsx'

const Login = () => {

  return (
    <Layout>
      <Center h="100%">
        <Container maxW="container.md">
          <Box display={{ md: 'flex' }} mb={6}>
            <Box flexGrow={1}>
              <Center>
                <Heading as="h2" variant="page-title" textAlign="center">
                  Login
                </Heading>
              </Center>
              <Center textAlign="center">
                <p>Login description</p>
              </Center>
            </Box>
          </Box>

          <Box delay={0.1}>
            <Box maxW="350px" mx="auto">

              <form>
                <Input
                  id="email"
                  autoFocus
                  type="email"
                  placeholder="example@doamin.com"
                  borderColor="blue.300"
                  textAlign="center"
                />

                <Button
                  type="submit"
                  rightIcon={<ChevronRightIcon/>}
                  colorScheme="blue"
                  variant="solid"
                  w="100%"
                  mt={2}
                >
                  Login
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </Center>
    </Layout>
  )
}

export default Login