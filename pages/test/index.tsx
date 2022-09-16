import type { NextPage } from 'next'
import { Center, Heading, Button, Box, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { testState } from '../../stores/atoms/testState'


const Index = () => {
 const [test, setTest] = useRecoilState(testState)

  const addNum = () => {
    setTest(test+1);
  }
  return (
    <>
   <Center><Heading>Test Recoil</Heading></Center>
   <VStack><Button onClick={()=> addNum()}>Increase</Button><Box>{test}</Box><Link href={"/"}>back</Link></VStack>
   
   </>
  )
}

export default Index
