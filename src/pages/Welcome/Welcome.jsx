import { useTranslation } from 'react-i18next'
import { Button, Center, Container, Flex, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import NotebookImg from '../../assets/img/notebook.svg'
import { EmailIcon, UnlockIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { namedUrls } from '../../routes/routesConfig.js'

const Welcome = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

  let ctaButton = ''

  if (user) {
    ctaButton = <>
      <Button
        rightIcon={<EmailIcon/>}
        colorScheme="green"
        onClick={() => navigate(namedUrls.contacts)}
      >
        {t('myContactsButton')}
      </Button>
    </>
  } else {
    ctaButton = <>
      <Button
        rightIcon={<UnlockIcon/>}
        colorScheme="blue" onClick={() => navigate(namedUrls.login)}
      >
        {t('loginButton')}
      </Button>

      <Button
        rightIcon={<EmailIcon/>}
        colorScheme="green"
        onClick={() => navigate(namedUrls.register)}
      >
        {t('registerButton')}
      </Button>
    </>
  }

  return (
    <Container maxW="container.lg" px={{ base: '8', lg: '4' }}>
      <Center display={{ base: 'flex', sm: 'none' }}>
        <Heading
          as="h2" pt="4"
          fontFamily="Lobster"
          color={useColorModeValue('orange.500', 'orange.300')}
          size="xl"
        >
          {t('siteTitle')}
        </Heading>
      </Center>

      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        justifyContent={{ base: 'start', lg: 'center' }}
        alignItems="center"
        minHeight={'calc(100vh - 3.5em)'}>

        <Flex gap="8" flex={{ lg: '2 1 0' }} direction="column" justifyContent="center">
          <Heading
            as="h1"
            size={{ base: 'xl', lg: '2xl' }}
            fontWeight="bold"
          >
            {t('index.heroMessage')}
          </Heading>

          <Flex gap="6" justifyContent={{ base: 'center', lg: 'start' }}>
            {ctaButton}
          </Flex>
        </Flex>

        <Center flex={{ lg: '1 1 0' }}>
          <Image
            w={{ base: '250px', sm: 'xs' }}
            src={NotebookImg}
            alt="Notebook image"/>
        </Center>
      </Flex>
    </Container>
  )
}

export default Welcome