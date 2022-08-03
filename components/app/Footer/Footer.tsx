import React, { FC } from 'react'
import { Center, Flex, Text } from '@chakra-ui/react'

type FooterProps = {
}

const Footer: FC<FooterProps> = props => {
    return (
        <Flex bottom={0} marginBottom={5} alignItems='center' justifyContent='center'>
            <Center>
                <Text fontWeight={'300'}>
                    (c) 2022 Nrjwolf
                </Text>
            </Center>
        </Flex>
    )
}

export default Footer