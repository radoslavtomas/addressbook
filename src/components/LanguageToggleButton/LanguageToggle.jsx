import { Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Select value={language} size="md" onChange={(event) => changeLanguage(event)}>
      <option value="en">en</option>
      <option value="sk">sk</option>
    </Select>
  )
}

export default LanguageToggle