import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Text } from '@chakra-ui/layout'
import { Select, Box, Button, InputGroup, Input } from '@chakra-ui/react'
import '../styles/leave.scss'
import { leaveForm } from '../LoginData/leaveData'
import { HandleAllRequest } from '../Api/fetchApi'
import { useMutation } from 'react-query'

function LeaveRequest() {
  const [inputChange, setInput] = React.useState({})

  const handleInputChange = (e) => {
    setInput({
      ...inputChange,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }
  const handleSelect = (event) => {
    setInput({
      ...inputChange,
      accountType: event.currentTarget.value,
    })
  }

  //POST Form data
  const leave = useMutation(
    (data) => HandleAllRequest('/api/leave', 'post', '', data),
    {
      onSuccess: (data, variables, context) => {
        // console.log(data.data);
        // console.log(data, variables, context);
      },
      onError: (error, variables, context) => {
        // An error happened!
        console.log(error, variables, context)
      },
    }
  )

  return (
    <DashboardLayout>
      <div className='LeaveContainer'>
        <div className='group'>
          <Box justifyContent='center' mb={4}>
            <Text fontSize='24px'>Leave Form</Text>
            <Text fontSize='16px'>
              Complete the form below to proceed for your leave
            </Text>
          </Box>
          <div className='inputs'>
            {leaveForm.map((data) => (
              <InputGroup>
                {data.id !== 'leaveType' ? (
                  <Input
                    id={data.id}
                    value={
                      data.id === 'email'
                        ? inputChange.email
                        : data.id === 'department'
                        ? inputChange.department
                        : data.id === 'firstName'
                        ? inputChange.firstName
                        : inputChange.department
                    }
                    placeholder={data.placeholder}
                    onChange={(e) => handleInputChange(e)}
                  />
                ) : (
                  <Select
                    width='100%'
                    maxWidth='499px'
                    height='45px'
                    borderColor='#c4cecf'
                    placeholder={data.placeholder}
                    value={inputChange.leaveType}
                    onChange={(e) => handleSelect(e)}
                  >
                    <option>Family Leave</option>
                    <option>Sick Leave</option>
                    <option>Family Leave</option>
                  </Select>
                )}
              </InputGroup>
            ))}
            <Button
              margin='0 auto'
              width='50%'
              height='38px'
              variant='solid'
              color='#fff'
              colorScheme='green'
              onclick={() => {
                leave.mutate(inputChange)
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
export default LeaveRequest
