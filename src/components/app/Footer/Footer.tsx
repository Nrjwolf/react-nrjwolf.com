import React, { FC } from 'react'
import './Footer.css'
import Text from "../../../components/app/Text/Text"

type FooterProps = {
}

const Footer: FC<FooterProps> = props => {
    return (
        <div className='' style={{ padding: '10px', marginBottom: 10 }}>
            <Text style='light' size={4}>
                (c) 2022 Nrjwolf
            </Text>
        </div>
    )
}

export default Footer