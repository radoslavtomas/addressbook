import { LockIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { logout } from '../../api/authApi.js'

const LogoutButton = () => {
  const { t } = useTranslation()

  const handleLogout = async () => {
    await logout()

    // toast

    // invalidate user in store

    // redirect to homepage
  }

  return (
    <Button
      onClick={() => handleLogout()}
      colorScheme="red"
      rightIcon={<LockIcon/>}
    >
      {t('logoutButton')}
    </Button>
  )
}

export default LogoutButton