import { HStack, Image, Show, Text, useColorModeValue } from '@chakra-ui/react'
import logo from '../../assets/img/logo.svg'
import { useTranslation } from 'react-i18next'

const SiteLogo = () => {
  const { t } = useTranslation()

  return (
    <HStack spacing={3}>
      <Image
        boxSize="1.8em"
        objectFit="cover"
        src={logo}
        alt="logo"
      />
      <Show above="sm">
        <Text as={'span'} fontFamily={'Lobster'} color={useColorModeValue('orange.500', 'orange.300')}
              _hover={{ color: useColorModeValue('orange.600', 'orange.400') }}
              fontSize={'1.6em'}>{t('siteTitle')}</Text>
      </Show>
    </HStack>
  )
}

export default SiteLogo