import { ReactComponent as Shipyard1 } from "../assets/svg/card_image_one.svg"
import { ReactComponent as Shipyard2 } from "../assets/svg/card_image_two.svg"
import { ReactComponent as Shipyard3 } from "../assets/svg/card_image_three.svg"
import { ReactComponent as Shipyard4 } from "../assets/svg/card_image_four.svg"
import { ReactComponent as ArrowDownPurple } from "../assets/svg/arrow_down_purple.svg"


export const footer = [
    { id: 1, channel: 'информация о юр. лице', first: 'ОГРН 11111111111111111', second: 'ИНН 2222222222222', third: 'КПП 3333333333333', fourth: 'ОКПО 44444444444 ОКВЭД 52.24', fifth: 'ОКТМО 5555555555555' },
    { id: 2, channel: 'Закупки', first: 'Нормативные документы', second: 'Закупки на VISMA Order', third: 'Закупки на VISMA Tender' },
    { id: 3, channel: 'акционерам', first: 'Устав VISMA', second: 'Свидетельства госрегистрации', third: 'Список аффилированных лиц', fourth: 'Информация', fifth: 'Отчеты' },
    { id: 4, channel: 'о компании', first: 'Порт сегодня', second: 'Характеристики порта', third: 'История', fourth: 'Дипломы и награды', fifth: 'Транспортная безопасность', sixth: 'Экология', seventh: 'Правовая информация' }
]

export const services = [
    { id: 1, title: 'услуги', description: 'Погрузочно-разгрузочная деятельность' },
    { id: 2, title: 'услуги', description: 'Хранение грузов' },
    { id: 3, title: 'услуги', description: 'Складские операции' },
    { id: 4, title: 'услуги', description: 'Швартовые операции' },
]

export const shipyards = [
    { id: 1, image: <Shipyard1 />, date: '20/05/22', title: 'Semper eu pulvinar eget integer', description: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.' },
    { id: 2, image: <Shipyard2 />, date: '20/02/22', title: 'Vitae id nec nulla sit nunc cursus curabitur tempus vel enim.', description: 'Cras arcu ac commodo suspendisse commodo ipsum turpis dui. Quis pharetra malesuada eget sit egestas et integer. Suspendisse a.' },
    { id: 3, image: <Shipyard3 />, date: '30/12/21', title: 'Integer nisi sagittis in aliquet. Enim eget varius lacinia est a.', description: 'Lectus tempus felis pretium vitae. Tempor massa vestibulum condimentum cursus diam quam. Mattis facilisi dignissim donec eget vel.' },
    { id: 4, image: <Shipyard4 />, date: '29/06/21', title: 'Facilisis vitae proin quis', description: 'Iaculis diam quam velit sit nunc turpis ultricies elementum. Vitae lacinia tristique rutrum faucibus nulla quis ultricies. Risus.' }
]

export const services2 = [
    { id: 1, title: 'услуги', description: 'Хранение грузов' },
    { id: 2, title: 'услуги', description: 'Швартовые операции' },
    { id: 3, title: 'услуги', description: 'Складские операции' },
    { id: 4, title: 'услуги', description: 'Агентское обслуживание судов' },
    { id: 5, title: 'услуги', description: 'Буксировка / сопровождение судов' },
    { id: 6, title: 'услуги', description: 'Погрузочно-разгрузочная деятельность' }
]

export const calculation = [
    { id: 1, about: 'Наименование груза *' },
    { id: 2, arrowDown: <ArrowDownPurple />, about: 'ед. измерения *' },
    { id: 3, about: 'Пункт назначения перевозки' },
    { id: 4, arrowDown: <ArrowDownPurple />, about: 'Груз поступает в порт' },
    { id: 5, about: 'Размер судовой партии' },
    { id: 6, about: 'Размер партии *' },
    { id: 7, arrowDown: <ArrowDownPurple />, about: 'Направление перевозки *' },
    { id: 8, arrowDown: <ArrowDownPurple />, about: 'Период поступления груза к перевалке' },
    { id: 9, arrowDown: <ArrowDownPurple />, about: 'Груз отправляется из порта' },
    { id: 10, about: 'Опасность груза (класс)' },
]

export const information = [
    {id:1, about: 'Имя, фамилия'},
    {id:2, about: 'Номер телефона/факса'},
    {id:3, about: 'Название компании *'},
    {id:4, about: 'Адрес эл. почты *'},
]