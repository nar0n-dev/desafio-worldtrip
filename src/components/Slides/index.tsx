import {
  Box,
  Heading,
  VStack,
  Image,
  Container,
  Flex,
  textDecoration,
} from '@chakra-ui/react';
import Link  from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

interface HomeProps {
  continents: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[]
}

export function Slides({continents}: HomeProps) {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" lineHeight="4rem">
          Vamos nessa?<br />Então escolha seu continente
        </Heading>
      </VStack>
      <Container maxW="container.xl" paddingY="20px">
        <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
          {continents.map(continent => {
            return (
              <SwiperSlide key={continent.id} >
                <Flex alignItems="center" justifyContent="center" w="100%">
                  <Image src={`${continent.image}`} alt="europa" position="relative"/>
                  <Link href={`/continents/${continent.id}`}>
                    <Box position="absolute" top="180px">
                      <Heading as="h1" size="2xl" color="white" cursor="pointer" _hover={{color: "yellow.500"}}>
                        {continent.title}
                      </Heading>
                      <Heading as="h2" size="md" color="white" marginTop="2rem">
                        {continent.description}
                      </Heading>
                    </Box>
                  </Link>
                </Flex>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
    </Box>
  );
}
