import { Box, Center, Container, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react'
import ProfileForm from '../../components/Forms/ProfileForm.jsx'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <Stack divider={<StackDivider/>} spacing={4}>
        <ProfileForm/>

        <Box delay={0.2}>
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