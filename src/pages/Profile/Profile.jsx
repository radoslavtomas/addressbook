import { Box, Center, Container, Stack, StackDivider, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import ProfileForm from '../../components/Forms/ProfileForm.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { updateProfile } from '../../api/userApi.js'
import { namedUrls } from '../../routes/routesConfig.js'

const Profile = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleUpdateProfile = async (data) => {
    try {
      const response = await updateProfile(data)

      if (!response.id) return

      toast({
        description: 'Your profile has been successfully updated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      navigate(namedUrls.getUser, {
        state: {
          redirectTo: namedUrls.contacts
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container maxW="container.md" pt={10}>
      <Stack divider={<StackDivider/>} spacing={4}>
        <ProfileForm handleUpdateProfile={handleUpdateProfile}/>

        <Box delay={0.2} mt={4}>
          <Center textColor={'gray.500'} fontSize={'sm'} mb={1}>
            <p>Is your password out of date?</p>
          </Center>
          <Center textTransform={'uppercase'}>
            <Link to={'/update-password'}><Text
              color={useColorModeValue('orange.600', 'gray.400')}>Update Password</Text></Link>
          </Center>
        </Box>
      </Stack>
    </Container>
  )
}

export default Profile