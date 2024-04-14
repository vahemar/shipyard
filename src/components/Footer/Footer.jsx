import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ReactComponent as Visma } from '../../assets/svg/visma_logo_white.svg';
import { ReactComponent as Location } from '../../assets/svg/location_icon.svg';
import { ReactComponent as Mail } from '../../assets/svg/mail_icon.svg';
import { ReactComponent as Telephone } from '../../assets/svg/telephone_icon.svg';
import { footer } from '../../constants/constants';

const Footer = () => {
    return (
        <Flex w={'full'} direction={'column'} >
            <Flex align={'center'} justify={'space-between'} pr={'100px'} pl={'100px'} pt={8} pb={8} bg={'#5A529C'} w={'full'} gap={4}>
                <Flex flexWrap={'wrap'} justify={'center'} direction={'row'} gap={4} align={'center'}>
                    <Location />
                    <Text fontWeight={700} color={'white'} fontFamily={'PT Sans'}> 123456, г. Тавима, ул. Морская, д. 21</Text>
                </Flex>
                <Visma />
                <Flex align={'center'} gap={8} justify={'center'} >
                    <Flex direction={'row'} gap={4} align={'center'} flexWrap={'wrap'} justify={'center'}>
                        <Telephone />
                        <Text fontWeight={700} color={'white'} fontFamily={'PT Sans'}> +7 (123) 456-67-89</Text>
                    </Flex>
                    <Flex flexWrap={'wrap'} justify={'center'} direction={'row'} gap={4} align={'center'}>
                        <Mail />
                        <Text fontWeight={700} color={'white'} fontFamily={'PT Sans'}>order@visma.ru</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justify={'center'} align={'center'} bg={'#3D348B'} direction={'column'} w={'full'} pr={'80px'} p={8} pl={'80px'}>
                <Flex direction={'row'} w={'full'} pr={'80px'} p={8} pl={'80px'}>
                    {
                        footer.map(({ id, channel, first, second, third, fourth, fifth, sixth, seventh }) => (
                            <Flex gap={6} key={id} direction={'row'} flexWrap={'wrap'} justify={'space-between'} w={'full'}>
                                <Flex color={'white'} direction={'column'} align={'flex-start'}>
                                    <Text pb={6} textTransform={'uppercase'} fontWeight={700} fontFamily={'PT Sans'}>{channel}</Text>
                                    <Flex lineHeight={'19.4px'} gap={4} fontSize={'14px'} direction={'column'}>
                                        <Text>{first}</Text>
                                        <Text>{second}</Text>
                                        <Text>{third}</Text>
                                        <Text>{fourth}</Text>
                                        <Text>{fifth}</Text>
                                        <Text>{sixth}</Text>
                                        <Text>{seventh}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))
                    }
                </Flex>
                <Text fontFamily={'PT Sans'} textTransform={'uppercase'} fontWeight={700} color={'#938FB8'} pt={10}>все права защищены АО VISMA</Text>
            </Flex>
        </Flex>
    );
}

export default Footer;