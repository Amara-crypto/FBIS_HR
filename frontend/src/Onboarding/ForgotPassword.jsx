import React from 'react'
import { Input, InputGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HandleAllRequest } from '../Api/fetchApi'
import '../Styles/Onboarding.scss'
import { useMutation } from 'react-query'
import { useToast } from '@chakra-ui/react'
import { passwordResetSuccess, passwordResetError } from '../reducer/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useEffect } from 'react'

function ForgotPassword() {
  const [inputChange, setInput] = React.useState('')

  let history = useHistory()
  const toast = useToast()
  const dispatch = useDispatch()

  const { isReset } = useSelector((state) => state.ResetPasswordReducer)

  const handleInputChange = (e) => {
    // setInput(e.target.value)
    setInput({
      ...inputChange,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const resetMutation = useMutation(
    (data) =>
      HandleAllRequest('/api/v1/users/forgotPassword', 'post', '', data),
    {
      onSuccess: (data) => {
        let s = data.success
        let m = data.message
        let d = data
        if (s) {
          dispatch(passwordResetSuccess(d))
          toast({
            position: 'top-right',
            title: 'Success.',
            description: 'm',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        } else {
          dispatch(passwordResetError())
          toast({
            position: 'top-right',
            title: 'Error. message',
            description: m,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      },
      onError: (error) => {
        dispatch(passwordResetError())
        toast({
          position: 'top-left',
          title: 'Error. message',
          description: `${error}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      },
    }
  )

  useEffect(() => {
    if (isReset === true) {
      history.replace('/resetPassword')
    }
  }, [history, isReset])

  return (
    <div className='onBoardingContainer'>
      <div className='onBoardingGroup'>
        <div className='get-you-started'>Forgot Password </div>
        <div className='p'>
          Please provide your email below to reset your Password.
        </div>
        <div className='inputs'>
          {Reset.map((data, index) => (
            <InputGroup key={index} className='email'>
              <Input
                type={data.id}
                placeholder={data.placeholder}
                onChange={(e) => handleInputChange(e)}
                value={inputChange.email}
                id={data.id}
              />
            </InputGroup>
          ))}

          <Button
            width='100%'
            height='38px'
            variant='solid'
            color='#fff'
            colorScheme='01AEEF'
            backgroundColor='#0d853f'
            borderRadius='4px'
            _focus={{
              borderWidth: '1px',
              outline: 'none',
              boxShadow: 'none',
            }}
            onClick={() => {
              resetMutation.mutate(inputChange)
            }}

            // isLoading={resetMutation.isLoading}
          >
            Continue
          </Button>
          <div className='bottomItem'>
            Already a member?
            <Link style={{ zIndex: 1111111 }} id='signUp-login' to='/'>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Reset = [
  {
    title: 'Current Email',
    placeholder: 'Enter Email',
    tag: 'name',
    id: 'email',
    type: 'email',
  },
]

export default ForgotPassword
