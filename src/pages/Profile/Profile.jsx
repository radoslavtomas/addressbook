import { Container, Stack, StackDivider } from '@chakra-ui/react'
import ProfileForm from '../../components/Forms/ProfileForm.jsx'
import UpdatePasswordForm from '../../components/Forms/UpdatePasswordForm.jsx'

const Profile = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <Stack divider={<StackDivider/>} spacing={4}>
        <ProfileForm/>
        <UpdatePasswordForm/>
      </Stack>
    </Container>
  )
}

export default Profile