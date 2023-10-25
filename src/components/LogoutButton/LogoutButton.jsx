import { LockIcon } from '@chakra-ui/icons'
import { Button, useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { logout } from '../../api/authApi.js'
import { logUserOut } from '../../store/userSlice.js'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { namedUrls } from '../../routes/routesConfig.js'

const LogoutButton = ({ onClose }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()

  const handleLogout = async () => {
    // do actual logout
    await logout()

    // clear store
    dispatch(logUserOut())

    // feedback user
    toast({
      status: 'success',
      title: 'Logout successful',
      isClosable: true,
      duration: 9000
    })

    // close drawer & navigate home
    onClose()
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

LogoutButton.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default LogoutButton