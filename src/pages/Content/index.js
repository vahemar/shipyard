import { Flex } from '@chakra-ui/react';
import React from 'react';
import Documents from './Documents';

const Content = () => {
    return (
        <Flex w={'full'} direction={'column'}>
            <Documents />
        </Flex>
    );
}

export default Content;
