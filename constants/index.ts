import {
    BxTelegram,
    BxInstagram,
    BxFacebookSquare,
    BxLinkedinSquare,
    CaPhone,
    CoBrandGmail,
    MaDoctor,
    MiSettingsCogCheck,
    ReStarSmileLine,
    CaNetwork1,
    AkChatDots,
    HeFilledDoctorMale,
    GlWork,
    AkChatQuestion,
    BsJournalText,
    AkDashboard,
    GlCommentDots,
    FlFilledClipboardTaskListLtr,
    FaUsers,
    MdOutlinedWork,
    GlStatusHealth,
    GlBullhorn,
    HuGift,
    HeFilledDoctorFemale,
    MiArticle,
    AkImage,
    MdOutlinedBiotech,
    MdOutlinedCleanHands,
    IcHealthShield,
    MdOutlinedWindPower,
    PhLightFaceMask,
    HeOutlinePpeGloves,
    HeOutlineFever,
    IcWashingMachine,
    CaClean,
    ReNumber1,
    ReNumber2,
    ReNumber3,
    ReNumber4,
    BsNewspaper,
    MdSharpBiotech,
    BsImageFill,
    BsFileEarmarkRichtextFill,
} from '@kalimahapps/vue-icons'

export const navigation_links = (services?: any[], doctors?: any[]) => {
    return [
        { title: 'О нас', url: '/about',
            children: [
                { title: 'Меры профилактики и защити здоровья', url: '/about/preventation' },
                { title: 'О Клинике', url: '/about' },
                { title: 'Технологии и Оборудование', url: '/about/equipments' },
                { title: 'Галарея', url: '/about/gallery' },
                { title: 'Новости', url: '/about/news' },
                { title: 'Статьи', url: '/about/articles' },
                { title: 'Правовая информация', url: '/about/legal-info' },
                { title: 'Обработка персональных данных', url: '/about/personal-data' },
            ]
        },
        { title: 'Услуги', url: '/services',
            children: services || []
        },
        { title: 'Врачи', url: '/doctors',
            children: doctors || []
        },
        { title: 'Акции', url: '/stocks',  },
        { title: 'Отзывы', url: '/reviews',  },
        { title: 'Лаборатория', url: '/laboratory',  },
        { title: 'Пациентам', url: '/for-patinets',  },
        { title: 'Контакты', url: '/contacts', },
    ]
}

export const admin_links = [
    { title: 'Главная', icon: AkDashboard, url: '/admin' },
    { title: 'Акции', icon: HuGift, url: '/admin/stocks' },
    { title: 'Новости', icon: GlBullhorn, url: '/admin/news' },
    { title: 'Записи на прием', icon: BsJournalText, url: '/admin/appointments' },
    { title: 'Отзывы', icon: AkChatDots, url: '/admin/reviews' },
    { title: 'Докторы', icon: HeFilledDoctorMale, url: '/admin/doctors' },
    { title: 'Специализации', icon: MaDoctor, url: '/admin/specialities' },
    { title: 'Услуги', icon: GlStatusHealth, url: '/admin/services' },
    { title: 'Категория Услугов', icon: GlWork, url: '/admin/service-categories' },
    { title: 'Лаборатория', icon: HeFilledDoctorFemale, url: '/admin/laboratory' },
    { title: 'Галарея', icon: AkImage, url: '/admin/gallery' },
    { title: 'Оборудование', icon: MdOutlinedBiotech, url: '/admin/equipments' },
    { title: 'Статьи', icon: MiArticle, url: '/admin/articles' },
    { title: 'Вопросы', icon: AkChatQuestion, url: '/admin/faqs' },
]

export const social_links = [
    { title: 'Telegram', url: '', icon: BxTelegram },
    { title: 'Instagram', url: '', icon: BxInstagram },
    { title: 'Facebook', url: '', icon: BxFacebookSquare },
    { title: 'Linkedin', url: '', icon: BxLinkedinSquare },
]

export const contact_links = [
    { title: '+998 90 123 45 67', icon: CaPhone },
    { title: 'example@service.domain', icon: CoBrandGmail },
    // { title: '+998 90 123 45 67', icon: '' },
]

