import React from 'react'
import '../Styles/Onboarding.scss'
import { signUp } from '../Data/signUpData'
import { Input, InputGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HandleAllRequest } from '../Api/fetchApi'
import { useMutation } from 'react-query'

function UserSignUp() {
  const [inputChange, setInput] = React.useState({})
  //   let history = useHistory()
  //**gets sign in  data from user */
  const handleInputChange = (e) => {
    setInput({
      ...inputChange,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  //**end */

  //** makes sign in request */
  const sign_Up = useMutation(
    (data) => HandleAllRequest('auth/register', 'post', '', data),
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
  //**end */

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
                    : data.id === 'phone'
                    ? inputChange.phone
                    : data.id === 'firstName'
                    ? inputChange.firstName
                    : data.id === 'lastName'
                    ? inputChange.lastName
                    : data.id === 'password'
                    ? inputChange.password
                    : inputChange.confirmPassword
                }
                placeholder={data.placeholder}
                onChange={(e) => handleInputChange(e)}
              />
              {/* {data.id === "password" && (
                <InputRightElement width="4.5rem">
                  <Icon as={show ? FiEyeOff : FiEye} onClick={handleClick} />
                </InputRightElement>
              )} */}
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
            Next
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
