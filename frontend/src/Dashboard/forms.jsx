import React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  Text,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  Stack,
  FormControl,
  useMediaQuery,
} from '@chakra-ui/react'
import DashboardLayout from '../Components/DashboardLayout'
import '../Styles/form.scss'

function Forms() {
  const [isLargerThan1032] = useMediaQuery('(min-width: 1032px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenExitModal,
    onOpen: onOpenExitModal,
    onClose: onCloseExitModal,
  } = useDisclosure()
  //   const {
  //     isOpen: isOpenDeliveryModal,
  //     onOpen: onOpenDeliveryModal,
  //     onClose: onCloseDeliveryModal,
  //   } = useDisclosure()
  const {
    isOpen: isOpenManPowerModal,
    onOpen: onOpenManPowerModal,
    onClose: onCloseManPowerModal,
  } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const btnRef = React.useRef()

  return (
    <DashboardLayout>
      <div className='formContainer'>
        <div
          className='container'
          style={
            isLargerThan1032
              ? { flexDirection: 'row' }
              : { flexDirection: 'column' }
          }
        >
          <div className='box'>
            <div className='image'>
              <img
                src='https://wcs.smartdraw.com/working-smarter/img/selecting-the-right-software-development-tools.png?bn=15100111790'
                alt='tools images'
              />
            </div>
            <div className='name'>ManPower Form</div>
            <p>Manpower form requesting for more staff</p>
            <div className='button'>
              <Button
                colorScheme='whatsapp'
                size='md'
                ref={finalRef}
                onClick={onOpen}
              >
                Manpower request Form
              </Button>
            </div>
          </div>
          <div className='box'>
            <div className='image'>
              <img
                src='https://ak.picdn.net/shutterstock/videos/24048919/thumb/10.jpg'
                alt='tools images'
              />
            </div>
            <div className='name'>Exit Survey Form</div>
            <p>Exit Survey Forms for departing employee</p>
            <div className='button'>
              <Button
                colorScheme='whatsapp'
                size='md'
                ref={finalRef}
                onClick={onOpenExitModal}
              >
                Exit Survey Form
              </Button>
            </div>
          </div>
          <div className='box'>
            <div className='image'>
              <img
                src='https://us.123rf.com/450wm/milkos/milkos2012/milkos201202178/160936083-smiling-bearded-african-american-delivery-man-showing-smartphone-with-empty-black-screen-holding-car.jpg?ver=6'
                alt='tools images'
              />
            </div>
            <div className='name'>Delivery Order Form</div>
            <p>Delivery Order form requesting tools for employees</p>
            <div className='button'>
              <Button
                colorScheme='whatsapp'
                size='md'
                ref={finalRef}
                onClick={onOpenManPowerModal}
              >
                Delivery Order Form
              </Button>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          initialFocusRef={finalRef}
          finalFocusRef={btnRef}
          isCentered
        >
          <ModalOverlay />
          <ModalContent width='90%' maxWidth={480}>
            <ModalHeader
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Text fontSize='24px' mt='20px'>
                WorkForce Request
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack mt='34px' mb='44px' spacing='20px'>
                <Text>Employee Request</Text>

                <FormControl>
                  <FormLabel>Position</FormLabel>
                  <Input inputRef={initialRef} placeholder='Name Of Position' />
                </FormControl>
                <FormControl>
                  <FormLabel>Department</FormLabel>
                  <Input placeholder='Name Of Department' />
                </FormControl>
              </Stack>
              <Button
                height={45}
                colorScheme='#C6CBCF'
                mr={3}
                onClick={onClose}
              >
                Request
              </Button>
            </ModalBody>

            <ModalFooter>
              <Button
                height={45}
                colorScheme='#C6CBCF'
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          isOpen={isOpenExitModal}
          onClose={onCloseExitModal}
          initialFocusRef={finalRef}
          finalFocusRef={btnRef}
          isCentered
        >
          <ModalOverlay />
          <ModalContent width='90%' maxWidth={480}>
            <ModalHeader
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Text fontSize='24px' mt='20px'>
                Exit Survey
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack mt='34px' mb='44px' spacing='20px'>
                <Text>Exit Survey Form</Text>

                <FormControl>
                  <FormLabel>Exit Role</FormLabel>
                  <Input inputRef={initialRef} placeholder='Exit Position' />
                </FormControl>
                <FormControl>
                  <FormLabel>Reasons</FormLabel>
                  <Input placeholder='Reasons for Departure' />
                </FormControl>
              </Stack>
              <Button
                height={45}
                colorScheme='#C6CBCF'
                mr={3}
                onClick={onCloseExitModal}
              >
                Request
              </Button>
            </ModalBody>

            <ModalFooter>
              <Button
                height={45}
                colorScheme='#C6CBCF'
                mr={3}
                onClick={onCloseExitModal}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          isOpen={isOpenManPowerModal}
          onClose={onCloseManPowerModal}
          initialFocusRef={finalRef}
          finalFocusRef={btnRef}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Text fontSize='24px' mt='20px'>
                Delivery Form
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack mt='34px' mb='44px' spacing='20px'>
                <Text>Employee Request</Text>

                <FormControl>
                  <FormLabel>Tools</FormLabel>
                  <Input inputRef={initialRef} placeholder='Name Of Position' />
                </FormControl>
                <FormControl>
                  <FormLabel>Department</FormLabel>
                  <Input placeholder='Name Of Department' />
                </FormControl>
              </Stack>
              <Button
                height={45}
                colorScheme='#C6CBCF'
                mr={3}
                onClick={onClose}
              >
                Request
              </Button>
            </ModalBody>

            <ModalFooter>
              <Button
                height={45}
                colorScheme='#C6CBCF'
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </DashboardLayout>
  )
}
export default Forms
