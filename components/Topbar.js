import { Flex, Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Topbar () {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('#fff', '#1a202c')
  const color = useColorModeValue('#1a202c', '#EDEEEE')
  const borderColor = useColorModeValue('#ddd', '#27272a')

  return (
            <Flex
            w="full"
            position="fixed"
            zIndex={99999}
            bgColor={bgColor}
            color={color}
            borderBottom={`1px solid ${borderColor}`}>

                <Flex
                alignItems="center"
                justifyContent="space-between"
                w="full"
                maxW="1200px"
                margin="0 auto"
                h="60px"
                px={[4, 8]}
                fontWeight="medium">

                    <Box>srnovato.com</Box>
                    <Box>Login</Box>

                    {colorMode === 'light'
                      ? (
                        <MoonIcon w={6} h={6} onClick={toggleColorMode}/>)
                      : (
                        <SunIcon w={6} h={6} onClick={toggleColorMode}/>
                        )
                    }

                </Flex>

            </Flex>
  )
}
