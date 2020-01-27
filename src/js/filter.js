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
    atkrnKAMAZVEZDEHOD: ['Автокран КАМАЗ ВЕЗДЕХОД "Галичанин" 25 тонн', '/build/img/atkrnKAMAZVEZDEHOD.jpg', '/technics/autokranUgra.html'],
    atkrnMaz: ['Автокран МАЗ 14 тонн', '/build/img/atkrnMaz.jpg', '/technics/autokranMAZ.html'],
    atkrURAL55733: ['Автокран Урал КС-55733 ЧЕЛЯБИНЕЦ 32 тонны', '/build/img/atkrURAL55733.jpg', '/technics/autokranTadano.html'],
    atkrKAMAZ65115: ['Автокран КАМАЗ-65115 25 тонн', '/build/img/atkrKAMAZ65115.jpg', '/technics/autokranTadano.html'],
    atkrKAMAZ63501: ['Автокран КАМАЗ-63501 40 тонн', '/build/img/atkrKAMAZ63501.jpg', '/technics/autokranTadano.html'],
    mineKubota: ['Мини-экскаватор Kubota KX057-4', '/build/img/mineKubota.jpg', '/technics/autokran.html'],
    mineHitachiEX30: ['Мини-экскаватор HITACHI EX30 UR2', '/build/img/mineHitachiEX30.jpg', '/technics/autokran.html'],
    mineTakeuchiTB016: ['Мини-экскаватор TAKEUCHI TB016', '/build/img/mineTakeuchiTB016.jpg', '/technics/autokran.html'],
    smsvlKamaz6520: ['Самосвал КАМАЗ 6520', '/build/img/smsvlKamaz6520.jpg', '/technics/samosval.html'],
    smsvlKamaz65115: ['Самосвал КАМАЗ 65115', '/build/img/smsvlKamaz65115.jpg', '/technics/samosval.html'],
    smsvlReanaultKerax: ['Самосвал RENAULT KERAX 8Х4', '/build/img/smsvlReanaultKerax.jpg', '/technics/samosval.html'],
    egusHitachi330: ['Экскаватор гусеничный HITACHI 330', '/build/img/egusHitachi330.jpg', '/technics/ekskavator.html'],
    egusHitachi300: ['Экскаватор гусеничный HITACHI 300', '/build/img/egusHitachi300.jpg', '/technics/ekskavator.html'],
    egusVOLVOEC240: ['Экскаватор гусеничный VOLVO EC 240 PRAIM', '/build/img/egusVOLVOEC240.jpg', '/technics/ekskavator.html'],
    egusVOLVOEC240LOng: ['Экскаватор гусеничный длиннорукий VOLVO EC 240', '/build/img/egusVOLVOEC240LOng.jpg', '/technics/ekskavator.html'],
    ekolDoosan: ['Экскаватор колёсный DOOSAN SOLAR 180', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    ekolJCBJS200W: ['Экскаватор колёсный JCB JS200W', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    ekolVOLVOEW160: ['Экскаватор колёсный VOLVO EW 160', '/build/img/card-1.jpeg', '/technics/ekskavator.html'], 
    epogTLB825: ['Экскаватор погрузчик TLB 825', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    epogJSB4CX: ['Экскаватор погрузчик JCB 4CX', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    epogTEREX860: ['Экскаватор погрузчик TEREX 860' ,'/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    teleskPogrBobcatT40170: ['Телескопический погрузчик BOBCAT T40170', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    teleskPogrFaresinFH1442: ['Телескопический погрузчик FARESIN FH 14.42', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    teleskPogrJCBAGRI: ['Телескопический погрузчик JCB AGRI 536-60', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    minPogruzWECAN800D:  ['Мини-погрузчик WECAN 800D', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    minPogruzTAKEUCHI:  ['Мини-погрузчик TAKEUCHI TL140', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    minPogruzNEWHOLLANDL218:  ['Мини-погрузчик NEW HOLLAND L 218', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    frontPogruzVOLVOL90F: ['Фронтальный погрузчик VOLVO L90F', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    frontPogruzLG936L: ['Фронтальный погрузчик LG936L', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    frontPogruzLG933L: ['Фронтальный погрузчик LG933L', '/build/img/card-1.jpeg', '/technics/ekskavator.html' ],
    mnpltrHD78: ['Манипулятор Hyundai HD 78', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    mnpltrHD120: ['Манипулятор Hyundai HD 120', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],
    mnpltrKamaz: ['Манипулятор КАМАЗ', '/build/img/card-1.jpeg', '/technics/ekskavator.html'],

};

let all = {
    autokran: { 
        img: [name.atkrnKAMAZVEZDEHOD[1],name.atkrnMaz[1], name.atkrURAL55733[1], name.atkrKAMAZ65115[1], name.atkrKAMAZ63501[1]],
        title: [name.atkrnKAMAZVEZDEHOD[0],name.atkrnMaz[0], name.atkrURAL55733[0], name.atkrKAMAZ65115[0], name.atkrKAMAZ63501[0]],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.'],
        price: [12000, 13000, 2500, 13000, 250000],
        properties: ['weight', 'boomLength', 'carryingСapacity', 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг', '32500 кг', '32500 кг'  ],
        boomLength: ['7.6-16.5 м', '7.6-16.5 м', '7.6-16.5 м' , '7.6-16.5 м', '7.6-16.5 м'],
        carryingСapacity: ['20 т', '20 т', '20 т', '20 т', '20 т' ],
        some1:['4', '5', '6', '5', '6'],
        some2:['4', '5', '6', '5', '6'],
        some3:['4', '5', '6', '5', '6'],
        link: [name.atkrnKAMAZVEZDEHOD[2],name.atkrnMaz[2], name.atkrURAL55733[2], name.atkrKAMAZ65115[2], name.atkrKAMAZ63501[2]],
    },
    mine: { 
        img: [name.mineKubota[1], name.mineHitachiEX30[1], name.mineTakeuchiTB016[1]],
        title: [name.mineKubota[0], name.mineHitachiEX30[0], name.mineTakeuchiTB016[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000, , 11000],
        properties: ['weight', 'bucketСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг', '32500 кг' ],
        bucketСapacity: ['0.04 м.куб','0.04 м.куб', '0.04 м.куб', '0.04 м.куб'],
        liftingHeight: ['2155 см', '2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6', '6'],
        some2:['4', '5', '6', '6'],
        some3:['4', '5', '6', '6'],
        link: [name.mineKubota[2], name.mineHitachiEX30[2], name.mineTakeuchiTB016[2]],
        
    },
    samosval: { 
        img: [name.smsvlKamaz6520[1], name.smsvlKamaz65115[1] ,name.smsvlReanaultKerax[1]],
        title: [name.smsvlKamaz6520[0], name.smsvlKamaz65115[0] ,name.smsvlReanaultKerax[0]],
        description: ['amet consectetur adipisicing elit.'],
        properties: ['weight', 'speed', 'carryingСapacity', 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг' ],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        speed: ['75 км/ч', '75 км/ч', '75 км/ч'],
        price: [12000, 13000, 11000],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.smsvlKamaz6520[2], name.smsvlKamaz65115[2] ,name.smsvlReanaultKerax[2]],
    },
    ekskGusenich: { 
        img:  [name.egusHitachi330[1], name.egusHitachi300[1], name.egusVOLVOEC240[1], name.egusVOLVOEC240LOng[1]],
        title: [name.egusHitachi330[0], name.egusHitachi300[0], name.egusVOLVOEC240[0], name.egusVOLVOEC240LOng[0]],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.','amet consectetur adipisicing elit.' ],
        properties: ['weight', 'bucketСapacity', 'trackWidth', 'liftingHeight', 'diggingDepth' , 'some1', 'some2', 'some3'],
        weight: ['32500 кг', '32500 кг', '32500 кг',  '32500 кг'],
        bucketСapacity: ['0.05 м.куб','0.04 м.куб', '0.05 м.куб', '0.05 м.куб'],
        trackWidth: ['800 мм', '800 мм','800 мм','800 мм'],
        liftingHeight: ['2155 см', '2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см', '2155 см'],
        price: [12000, 13000, 11000, 11000],
        some1:['4', '5', '6', '6'],
        some2:['4', '5', '6', '6'],
        some3:['4', '5', '6', '6'],
        link:  [name.egusHitachi330[2], name.egusHitachi300[2], name.egusVOLVOEC240[2], name.egusVOLVOEC240LOng[2]],
    },
    ekskKoles: { 
        img: [name.ekolDoosan[1], name.ekolJCBJS200W[1], name.ekolVOLVOEW160[1]],
        title: [name.ekolDoosan[0], name.ekolJCBJS200W[0], name.ekolVOLVOEW160[0]],
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
        link: [name.ekolDoosan[2], name.ekolJCBJS200W[2], name.ekolVOLVOEW160[2]],
    },
    ekskPogr: { 
        img: [name.epogTLB825[1], name.epogJSB4CX[1], name.epogTEREX860[1]],
        title: [name.epogTLB825[0], name.epogJSB4CX[0], name.epogTEREX860[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['carryingСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.epogTLB825[2], name.epogJSB4CX[2], name.epogTEREX860[2]],
    },
    teleskPogr: { 
        img: [name.teleskPogrBobcatT40170[1], name.teleskPogrFaresinFH1442[1], name.teleskPogrJCBAGRI[1]],
        title: [name.teleskPogrBobcatT40170[0], name.teleskPogrFaresinFH1442[0], name.teleskPogrJCBAGRI[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['carryingСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.teleskPogrBobcatT40170[2], name.teleskPogrFaresinFH1442[2], name.teleskPogrJCBAGRI[2]],
    },
    minPogruz: { 
        img: [name.minPogruzWECAN800D[1], name.minPogruzTAKEUCHI[1], name.minPogruzNEWHOLLANDL218[1]],
        title: [name.minPogruzWECAN800D[0], name.minPogruzTAKEUCHI[0], name.minPogruzNEWHOLLANDL218[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['carryingСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.minPogruzWECAN800D[2], name.minPogruzTAKEUCHI[2], name.minPogruzNEWHOLLANDL218[2]],
    },
    frontPogruz: { 
        img: [name.frontPogruzVOLVOL90F[1], name.frontPogruzLG936L[1], name.frontPogruzLG933L[1]],
        title: [name.frontPogruzVOLVOL90F[0], name.frontPogruzLG936L[0], name.frontPogruzLG933L[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['carryingСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.frontPogruzVOLVOL90F[2], name.frontPogruzLG936L[2], name.frontPogruzLG933L[2]],
    },
    mnpltr: { 
        img: [name.mnpltrHD78[1], name.mnpltrHD120[1], name.mnpltrKamaz[1]],
        title: [name.mnpltrHD78[0], name.mnpltrHD120[0], name.mnpltrKamaz[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000],
        properties: ['carryingСapacity', 'liftingHeight', 'diggingDepth', 'some1', 'some2', 'some3'],
        carryingСapacity: ['20 т', '20 т', '20 т' ],
        liftingHeight: ['2155 см', '2155 см', '2155 см'],
        diggingDepth: ['2155 см', '2155 см', '2155 см'],
        some1:['4', '5', '6'],
        some2:['4', '5', '6'],
        some3:['4', '5', '6'],
        link: [name.mnpltrHD78[2], name.mnpltrHD120[2], name.mnpltrKamaz[2]],
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
