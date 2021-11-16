import React from 'react'
import { Input, InputGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../Styles/Onboarding.scss'

function ForgotPassword() {
  return (
    <div className='onBoardingContainer'>
      <div className='onBoardingGroup'>
        <div className='get-you-started'>Forgot Password </div>
        <div className='p'>
          Please provide your email below to reset your Password.
        </div>
        <div className='inputs'>
          <InputGroup className='email'>
            <Input placeholder='Enter email' />
          </InputGroup>

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

export default ForgotPassword
