import {
  Image,
  Flex,
} from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri'

interface HeaderProps {
  arrowBack?:boolean;
}

export function Header({arrowBack}: HeaderProps) {
  const { back, asPath } = useRouter();
  if (asPath !== '/') {
    arrowBack = true
  }
  return (
      <Flex
        minH={'100px'}
        align={'center'}>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
          {arrowBack && (
            <IconButton
              aria-label="Voltar para página home"
              icon={<RiArrowLeftSLine />}
              variant='ghost'
              spacing='8'
              fontSize={['16', '32']}
              justify='center'
              onClick={back}
              position="absolute"
              left="50px"
              top="33px"
            />
          )}
          <Image src="/images/Logo.svg" alt="Logo WorldTrip"/>

        </Flex>
      </Flex>
  );
}
