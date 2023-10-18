import RegisterForm from '../../components/Forms/RegisterForm.jsx'
import { Container } from '@chakra-ui/react'

const Register = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <RegisterForm/>
    </Container>
  )
}

export default Register