import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import '../Styles/dashboardLayout.scss'
import Logo from '../Assets/logo.jpeg'
import {
  Avatar,
  Wrap,
  Text,
  IconButton,
  Box,
  Menu as Men,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuButton,
  WrapItem,
  Divider,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactComponent as DashIcon } from '../Assets/outline-dashboard-24px.svg'
import { ReactComponent as StaffIcon } from '../Assets/retailers.svg'
import { ReactComponent as ContractIcon } from '../Assets/paymentHistory.svg'
import { ReactComponent as ReplaceIcon } from '../Assets/RequestFund.svg'
import { ReactComponent as BuildIcon } from '../Assets/classes.svg'
import ChangePass from './ChangePassword'
import { useSelector } from 'react-redux'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

function DashboardLayout({ children, title, size }) {
  const [openKeys, setOpenKeys] = React.useState([null])
  const [active, setActive] = React.useState('1')
  // const { isOpen, onOpen, onClose } = useDisclosure
  const {
    isOpen: isOpenPass,
    onOpen: onOpenPass,
    onClose: onClosePass,
  } = useDisclosure()
  const { userData } = useSelector((state) => state.LoginReducer)

  const { data } = userData
  // console.log(user)

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
      localStorage.setItem('OpenKey', keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
      localStorage.setItem('openKeys', [latestOpenKey])
    }
  }

  const selected = localStorage.getItem('key')
  useEffect(() => {
    setActive(selected)
  }, [selected])
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5']

  // useEffect(() => {
  //   setActive(selected)
  //   setOpenKeys([selectedKeys])
  // }, [selected, selectedKeys])

  const { user } = data

  return (
    <div className='userLayout'>
      <Header
        style={{
          position: 'fixed',
          zIndex: '11',
          width: '100%',
          padding: '0px',
        }}
        className='headerBackground'
      >
        <div className='Navbar'>
          <div className='headerDetails'>
            <div className='headerLogo'>
              <Link to='/' className='logo'>
                <img src={Logo} alt='logo' />
              </Link>
            </div>
            <div className='headerRight'>
              <Men>
                <MenuButton
                  aria-label='Option'
                  background='#fff'
                  as={IconButton}
                >
                  <Avatar size='sm' name={`${user.name}`} bg='green.600' />
                </MenuButton>
                <MenuList>
                  <MenuGroup
                    title={
                      <Wrap align='center'>
                        <WrapItem>
                          <Avatar size='sm' bg='green' />
                        </WrapItem>
                        <WrapItem flexDirection='column'>
                          <Text color='#5d6e76' mb='20px' fontSize='18px'>
                            {user.name}
                          </Text>
                          <Text color='#5d6e76' fontSize='14px'>
                            {user.email}
                          </Text>
                        </WrapItem>
                      </Wrap>
                    }
                  >
                    <MenuItem
                      p='16px 20px'
                      boxShadow='0px 1px 3px rgba(0, 0, 0, 0.03), 0px 1px 3px rgba(0, 0, 0, 0.07);'
                      background='#F6F9FB'
                      border='0.5px solid #EAEAEA'
                      color='#606267'
                      fontSize='14px'
                      onClick={onOpenPass}
                    >
                      Change Password
                    </MenuItem>
                    <MenuItem
                      p='16px 20px'
                      boxShadow='0px 1px 3px rgba(0, 0, 0, 0.03), 0px 1px 3px rgba(0, 0, 0, 0.07);'
                      background='#F6F9FB'
                      border='0.5px solid #EAEAEA'
                      color='#606267'
                      fontSize='14px'
                      onClick={() => {
                        localStorage.clear()
                        sessionStorage.clear()
                        window.location.replace('/')
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Men>
            </div>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          style={{
            height: '100vh',
            position: 'fixed',
            left: 0,
            zIndex: 10,
          }}
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
            // setShow(collapsed);
          }}
        >
          <div className='sideGroup'>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Avatar
                w='100px'
                h='100px'
                background='green'
                pb='23px'
                px='16px'
              />
              <Text color='#9EA0A5' fontSize='16px'>
                {' '}
                {user.name}
              </Text>
              <Divider />
            </Box>
            <Menu
              theme='dark'
              onClick={(key) => {
                const keys = key.key
                localStorage.setItem('key', keys)
              }}
              mode='inline'
              selectedKeys={`${active}`}
              defaultSelectedKeys={[1]}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
            >
              <Menu.Item key='1' icon={<DashIcon />}>
                <Link to='/home'>Dashboard</Link>
              </Menu.Item>
              <SubMenu key='sub1' icon={<BuildIcon />} title='Management'>
                <Menu.Item key='2'>
                  <Link to='/companyManagement'>Company Management</Link>
                </Menu.Item>
                <Menu.Item key='3'>
                  <Link to='/adminManagement'>Admin Management</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' icon={<StaffIcon />} title='HR Management'>
                <Menu.Item key='4'>
                  <Link to='/employeeManagement'>Employee Management</Link>
                </Menu.Item>
                <Menu.Item key='5'>
                  <Link to='/contracts'>Contracts</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key='sub4' icon={<ContractIcon />} title='Leave'>
                <Menu.Item key='6'>
                  <Link to='/leave'>Leave Policy</Link>
                </Menu.Item>
                <Menu.Item key='7'>
                  <Link to='/leaveRequest'>Leave Request</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key='sub5' icon={<ReplaceIcon />} title='Forms'>
                <Menu.Item key='8'>
                  <Link to='/forms'>Forms</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <div className='bodyContainer'>
            <Content
              className={
                size === 'lg' ? 'contentContainerTwo' : 'contentContainer'
              }
            >
              <div className='dashboardTitle'>{title}</div>
              <div className='layout-background'>{children}</div>
            </Content>
          </div>
        </Layout>
      </Layout>
      <ChangePass isOpen={isOpenPass} onClose={onClosePass} />
    </div>
  )
}
export default DashboardLayout

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
