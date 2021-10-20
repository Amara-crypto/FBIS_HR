import React from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Icon,
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Login } from '../Data/LoginData'
import { Link } from 'react-router-dom'
import '../Styles/Login.scss'
// import { useMutation } from 'react-query'
// import { useToast } from '@chakra-ui/react'

function LoginScreen() {
  const [show, setShow] = React.useState(false)
  const [inputChange, setInput] = React.useState({})

  const handleClick = () => setShow(!show)

  const handleInputChange = (e) => {
    setInput({
      ...inputChange,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <div className='container'>
      <div className='onBoardingGroup'>
        <div className='sign-in'>Sign in</div>
        <div className='p'>Sign in into your account</div>
        <div className='inputs'>
          {Login.map((data, index) => (
            <InputGroup key={index} className={data.id}>
              <Input
                type={
                  data.id !== 'password' ? 'text' : show ? 'text' : 'password'
                }
                placeholder={data.placeholder}
                onChange={(e) => handleInputChange(e)}
                value={
                  data.id === 'password'
                    ? inputChange.password
                    : inputChange.email
                }
                id={data.id}
              />
              {data.id === 'password' && (
                <InputRightElement width='4.5rem'>
                  <Icon as={show ? FiEyeOff : FiEye} onClick={handleClick} />
                </InputRightElement>
              )}
            </InputGroup>
          ))}
          <Button
            width='100%'
            height='36px'
            variant='solid'
            color='#FFF'
            background='#0d853f'
            colorScheme='046609'
            borderRadius='4px'
            _focus={{
              borderWidth: '1px',
              outline: 'none',
              boxShadow: 'none',
            }}
            // onClick={() => {
            //   mutation.mutate(inputChange)
            // }}
            // isLoading={mutation.isLoading}
          >
            Login
          </Button>
          <div className='lowerGroup'>
            Don't have an Account ?<Link to='/signUp'>Sign Up</Link>
          </div>
          <div className='passwordForgot'>
            <Link to='forgotPassword'>Forgot Password</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
