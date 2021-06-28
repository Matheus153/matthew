import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import Topbar from './Topbar'

export default function Layout ({ children }) {
  const bgColor = useColorModeValue('#F4F6F8', '#1a202c')

  return (<Box bgColor={bgColor}>
        <Topbar/>
        <Flex flexDirection="column" pt={'62px'}>
            {children}
        </Flex>
        </Box>)
}
