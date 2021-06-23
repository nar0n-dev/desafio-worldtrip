import {
  Flex,
  Heading,
  useBreakpointValue
} from '@chakra-ui/react';
import { BannerTemplate } from '../BannerTemplate'

interface BannerPagesProps {
  name: string
  bgImage: string
}

export function BannerPages({ bgImage, name}:BannerPagesProps ) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
      <BannerTemplate
        bgImage={bgImage}
        bgSize="cover"
        height="500px"
      > 
        <Flex w="100%" p="80px" align="flex-end">
          <Heading color={'white'} fontSize="4xl">
            {name}
          </Heading>
        </Flex>
      </BannerTemplate>
  );
}