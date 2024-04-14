import { Flex } from '@chakra-ui/react';
import React from 'react';
import ItemDescription from './ItemDescription';

const Calculation = () => {
    return (
        <Flex w={'full'} direction={'column'}>
            <ItemDescription />
        </Flex>
    );
}

export default Calculation;
