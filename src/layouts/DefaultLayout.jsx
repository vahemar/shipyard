import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const DefaultLayout = ({children}) => {
    return (
        <Flex direction={'column'} w={'full'}>
           <Header />
           {children}
           <Footer /> 
        </Flex>
    );
}

export default DefaultLayout;
