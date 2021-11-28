import React from 'react'
import '../Styles/Onboarding.scss'
import { signUp } from '../Data/signUpData'
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Icon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HandleAllRequest } from '../Api/fetchApi'
import { useMutation } from 'react-query'
import { useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { registerError, registerSuccess } from '../reducer/Action'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { FiEye, FiEyeOff } from 'react-icons/fi'

function UserSignUp() {
  const [show, setShow] = React.useState(false)
  const [inputChange, setInput] = React.useState({})

  const handleClick = () => setShow(!show)

  //   let history = useHistory()
  //**gets sign in  data from user */
  const handleInputChange = (e) => {
    setInput({
      ...inputChange,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  //**end */
  let history = useHistory()
  const toast = useToast()
  const dispatch = useDispatch()
  const { isRegister } = useSelector((state) => state.RegisterReducer)

  //** makes sign in request */
  const sign_Up = useMutation(
    (data) => HandleAllRequest('/api/v1/users/signup', 'post', '', data),
    {
      onSuccess: (data, variables, context) => {
        let s = data.success
        let m = data.message
        let d = data
        if (s) {
          dispatch(registerSuccess(d))
          toast({
            position: 'top-right',
            title: 'Success.',
            description: 'm',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        } else {
          dispatch(registerError())
          toast({
            position: 'top-right',
            title: 'Error. message',
            description: m,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }

        console.log(data.data)
        console.log(data, variables, context)
      },
      onError: (error) => {
        dispatch(registerError())
        toast({
          position: 'top-right',
          title: 'Error.',
          description: `${error}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      },
    }
  )
  //**end */

  useEffect(() => {
    if (isRegister === true) {
      history.push('/')
    } else {
      history.replace('/signUp')
    }
  }, [history, isRegister])

  return (
    <div className='onBoardingContainer'>
      {/* <Cancel className='cancel' onClick={() => history.goBack()} /> */}
      <div className='onBoardingGroup'>
        <div className='get-you-started'>
          Please Enter your Details to register
        </div>
        <div className='p'> </div>
        <div className='inputs'>
          {signUp.map((data) => (
            <InputGroup className={data.id}>
              <Input
                id={data.id}
                value={
                  data.id === 'email'
                    ? inputChange.email
                    : data.id === 'name'
                    ? inputChange.lastName
                    : data.id === 'password'
                    ? inputChange.password
                    : inputChange.passwordConfirm
                }
                placeholder={data.placeholder}
                onChange={(e) => handleInputChange(e)}
              />
              {data.id === ('password' || 'passwordConfirm') && (
                <InputRightElement width='4.5rem'>
                  <Icon as={show ? FiEyeOff : FiEye} onClick={handleClick} />
                </InputRightElement>
              )}
            </InputGroup>
          ))}
          <div className='terms'>
            By signin in you’ve agreed to FBIS <span>Terms and Conditions</span>
          </div>
          <Button
            width='100%'
            height='38px'
            variant='solid'
            color='#fff'
            colorScheme='046609'
            backgroundColor='#0d853f'
            borderRadius='4px'
            _focus={{
              borderWidth: '1px',
              outline: 'none',
              boxShadow: 'none',
            }}
            onClick={() => {
              sign_Up.mutate(inputChange)
            }}
          >
            Sign Up
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

export default UserSignUp
