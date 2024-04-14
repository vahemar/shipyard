import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import shipyard from '../../../assets/png/shipyard.png'
import { ReactComponent as ArrowRight } from '../../../assets/svg/arrow_right.svg';
import { services } from '../../../constants/constants';

const Navbar = () => {
    return (
        <Flex w={'full'} align={'center'}>
            <Image w={'full'} src={shipyard} alt='shipyard' pos={'relative'} />
            <Flex w={'full'} pos={'absolute'} gap={24} justify={'space-between'} p={20} align={'center'} >
                <Flex direction={'column'} align={'flex-start'} gap={8}>
                    <Text fontSize={'50px'} lineHeight={'70px'} fontWeight={700} color={'white'} textAlign={'flex-start'}>Тавимский морской порт VISMA</Text>
                    <Text color={'white'} fontSize={'16px'} fontWeight={400}>Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</Text>
                    <Flex align={'center'} direction={'row'} gap={4}>
                        <Text textTransform={'uppercase'} fontWeight={700} fontSize={'16px'} lineHeight={'24px'} color={'white'}>о компании</Text>
                        <ArrowRight />
                    </Flex>
                </Flex>
                <Flex gap={4} w={'full'} justify={'center'} align={'center'} flexWrap={'wrap'} >
                    {
                        services.map(({ id, title, description }) => (
                            <Flex p={4} key={id} borderRadius={'20px'} bg={'#5DB7DE'} w={'250px'} h={'220px'} direction={'column'} align={'flex-start'} justify={'space-between'}>
                                <Text color={'white'} fontWeight={700} fontFamily={'PT Sans'}>{title}</Text>
                                <Text color={'white'} fontWeight={700} fontFamily={'Pt Sans'}>{description}</Text>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Navbar;
