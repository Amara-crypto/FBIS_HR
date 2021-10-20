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
import { ReactComponent as Diamond } from '../Assets/cut-diamond.svg'
import { ReactComponent as Rocket } from '../Assets/space-shuttle.svg'
import { ReactComponent as Bulb } from '../Assets/light-bulb.svg'
import { useMediaQuery, Center, Image } from '@chakra-ui/react'
import DashboardLayout from '../Components/DashboardLayout'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { HandleAllRequest } from '../Api/fetchApi'
import { NEWS_API_KEY } from '../config'

const Home = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  // const [isLargerThan1284] = useMediaQuery('(min-width: 1284px)')
  // const [isLessThan1440] = useMediaQuery('(max-width: 1440px)')
  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [articlePerPage] = useState(3)

  const { userData } = useSelector((state) => state.LoginReducer)
  const { accessToken } = userData

  const { data } = useQuery('profile', () => {
    return HandleAllRequest(`/api/auth/profile`, 'get', accessToken)
  })

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
            width='25%'
            background='#FFF'
            border='3px solid rgba(63, 63, 68, 0.005)'
            justifyContent='Center'
            borderRadius='10px'
            boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
          >
            <Center flexDirection='column'>
              <Box>
                <Rocket />
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
            width='25%'
            background='#FFF'
            border='3px solid rgba(63, 63, 68, 0.005)'
            justifyContent='Center'
            borderRadius='10px'
            boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
          >
            <Center flexDirection='column'>
              <Box>
                <Bulb />
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
            width='25%'
            background='#FFF'
            border='3px solid rgba(63, 63, 68, 0.005)'
            justify='center'
            borderRadius='10px'
            boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
          >
            <Center flexDirection='column'>
              <Box>
                <Diamond />
              </Box>
              <Text fontSize='32px' fontWeight='600px' color='#56A55C'>
                Goal
              </Text>
              <Text font='22px' mt='10px'>
                Unleashing the retail advantage for our clients
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
      >
        <Box justifyContent='space-between' w='100%'>
          <Wrap spacing='30px' justify='space-between'>
            <Flex
              background='#ff3f3'
              border='2px solid #f4f4f4'
              justify='center'
              borderRadius='5px'
              maxW='710px'
              w='100%'
              px={8}
              p={4}
              mb={16}
              boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
            >
              <Wrap
                spacing='90px'
                align='center'
                justifyContent='space-between'
              >
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
                </Center>
                <Center
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
                </Center>
              </Wrap>
            </Flex>
            <Wrap
              w='100%'
              direction='column'
              maxW='520px'
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
