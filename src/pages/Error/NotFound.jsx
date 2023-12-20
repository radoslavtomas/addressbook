import { Heading, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <VStack mt={10}>
      <Heading as="h1">乁( ⁰͡ Ĺ̯ ⁰͡ ) ㄏ</Heading>
      <Heading as="h2" mt={16}>404</Heading>
      <p>{t('errors.notFound')}</p>
    </VStack>
  )
}

export default NotFound