import {
    Container,
    Flex,
    Text,
  } from '@chakra-ui/react';
import { ContinentInfo } from '../ContinentInfo';

interface FeaturePagesProps {
  description: string;
  countries: number;
  languages: number;
  cities: number;
}
  
export const FeaturePages = ({ description, countries, languages, cities }: FeaturePagesProps) => {
  return (
    <Container maxW="container.xl" my={20}> 
      <Flex align="center" justifyItems="space-between" >
          <Flex flex="1" align="center" justifyContent="space-between">
            <Text fontSize="1.2rem">
              {description}
            </Text>
          </Flex>
          <ContinentInfo countries={countries} languages={languages} cities={cities}/>
      </Flex>
    </Container>
  );
};