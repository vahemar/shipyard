import React from 'react';
import {  Flex, Input, Text } from '@chakra-ui/react';
import { ReactComponent as Visma } from '../../assets/svg/visma_logo.svg';
import { ReactComponent as Search } from '../../assets/svg/round-search.svg';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow_down.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
        <Flex gap={'100px'} align={'center'} w={'full'} direction={'row'} p={8} pr={'70px'} pl={'70px'}>
            <Visma onClick={() => navigate('/')}/>
            <Flex direction={'row'} gap={6} align={'center'} >
                <Text>O компании</Text>
                <Text onClick={() => navigate('/content')}>Контент</Text>
                <Text onClick={() => navigate('/calculation')}>Калькулятор</Text>
                <Text>Новости</Text>
                <Text>Новости</Text>
                <Text>Новости</Text>
                <Text>Новости</Text>
            </Flex>
            <Flex align={'center'} direction={'row'} gap={4} justify={'center'}>
                <Search />
                <Input  h={'24px'} borderTop={'none'} borderRight={'none'} borderLeft={'none'} w={'150px'} borderColor={'#D6D6D6'} />
            </Flex>
            <Flex align={'center'} direction={'row'} gap={2}>
                <Text fontWeight={700} fontFamily={'PT Sans'}>RU</Text>
                <ArrowDown />
            </Flex>
        </Flex>
    );
}

export default Header;