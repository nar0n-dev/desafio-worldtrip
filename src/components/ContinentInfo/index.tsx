
import {
  Flex,
} from '@chakra-ui/react';
import { ItensFeaturesPages } from './ItensFeaturesPages';

interface ContinentInfoProps {
  countries: number;
  languages: number;
  cities: number;
}

export const ContinentInfo = ({ countries, languages, cities }: ContinentInfoProps) => {
  return (
      <Flex flex="1" align="center" justifyContent="space-around">
          <ItensFeaturesPages number={countries} text="países"/>
          <ItensFeaturesPages number={languages} text="língua"/>
          <ItensFeaturesPages number={cities} text="cidades +100"/>
      </Flex>
  );
};
