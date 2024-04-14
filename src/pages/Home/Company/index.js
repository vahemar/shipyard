import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as Circle } from '../../../assets/svg/round.svg';
import ship from '../../../assets/png/shipyard_video_image.png'

const Company = () => {
    return (
        <Flex w={'full'}>
            <Flex direction={'column'} p={20} w={'full'} bg={'#F5F5F9'}>
                <Flex w={'full'} pb={12}>
                    <Text fontSize={'40px'} fontWeight={700}>О компании</Text>
                </Flex>
                <Flex direction={'row'} w={'full'} justify={'space-between'} gap={20} >
                    <Flex direction={'column'} gap={2} align={'flex-start'}>
                        <Text>Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.</Text>
                        <Text>Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus.Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                        <Text>Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                        <Text display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}><Circle /> Vivamus tincidunt non lectus odio magna semper odio risus.</Text>
                    </Flex>
                    <Flex direction={'column'} gap={6}>
                        <Image w={'full'} src={ship} alt='ship' />
                        <Flex direction={'column'} justify={'space-between'} w={'526px'} p={8} h={'170px'} borderRadius={'20px'} bg={'#5DB7DE'} color={'white'} fontWeight={700}>
                            <Text fontSize={'13px'} textTransform={'uppercase'}>Запрос ставки и условий погрузочно-разгрузочных работ</Text>
                            <Text fontSize={'19px'}>Рассчитайте моментально стоимость полных портовых услуг в порту VISMA</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Company;