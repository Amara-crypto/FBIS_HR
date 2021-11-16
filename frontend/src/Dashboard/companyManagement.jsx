import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import { Box, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import '../Styles/companyProfile.scss'
import employees from '../employeeData.js'
export default function companyManagement() {
  return (
    <DashboardLayout>
      <div className='companyContainer'>
        <Wrap className='profileWrapper' spacing='60px' sm={12} md={4} lg={3}>
          {employees.map((employee) => (
            <WrapItem display='flex' justifyContent='space between'>
              <Box justifyContent='center' maxW='240px'>
                <Image
                  boxSize='240px'
                  objectFit='contain'
                  alt='profile image'
                  src={employee.image}
                />
                <Text mt={0} fontSize='26px' color='green'>
                  {employee.name}
                </Text>
                <Box
                  as='button'
                  height='24px'
                  _hover={{ bg: '#dddfe2' }}
                  border='1px solid'
                  borderColor='#ccd0d5'
                  borderRadius='2px'
                  color='teal'
                  variant='solid'
                  fontSize='16px'
                  fontWeight='semibold'
                >
                  View Staff Profile
                </Box>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </div>
    </DashboardLayout>
  )
}
