import type { NextPage, } from 'next'
import Link from 'next/link'
import { Center, Heading, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { testState } from '../stores/atoms/testState'

const Home: NextPage = () => {
  const test = useRecoilValue(testState)
  return (
    <>
   <Center><Heading>INSURANCE GENIE</Heading></Center>
   <Center><Link href={"test"}><Text color={"green"} fontWeight={"bold"}>Recoil {test}</Text></Link></Center>
   <Center>These are just demo pages. Please alter and remove at your discretion.</Center>
   <Center>The package json of this NextJs template cantains all the required modules and frameworks for development. Before any substitutions or additions please contact project lead.</Center>
   </>
  )
}

export default Home
