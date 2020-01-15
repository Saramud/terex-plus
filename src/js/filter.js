/*Переменные*/
let propertiesCommon = { 
    weight: 'Вес',
    boomLength: 'Длина стрелы',
    carryingСapacity: 'Грузоподъемность',
    bucketСapacity: 'Объём ковша',
    liftingHeight: 'Высота выгрузки',
    diggingDepth: 'Глубина копания',
    speed: 'Скорость',
    trackWidth: 'Ширина гусениц'
}

let all = {
    autokran: { 
        img: ['/build/img/card-1.jpeg', '/build/img/card-1.jpeg', '/build/img/card-1.jpeg'],
        title: ['Автокран','Автокран башенный', 'Автокран башенный'],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['weight', 'boomLength', 'carryingСapacity'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        boomLength: ['7.6-16.5 м', '7.6-16.5 м', '7.6-16.5 м' ],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        link: ['./technics/autokran.html', './technics/autokran.html', './technics/autokran.html'],
    },
    mini: { 
        img: ['/build/img/card-1.jpeg'],
        title: ['Миниэкскаватор'],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['weight', 'bucketСapacity', 'liftingHeight', 'diggingDepth'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        bucketСapacity: ['0.04 м.куб','0.04 м.куб', '0.04 м.куб'],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        link: ['./technics/autokran.html', './technics/autokran.html', './technics/autokran.html'],
        
    },
    samosval: { 
        img: ['/build/img/card-1.jpeg'],
        title: ['Самосвал'],
        description: ['amet consectetur adipisicing elit.'],
        properties: ['weight', 'speed', 'carryingСapacity'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        speed: ['75 км/ч', '75 км/ч', '75 км/ч'],
        price: [12000, 13000, 11000],
        link: ['./technics/samosval.html', './technics/samosval.html', './technics/samosval.html'],
    },
    ekskGusenich: { 
        img: ['/build/img/card-1.jpeg', '/build/img/card-1.jpeg', '/build/img/card-1.jpeg'],
        title: ['Экскаватор гусеничный', 'Экскаватор гусеничный', 'Экскаватор гусеничный'],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.','amet consectetur adipisicing elit.' ],
        properties: ['weight', 'bucketСapacity', 'trackWidth', 'liftingHeight', 'diggingDepth' ],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        bucketСapacity: ['0.04 м.куб','0.04 м.куб', '0.04 м.куб'],
        trackWidth: ['800 мм', '800 мм','800 мм'],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        price: [12000, 13000, 11000],
        link: ['./technics/ekskavator.html', './technics/ekskavator.html', './technics/ekskavator.html'],
    },
    ekskKoles: { 
        img: ['/build/img/card-1.jpeg'],
        title: ['Экскаватор колёсный'],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['weight', 'bucketСapacity', 'liftingHeight', 'diggingDepth'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        bucketСapacity: ['0.04 м.куб','0.04 м.куб', '0.04 м.куб'],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        link: ['./technics/ekskavator.html', './technics/ekskavator.html', './technics/ekskavator.html'],
    },
    ekskPogr: { 
        img: ['/build/img/card-1.jpeg'],
        title: ['Экскаватор погрузчик'],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['carryingСapacity', 'liftingHeight', 'diggingDepth'],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        link: ['./technics/ekskavator.html', './technics/ekskavator.html', './technics/ekskavator.html'],
    },
};


let selectedTechnic = localStorage.getItem('selected'); //переменная необходима для запоминания выбора техники посетителя

/* Функция фильтрации*/
const getTechnics = (nameTechnics) => {
    for (let i = 0; i < nameTechnics.img.length; i+=1) {
        let bodyCard = $("<div class='card-body'></div")
            .append(`<div class='btn btn-secondary'><a href='${nameTechnics.link[i]}'>Узнать подробнее</a></div>`);
            let newCard = $("<div class='card border-warning text-center'></div>")
            .append(`<h3 class='text-dark'>${nameTechnics.title[i]}</h3>`)
            .append(`<div class='card-header bg-warning '>${nameTechnics.price[i]} руб. за смену</div>`)
            .append(`<img class='card-img-top card__img' src=${nameTechnics.img[i]} 'alt='экскаватор'>`)
            .append(bodyCard);
            let linkCard = $(`<a href='${nameTechnics.link[i]}'></a>`)
            .append(newCard);
        $(".technics__menu-item")
            .append(linkCard); 
    }
}

/*Создаем список техники по умолчанию на страницах "Главная" и "Техника" */

    if ($('#allTechnics').length === 0) {
            let defaultList = (selectedTechnic === null || selectedTechnic === 'allTechnics' ) ? all.autokran: all[selectedTechnic];
            let choiceList = (selectedTechnic === null || selectedTechnic === 'allTechnics') ? 'autokran': selectedTechnic;
            $(`#${choiceList}`).addClass("techs-active");
            getTechnics(defaultList);
    }
    else if ($('#allTechnics').length !== 0) {
            if (selectedTechnic === null) {
                for (let key in all) {
                    let defaultList = all[key];
                    $('#allTechnics').addClass("techs-active");
                    getTechnics(defaultList);
                }
            }
            else {
                $(`#${selectedTechnic}`).addClass("techs-active");
                getTechnics(all[selectedTechnic]);
            }
    }

/*Меняем список техники по клику*/
$(".techs").click(function() {
    let selector = $(this);
    let ident = selector.attr("id");
    localStorage.setItem('selected', ident);
    $(".techs.techs-active").removeClass("techs-active");
    $(selector).addClass("techs-active");
    $("div.card").remove();
    let selectList = all[ident];
    if (ident === 'allTechnics') {
        for (let key in all) {
            let defaultList = all[key];
            getTechnics(defaultList);
    }
    }
    else {
        getTechnics(selectList);
    }
});