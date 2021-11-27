import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/button'
import {
  Box,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Divider,
  Link,
} from '@chakra-ui/layout'
import { ReactComponent as Mission } from '../Assets/mision.svg'
import { ReactComponent as Vision } from '../Assets/vision.svg'
import { ReactComponent as Principle } from '../Assets/Principles.svg'
import BeamsityLogo from '../Assets/beamsity logo.png'
import Beamtunes from '../Assets/beamtunes logo.png'
import Retopa from '../Assets/retopa logo.png'
import RetailCode from '../Assets/retailcode logo.png'
import { ReactComponent as ArrowLeft } from '../Assets/arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../Assets/arrowRight.svg'
import { useMediaQuery, Center, Image } from '@chakra-ui/react'
import DashboardLayout from '../Components/DashboardLayout'
import ItemsCarousel from 'react-items-carousel'
import '../Styles/home.scss'
// import { useSelector } from 'react-redux'
// import { useQuery } from 'react-query'
// import { HandleAllRequest } from '../Api/fetchApi'
import { NEWS_API_KEY } from '../config'

const Home = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  // const [isLargerThan1284] = useMediaQuery('(min-width: 1284px)')
  // const [isLessThan1440] = useMediaQuery('(max-width: 1440px)')
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40
  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [articlePerPage] = useState(3)

  // const { userData } = useSelector((state) => state.LoginReducer)
  // const { accessToken, user } = userData

  // const { data } = useQuery('profile', () => {
  //   return HandleAllRequest(`/api/auth/profile`, 'get', accessToken)
  // })

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`
        )
        const articles = await response.json()
        console.log(articles.articles)
        setArticles(articles.articles)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticle()
  }, [])

  const indexOfLastArticle = currentPage * articlePerPage
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  )

  // Logic for displaying page number
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(articles.length / articlePerPage); i++) {
    pageNumbers.push(i)
  }

  // handleClick
  const handleClick = (e) => {
    const selectedPage = e.selected
    setCurrentPage(selectedPage + 1)
  }

  const displayPageNumber = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        <Button>{number}</Button>
      </li>
    )
  })
  return (
    <DashboardLayout>
      <Wrap mb='24px' justify='space-between' align='center'>
        <Text fontSize='18px' fontWeight='bold'>
          Dashboard
          {/* {data.username} */}
        </Text>
      </Wrap>
      <Box bg='#fff' borderRadius='5px 5px 0px 0px' className='container'>
        <Box
          display='flex'
          justifyContent='space-around'
          flexDirection={isLargerThan768 ? 'row' : 'column'}
        >
          <Box
            p={5}
            width='24%'
            background='#FFF'
            border='3px solid rgba(63, 63, 68, 0.005)'
            justifyContent='Center'
            borderRadius='10px'
            boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
          >
            <Center flexDirection='column'>
              <Box width='100%' maxWidth='200px'>
                <Mission />
              </Box>

              <Text fontSize='32px' fontWeight='600px' color='#56A55C'>
                Our Mission
              </Text>
              <Text font='22px' mt='10px'>
                Helping our Clients achieve their revenue through technology
              </Text>
            </Center>
          </Box>

          <Box
            p={5}
            width='24%'
            background='#FFF'
            border='3px solid rgba(63, 63, 68, 0.005)'
            justifyContent='Center'
            borderRadius='10px'
            boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
          >
            <Center flexDirection='column'>
              <Box width='100%' maxWidth='200px'>
                <Vision />
              </Box>

              <Text fontSize='32px' fontWeight='600px' color='#56A55C'>
                Vision
              </Text>
              <Text font='22px' mt='10px'>
                Unleashing the retail advantage for our clients
              </Text>
            </Center>
          </Box>
          <Box
            p={5}
            width='24%'
            background='#FFF'
            border='3px solid rgba(63, 63, 68, 0.005)'
            justify='center'
            borderRadius='10px'
            boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
          >
            <Center flexDirection='column'>
              <Box width='100%' maxWidth='200px'>
                <Principle />
              </Box>
              <Text fontSize='32px' fontWeight='600px' color='#56A55C'>
                Guiding Principles
              </Text>
              <Text font='22px' mt='10px'>
                Experience, Listen, Build Together, Reimagine, Create value and
                a user-centric approach
              </Text>
            </Center>
          </Box>
        </Box>
      </Box>
      <Box
        mt='24px'
        padding='15px 20px'
        // maxWidth={isLessThan1440 ? "750px" : "850px"}
        border='1px solid rgba(63, 63, 68, 0.005)'
        boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
        borderRight='10px'
        background='#FFF'
        // maxWidth='1200px'
      >
        <Box justifyContent='space-between' w='100%'>
          <Wrap spacing='30px' justify='space-between'>
            <Flex
              background='#ff3f3'
              border='2px solid #f4f4f4'
              justify='center'
              borderRadius='5px'
              // maxW='640px'
              w='60%'
              px={8}
              p={4}
              mb={16}
              boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
            >
              <div
                // spacing='90px'
                // align='center'
                // p={4}
                // m={2}
                // justifyContent='space-between'
                style={{
                  width: '90%',
                  padding: '5px 10px',
                }}
                // style={{ padding: `0 ${chevronWidth}px` }}
              >
                <ItemsCarousel
                  requestToChangeActive={setActiveItemIndex}
                  activeItemIndex={activeItemIndex}
                  numberOfCards={2}
                  gutter={40}
                  showSlither={true}
                  firstAndLastGutter={true}
                  activePosition={'center'}
                  leftChevron={<button>{<ArrowLeft />}</button>}
                  rightChevron={<button>{<ArrowRight />}</button>}
                  outsideChevron={true}
                  freeScrolling={true}
                  chevronWidth={chevronWidth}
                >
                  <div className='overlayContainer'>
                    <Image w={60} src={RetailCode} />
                    <div className='overlay'>
                      <div className='text'>
                        <span className='textHeader'>Payment</span>
                        <p className='textPara'>
                          Airtime recharge and payments just got easier With
                          RetailCode, we were able to revolutionize the way
                          airtime is sold and purchased in Nigeria by creating a
                          USSD product that allows consumers to buy
                          electronically from retailers and vice versa. Papers
                          are not a factor thereby helping us achieve a greener
                          society.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='overlayContainer'>
                    <Image w={60} src={BeamsityLogo} />
                    <div className='overlay'>
                      <div className='text'>
                        <span className='textHeader'> Beamsity</span>
                        <p className='textPara'>Some missing text</p>
                      </div>
                    </div>
                  </div>
                  <div className='overlayContainer'>
                    <Image w={60} src={Retopa} />
                    <div className='overlay'>
                      <div className='text'>
                        <span className='textHeader'> Recharge</span>
                        <p className='textPara'>
                          Get your recharge codes straight to your phone Retopa
                          is an incentivized Electronic Voucher and Bills
                          Distribution Technology for both consumers and
                          retailers. Retopa uses a POS terminal to seamlessly
                          provide offline top-up / payment services riding on
                          NFC and QR Codes technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='overlayContainer'>
                    <Image w={60} src={Beamtunes} />
                    <div className='overlay'>
                      <div className='text'>
                        <span className='textHeader'>Offiline Streaming </span>
                        <p className='textPara'>
                          Streaming anywhere and every where to countless musics
                          Beam allows users to connect, share and listen on
                          demand. This is a technologically advanced, innovative
                          and creative platform that consumers access digital
                          information like lectures, news, music all around the
                          world.
                        </p>
                      </div>
                    </div>
                  </div>
                </ItemsCarousel>
                {/* 
                <Center
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Image
                    boxSize='200px'
                    borderRadius='full'
                    src='https://pbs.twimg.com/profile_images/1139455547437178880/03T-9MOi.png'
                    alt='beamsity'
                  />
                  <Text fontSize='24px' mt='2'>
                    Beamsity
                  </Text>
                </Center> */}
                {/* <Center
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Image
                    boxSize='200px'
                    borderRadius='full'
                    src='https://awards.brandingforum.org/wp-content/uploads/2016/05/MTN-Logo-1024x576.jpg'
                    alt='beamsity'
                  />
                  <Text fontSize='24px' mt='2'>
                    RetailCode
                  </Text>
                </Center> */}
              </div>
            </Flex>
            <Wrap
              w='100%'
              direction='column'
              maxW='480px'
              boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
            >
              {currentArticles.map((article, index) => {
                const { title, url, urlToImage, author } = article

                return (
                  <Wrap
                    shouldWrapChildren=''
                    justify='start'
                    padding='5px 8px'
                    boxShadow='0 0 3px rgbx(0, 0, 0, 0.3)'
                  >
                    <WrapItem>
                      <Box maxW='150px' maxHeight='150px'>
                        <Image
                          objectFit='contain'
                          size='sm'
                          alt='new_item'
                          src={urlToImage}
                        />
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      <Box
                        width='300px'
                        display='flex'
                        justifyContent='space-around'
                        flexDirection='column'
                        maxWidth='100%'
                        key={index}
                      >
                        <Link href={url}>
                          <Text fontWeight='bold'>{title}</Text>
                        </Link>
                        <Text>Author {author}</Text>
                      </Box>
                    </WrapItem>

                    <Divider />
                  </Wrap>
                )
              })}

              <Text display='flex' justifyContent='center'>
                {displayPageNumber}
              </Text>
            </Wrap>
          </Wrap>
        </Box>
      </Box>
      <Box
        width='100%'
        // maxW={!isLargerThan768 ? '100%' : isLessThan1440 ? '720px' : '400px'}
        background='#FFFFFF'
        border='1px solid rgba(63, 63, 68, 0.005)'
        boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
        borderRadius='10px'
        padding='10px  20px'
        // mt='25px'
        // mt={isLargerThan768 ? '' : '20px'}
      >
        <Wrap spacing={4} alignItems='center' justify='space-around'>
          <WrapItem>
            <Box>
              <Image
                rounded={'md'}
                objectFit={'cover'}
                src='https://www.opportunitiesforafricans.com/wp-content/uploads/2020/06/world-bank-young-professional-program-2020-1.jpg'
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box maxW='2xl'>
              <Text fontSize='28px'>Fbis Management</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </DashboardLayout>
  )
}

export default Home
