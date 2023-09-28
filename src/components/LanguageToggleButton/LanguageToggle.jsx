import { Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'

const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const select = useRef()

  const changeLanguage = (lng) => {
    console.log(select.current.value)
    i18n.changeLanguage(select.current.value)
  }

  return (
    <Select ref={select} size="md" onChange={() => changeLanguage()}>
      <option value="en">EN</option>
      <option value="sk">SK</option>
    </Select>
  )
}

export default LanguageToggle