import React, { FC, useEffect } from 'react'
import { Flex, Box, Stack, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/app/Header/Header'
import ProjectsList from '../components/app/Projects/ProjectsList/ProjectList'
import Footer from '../components/app/Footer/Footer'

type HomeProps = {
  children?: React.ReactNode
}

export async function getServerSideProps() {
  const res = await fetch(`https://hasura.api.nrjwolf.dev/api/rest/nrjwolf/com/projects`)
  const data = await res.json()

  return {
    props: {
      projects: data.nrjwolf_com_projects
    }
  }
}

const HomeScreen = ({ projects }) => {
  console.log(projects)

  const onHeaderClick = () => {
    // go to home
  }

  return (
    <>
      <Box>
        <Header onClick={onHeaderClick} />
        <ProjectsList projects={projects} />
        <Footer />
      </Box>
    </>
  )
}

export default HomeScreen