export const faqs_links = [
    { title: 'Помощь', url: '/', icon: 'mdi' },
    { title: 'Админ', url: '/', icon: 'mdi' },
    { title: 'Отзывы', url: '/', icon: 'mdi' },
    { title: 'ЧЗВ', url: '/', icon: 'mdi' },
]

export const working_times = [
    { day: 'Понедельник', hours: '8:00-18:00' },
    { day: 'Вторник', hours: '8:00-18:00' },
    { day: 'Среда', hours: '8:00-18:00' },
    { day: 'Четверг', hours: '8:00-18:00' },
    { day: 'Пятница', hours: '8:00-18:00' },
    { day: 'Shanba', hours: '8:00-13:00' },
    { day: 'Воскресенье', sunday: true, hours: 'Выходной' },
]

export const index_card_items = [
    { icon: MaDoctor, title: 'home.card_title_1', description: 'home.card_desc_1' },
    { icon: MiSettingsCogCheck , title: 'home.card_title_2', description: 'home.card_desc_2' },
    { icon: CaNetwork1, title: 'home.card_title_3', description: 'home.card_desc_3' },
    { icon: ReStarSmileLine , title: 'home.card_title_4', description: 'home.card_desc_4' },
]

export const preventation_card_items = [
    {
        icon: IcHealthShield,
        description: 'Каждый час выполняется дезинфекция всех помещений и поверхностей специальными безопасными дезинфектантами.',
    },
    {
        icon: MdOutlinedWindPower,
        description: 'Установлены дополнительные бактерицидные рециркуляторы воздуха, функционирующие безостановочно.',
    },
    {
        icon: MdOutlinedCleanHands,
        description: 'Во всех наших клиниках установлены дозаторы с дезинфицирующим средством широкого спектра действия для обработки рук.',
    },
    {
        icon: HeOutlinePpeGloves,
        description: 'Все сотрудники клиники используют одноразовые маски, которые мы меняем каждые 2 часа.',
    },
    {
        icon: PhLightFaceMask,
        description: 'Маски и индивидуальные средства защиты в вашем распоряжении.',
    },
    {
        icon: CaClean,
        description: 'После каждого пациента проводим усиленную обработку кабинетов дезинфицирующим раствором.',
    },
    {
        icon: HeOutlineFever,
        description: 'Все сотрудники перед работой, при входе в клинику, проходят обязательную термометрию.',
    },
    {
        icon: IcWashingMachine,
        description: 'Инструменты подвергаются многоступенчатой стерлизации.',
    },
]

export const preventation_card_items_2 = [
    { title: 'Пациент изолируется от других пациентов клиники и медицинского персонала.', icon: ReNumber1 },
    { title: 'Административный персонал вызывает бригаду скорой медицинской помощи.', icon: ReNumber2 },
    { title: 'Пациента госпитализируют с соблюдением всех мер безопасности через отдельный вход.', icon: ReNumber3 },
    { title: 'В клинике проводится дополнительная дезинфекция.', icon: ReNumber4 },
]

export const about_page_links = [
    { url: '/about/news', title: 'Новости', icon: BsNewspaper },
    { url: '/about/gallery', title: 'Галерея', icon: MdSharpBiotech },
    { url: '/about/equipments', title: 'Технологии и оборудование', icon: BsImageFill },
    { url: '/about/personal-data', title: 'Обработка персональных данных', icon: BsFileEarmarkRichtextFill },
]

export const service_cards = [
    { icon: '/icons/toothbrush.png', title: 'Профессиональная гигиеническая чистка зубов', description: 'Поддерживайте свою улыбку в идеальном состоянии с нашей профессиональной гигиенической чисткой. Удаление налета и освежение дыхания.' },
    { icon: '/icons/drilling.png', title: 'Лечение кариеса', description: 'Надежное лечение кариеса с использованием современных методов и материалов. Восстановление зубов и восстановление здоровья улыбки.' },
    { icon: '/icons/crown.png', title: 'Установка коронок и мостов', description: 'Индивидуальные решения для восстановления поврежденных зубов. Короны и мосты для долговечной и красивой улыбки.' },
    { icon: '/icons/implant.png', title: 'Имплантация зубов', description: 'Восстановление недостающих зубов с помощью имплантации. Натуральный вид и функция для вашей улыбки.' },
    { icon: '/icons/braces.png', title: 'Ортодонтическое лечение', description: 'Коррекция прикуса и выравнивание зубов с использованием современных ортодонтических методов. Улучшение внешнего вида и здоровья устной полости.' },
    { icon: '/icons/tool.png', title: 'Лечение пародонтита', description: 'Эффективное лечение воспаления десен и пародонтита. Восстановление здоровья десен и укрепление зубов.' },
]

