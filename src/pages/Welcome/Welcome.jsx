import { useTranslation } from 'react-i18next'
import { Button, Center, Container, Flex, Image, Text } from '@chakra-ui/react'
import NotebookImg from '../../assets/img/notebook.svg'

const Welcome = () => {

  const { t } = useTranslation()

  return (
    <Container maxW="container.lg" pt={10}>
      <Flex>
        <Flex direction="column" justifyContent="center">
          <Text fontSize="xx-large" fontWeight="bold" fontFamily={'Lato'}>{t('index.heroMessage')}</Text>
          <Flex>
            <Button>Login</Button>
            <Button>Register</Button>
          </Flex>
        </Flex>
        <Center>
          <Image w={'xs'} src={NotebookImg} alt="Notebook image"/>
        </Center>
      </Flex>

    </Container>
  )
}

export default Welcome