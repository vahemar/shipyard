import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { services2 } from '../../../constants/constants';

const Services = () => {
    return (
        <Flex w={'full'}>
            <Flex display={['none', 'none', 'flex', 'flex']} w={'full'} gap={24} p={20} direction={'row'} align={'flex-start'} justify={'space-between'}>
                <Flex maxW={'306px'} w={'full'} direction={'column'} gap={6}>
                    <Text pb={12} fontSize={'40px'} lineHeight={'56px'} fontWeight={700}>Услуги</Text>
                    <Flex direction={'row'} justify={'space-between'} gap={2} align={'center'}>
                        <Text textDecoration={'underline'} color={'#3D348B'} fontFamily={'PT Sans'} fontWeight={400}>Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год</Text>
                        <Button bg={'#5DB7DE'} fontSize={'13px'} h={'34px'} w={'46px'} borderRadius={'10px'} color={'white'} fontWeight={700}>PDF</Button>
                    </Flex>
                    <Flex justify={'space-between'} direction={'row'} gap={2} align={'center'}>
                        <Text textDecoration={'underline'} color={'#3D348B'} fontFamily={'PT Sans'} fontWeight={400}>Условия определения цены договора и тарифы на работы</Text>
                        <Button bg={'#5DB7DE'} fontSize={'13px'} h={'34px'} w={'46px'} borderRadius={'10px'} color={'white'} fontWeight={700}>PDF</Button>
                    </Flex>
                    <Flex justify={'space-between'} direction={'row'} gap={2} align={'center'}>
                        <Text textDecoration={'underline'} color={'#3D348B'} fontFamily={'PT Sans'} fontWeight={400}>Договор перевалки (типовая форма)</Text>
                        <Button bg={'#5DB7DE'} fontSize={'13px'} h={'34px'} w={'46px'} borderRadius={'10px'} color={'white'} fontWeight={700}>PDF</Button>
                    </Flex>
                </Flex>
                <Flex flexWrap={'wrap'} w={'full'} justify={'flex-end'} gap={4} >
                    {
                        services2?.map(({ id, title, description }) => (
                            <Flex direction={'column'} align={'flex-start'} justify={'space-between'} w={'416px'} h={'223px'} bg={'#3D348B'} color={'white'} fontWeight={700} p={4} borderRadius={'20px'} key={id} gap={4}>
                                <Text>{title}</Text>
                                <Text>{description}</Text>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex pr={24} pl={24} pt={12} pb={12} display={['flex', 'flex', 'none', 'none']} w={'full'} direction={'column'} gap={4}>
                <Text pb={6} fontSize={'30px'} lineHeight={'45px'} fontWeight={700}>Услуги</Text>
                <Flex direction={'row'} justify={'space-between'} gap={2} align={'center'}>
                    <Text textDecoration={'underline'} color={'#3D348B'} fontFamily={'PT Sans'} fontWeight={400}>Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год</Text>
                    <Button bg={'#5DB7DE'} fontSize={'13px'} borderRadius={'10px'} color={'white'} fontWeight={700}>PDF</Button>
                </Flex>
                <Flex justify={'space-between'} direction={'row'} gap={2} align={'center'}>
                    <Text textDecoration={'underline'} color={'#3D348B'} fontFamily={'PT Sans'} fontWeight={400}>Условия определения цены договора и тарифы на работы</Text>
                    <Button bg={'#5DB7DE'} fontSize={'13px'} borderRadius={'10px'} color={'white'} fontWeight={700}>PDF</Button>
                </Flex>
                <Flex justify={'space-between'} direction={'row'} gap={2} align={'center'}>
                    <Text textDecoration={'underline'} color={'#3D348B'} fontFamily={'PT Sans'} fontWeight={400}>Договор перевалки (типовая форма)</Text>
                    <Button bg={'#5DB7DE'} fontSize={'13px'} borderRadius={'10px'} color={'white'} fontWeight={700}>PDF</Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Services;
