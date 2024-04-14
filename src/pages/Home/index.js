import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Services from './Services';
import Company from './Company';
import News from './News';

const Home = () => {
    return (
        <Flex w={'full'} direction={'column'}>
            <Navbar />
            <Services />
            <Company />
            <News />
        </Flex>
    );
}

export default Home;
