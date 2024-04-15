import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as ArrowRightPurple } from '../../../assets/svg/arrow_right_purple.svg';
import { shipyards } from '../../../constants/constants';


const News = () => {
    return (
        <Flex w={'full'}>
            <Flex display={['none', 'none', 'flex', 'flex']} w={'full'} p={20} direction={'column'}>
                <Flex pb={12} direction={'row'} w={'full'} justify={'space-between'}>
                    <Text fontSize={'40px'} lineHeight={'56px'} fontWeight={700}>Новости</Text>
                    <Flex align={'center'} gap={4} direction={'row'}>
                        <Text textTransform={'uppercase'} fontWeight={700} fontSize={'16px'} color={'#3D348B'}>все новости</Text>
                        <ArrowRightPurple />
                    </Flex>
                </Flex>
                <Flex w={'full'} direction={'row'} gap={'2px'} justify={'center'} justifyContent={'space-between'} flexWrap={'wrap'}>
                    {
                        shipyards?.map(({ id, image, date, title, description }) => (
                            <Flex key={id} justify={'space-between'}>
                                <Flex direction={'column'} gap={6} align={'flex-start'}>
                                    {image}
                                    <Flex p={2} w={'306px'} direction={'column'} gap={4} color={'black'}>
                                        <Text fontWeight={700} fontSize={'13px'}>{date}</Text>
                                        <Text fontWeight={700} fontSize={'19px'}>{title}</Text>
                                        <Text fontSize={'14px'} fontWeight={400}>{description}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex align={'center'} justify={'center'} display={['flex', 'flex', 'none', 'none']} w={'full'} p={8} direction={'column'}>
                <Text fontSize={'40px'} lineHeight={'56px'} fontWeight={700}>Новости</Text>
                <Flex w={'full'} direction={'row'} gap={'2px'} justify={'center'} flexWrap={'wrap'}>
                    {
                        shipyards.map(({ id, image, date, title, description }) => (
                            <Flex key={id} justify={'space-between'}>
                                <Flex direction={'column'} gap={6} align={'flex-start'}>
                                    {image}
                                    <Flex p={2} w={'306px'} direction={'column'} gap={4} color={'black'}>
                                        <Text fontWeight={700} fontSize={'13px'}>{date}</Text>
                                        <Text fontWeight={700} fontSize={'19px'}>{title}</Text>
                                        <Text fontSize={'14px'} fontWeight={400}>{description}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
        </Flex>
    );
}

export default News;
