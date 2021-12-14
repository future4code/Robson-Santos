import React from "react"
import { Container, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, ButtonGroup } from '@chakra-ui/react'

const Login = () => {
    return (
        <Container>
            <FormControl id='email' isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Senha</FormLabel>
                <Input type='password' />
            </FormControl>
                <Button colorScheme='teal' size='md' variant='ghost'>
                    Enviar
                </Button>           
        </Container>
    )
}

export default Login