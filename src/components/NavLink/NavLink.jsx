import { Box, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const NavLink = ({ children, target }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={target}>
      {children}
    </Box>
  )
}

NavLink.propTypes = {
  children: PropTypes.any,
  target: PropTypes.string.isRequired
}

export default NavLink