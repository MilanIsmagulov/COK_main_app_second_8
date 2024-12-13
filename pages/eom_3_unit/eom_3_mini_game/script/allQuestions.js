let themeName = "Основы сертификации";

let allQuestions = [
    {
        type: 1, // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Какие из следующих целей сертификации верны? Выберите все правильные ответы.', // Текст вопроса
        image: false, // Картинка-Вопрос
        answers: ['Увеличение цен на товары','Обеспечение безопасности продукции','Подтверждение качества','Защита прав потребителей'], // Массив ответов
        correctAnswer: [1,2,3], // Массив верных ответов
        answered: null
    },
    {
        type: 1, // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Какие из следующих шагов являются обязательными в процессе сертификации? Выберите все правильные ответы.', // Текст вопроса
        image: false, // Картинка-Вопрос
        answers: ['Получение отзыва клиента','Оценка соответствия','Испытания и проверка продукции','Выдача сертификата'], // Массив ответов
        correctAnswer: [1,2,3], // Массив верных ответов
        answered: null
    },
    {
        type: 1, // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Какие категории товаров могут подлежать обязательной сертификации? Выберите все правильные ответы.', // Текст вопроса
        image: false, // Картинка-Вопрос
        answers: ['Электронные устройства','Продовольственные товары','Лекарственные препараты','Игрушки'], // Массив ответов
        correctAnswer: [0,1,2,3], // Массив верных ответов
        answered: null
    },
    {
        type: 1, // Тип вопроса
        price: 150, // Цена вопроса
        text: 'Какие из следующих документов являются важными в области защиты информации? Выберите все правильные ответы.', // Текст вопроса
        image: false, // Картинка-Вопрос
        answers: ['Стандарт ISO 14001','ISO/IEC 27001','Закон "О защите персональных данных"','ГОСТ Р 56939-2016'], // Массив ответов
        correctAnswer: [1,2,3], // Массив верных ответов
        answered: null
    },
    {
        type: 1, // Тип вопроса
        price: 150, // Цена вопроса
        text: 'Какие из следующих принципов являются основой стандарта ISO 9001? Выберите все правильные ответы.', // Текст вопроса
        image: false, // Картинка-Вопрос
        answers: ['Ориентация на клиента','Лидерство','Учет рисков','Минимизация затрат'], // Массив ответов
        correctAnswer: [0,1,2], // Массив верных ответов
        answered: null
    },
    {
        type: 1, // Тип вопроса
        price: 150, // Цена вопроса
        text: 'Какие ключевые параметры учитываются при сертификации по ISO 14001? Выберите все правильные ответы.', // Текст вопроса
        image: false, // Картинка-Вопрос
        answers: ['Влияние на окружающую среду','Учет рисков экологических катастроф','Система управления отходами','Оценка экологических последствий'], // Массив ответов
        correctAnswer: [0,1,2,3], // Массив верных ответов
        answered: null
    },
    {
        type: 6, // Тип вопроса
        price: 200, // Цена вопроса
        text: "Установите соответствие между процессами и их описанием.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'Внутренний аудит' },
            { type: 'text', value: 'Внешний аудит' },
            { type: 'text', value: 'Оценка рисков' },
            { type: 'text', value: 'Получение сертификата' },
        ],
        rightContents: [
            { type: 'text', value: 'Проверка, проводимая независимым органом' },
            { type: 'text', value: 'Процесс анализа потенциальных угроз' },
            { type: 'text', value: 'Регулярная проверка систем' },
            { type: 'text', value: 'Документ, подтверждающий соответствие' }, 
        ],
        correctAnswer: [2, 0, 1, 3], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 200, // Цена вопроса
        text: "Установите соответствие между сертификатами и их основными направлениями.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'ISO 27001' },
            { type: 'text', value: 'ISO 9001' },
            { type: 'text', value: 'ISO 45001' },
            { type: 'text', value: 'ISO 50001' },
        ],
        rightContents: [
            { type: 'text', value: 'Информационная безопасность' },
            { type: 'text', value: 'Охрана труда' },
            { type: 'text', value: 'Энергоменеджмент' },
            { type: 'text', value: 'Системы управления качеством' },
        ],
        correctAnswer: [0,3,1,2], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 200, // Цена вопроса
        text: "Установите соответствие между стандартами и их целями.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'ISO 9001' },
            { type: 'text', value: 'ISO 27001' },
            { type: 'text', value: 'ISO 14001' },
            { type: 'text', value: 'IEC 60335' },
        ],
        rightContents: [
            { type: 'text', value: 'Устойчивое развитие' },
            { type: 'text', value: 'Управление качеством' },
            { type: 'text', value: 'Информационная безопасность' },
            { type: 'text', value: 'Безопасность бытовых приборов' },
        ],
        correctAnswer: [1,2,0,3], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 250, // Цена вопроса
        text: "Установите соответствие между органами и их функциями в системе сертификации.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'Федеральная служба по аккредитации' },
            { type: 'text', value: 'Международная организация по стандартизации (ISO)' },
            { type: 'text', value: 'Европейский комитет по стандартизации (CEN)' },
            { type: 'text', value: 'Росстандарт' },
        ],
        rightContents: [
            { type: 'text', value: 'Разработка международных стандартов' },
            { type: 'text', value: 'Аккредитация органов по сертификации в России' },
            { type: 'text', value: 'Разработка стандартов для европейского региона' },
            { type: 'text', value: 'Установление норм и правил сертификации в России' },
        ],
        correctAnswer: [1,0,2,3], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 250, // Цена вопроса
        text: "Установите соответствие между документами и их содержанием.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'NIS Directive' },
            { type: 'text', value: 'Конвенция Совета Европы по киберпреступности' },
            { type: 'text', value: 'ISO 9001' },
            { type: 'text', value: 'ГОСТ Р 56939-2016' },
        ],
        rightContents: [
            { type: 'text', value: 'Стандарт управления качеством' },
            { type: 'text', value: 'Защита сетей и информации' },
            { type: 'text', value: 'Защита персональных данных' },
            { type: 'text', value: 'Меры по защите от киберугроз' },
        ],
        correctAnswer: [1,3,0,2], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    {
        type: 6, // Тип вопроса
        price: 250, // Цена вопроса
        text: "Установите соответствие между стандартами и областями их применения.", // Текст вопроса
        // Типы контента: { type: 'text/image/video' },
        leftContents: [
            { type: 'text', value: 'ISO 45001' },
            { type: 'text', value: 'ISO 22000' },
            { type: 'text', value: 'ISO 50001' },
            { type: 'text', value: 'ISO 14001' },
        ],
        rightContents: [
            { type: 'text', value: 'Охрана труда и техники безопасности' },
            { type: 'text', value: 'Экологическое управление' },
            { type: 'text', value: 'Энергоменеджмент' },
            { type: 'text', value: 'Безопасность пищевых продуктов' },
        ],
        correctAnswer: [0, 3, 2, 1], // Массив верных ответов. 
        // Чтение ответа происходит по порядку левого контента: 
        // 0 слева -> 0 справа; 1 слева -> 1 справа и тд.
        answered: null,
    },
    
    {
        type: 2, // Тип вопроса
        price: 300, // Цена вопроса
        text: 'Впишите термин.', // Текст вопроса
        textDd: "Процесс подтверждения соответствия продукции, услуг, систем или процессов установленным стандартам или требованиям, направленный на обеспечение качества, безопасности и надежности называется: !", // Текст вопроса с разделителями. В местах где "!" будет вставлен input для ввода.
        correctAnswer: ["сертификация"], // Массив ответов при !. Один ответ к одному инпуту.
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2, // Тип вопроса
        price: 300, // Цена вопроса
        text: 'Впишите термин.', // Текст вопроса
        textDd: "Процесс, который проводится по инициативе производителя или поставщика, целью которого является подтверждение соответствия продукции или услуг соблюдению стандартов называется: !", // Текст вопроса с разделителями. В местах где "!" будет вставлен input для ввода.
        correctAnswer: ["добровольная сертификация"], // Массив ответов при !. Один ответ к одному инпуту.
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2, // Тип вопроса
        price: 300, // Цена вопроса
        text: 'Впишите термин.', // Текст вопроса
        textDd: "Процесс, который требует законодательства для определенных видов продукции и услуг, с целью обеспечения их безопасности и соблюдения установленных стандартов называется: !", // Текст вопроса с разделителями. В местах где "!" будет вставлен input для ввода.
        correctAnswer: ["обязательная сертификация"], // Массив ответов при !. Один ответ к одному инпуту.
        answered: null, // Флаг, ответили ли на этот вопрос
    },

    
];