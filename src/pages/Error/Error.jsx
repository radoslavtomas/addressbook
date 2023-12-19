import { useRouteError } from 'react-router-dom'
import { Heading, VStack } from '@chakra-ui/react'

const Error = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <VStack mt={10}>
      <Heading as="h1">Oh dear!</Heading>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </VStack>
  )
}

export default Error