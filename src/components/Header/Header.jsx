import React from 'react';
import { Flex, Input, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ReactComponent as Visma } from '../../assets/svg/visma_logo.svg';
import { ReactComponent as Search } from '../../assets/svg/round-search.svg';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow_down.svg';
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
        <Flex w={'full'}>
            <Flex gap={12} display={['none', 'none', 'flex', 'flex']} align={'center'} w={'full'} direction={'row'} p={20} pt={6} pb={6} justify={'space-between'}>
                <Visma onClick={() => navigate('/')} />
                <Flex flexWrap={'wrap'} direction={'row'} gap={6} align={'center'} >
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
                    <Input h={'24px'} borderTop={'none'} borderRight={'none'} borderLeft={'none'} w={'150px'} borderColor={'#D6D6D6'} />
                </Flex>
                <Flex align={'center'} direction={'row'} gap={2}>
                    <Text fontWeight={700} fontFamily={'PT Sans'}>RU</Text>
                    <ArrowDown />
                </Flex>
            </Flex>
            <Flex display={['flex', 'flex', 'none', 'none']} gap={4} justify={'space-between'} align={'center'} w={'full'} direction={'row'} p={4}>
                <Visma onClick={() => navigate('/')} />
                <Flex gap={6}>
                    <Flex align={'center'} direction={'row'} gap={2}>
                        <Text fontWeight={700} fontFamily={'PT Sans'}>RU</Text>
                        <ArrowDown />
                    </Flex>
                    <Menu>
                        <MenuButton><MenuIcon /></MenuButton>
                        <MenuList gap={4} >
                            <MenuItem onClick={() => navigate('/content')}> Калькулятор </MenuItem>
                            <MenuItem onClick={() => navigate('/calculation')}> Контент </MenuItem>
                            <MenuItem onClick={() => navigate('/')}>Домашняя страница</MenuItem>
                            <MenuItem>Новости</MenuItem>
                            <MenuItem>O компании</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Header;