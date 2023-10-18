import PasswordResetForm from '../../components/Forms/PasswordResetForm.jsx'
import { Container } from '@chakra-ui/react'

const PasswordReset = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <PasswordResetForm/>
    </Container>
  )
}

export default PasswordReset