import { Box, Text, Image, Flex, ListItem, List } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, { FC } from "react"
import Header from "../../components/app/Header/Header"
import ReactMarkdown from 'react-markdown'
import Footer from '../../components/app/Footer/Footer'
import dynamic from 'next/dynamic'
import YoutubeVideo from '../../components/app/YoutubeVideo/YoutubeVideo'

// const YoutubeVideo = dynamic(() => import('../../components/app/YoutubeVideo/YoutubeVideo'), {
//     ssr: false,
// })

type PostProps = {
    children?: React.ReactNode,
    content: any
}

const maxWidth = '800'

export async function getStaticPaths() {
    const res = await fetch('https://hasura.api.nrjwolf.dev/api/rest/nrjwolf/com/posts')
    const data = await res.json()
    const posts = data.nrjwolf_com_posts
    const paths = posts.map((post) => ({
        params: { id: post.name },
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://hasura.api.nrjwolf.dev/api/rest/nrjwolf/com/post?name=${params.id}`)
    const data = await res.json()
    const post = data.nrjwolf_com_posts[0]
    return {
        props: {
            content: post.content
        },
        revalidate: 10, // In seconds
    }
}

const mdRenderTheme = {
    h1: (props: any) => <Box marginTop={8} marginBottom={3}><Text as="h1" fontSize="35" fontWeight="bold" {...props} /></Box>,
    h2: (props: any) => <Box marginTop={7} marginBottom={3}><Text as="h2" fontSize="30" fontWeight="bold" {...props} /></Box>,
    h3: (props: any) => <Box marginTop={7} marginBottom={2}><Text as="h3" fontSize="25" fontWeight="bold" {...props} /></Box>,
    h4: (props: any) => <Box marginTop={1} marginBottom={1}><Text as="h3" fontSize="20" fontWeight="bold" {...props} /></Box>,
    h5: (props: any) => <Box marginTop={1} marginBottom={1}><Text as="h5" fontSize="15" fontWeight="bold" {...props} /></Box>,
    h6: (props: any) => <Box marginTop={1} marginBottom={1}><Text as="h6" fontSize="10" fontWeight="bold" {...props} /></Box>,
    img: (props: any) => {
        const { node, inline, className, children } = props
        const { alt, src } = node.properties
        return (
            <Flex justifyContent={'center'}>
                <Image bgColor={'red'} marginTop={2} marginBottom={2} src={src} alt={alt} maxH={650} />
            </Flex>
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
                    overridenChildren.push(<YoutubeVideo id={youtube[1]} />)
                } else {
                    overridenChildren.push(child)
                }
            } else {
                overridenChildren.push(child)
            }
        }
        return (
            <div>
                {overridenChildren}
            </div>
        )
    },
    li: (props: any) => {
        const { node, inline, className, children } = props
        return (
            <li style={{ marginLeft: '1.5em' }}>{children}</li>
        )
    }
    // code(props: any) {
    //     const { node, inline, className, children } = props
    //     const match = /language-(\w+)/.exec(className || '')
    //     return !inline && match ? (
    //         <SyntaxHighlighter
    //             style={vscDarkPlus}
    //             language={match[1]}
    //             PreTag="div"
    //             {...props}
    //         >
    //             {String(children).replace(/\n$/, '')}
    //         </SyntaxHighlighter>
    //     ) : (
    //         <code className={className} {...props}>
    //             {children}
    //         </code>
    //     )
    // },
}

const Post: FC<PostProps> = ({ content }) => {
    const router = useRouter()
    // console.log(post)

    const onHeaderClick = () => {
        // go to home
        router.push('/')
    }

    return (
        <Flex maxW={maxWidth} direction='column' justifyContent='center'>
            <Header onClick={onHeaderClick} />
            <Box marginBottom={10}>
                <article>
                    <ReactMarkdown children={content} components={mdRenderTheme} skipHtml />
                </article>
            </Box>
            <Footer />
        </Flex>
    )
}

export default Post