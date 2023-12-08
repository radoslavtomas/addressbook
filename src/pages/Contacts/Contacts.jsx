import { Center, Container } from '@chakra-ui/react'
import ContactsList from '../../components/Contacts/ContactsList.jsx'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
  const { t } = useTranslation(

  )
  return (
    <Container maxW="container.md" pt={10}>
      <Center fontSize="3xl" fontWeight={700}>{t('contacts')}</Center>
      <ContactsList/>
    </Container>
  )
}

export default Contacts