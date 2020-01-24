/*Переменные*/
let pos;
let propertiesCommon = { 
    weight: 'Вес',
    boomLength: 'Длина стрелы',
    carryingСapacity: 'Грузоподъемность',
    bucketСapacity: 'Объём ковша',
    liftingHeight: 'Высота выгрузки',
    diggingDepth: 'Глубина копания',
    speed: 'Скорость',
    trackWidth: 'Ширина гусениц',
    some1: 'Что-то',
    some2: 'Что-то2',
    some3: 'Что-то3'
};

let name = {
    atkrnUgra: ['Гусеничный кран югра 4671', '/build/img/ugra.jpg', '/technics/autokranUgra.html'],
    atkrnMaz: ['Автокран МАЗ', '/build/img/maz.jpg', '/technics/autokranMAZ.html'],
    atkrTadano: ['Автокран Tadano GR-550EX', '/build/img/tadano.jpg', '/technics/autokranTadano.html'],
    miniSunward: ['Миниэкскаватор Sunward swe-017', '/build/img/card-1.jpeg', '/technics/autokran.html'],
    miniKubota: ['Миниэкскаватор Kubota KX36-3', '/build/img/card-1.jpeg', '/technics/autokran.html'],
    miniJCB: ['Миниэкскаватор JSB 8018', '/build/img/card-1.jpeg', '/technics/autokran.html'],
    smsvlKamaz6520: ['Самосвал КАМАЗ 6520', '/build/img/card-1.jpeg', '/technics/samosval.html'],
    smsvlUral: ['Самосвал Урал 6х6', '/build/img/card-1.jpeg', '/technics/samosval.html'],
    smsvlKamaz65802: ['Самосвал КАМАЗ 65802-27', '/build/img/card-1.jpeg', '/technics/samosval.html'],
    egusHitachi330: ['Экскаватор гусеничный HITACHI 330', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    egusHitachi300: ['Экскаватор гусеничный HITACHI 300', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    egusGCB160: ['Экскаватор гусеничный GCB 160', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    ekolDoosan: ['Экскаватор колёсный DOOSAN SOLAR 180', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    ekolHitachi210: ['Экскаватор колёсный HITACHI 210W', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    ekolHitachi160: ['Экскаватор колёсный HITACHI 160', '/build/img/card-1.jpeg', '/technics/ekskavator.html'], 
    epogJCB1cx: ['Экскаватор погрузчик JCB 1cx', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    epogCase695: ['Экскаватор погрузчик CASE695', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    epogMTZ92: ['Экскаватор погрузчик МТЗ 92' ,'/build/img/card-1.jpeg', '/technics/ekskavator.html'],
};

let all = {
    autokran: { 
        img: [name.atkrnUgra[1],name.atkrnMaz[1], name.atkrTadano[1]],
        title: [name.atkrnUgra[0],name.atkrnMaz[0], name.atkrTadano[0]],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.'],
        price: [12000, 13000, 25000],
        properties: ['weight', 'boomLength', 'carryingСapacity', 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        boomLength: ['7.6-16.5 м', '7.6-16.5 м', '7.6-16.5 м' ],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.atkrnUgra[2],name.atkrnMaz[2], name.atkrTadano[2]],
    },
    mini: { 
        img: [name.miniSunward[1], name.miniKubota[1], name.miniJCB[1]],
        title: [name.miniSunward[0], name.miniKubota[0], name.miniJCB[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['weight', 'bucketСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        bucketСapacity: ['0.04 м.куб','0.04 м.куб', '0.04 м.куб'],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.miniSunward[2], name.miniKubota[2], name.miniJCB[2]],
        
    },
    samosval: { 
        img: [name.smsvlKamaz6520[1], name.smsvlUral[1] ,name.smsvlKamaz65802[1]],
        title: [name.smsvlKamaz6520[0], name.smsvlUral[0] ,name.smsvlKamaz65802[0]],
        description: ['amet consectetur adipisicing elit.'],
        properties: ['weight', 'speed', 'carryingСapacity', 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        speed: ['75 км/ч', '75 км/ч', '75 км/ч'],
        price: [12000, 13000, 11000],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.smsvlKamaz6520[2], name.smsvlUral[2] ,name.smsvlKamaz65802[2]],
    },
    ekskGusenich: { 
        img:  [name.egusHitachi330[1], name.egusHitachi300[1], name.egusGCB160[1]],
        title: [name.egusHitachi330[0], name.egusHitachi300[0], name.egusGCB160[0]],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.','amet consectetur adipisicing elit.' ],
        properties: ['weight', 'bucketСapacity', 'trackWidth', 'liftingHeight', 'diggingDepth' , 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        bucketСapacity: ['0.05 м.куб','0.04 м.куб', '0.05 м.куб'],
        trackWidth: ['800 мм', '800 мм','800 мм'],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        price: [12000, 13000, 11000],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link:  [name.egusHitachi330[2], name.egusHitachi300[2], name.egusGCB160[2]],
    },
    ekskKoles: { 
        img: [name.ekolDoosan[1], name.ekolHitachi210[1], name.ekolHitachi160[1]],
        title: [name.ekolDoosan[0], name.ekolHitachi210[0], name.ekolHitachi160[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['weight', 'bucketСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        bucketСapacity: ['0.04 м.куб','0.04 м.куб', '0.04 м.куб'],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.ekolDoosan[2], name.ekolHitachi210[2], name.ekolHitachi160[2]],
    },
    ekskPogr: { 
        img: [name.epogJCB1cx[1], name.epogCase695[1], name.epogMTZ92[1]],
        title: [name.epogJCB1cx[0], name.epogCase695[0], name.epogMTZ92[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['carryingСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.epogJCB1cx[2], name.epogCase695[2], name.epogMTZ92[2]],
    },
};


let selectedTechnic = localStorage.getItem('selected'); //переменная необходима для запоминания выбора техники посетителя

/* Функция фильтрации*/
const getTechnics = (nameTechnics) => {
    for (let i = 0; i < nameTechnics.img.length; i+=1) {        
        let tbody = $("<tbody></tbody")
            .append(() => {
                let props ='';
                let preProperties = 5;
                    for (let j = 0; j < preProperties; j++) {
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
        let navMenu = $("<ul class='technic__selector'></ul>")
            .append( () => techics.map(technic => {
                let blockMenu='';
                if (nameTech === technic) {
                    blockMenu = `<li class='btn btn-primary technic_active'><a class='nav-link text-white' href=${name[technic][2]}>${name[technic][0]}</a></li>`;
                }
                else {
                    blockMenu = `<li class='btn btn-primary '><a class='nav-link text-white' href=${name[technic][2]}>${name[technic][0]}</a></li>`;
                }
                return blockMenu;
            }));
        $(".nav-menu")
            .append(navMenu);

        //Наполняем таблицу свойствами
        
        let selectType = $(".card-body");
        let typeOfTech = selectType.attr("id"); 
        let arrTech = all[typeOfTech].title;
        let indexOfTech = arrTech.findIndex(item => item === name[nameTech][0]); 
        let props ='';
        let tbody = $("<tbody class='tbody'></tbody>")
            .append(() => {
                    for (let j = 0; j < all[typeOfTech].properties.length; j++) {
                        let prop = all[typeOfTech].properties[j];
                        props += `<tr><td class='text-dark text-left'>${propertiesCommon[all[typeOfTech].properties[j]]}</td><th class='text-dark text-right'>${all[typeOfTech][prop][indexOfTech]}</th></tr>`;
                    }
                props +=`<tr class='bg-secondary'><th class='text-left text-white'>Стоимость</th><th class='text-white text-right'>${all[typeOfTech].price[indexOfTech]}р. за смену (8 часов)</th></tr>`;
                return props;
            });
        let table =$("<table class='table table-hover'></table")
            .append(tbody);
        selectType = $(".card-body")
            .append(table);
    }
