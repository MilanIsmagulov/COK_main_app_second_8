window.dataLoaded = false;
    let title_of_eom = themeOfDEC;
    let methodRecomendation = ' ';
    let dropType = 2;
    let typeOfButtons = 'video'; // Можер быть "hexagon", "lightning", "tiles" или "video" или "custom";
    let timings = [ // если typeOfButtons = 'video'
        { time: 0.83, name: "Основы сертификации" },
        { time: 4.69, name: "История сертификации" },
        { time: 17.81, name: "Понятие и цели сертификации" },
        { time: 23.96, name: "Добровольная сертификация" },
        { time: 34.48, name: "Обязательная сертификация" },
        { time: 45.00, name: "Правовые основы сертификации" },
        { time: 47.19, name: "Деятельность ИСО и МЭК" },
        { time: 51.25, name: "Нормативные документы в информационной безопасности" },
        { time: 54.79, name: "Международные акты по информационной безопасности" },
        { time: 58.44, name: "Отечественное регулирование информационной безопасности" },
        { time: 71.56, name: "Сертификация СМИБ" },
        { time: 82.81, name: "Преимущества сертификации СМИБ" },
        { time: 88.13, name: "Преимущества ISO 9001" }
    ]; // если typeOfButtons = 'video'
    let timings2 = [ // если typeOfButtons = 'video'
        { time2: 0.884, name2: "Основы сертификации" },
        { time2: 1.547, name2: "Преимущества ISO 9001" },
        { time2: 1.878, name2: "Экологическая сертификация" },
        { time2: 10.387, name2: "Задачи экологической сертификации" },
        { time2: 16.796, name2: "Этапы экологической сертификации" },
        { time2: 57.68, name2: "ИНКОМТЕХСЕРТ" }
    ]; // если typeOfButtons = 'video'
    let pathToVideo = './content/page_content/video_8_1.mp4'; // если typeOfButtons = 'video'
    let pathToVideo2 = './content/page_content/video_8_2.mp4'; // если typeOfButtons = 'video'
    let videoTitle2 = 'Видеолекция «Организация ремонтной службы предприятия» Часть 1'; // если typeOfButtons = 'video'
    let videoTitle5 = 'Видеолекция «Организация ремонтной службы предприятия» Часть 2';
    // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let customPage = ``; // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let background_type = dropType;
    let literaListEOM1 = 
    `Ананьева, Т. Н. Стандартизация, сертификация и управление качеством программного обеспечения: учебное пособие / Т.Н. Ананьева, Н.Г. Новикова, Г.Н. Исаев. –Москва: ИНФРА-М, 2021. – 232 с. – (Среднее профессиональное образование). – ISBN 978-5-16-014887-8.
    Шишмарев, В.Ю. Метрология, стандартизация, сертификация, техническое регулирование и документирование: учебник / В. Ю Шишмарев. – Москва: КУРС, ИНФРА-М, 2019. -312 с.
    ГОСТ Р 51102-97. Системы менеджмента качества. Руководство по применению.
    ГОСТ Р 52760-2007. Программное обеспечение. Общие требования.
    ГОСТ Р ИСО/МЭК 27001-2019. Системы управления информационной безопасностью.
    Официальные сайты Росстандарта и международных организаций по стандартизации (ISO, IEC).
    Сергеев, А. Г. Стандартизация и сертификация: учебник и практикум для среднего профессионального образования / А. Г. Сергеев, В. В. Терегеря. – Москва: Издательство Юрайт, 2021. – 323 с. – (Профессиональное образование). – ISBN 978-5-534-04315-0.
    Учебные пособия и научные статьи по стандартизации и информационным технологиям.
    Федеральный закон «О техническом регулировании» № 184-ФЗ.
    Шишмарев, В.Ю. Метрология, стандартизация, сертификация, техническое регулирование и документирование: учебник / В. Ю. Шишмарев. – Москва: КУРС, ИНФРА- М, 2018. -312 с. - ISBN 978-5-906923-15-8 - Текст: непосредственный.` 
    // Список литературы
    const data = {
        "index_0":{
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "paragraph_1":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text": " "},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ],
            "paragraph_2":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text": false},
                {"image": true, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "}
            ],
            "paragraph_3":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"image": true, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "},
                {"text":" "}
            ],
            "paragraph_4":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text":" "},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ]
        }
    };
    const themesOfEOM1 = Object.values(data).map(item => item.subtitle).join('\n');
window.dataLoaded = true;