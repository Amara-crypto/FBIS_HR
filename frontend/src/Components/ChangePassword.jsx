import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  Stack,
  Input,
  Wrap,
  useToast,
  InputRightElement,
  Icon,
  InputGroup,
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { PASS } from './Input'
import { changePasswordSuccess } from '../reducer/Action'
import { useSelector, useDispatch } from 'react-redux'
import PhoneInput from 'react-phone-number-input'
import { useMutation } from 'react-query'
import { HandleAllRequest } from '../Api/fetchApi'

function ChangePassword({ isOpen, onClose }) {
  const [inputchange, setInput] = React.useState({})
  const [show, setShow] = React.useState(false)
  const { userData } = useSelector((state) => state.LoginReducer)
  const { access_token } = userData

  const handleClick = () => setShow(!show)
  const toast = useToast()
  const dispatch = useDispatch()

  const postData = {
    passwordCurrent: inputchange.passwordCurrent,
    password: inputchange.password,
    passwordConfirm: inputchange.passwordConfirm,
  }

  const changePass = useMutation(
    (data) =>
      HandleAllRequest(
        '/api/v1/users/updateMyPassword',
        'patch',
        access_token,
        data
      ),
    {
      onSuccess: (data) => {
        console.log(data)
        let s = data.success
        let m = data.message
        let d = data
        if (s) {
          dispatch(changePasswordSuccess(d))
          toast({
            position: 'top-right',
            title: 'Success',
            description: m,
            status: 'success',
            isClosable: true,
          })
          onClose()
        } else {
          toast({
            position: 'top-right',
            title: 'Error ',
            description: m,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      },
      onError: (error) => {
        toast({
          position: 'top-right',
          title: 'Error',
          description: `${error}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      },
    }
  )

  // get inputs from user
  const handleInputChange = (e) => {
    setInput({
      ...inputchange,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent width='90%' maxWidth={485}>
        <ModalHeader display='flex' flexDirection='column' alignItems='center'>
          <Text fontSize='24px' color='#56A55c' mt='20px'>
            Change Password
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            {PASS.map((data) =>
              data.type === 'input' ? (
                <Box>
                  <Text
                    color='rgba(0,0,0,0.6)'
                    fontSize='16px'
                    letterSpacing='0.15'
                    mb='10px'
                  >
                    {data.title}
                  </Text>
                  <form autoComplete='off' style={{ width: '100%' }}>
                    <InputGroup>
                      <Input
                        type={
                          data.id === 'passwordCurrent'
                            ? 'text'
                            : show
                            ? 'text'
                            : 'password'
                        }
                        placeholder={data.placeholder}
                        onChange={(e) => handleInputChange(e)}
                        id={data.id}
                      />
                      {data.id !== 'passwordCurrent' && (
                        <InputRightElement width='4.5rem'>
                          <Icon
                            as={show ? FiEyeOff : FiEye}
                            onClick={handleClick}
                          />
                        </InputRightElement>
                      )}
                    </InputGroup>
                  </form>
                </Box>
              ) : data.id === 'phoneNumber' ? (
                <Box>
                  <Text
                    color='rgba(0, 0, 0, 0.6)'
                    fontSize='16px'
                    letterSpacing='0.15px'
                    mb='10px'
                  >
                    {data.title}
                  </Text>
                  <Wrap>
                    <form autoComplete='off'>
                      <PhoneInput
                        style={{
                          width: '100%',
                          height: '40px',
                          border: '1px solid #E3E8EF',
                          borderRadius: '5px',
                        }}
                        defaultCountry='NG'
                      />
                    </form>
                  </Wrap>
                </Box>
              ) : (
                <Box>
                  <Text
                    color='rgba(0, 0, 0, 0.6)'
                    fontSize='16px'
                    letterSpacing='0.15px'
                    mb='10px'
                  >
                    {data.title}
                  </Text>
                </Box>
              )
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            height={47}
            fontSize={16}
            colorScheme='red'
            backgroundColor='#C6CBCF'
            color='#fff'
            width='40%'
            mr={3}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            isLoading={changePass.isLoading}
            height={47}
            fontSize={16}
            colorScheme='green'
            backgroundColor='#56A55C'
            color='#fff'
            width='40%'
            onClick={() => {
              console.log(postData)
              changePass.mutate(postData)
            }}
          >
            Proceed
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default ChangePassword
