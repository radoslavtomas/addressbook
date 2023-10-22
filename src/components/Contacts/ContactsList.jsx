import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import ContactItem from './ContactItem.jsx'
import useSWR from 'swr'

import { getBlogPosts } from '../../api/blogPostApi.jsx'

const ContactsList = () => {
  const {
    isLoading,
    error,
    data: blogs
  } = useSWR('posts', getBlogPosts, {
    onSuccess: data => console.log(data)
  })

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p>{error.message}</p>
  }

  if (blogs) {
    content = blogs.map((blog) => {
      return <p key={blog.id}>{blog.title}</p>
    })
  }

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
              <Box as="span" flex="1" textAlign="left">
                Elvis Presley
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ContactItem/>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
              <Box as="span" flex="1" textAlign="left">
                John Doe
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ContactItem/>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ fontWeight: 'bold', color: 'orange.400' }}>
              <Box as="span" flex="1" textAlign="left">
                Chuck Norris
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ContactItem/>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
      {content}
    </>
  )
}

export default ContactsList