export const site_faqs = [
    { title: 'Как часто мне следует проходить профессиональную гигиеническую чистку зубов?', content: 'Рекомендуется проходить профессиональную чистку зубов каждые 6 месяцев для поддержания оптимального уровня устной гигиени и предотвращения заболеваний.' },
    { title: 'Что делать при острой зубной боли?', content: 'При острой зубной боли рекомендуется немедленно обратиться к стоматологу. Пока вы ждете врача, можно принять обезболивающее и обработать больное место холодом.' },
    { title: 'Какие преимущества имеют импланты перед съемными протезами?', content: 'Импланты обеспечивают стабильность и комфорт, подобные естественным зубам. Они также способствуют сохранению костной ткани и предоставляют более долгосрочное решение для восстановления зубов.' },
    { title: 'Могу ли я использовать страховку для оплаты стоматологических услуг?', content: 'Да, многие стоматологические клиники принимают страховку. Перед посещением уточните, принимается ли ваша страховка в нашей клинике, и какие услуги она покрывает.' },
    { title: 'Как долго займет процесс ортодонтического лечения?', content: 'Время лечения зависит от степени необходимой коррекции. Средняя длительность ортодонтического лечения составляет от 1 до 2 лет.' },
    { title: 'Почему важно лечить пародонтит?', content: 'Пародонтит может привести к потере зубов и проблемам с деснами. Лечение важно для предотвращения дальнейшего развития заболевания и поддержания общего здоровья полости рта.' },
    { title: 'Какие методы отбеливания зубов предлагает ваша клиника?', content: 'Мы предоставляем профессиональное отбеливание зубов в клинике, а также можем предложить индивидуальные программы отбеливания для использования дома с использованием специальных гелей и наглядных инструкций.' },
]

