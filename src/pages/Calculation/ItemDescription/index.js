import React from 'react';
import { Flex, Text, Input, Button, Checkbox } from '@chakra-ui/react';
import { ReactComponent as ArrowDownPurple } from '../../../assets/svg/arrow_down_purple.svg';
import { ReactComponent as ArrowRightBlack } from '../../../assets/svg/arrowright.svg';
import { ReactComponent as ArrowRightPurple} from '../../../assets/svg/arrowrightpurple.svg';
import { calculation, information } from '../../../constants/constants';


const ItemDescription = () => {
    return (
        <Flex w={'full'} direction={'column'}>
            <Flex align={'center'} gap={4} fontWeight={700} textTransform={'uppercase'} bg={'#F5F5F9'} w={'full'} pt={6} pb={6} pl={20} direction={'row'}>
                <Text>Главная</Text>
                <ArrowRightBlack />
                <Text>Клиентам</Text>
                <ArrowRightBlack />
                <Text>Запрос ставки и условий погрузочно-разгрузочных работ</Text>
            </Flex>
            <Flex direction={'column'} justify={'center'} align={'center'} p={32} pb={20}>
                <Text w={'850px'} pb={20} textAlign={'center'} fontSize={'40px'} lineHeight={'56px'} fontWeight={700}>Запрос ставки и условий погрузочно-разгрузочных работ</Text>
                <Flex gap={6} justify={'center'} align={'center'} flexWrap={'wrap'} w={'full'}>
                    {
                        calculation.map(({ id, arrowDown, about }) => (
                            <Flex key={id} direction={'column'} gap={2}>
                                <Text textTransform={'uppercase'} fontFamily={'PT Sans'} fontWeight={700} fontSize={'13px'} lineHeight={'18px'}>{about}</Text>
                                <Flex w={'416px'} justify={'flex-end'} align={'center'} gap={2}>
                                    <Input h={'35px'} pos={'relative'} />
                                    <Text pos={'absolute'} pr={2} >{arrowDown}</Text>
                                </Flex>
                            </Flex>
                        ))
                    }
                    <Flex direction={'row'} w={'full'} gap={6} maxW={'856px'}>
                        <Flex direction={'column'} gap={2}>
                            <Text textTransform={'uppercase'} fontFamily={'PT Sans'} fontWeight={700} fontSize={'13px'} lineHeight={'18px'}>Дополнительная информация о грузе:</Text>
                            <Flex w={'416px'} justify={'flex-end'} align={'center'} gap={2}>
                                <Input h={'100px'} pos={'relative'} />
                            </Flex>
                        </Flex>
                        <Flex direction={'column'} gap={4} >
                            <Text textTransform={'uppercase'} fontFamily={'PT Sans'} fontWeight={700} fontSize={'13px'} lineHeight={'18px'}>Прикрепить файл</Text>
                            <Flex gap={4} direction={'row'}>
                                <Button fontSize={'13px'} bg={'#5DB7DE'} w={'148px'} h={'34px'} color={'white'} textTransform={'uppercase'}>выберите файл</Button>
                                <Button fontSize={'13px'} bg={'transparent'} w={'148px'} h={'34px'} color={'black'} textTransform={'uppercase'}>Файл не выбран</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w={'full'} maxW={'856px'} fontFamily={'PT Sans'} justify={'center'} align={'flex-start'} pl={'290px'} direction={'column'} gap={4}>
                <Text pb={6} fontWeight={700} fontSize={'27px'}>Просим сообщить:</Text>
                <Flex align={'center'} direction={'row'} gap={4}>
                    <Checkbox w={'20px'} h={'20px'} />
                    <Text fontWeight={700} lineHeight={'18.2px'}>Ставку ПРР</Text>
                </Flex>
                <Flex align={'center'} direction={'row'} gap={4}>
                    <Checkbox w={'20px'} h={'20px'} />
                    <Text fontWeight={700} lineHeight={'18.2px'}>Срок технологического накопления груза</Text>
                </Flex>
                <Flex align={'center'} direction={'row'} gap={4}>
                    <Checkbox w={'20px'} h={'20px'} />
                    <Text fontWeight={700} lineHeight={'18.2px'}>Ставку хранения груза сверх срока технологического накопления</Text>
                </Flex>
                <Flex align={'center'} direction={'row'} gap={4}>
                    <Checkbox w={'20px'} h={'20px'} />
                    <Text fontWeight={700} lineHeight={'18.2px'}>Возможность приёма и перевалки груза в указанные сроки</Text>
                </Flex>
            </Flex>
            <Flex pb={12} flexWrap={'wrap'} justify={'space-between'} align={'center'} pl={'290px'} pr={'290px'} pt={12} w={'full'} gap={2}>
                {
                    information.map(({ id, about }) => (
                        <Flex w={'410px'} key={id} direction={'column'} gap={4} align={'flex-start'}>
                            <Text textTransform={'uppercase'} fontFamily={'PT Sans'} fontWeight={700} fontSize={'13px'} lineHeight={'18px'} >{about}</Text>
                            <Input h={'35px'} />
                        </Flex>
                    ))
                }
            </Flex>
            <Flex pb={24} direction={'row'} gap={4} justify={'center'} align={'center'}>
                <Text fontWeight={700} fontFamily={'PT Sans'} fontSize={'20px'} lineHeight={'22px'} color={'#3D348B'}>отправить</Text>
           <ArrowRightPurple />
            </Flex>
        </Flex>
    );
}

export default ItemDescription;
