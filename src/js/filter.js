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
};

let name = {
    atkrnUgra: ['Гусеничный кран югра 4671', '/build/img/ugra.jpg', './technics/autokran.html'],
    atkrnMaz: ['Автокран МАЗ', '/build/img/maz.jpg', './technics/autokran.html'],
    atkrTadano: ['Автокран Tadano GR-550EX', '/build/img/tadano.jpg', './technics/autokran.html'],
    miniSunward: ['Миниэкскаватор Sunward swe-017', '/build/img/card-1.jpeg', './technics/autokran.html'],
    miniKubota: ['Миниэкскаватор Kubota KX36-3', '/build/img/card-1.jpeg', './technics/autokran.html'],
    miniJCB: ['Миниэкскаватор JSB 8018', '/build/img/card-1.jpeg', './technics/autokran.html'],
    smsvlKamaz6520: ['Самосвал КАМАЗ 6520', '/build/img/card-1.jpeg', './technics/samosval.html'],
    smsvlUral: ['Самосвал Урал 6х6', '/build/img/card-1.jpeg', './technics/samosval.html'],
    smsvlKamaz65802: ['Самосвал КАМАЗ 65802-27', '/build/img/card-1.jpeg', './technics/samosval.html'],
    egusHitachi330: ['Экскаватор гусеничный HITACHI 330', '/build/img/card-1.jpeg', './technics/ekskavator.html'],
    egusHitachi300: ['Экскаватор гусеничный HITACHI 300', '/build/img/card-1.jpeg', './technics/ekskavator.html'],
    egusGCB160: ['Экскаватор гусеничный GCB 160', '/build/img/card-1.jpeg', './technics/ekskavator.html'],
    ekolDoosan: ['Экскаватор колёсный DOOSAN SOLAR 180', '/build/img/card-1.jpeg', './technics/ekskavator.html'],
    ekolHitachi210: ['Экскаватор колёсный HITACHI 210W', '/build/img/card-1.jpeg', './technics/ekskavator.html'],
    ekolHitachi160: ['Экскаватор колёсный HITACHI 160', '/build/img/card-1.jpeg', './technics/ekskavator.html'], 
    epogJCB1cx: ['Экскаватор погрузчик JCB 1cx', '/build/img/card-1.jpeg', './technics/ekskavator.html'],
    epogCase695: ['Экскаватор погрузчик CASE695', '/build/img/card-1.jpeg', './technics/ekskavator.html'],
    epogMTZ92: ['Экскаватор погрузчик МТЗ 92' ,'/build/img/card-1.jpeg', './technics/ekskavator.html'],
};

let all = {
    autokran: { 
        img: ['/build/img/ugra.jpg', '/build/img/maz.jpg', '/build/img/tadano.jpg'],
        title: [name.atkrnUgra[0],name.atkrnMaz[0], name.atkrTadano[0]],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['weight', 'boomLength', 'carryingСapacity'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        boomLength: ['7.6-16.5 м', '7.6-16.5 м', '7.6-16.5 м' ],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        link: ['./technics/autokran.html', './technics/autokran.html', './technics/autokran.html'],
    },
    mini: { 
        img: ['/build/img/card-1.jpeg', '/build/img/card-1.jpeg', '/build/img/card-1.jpeg'],
        title: [name.miniSunward[0], name.miniKubota[0], name.miniJCB[0]],
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
        img: ['/build/img/card-1.jpeg', '/build/img/card-1.jpeg', '/build/img/card-1.jpeg'],
        title: [name.smsvlKamaz6520[0], name.smsvlUral[0] ,name.smsvlKamaz65802[0]],
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
        title: [name.egusHitachi330[0], name.egusHitachi300[0], name.egusGCB160[0]],
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
        img: ['/build/img/card-1.jpeg', '/build/img/card-1.jpeg', '/build/img/card-1.jpeg',],
        title: [name.ekolDoosan[0], name.ekolHitachi210[0], name.ekolHitachi160[0]],
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
        img: ['/build/img/card-1.jpeg', '/build/img/card-1.jpeg', '/build/img/card-1.jpeg'],
        title: [name.epogJCB1cx[0], name.epogCase695[0], name.epogMTZ92[0]],
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
        let tbody = $("<tbody></tbody")
            .append(() => {
                let props ='';
                    for (let j = 0; j < nameTechnics.properties.length; j++) {
                        let prop = nameTechnics.properties[j];
                        props += `<tr><td class='text-dark text-left'>${propertiesCommon[nameTechnics.properties[j]]}</td><td class='text-dark text-right'>${nameTechnics[prop][i]}</td><tr>`;
                }
                return props;
            });
        let properties = $("<table class='table table-sm table-hover'></table>")
            .append(tbody);
        let bodyCard = $("<div class='card-body'></div")
            .append(properties)
            .append(`<div class='btn btn-secondary'><a href='${nameTechnics.link[i]}'>Узнать подробнее</a></div>`);
        let newCard = $("<div class='border-warning text-center'></div>")
            .append(`<h3 class='text-dark'>${nameTechnics.title[i]}</h3>`)
            .append(`<div class='card-header bg-warning '>${nameTechnics.price[i]} руб. за смену</div>`)
            .append(`<img class='card-image' src=${nameTechnics.img[i]} 'alt='экскаватор'>`)
            .append(bodyCard);
        
        let linkCard = $(`<a id='tech' class='card border-warning ' href='${nameTechnics.link[i]}'></a>`)
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
            if (selectedTechnic === null || selectedTechnic === 'allTechnics' ) {
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
    $("a.card").remove();
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

/*Наполняем страницу по технике*/
    if ($(".tech")) {
        let selector = $(".tech");
        let nameTech =  selector.attr("id");
        let partWord = nameTech.slice(0,4);
        let keyName = Object.keys(name);
        let techics = keyName.filter(name => name.startsWith(partWord));
        $(".tech")
        .append(`<img src=${name[nameTech][1]}>`); 
        let navMenu = $("<ul class='nav'></ul>")
            .append("<li><a href='#'>Главная</a></li>");
        $(".nav-menu")
            .append(navMenu);
        
    }
