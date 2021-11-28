import React from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Icon,
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import '../Styles/Login.scss'

function ResetPassword() {
  const [show, setShow] = React.useState(false)
  const [inputChange, setInput] = React.useState({})

  const handleClick = () => setShow(!show)

  return (
    <div className='container'>
      <div className='onBoardingGroup'>
        <div className='sign-in'>Reset Password</div>
        <div className='inputs'>
          {Reset.map((data, index) => (
            <InputGroup key={index} className={data.id}>
              <Input
                type={
                  data.type !== 'password' ? 'text' : show ? 'text' : 'password'
                }
                placeholder={data.placeholder}
                id={data.id}
              />
              {/* {data.type === 'password' && (
                <InputRightElement width='4.5rem'>
                  <Icon as={show ? FiEyeOff : FiEye} onClick={handleClick} />
                </InputRightElement>
              )} */}
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
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

const Reset = [
  {
    title: 'Current Email',
    placeholder: 'Enter Password',
    tag: 'name',
    id: 'password',
    type: 'password',
  },
  {
    title: 'Current Email',
    placeholder: 'Confirm Password',
    tag: 'name',
    id: 'passwordConfirm',
    type: 'password',
  },
]

export default ResetPassword
