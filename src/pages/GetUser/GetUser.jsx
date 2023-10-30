import { getUser } from '../../api/userApi.js'
import { useDispatch } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { setUpUser } from '../../store/userSlice.js'
import { Alert, AlertDescription, AlertIcon, Container, Flex, Spinner, Text } from '@chakra-ui/react'

const GetUser = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    async function fetchUser () {
      try {
        const user = await getUser()
        dispatch(setUpUser(user.data))
        sessionStorage.setItem('user', JSON.stringify(user.data))
        setUser(() => user.data)
        setIsLoading(() => false)
      } catch (error) {
        console.log('in error')
        console.log(error)
        setError(error.response.data.message)
        setIsLoading(() => false)
      }
    }

    fetchUser()
  }, [])

  let content

  if (isLoading) {
    content = (
      <>
        <Text mr={2}>Loading user...</Text>
        <Spinner/>
      </>
    )
  } else if (error) {
    content = (
      <Alert status="error">
        <AlertIcon/>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  } else if (user) {
    content = <Navigate to={location.state.redirectTo}/>
  }

  return (
    <Container maxW="container.md" pt={10}>
      <Flex justifyContent="center" alignItems="center">
        {content}
      </Flex>
    </Container>
  )
}

export default GetUser