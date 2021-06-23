import {
    Image,
    Text,
    Stack,
    Flex,
} from '@chakra-ui/react';
import React from 'react';
  
interface ItensFeaturesProps {
    thumb: string;
    image: string;
    capital: string;
    country: string;
}

export function CardCountry({ thumb = 'https://via.placeholder.com/256x173', image, capital, country }: ItensFeaturesProps) {
    const countryUrl = (image ?? country).replace(/[[:blank:]]/g, '-').toLocaleLowerCase();
    console.log(countryUrl)
    const avatarUrl =
        `https://n.i.uol.com.br/licaodecasa/ensfundamental/geografia/bandeiras/${countryUrl}.gif`;
    return (
        <Flex direction="column">
            <Image src={thumb} alt={country} w="100%" h="173px"/>
            <Stack direction="row" justify="space-between" padding="25px" bg={"gray.100"}>
                <Flex direction="column">
                    <Text color={'gray.700'} fontSize="xl" fontWeight="600">
                        {capital}
                    </Text>

                    <Text color={'gray.400'} fontSize="md" fontWeight="600">
                        {country}
                    </Text>
                </Flex>
                <Flex align="center" justify="center">
                    <Image src={avatarUrl} alt={capital} w="30px" h="30px" borderRadius="100%" margin="0px"/>
                </Flex>
            </Stack>
        </Flex>
    );
}