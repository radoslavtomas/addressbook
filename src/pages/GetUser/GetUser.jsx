import PropTypes from 'prop-types'
import { getUser } from '../../api/userApi.js'
import { updateUser } from '../../store/userSlice.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'

const UpdateUser = ({ redirectTo }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    isloading,
    error,
    data
  } = useSWR('user', getUser, {
    onSuccess: data => updateStore(data)
  })

  const updateStore = () => {
    dispatch(updateUser(data.data))
    sessionStorage.setItem('user', JSON.stringify(data.data))
  }

  const user = getUser()

  navigate(redirectTo)
  return 'Updating user'
}

UpdateUser.propTypes({
  redirectTo: PropTypes.string.isRequired
})
export default UpdateUser