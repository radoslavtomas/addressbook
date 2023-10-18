import LoginForm from '../../components/Forms/LoginForm.jsx'
import { Container } from '@chakra-ui/react'

const Login = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <LoginForm/>
    </Container>
  )
}

export default Login