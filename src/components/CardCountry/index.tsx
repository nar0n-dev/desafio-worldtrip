import {
    Container,
    Flex,
    SimpleGrid,
    Heading,
} from '@chakra-ui/react';
import { CardCountry } from './CardCountry';

interface CountriesProps {
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface CardsCountryProps {
  countries: CountriesProps[];
}

export const CardsCountry = ({ countries }: CardsCountryProps) => {
  

  return (
    <>
      <Flex>
        <Container maxW="container.xl" my={20}> 
          <Heading marginY="20px">Cidades +100</Heading>
          <SimpleGrid columns={[2, 4]} spacing={10}>
              {countries.map(country => {
                return (
                  <CardCountry 
                    thumb={country.image} 
                    image={country.flag} 
                    capital={country.name} 
                    country={country.country}
                  />
                )
              })}
          </SimpleGrid>
        </Container>
      </Flex>
      
      <Flex w="90px" h="2px" bg="gray.600" mx="auto"/>
    </>
  );
};