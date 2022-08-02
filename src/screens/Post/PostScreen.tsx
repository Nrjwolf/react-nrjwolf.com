import './PostScreen.css'

import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { AppContext } from '../../context/AppContext'
import Header from '../Home/Header/Header'
import Footer from '../../components/app/Footer/Footer'
import example from './example.md'
import { AspectRatio, Box, Image, Text } from '@chakra-ui/react'
import Shadow from '../../components/lib/Shadow/Shadow'
import { useNavigate, useParams } from 'react-router-dom'
import { get } from '../../utils/request'
import { ROUTES } from '../../utils/Navigation/Navigation'

type PostScreenProps = {
    children?: React.ReactNode
}

const maxWidth = '800'

const PostScreen: FC<PostScreenProps> = props => {
    const { id } = useParams()
    const navigation = useNavigate()
    const appContext = useContext(AppContext)
    const [text, setText] = useState('')
    const fontColor = () => appContext?.fontColor

    const renderTheme = {
        img: (props: any) => {
            const { node, inline, className, children } = props
            const { alt, src } = node.properties
            console.log(node)
            return (
                <Box marginTop={5} marginBottom={5} display='flex' justifyContent='center'>
                    <Shadow>
                        <Image src={src} alt={alt} maxH={650}>
                            {children}
                        </Image>
                    </Shadow>
                </Box>
            )
        },
        h3: (props: any) => {
            const { node, inline, className, children } = props
            return (
                <Text fontSize={25} fontWeight='bold' marginTop={10} marginBottom={1}>
                    {children}
                </Text>
            )
        },
        p: (props: any) => {
            const { node, inline, className, children } = props
            const match = /language-(\w+)/.exec(className || '')
            let overridenChildren: any = []
            for (let i = 0;i < children.length;i++) {
                const child = children[i]
                if (typeof child == 'string') {
                    const youtube = child.split('youtube_')
                    if (youtube.length > 1) {
                        console.log(`yotube`)
                        overridenChildren.push(
                            <AspectRatio maxW={maxWidth} ratio={16 / 10} marginTop={2} marginBottom={2}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${youtube[1]}`}
                                    allowFullScreen
                                />
                            </AspectRatio>
                        )
                    } else {
                        overridenChildren.push(child)
                    }
                } else {
                    overridenChildren.push(child)
                }
            }
            return (
                <Text fontSize={17}>
                    {overridenChildren}
                </Text>
            )
        },
        code(props: any) {
            const { node, inline, className, children } = props
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            )
        },
    }

    useEffect(() => {
        const init = async () => {
            try {
                const post = await get(`https://hasura.api.nrjwolf.dev/api/rest/nrjwolf/com/post?name=${id}`)                
                if (post.nrjwolf_com_posts.length > 0 && post.nrjwolf_com_posts[0].status == 'published') {
                    const text = post.nrjwolf_com_posts[0].content
                    console.log( post.nrjwolf_com_posts[0])
                    
                    setText(text)
                }
                else {
                    setText('Page not found')
                    navigation(ROUTES.HOME)
                }
            }
            catch (err) {
                navigation(ROUTES.HOME)
            }
            // await fetch(example)
            //     .then(r => r.text())
            //     .then(text => {
            //         setText(text)
            //         return text
            //     })
        }
        init()
    }, [])

    return (
        <Box style={{ color: fontColor() }} display='flex' justifyContent='center' alignContent={'center'} marginTop={5}>
            <Box minH='100vh' maxW={maxWidth} flex='1'>
                <Header />
                <Box marginTop={5} marginBottom={10}>
                    <ReactMarkdown className="foo"
                        components={ChakraUIRenderer(renderTheme)}
                        children={text}
                        skipHtml
                    />
                </Box>
                <Footer />
            </Box>
        </Box >
    )
}

export default PostScreen