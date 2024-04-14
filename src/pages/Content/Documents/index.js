import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as ArrowRightBlack } from '../../../assets/svg/arrowright.svg';

const Documents = () => {
    return (
        <Flex w={'full'} direction={'column'}>
            <Flex align={'center'} gap={4} fontWeight={700} textTransform={'uppercase'} bg={'#F5F5F9'} w={'full'} pt={6} pb={6} pl={20} direction={'row'}>
                <Text>Главная</Text>
                <ArrowRightBlack />
                <Text>Клиентам</Text>
                <ArrowRightBlack />
                <Text>Заявка и перечень документов для заключения договоров</Text>
            </Flex>
            <Flex direction={'column'} justify={'center'} align={'center'} p={32}>
                <Text pb={20} textAlign={'center'} fontSize={'40px'} lineHeight={'56px'} fontWeight={700}>Заявка и перечень документов для заключения договоров</Text>
                <Flex fontFamily={'PT Sans'} lineHeight={'22.4px'} direction={'column'} align={'flex-start'} gap={4} pl={32} pr={32}>
                    <Text>Для рассмотрения возможности заключения договора контрагент должен предоставить следующие документы:</Text>
                    <Text>• заявку (оферту) на имя генерального директора VISMA Technology, которая подается на фирменном бланке организации и должна содержать сведения о виде работ и услуг, на которые контрагент предлагает заключить договор, номенклатуре груза и общем объеме на год с разбивкой по месяцам.</Text>
                    <Text>Для резидентов РФ (документы должны быть заверены подписью руководителя и печатью организации):</Text>
                    <Text>• копию выписки из ЕГРЮЛ (выданной не позднее одного месяца до даты заключения договора);</Text>
                    <Text>• копии учредительных документов (устава, положения);</Text>
                    <Text>• копию протокола или выписки из протокола о назначении исполнительного органа;</Text>
                    <Text>• копию свидетельства о государственной регистрации;</Text>
                    <Text>• копию приказа о назначении лица, действующего на основании положения;</Text>
                    <Text>• копию доверенности представителя;</Text>
                    <Text>• копию свидетельства о постановке на учет в качестве налогоплательщика;</Text>
                    <Text>• заполненную карточку контрагента, заверенную подписью и печатью руководителя организации и главного бухгалтера и содержащую следующую информацию:</Text>
                    <Text>1. Юридический адрес контрагента;</Text>
                    <Text>2. Фактический адрес контрагента;</Text>
                    <Text>3. Банковские реквизиты контрагента;</Text>
                    <Text pb={20}>4. Контактная информация: номер факса, адрес электронной почты и контактные лица с указанием номеров телефонов.</Text>
                    <Text>Для нерезидентов РФ (документы должны быть предоставлены с нотариально заверенным переводом на русский язык):</Text>
                    <Text>• выписка из Торгового реестра страны происхождения компании-контрагента (о благонадежности компании);</Text>
                    <Text>• учредительные документы и документы регистрации фирмы (копии);</Text>
                    <Text>• подтверждение полномочий лица на право подписания договора, нотариально заверенная доверенность с апостилем, либо выписка из протокола о назначении (избрании) на должность;</Text>
                    <Text>• заполненную карточку контрагента, заверенную подписью и печатью руководителя организации и содержащую следующую информацию:</Text>
                    <Text>1. Юридический адрес контрагента;</Text>
                    <Text>2. Фактический адрес контрагента;</Text>
                    <Text>3. Банковские реквизиты контрагента;</Text>
                    <Text>4. Контактная информация: номер факса, адрес электронной почты и контактные лица с указанием номеров телефонов.</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Documents;