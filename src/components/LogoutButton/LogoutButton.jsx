import { LockIcon } from '@chakra-ui/icons'
import { Button, useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { logout } from '../../api/authApi.js'
import { logUserOut } from '../../store/userSlice.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'

const LogoutButton = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()

  const handleLogout = async () => {
    // do actual logout
    await logout()

    // clear store & sessionStorage
    dispatch(logUserOut())
    sessionStorage.removeItem('user')

    // feedback user
    toast({
      status: 'success',
      title: 'Logout successful',
      isClosable: true,
      duration: 3000
    })

    navigate(namedUrls.home)
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