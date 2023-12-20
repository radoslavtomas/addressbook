import { useRouteError } from 'react-router-dom'
import { Heading, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Error = () => {
  const error = useRouteError()
  const { t } = useTranslation()
  console.error(error)

  return (
    <VStack mt={10}>
      <Heading as="h1">{t('errors.errorPageHeading')}</Heading>
      <p>{t('errors.errorPageDescription')}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </VStack>
  )
}

export default Error