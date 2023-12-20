import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, Flex, Spacer } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { clearAppError } from '../../store/errorSlice.js'

const AppError = () => {
  const error = useSelector((state) => state.error.error)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return error ? (
    <Flex mt={14} maxW="350px" mx="auto">
      <Alert borderRadius={4} status="error">
        <AlertIcon/>
        <Box>
          <AlertTitle>{t('errors.errorTitle')}</AlertTitle>
          <AlertDescription>
            {error === 'ERR_NETWORK' ? t('errors.noConnection') : error}
          </AlertDescription>
        </Box>
        <Spacer/>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={() => dispatch(clearAppError())}
        />
      </Alert>
    </Flex>
  ) : ''
}

export default AppError