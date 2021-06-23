import {
    Text,
    Stack,
} from '@chakra-ui/react';
  
interface ItensFeaturesProps {
    number: number;
    text: string;
}

export function ItensFeaturesPages({ number, text }: ItensFeaturesProps) {
    return (
        <Stack direction="column" justifyContent="center" alignItems="center">
            <Text color={'yellow.400'} fontSize="xl" textAlign="center" fontWeight="600">
                {number}
            </Text>
            <Text color={'gray.700'} fontSize="xl" textAlign="center" fontWeight="600">
                {text}
            </Text>
        </Stack>
    );
}