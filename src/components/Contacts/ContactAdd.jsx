import { Box, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { namedUrls } from '../../routes/routesConfig.js'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ContactAdd = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Box mt={6} mb={10} textAlign="right">
      <Button
        colorScheme="green"
        rightIcon={<AddIcon/>}
        onClick={() => navigate(namedUrls.contactsCreate)}
      >
        {t('addNewContact')}
      </Button>
    </Box>
  )
}

export default ContactAdd