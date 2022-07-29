import React, { FC } from 'react'
import './Footer.css'
import Text from "../../../components/app/Text/Text"
import { Center } from '@chakra-ui/react'

type FooterProps = {
}

const Footer: FC<FooterProps> = props => {
    return (
        <Center>
            <div className='' style={{ padding: '1rem', marginBottom: '0.1rem' }}>
                <Text style='light' size={4}>
                    (c) 2022 Nrjwolf
                </Text>
            </div>
        </Center>
    )
}

export default Footer