export const doctors = [
    {
        "image": "/users/400.jpg",
        "name": "Доктор Иванова",
        "specialty": "Стоматолог-терапевт",
        "experience": "Более 15 лет практики",
        "education": "Диплом по стоматологии, Медицинский университет",
        "languages": ["Русский", "Английский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Петров",
        "specialty": "Ортодонт",
        "experience": "10 лет опыта в ортодонтии",
        "education": "Диплом по ортодонтии, Медицинская академия",
        "languages": ["Русский", "Французский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Смирнова",
        "specialty": "Хирург-стоматолог",
        "experience": "Специализация на протезировании",
        "education": "Диплом по хирургии, Стоматологический институт",
        "languages": ["Русский", "Немецкий"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Ковалев",
        "specialty": "Имплантолог",
        "experience": "Более 12 лет работы с имплантатами",
        "education": "Диплом по имплантологии, Стоматологическая школа",
        "languages": ["Русский", "Испанский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Егорова",
        "specialty": "Детский стоматолог",
        "experience": "Специализация на работе с детьми",
        "education": "Диплом по детской стоматологии, Медицинский университет",
        "languages": ["Русский", "Китайский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Александров",
        "specialty": "Эстетический стоматолог",
        "experience": "Работа с методами улучшения внешнего вида зубов",
        "education": "Диплом по эстетической стоматологии, Стоматологическая академия",
        "languages": ["Русский", "Итальянский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Никитин",
        "specialty": "Терапевт-стоматолог",
        "experience": "Специализация на лечении зубов и десен",
        "education": "Диплом по терапии, Стоматологический институт",
        "languages": ["Русский", "Португальский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Сергеева",
        "specialty": "Стоматолог по лечению пародонтита",
        "experience": "Специализация на лечении воспалений десен",
        "education": "Диплом по пародонтологии, Медицинская академия",
        "languages": ["Русский", "Японский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Григорьев",
        "specialty": "Протезирование",
        "experience": "Большой опыт в протезировании зубов",
        "education": "Диплом по протезированию, Стоматологическая школа",
        "languages": ["Русский", "Корейский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Тимофеев",
        "specialty": "Телемедицина в стоматологии",
        "experience": "Современные методы удаленной консультации",
        "education": "Диплом по телемедицине, Стоматологическая академия",
        "languages": ["Русский", "Арабский"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Васнецова",
        "specialty": "Стоматолог для беременных",
        "experience": "Бережное лечение зубов в период беременности",
        "education": "Диплом по стоматологии, Медицинский университет",
        "languages": ["Русский", "Турецкий"]
    },
    {
        "image": "/users/400.jpg",
        "name": "Доктор Михайлов",
        "specialty": "Эндодонтист",
        "experience": "Лечение корневых каналов и заболеваний зубной пульпы",
        "education": "Диплом по эндодонтии, Стоматологический институт",
        "languages": ["Русский", "Греческий"]
    }
]

export const all_services = [
    {
        "title": "Профессиональная гигиеническая чистка зубов",
        "description": "Удаление зубных отложений и налета, полировка, обучение правильной гигиеничной заботе.",
        "price": "100.0"
    },
    {
        "title": "Лечение кариеса",
        "description": "Удаление пораженной зубной ткани, заполнение пломбой, восстановление формы и функции зуба.",
        "price": "200.0"
    },
    {
        "title": "Установка коронок и мостов",
        "description": "Изготовление и установка коронок и мостов для восстановления поврежденных или отсутствующих зубов.",
        "price": "500.0"
    },
    {
        "title": "Имплантация зубов",
        "description": "Хирургическое внедрение зубного импланта для замещения отсутствующего зуба.",
        "price": "1000.0"
    },
    {
        "title": "Ортодонтическое лечение",
        "description": "Использование брекетов и других устройств для коррекции прикуса и выравнивания зубов.",
        "price": "1500.0"
    },
    {
        "title": "Лечение пародонтита",
        "description": "Диагностика и лечение воспалительных заболеваний пародонта (десен и опоры зуба).",
        "price": "300.0"
    },
    {
        "title": "Профессиональное отбеливание зубов",
        "description": "Безопасные и эффективные процедуры для отбеливания зубов и достижения белоснежной улыбки.",
        "price": "250.0"
    },
    {
        "title": "Детская стоматология",
        "description": "Специализированная забота о зубах детей, включая профилактику, лечение и консультации.",
        "price": "120.0"
    },
    {
        "title": "Хирургические вмешательства",
        "description": "Хирургические процедуры, такие как удаление зубов, апикальная резекция, пластическая хирургия.",
        "price": "400.0"
    },
    {
        "title": "Эстетическая стоматология",
        "description": "Предоставление услуг для улучшения внешнего вида зубов, включая виниры, контуринг и другие процедуры.",
        "price": "800.0"
    },
    {
        "title": "Телемедицина в стоматологии",
        "description": "Удаленные консультации, диагностика и наблюдение за пациентами через интернет.",
        "price": "150.0"
    },
    {
        "title": "Экстренная стоматология",
        "description": "Предоставление медицинской помощи в случае зубной боли, травмы или других срочных случаев.",
        "price": "200.0"
    },
    {
        "title": "Стоматологическая генетика",
        "description": "Диагностика и консультации на основе генетических аспектов в стоматологии.",
        "price": "300.0"
    },
    {
        "title": "Стоматология для беременных",
        "description": "Забота о здоровье зубов и десен во время беременности, безопасные процедуры для будущих мам.",
        "price": "180.0"
    },
    {
        "title": "Эндодонтия",
        "description": "Лечение зубов, в том числе удаление нерва и лечение корневых каналов.",
        "price": "350.0"
    },
    {
        "title": "Протезирование",
        "description": "Изготовление и установка съемных и несъемных протезов для восстановления зубов.",
        "price": "600.0"
    },
    {
        "title": "Лазерная стоматология",
        "description": "Применение лазерных технологий для лечения различных стоматологических проблем.",
        "price": "700.0"
    },
    {
        "title": "Спортивная стоматология",
        "description": "Защита зубов и десен у спортсменов, предотвращение травм и ушибов.",
        "price": "120.0"
    },
    {
        "title": "Стоматология для пациентов с ограниченными возможностями",
        "description": "Специализированная помощь пациентам с физическими или психическими ограничениями.",
        "price": "250.0"
    },
    {
        "title": "Терапевтическая стоматология",
        "description": "Лечение заболеваний и повреждений зубов, восстановление зубной ткани.",
        "price": "150.0"
    },
    {
        "title": "Исследовательская стоматология",
        "description": "Научные исследования в области стоматологии для разработки новых методов лечения и профилактики.",
        "price": "360.0"
    }
]

export const reviews = [
    {
        "firstname": "Иван",
        "lastname": "Иванов",
        "phone": "+7 (123) 456-7890",
        "email": "ivan@example.com",
        "message": "Отличная клиника, профессиональные врачи и дружелюбный персонал. Буду рекомендовать!",
        "created_at": "2024-01-15"
    },
    {
        "firstname": "Екатерина",
        "lastname": "Петрова",
        "phone": "+7 (987) 654-3210",
        "email": "ekaterina@example.com",
        "message": "Очень довольна результатом отбеливания зубов. Спасибо за заботу и внимание!",
        "created_at": "2024-01-14"
    },
    {
        "firstname": "Александр",
        "lastname": "Смирнов",
        "phone": "+7 (555) 123-4567",
        "email": "alexander@example.com",
        "message": "Профессиональная гигиеническая чистка прошла отлично. Зубы чистые и свежие!",
        "created_at": "2024-01-13"
    },
    {
        "firstname": "Мария",
        "lastname": "Ковалева",
        "phone": "+7 (111) 222-3333",
        "email": "maria@example.com",
        "message": "Очень внимательные врачи, всегда готовы помочь и ответить на все вопросы. Рекомендую!",
        "created_at": "2024-01-12"
    },
    {
        "firstname": "Дмитрий",
        "lastname": "Егоров",
        "phone": "+7 (777) 888-9999",
        "email": "dmitry@example.com",
        "message": "Имплантация прошла успешно. Спасибо за профессионализм и заботу!",
        "created_at": "2024-01-11"
    },
    {
        "firstname": "Анна",
        "lastname": "Александрова",
        "phone": "+7 (333) 444-5555",
        "email": "anna@example.com",
        "message": "Отличный сервис, приятная атмосфера. Врачи делают свою работу на высшем уровне!",
        "created_at": "2024-01-10"
    },
    {
        "firstname": "Павел",
        "lastname": "Никитин",
        "phone": "+7 (666) 777-8888",
        "email": "pavel@example.com",
        "message": "Профессиональное лечение пародонтита. Большое спасибо!",
        "created_at": "2024-01-09"
    },
    {
        "firstname": "Елена",
        "lastname": "Сергеева",
        "phone": "+7 (444) 555-6666",
        "email": "elena@example.com",
        "message": "Детская стоматология на высшем уровне. Ребенок не боится походов к врачу!",
        "created_at": "2024-01-08"
    }
]

export const contact_info = {
    "clinicName": "Областная Стоматологическая Больница",
    "icon": "dental-chair",
    "type": "Dentist",
    "address": {
        "street": "Узбекистан, Самаркандская область, 140100, Самарканд, ул. ОЗОД ШАРК, 10",
        "city": "Самарканд",
        "postalCode": "12345",
        "country": "Страна"
    },
    "location": {
        "latitude": 55.123456,
        "longitude": 37.987654
    },
    "phone_1": "+998 99 594 79 74",
    // "phone_2": "+998 (90) 123 45 67",
    "email": "shahlo.yuldasheva@minzrav.uz",
    "workingHours": [
        {
            "day": "Понедельник - Пятница",
            "hours": "9:00 - 18:00"
        },
        {
            "day": "Суббота",
            "hours": "10:00 - 14:00"
        },
        {
            "day": "Воскресенье",
            "hours": "Выходной"
        }
    ]
}

export const appointments = [
    {
        id: 1,
        name: "John Doe",
        phone: "123-456-7890",
        doctor: 101,
        checked: true,
        created_at: "2024-01-12T10:00:00Z",
    },
    {
        id: 2,
        name: "Jane Smith",
        phone: "987-654-3210",
        doctor: 102,
        checked: false,
        created_at: "2024-01-12T11:30:00Z",
    },
    {
        id: 3,
        name: "Alice Johnson",
        phone: "555-123-4567",
        doctor: 103,
        checked: true,
        created_at: "2024-01-12T13:15:00Z",
    },
    {
        id: 4,
        name: "Bob Anderson",
        phone: "444-555-6666",
        doctor: 104,
        checked: false,
        created_at: "2024-01-12T14:45:00Z",
    },
    {
        id: 5,
        name: "Eva Williams",
        phone: "777-888-9999",
        doctor: 105,
        checked: true,
        created_at: "2024-01-12T16:00:00Z",
    },
    {
        id: 6,
        name: "Michael Brown",
        phone: "222-333-4444",
        doctor: 106,
        checked: false,
        created_at: "2024-01-12T17:30:00Z",
    },
    {
        id: 7,
        name: "Sophia Miller",
        phone: "666-777-8888",
        doctor: 107,
        checked: true,
        created_at: "2024-01-12T19:00:00Z",
    },
    {
        id: 8,
        name: "David Wilson",
        phone: "111-222-3333",
        doctor: 108,
        checked: false,
        created_at: "2024-01-12T20:15:00Z",
    },
    {
        id: 9,
        name: "Olivia Davis",
        phone: "999-888-7777",
        doctor: 109,
        checked: true,
        created_at: "2024-01-12T21:45:00Z",
    },
    {
        id: 10,
        name: "William Taylor",
        phone: "333-444-5555",
        doctor: 110,
        checked: false,
        created_at: "2024-01-12T22:30:00Z",
    },
]

export const languages = [
    { lang: 'ru', title: 'Русский' },
    { lang: 'uz', title: "O'zbek" },
]

export const dashboard_items = [
    { title: 'Записи', value: 'appointments', icon: FlFilledClipboardTaskListLtr, class: 'bg-red-500/20 text-red-500' },
    { title: 'Докторы', value: 'doctors', icon: FaUsers, class: 'bg-blue-500/20 text-blue-500' },
    { title: 'Услуги', value: 'services', icon: MdOutlinedWork, class: 'bg-yellow-400/20 text-yellow-400' },
    { title: 'Отзывы', value: 'reviews', icon: GlCommentDots , class: 'bg-green-500/20 text-green-500' },
]

export const for_patient_links = [
    { url: '#', title: 'Меры профилактики и защиты здоровья', icon: BsNewspaper },
    { url: '#', title: 'Статьи', icon: BsNewspaper },
    { url: '#', title: 'Заболевания', icon: BsNewspaper },
    { url: '#', title: 'Услуги в кредит', icon: BsNewspaper },
]

export const patient_sections = [
    { url: '#reception-of-patients', title: 'Прием пациентов', icon: '' },
    { url: '#paperwork', title: 'Оформление документации', icon: '' },
    { url: '#re-registration', title: 'Переоформление', icon: '' },
    { url: '#discount-program', title: 'Дисконтная программа', icon: '' },
    { url: '#standards-of-medical-care', title: 'Стандарты медицинской помощи', icon: '' },
    { url: '#patients-insured-under-the-system', title: 'Пациенты, застрахованные по системе ДМС', icon: '' },
    { url: '#late-for-an-appointment', title: 'Опоздание на прием', icon: '' },
    { url: '#tax-deduction', title: 'Налоговый вычет', icon: '' },
    { url: '#issuance-of-copies-of-medical-documentation', title: 'Выдача копий медицинской документации', icon: '' },
]

export const legal_info_sections = [
    { url: '#reference-information', title: 'Справочная информация', icon: '' },
    { url: '#licenses', title: 'Лицензии', icon: '' },
    { url: '/about/personal-data#privacy-policy', title: 'Политика конфиденциальности', icon: '' },
    { url: '/about/personal-data', title: 'Обработка персональных данных', icon: '' },
]