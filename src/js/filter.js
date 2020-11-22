
/*Переменные*/

let propertiesCommon = { 

    beadLength: 'Длина борта, м',
    bodyVolume: 'Объем кузова, м3',
    bucketСapacity: 'Объём ковша, м3',
    boomLiftingCapacity: 'Грузоподъемность стрелы, тонн', 
    carryingСapacity: 'Грузоподъемность, тонн',
    bodyCapacity: 'Грузоподъемность кузова, тонн',
    diggingDepth: 'Максимальная глубина копания, м',
    diggingHeight: 'Высота копания, м',
    enginePower: 'Мощность двигателя, л.с.',
    frontBucketCapacity: 'Объем переднего ковша, м3',
    netEnginePower: 'Полезная мощность двигателя, кВт',
    liftingHeight: 'Высота выгрузки, м',
    maximumReachArrow: 'Максимальный вылет стрелы, м',
    ogee: 'Гусек, м',
    rearBucketCapacity: 'Объем заднего ковша, м3',
    turningRadius: 'Радиус поворота, м',
    turnRadius: 'Радиус поворота, м', 
    weight: 'Эксплуатационная масса, кг',
    boomLength: 'Длина стрелы, м',
    minimumReach: 'Грузоподъемность на минимальном вылете, т/м',
    maximumReach: 'Грузоподъемность на максимальном вылете, т/м'
};
//!!!!! ВНИМАТЕЛЬНО, БАЗА ТЕХНИКИ ЕЩЕ ЕСТЬ В techMenu.pug, при изменении нужно сверять
let name = {
    atkrnKAMAZVEZDEHOD: ['Автокран КАМАЗ "Галичанин" 25 тонн', '/build/img/atkrnKAMAZVEZDEHOD.webp', '/technics/autokrans/atkrnKAMAZVEZDEHOD.html'],
    atkrnMaz: ['Автокран МАЗ 14 тонн', '/build/img/atkrnMaz.webp', '/technics/autokrans/atkrnMaz.html'],
    atkrURAL55733: ['Автокран Урал КС-55733 ЧЕЛЯБИНЕЦ 32 тонны', '/build/img/atkrURAL55733.webp', '/technics/autokrans/atkrURAL55733.html'],
    atkrKAMAZ65115: ['АВТОКРАН КАМАЗ-65115 "КЛИНЦЫ" КС-55713-1К-3 25 ТОНН', '/build/img/atkrKAMAZ65115.webp', '/technics/autokrans/atkrKAMAZ65115.html'],
    atkrKAMAZ63501: ['АВТОКРАН КАМАЗ-63501 «КЛИНЦЫ» КС-65719-1К 40 ТОНН', '/build/img/atkrKAMAZ63501.webp', '/technics/autokrans/atkrKAMAZ63501.html'],
    
    mineKubota: ['Мини-экскаватор Kubota KX057-4', '/build/img/mineKubota.webp', '/technics/mini-excavatory/mineKubota.html'],
    mineHitachiEX30: ['Мини-экскаватор HITACHI EX30 UR2', '/build/img/mineHitachiEX30.webp', '/technics/mini-excavatory/mineHitachiEX30.html'],
    mineTakeuchiTB016: ['Мини-экскаватор TAKEUCHI TB016', '/build/img/mineTakeuchiTB016.webp', '/technics/mini-excavatory/mineTakeuchiTB016.html'],
    
    smsvlKamaz6520: ['Самосвал КАМАЗ 6520', '/build/img/smsvlKamaz6520.webp', '/technics/samosavls/smsvlKamaz6520.html'],
    smsvlKamaz65115: ['Самосвал КАМАЗ 65115', '/build/img/smsvlKamaz65115.webp', '/technics/samosavls/smsvlKamaz65115.html'],
    smsvlReanaultKerax: ['Самосвал RENAULT KERAX 8Х4', '/build/img/smsvlReanaultKerax.webp', '/technics/samosavls/smsvlReanaultKerax.html'],
    
    egusHitachi330: ['Экскаватор гусеничный HITACHI 330', '/build/img/egusHitachi330.webp', '/technics/excavatory-gusenichnye/egusHitachi330.html'],
    egusHitachi300: ['Экскаватор гусеничный HITACHI 300', '/build/img/egusHitachi300.webp', '/technics/excavatory-gusenichnye/egusHitachi300.html'],
    egusVOLVOEC240: ['Экскаватор гусеничный VOLVO EC 240 PRAIM', '/build/img/egusVOLVOEC240.webp', '/technics/excavatory-gusenichnye/egusVOLVOEC240.html'],
    egusVOLVOEC240LOng: ['Экскаватор гусеничный длиннорукий VOLVO EC 240', '/build/img/egusVOLVOEC240LOng.webp', '/technics/excavatory-gusenichnye/egusVOLVOEC240LOng.html'],
    
    ekolDoosan: ['Экскаватор колёсный DOOSAN SOLAR 180', '/build/img/ekolDoosan.webp', '/technics/excavatory-kolesnye/ekolDoosan.html'],
    ekolJCBJS200W: ['Экскаватор колёсный JCB JS200W', '/build/img/ekolJCBJS200W.webp', '/technics/excavatory-kolesnye/ekolJCBJS200W.html'],
    ekolVOLVOEW160: ['Экскаватор колёсный VOLVO EW 160', '/build/img/ekolVOLVOEW160.webp', '/technics/excavatory-kolesnye/ekolVOLVOEW160.html'], 
    
    epogTLB825: ['Экскаватор погрузчик terex TLB 825', '/build/img/epogTLB825.webp', '/technics/excavatory-pogruzchiki/epogTLB825.html'],
    epogJSB4CX: ['Экскаватор погрузчик JCB 4CX', '/build/img/epogJSB4CX.webp', '/technics/excavatory-pogruzchiki/epogJSB4CX.html'],
    epogTEREX860: ['Экскаватор погрузчик TEREX 860' ,'/build/img/epogTEREX860.webp', '/technics/excavatory-pogruzchiki/epogTEREX860.html'],
    
    teleskPogrBobcatT40170: ['Телескопический погрузчик BOBCAT T40170', '/build/img/teleskPogrBobcatT40170.webp', '/technics/teleskopicheskie-pogruzchiki/teleskPogrBobcatT40170.html' ],
    teleskPogrFaresinFH1442: ['Телескопический погрузчик FARESIN FH 14.42', '/build/img/teleskPogrFaresinFH1442.webp', '/technics/teleskopicheskie-pogruzchiki/teleskPogrFaresinFH1442.html' ],
    teleskPogrJCBAGRI: ['Телескопический погрузчик JCB AGRI 536-60', '/build/img/teleskPogrJCBAGRI.webp', '/technics/teleskopicheskie-pogruzchiki/teleskPogrJCBAGRI.html' ],
    
    minPogruzWECAN800D:  ['Мини-погрузчик WECAN 800D', '/build/img/minPogruzWECAN800D.webp', '/technics/mini-pogruzchiki/minPogruzWECAN800D.html' ],
    minPogruzTAKEUCHI:  ['Мини-погрузчик TAKEUCHI TL140', '/build/img/minPogruzTAKEUCHI.webp', '/technics/mini-pogruzchiki/minPogruzTAKEUCHI.html' ],
    minPogruzNEWHOLLANDL218:  ['Мини-погрузчик NEW HOLLAND L 218', '/build/img/minPogruzNEWHOLLANDL218.webp', '/technics/mini-pogruzchiki/minPogruzNEWHOLLANDL218.html' ],
    
    frontPogruzVOLVOL90F: ['Фронтальный погрузчик VOLVO L90F', '/build/img/frontPogruzVOLVOL90F.webp', '/technics/frontalnye-pogruzchiki/frontPogruzVOLVOL90F.html' ],
    frontPogruzLG936L: ['Фронтальный погрузчик LG936L', '/build/img/frontPogruzLG936L.webp', '/technics/frontalnye-pogruzchiki/frontPogruzLG936L.html' ],
    frontPogruzLG933L: ['Фронтальный погрузчик LG933L', '/build/img/frontPogruzLG933L.webp', '/technics/frontalnye-pogruzchiki/frontPogruzLG933L.html' ],
   
    mnpltrHD78: ['Манипулятор Hyundai HD 78', '/build/img/mnpltrHD78.webp', '/technics/manipulators/mnpltrHD78.html'],
    mnpltrHD120: ['Манипулятор Hyundai HD 120', '/build/img/mnpltrHD120.webp', '/technics/manipulators/mnpltrHD120.html'],
    mnpltrKamaz: ['Манипулятор КАМАЗ', '/build/img/mnpltrKamaz.webp', '/technics/manipulators/mnpltrKamaz.html'],

};

let all = {
    autokranM: { 
        img: [name.atkrnKAMAZVEZDEHOD[1],name.atkrnMaz[1], name.atkrURAL55733[1], name.atkrKAMAZ65115[1], name.atkrKAMAZ63501[1]],
        title: [name.atkrnKAMAZVEZDEHOD[0],name.atkrnMaz[0], name.atkrURAL55733[0], name.atkrKAMAZ65115[0], name.atkrKAMAZ63501[0]],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.'],
        price: [18000, 11000, 17000, 11000, 23000],
        properties: ['weight', 'enginePower', 'netEnginePower', 'maximumReachArrow', 'ogee', 'carryingСapacity'],
        weight: ['22000', '15000', '21300', '20500', '28400'  ],
        enginePower: ['280 ', '230', '230' , '240', '360'],
        netEnginePower: ['206', '-', '-', '-', '265' ],
        maximumReachArrow:['28', '14', '26.3', '21.7', '31'],
        ogee:['9', '7.5', '8', '9', '-'],
        carryingСapacity:['25', '14', '32', '25', '40'],
        link: [name.atkrnKAMAZVEZDEHOD[2],name.atkrnMaz[2], name.atkrURAL55733[2], name.atkrKAMAZ65115[2], name.atkrKAMAZ63501[2]],
    },
    mineM: { 
        img: [name.mineKubota[1], name.mineHitachiEX30[1], name.mineTakeuchiTB016[1]],
        title: [name.mineKubota[0], name.mineHitachiEX30[0], name.mineTakeuchiTB016[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [11000, 10000, 9500],
        properties: ['weight', 'bucketСapacity', 'diggingDepth', 'diggingHeight', 'enginePower', 'liftingHeight'],
        weight: ['5545', '3040', '1615' ],
        bucketСapacity: ['0.17','0.08', '0.038'],
        diggingDepth: ['3.89', '2.785', '2.175'],
        diggingHeight: ['5.83', '-', '1.715'],
        enginePower:['46', '19', '5.1'],
        liftingHeight:['4.16', '3.865', '2.575'],
        link: [name.mineKubota[2], name.mineHitachiEX30[2], name.mineTakeuchiTB016[2]],
        
    },
    samosvalM: { 
        img: [name.smsvlKamaz6520[1], name.smsvlKamaz65115[1] ,name.smsvlReanaultKerax[1]],
        title: [name.smsvlKamaz6520[0], name.smsvlKamaz65115[0] ,name.smsvlReanaultKerax[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [11200, 9000, 11200],
        properties: ['weight', 'enginePower', 'netEnginePower', 'carryingСapacity', 'turnRadius', 'bodyVolume'],
        weight: ['12950', '10050', '40000'],
        enginePower: ['342', '300', '412'],
        netEnginePower: ['251.7', '221', '-'],
        carryingСapacity:['20', '15', '32'],
        turnRadius:['9.3', '9', '-'],
        bodyVolume:['18', '10-12', '20'],
        link: [name.smsvlKamaz6520[2], name.smsvlKamaz65115[2] ,name.smsvlReanaultKerax[2]],
    },
    ekskGusenichM: { 
        img:  [name.egusHitachi330[1], name.egusHitachi300[1], name.egusVOLVOEC240[1], name.egusVOLVOEC240LOng[1]],
        title: [name.egusHitachi330[0], name.egusHitachi300[0], name.egusVOLVOEC240[0], name.egusVOLVOEC240LOng[0]],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.','amet consectetur adipisicing elit.' ],
        price: [18000, 18000, 14400, 17000],
        properties: ['weight', 'bucketСapacity', 'diggingDepth', 'enginePower', 'liftingHeight'],
        weight: ['32500', '29700', '25700',  '27900'],
        bucketСapacity: ['2', '2', '1.45', '0.5'],
        diggingDepth: ['8.18', '9.87', '14.347', '14.35'],
        enginePower: ['246','246','174', '185'],
        liftingHeight: ['7.63', '10.62', '12.579', '18.31' ],
        link:  [name.egusHitachi330[2], name.egusHitachi300[2], name.egusVOLVOEC240[2], name.egusVOLVOEC240LOng[2]],
    },
    ekskKolesM: { 
        img: [name.ekolDoosan[1], name.ekolJCBJS200W[1], name.ekolVOLVOEW160[1]],
        title: [name.ekolDoosan[0], name.ekolJCBJS200W[0], name.ekolVOLVOEW160[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [13600, 14000, 13600],
        properties: ['weight', 'bucketСapacity', 'diggingDepth', 'enginePower', 'netEnginePower', 'liftingHeight'],
        weight: ['17700', '22809', '17680' ],
        bucketСapacity: ['0.93', '1', '0.65'],
        diggingDepth: ['6.01', '6.4', '6.56'],
        enginePower: ['150', '172', '154'],
        netEnginePower:['-', '125', '-'],
        liftingHeight:['9.026', '7.3', '9.48'] ,
        link: [name.ekolDoosan[2], name.ekolJCBJS200W[2], name.ekolVOLVOEW160[2]],
    },
    ekskPogrM: { 
        img: [name.epogTLB825[1], name.epogJSB4CX[1], name.epogTEREX860[1]],
        title: [name.epogTLB825[0], name.epogJSB4CX[0], name.epogTEREX860[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 12000, 12000],
        properties: ['weight', 'frontBucketCapacity', 'rearBucketCapacity', 'diggingDepth', 'enginePower', 'netEnginePower', 'liftingHeight', 'carryingСapacity'],
        weight: ['8000', '8700', '8000', ],
        frontBucketCapacity:['1', '1.3', '1.1'],
        rearBucketCapacity:['0.18', '0.22', '0.233'],
        diggingDepth:['5.7', '5.3', '5.8', ],
        enginePower:['101', '100', '101'],
        netEnginePower:['-', '71', '-'],
        liftingHeight:['2.741', '2.64', '2.68'],
        carryingСapacity: ['3.2', '4.64', '3.46',  ],   
        link: [name.epogTLB825[2], name.epogJSB4CX[2], name.epogTEREX860[2]],
    },
    teleskPogrM: { 
        img: [name.teleskPogrBobcatT40170[1], name.teleskPogrFaresinFH1442[1], name.teleskPogrJCBAGRI[1]],
        title: [name.teleskPogrBobcatT40170[0], name.teleskPogrFaresinFH1442[0], name.teleskPogrJCBAGRI[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [14000, 13500, 13000],
        properties: ['weight', 'enginePower', 'maximumReachArrow', 'carryingСapacity'],
        weight: ['10970', '11400', '6999' ],
        enginePower: ['100', '102', '145'],
        maximumReachArrow: ['13','14', '3.43'],
        carryingСapacity:['4', '4.2', '3.6'],
        link: [name.teleskPogrBobcatT40170[2], name.teleskPogrFaresinFH1442[2], name.teleskPogrJCBAGRI[2]],
    },
    minPogruzM: { 
        img: [name.minPogruzWECAN800D[1], name.minPogruzTAKEUCHI[1], name.minPogruzNEWHOLLANDL218[1]],
        title: [name.minPogruzWECAN800D[0], name.minPogruzTAKEUCHI[0], name.minPogruzNEWHOLLANDL218[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [8500, 12000, 8000],
        properties: ['weight', 'bucketСapacity', 'enginePower', 'liftingHeight', 'carryingСapacity'],
        weight: ['2920', '4350', '2660' ],
        bucketСapacity: ['0.47', '0.458', '0.47'],
        enginePower: ['61', '60.3', '60'],
        liftingHeight:['2.445', '3.12', '2.377'],
        carryingСapacity:['0.8', '2.7' , '0.818'],
        link: [name.minPogruzWECAN800D[2], name.minPogruzTAKEUCHI[2], name.minPogruzNEWHOLLANDL218[2]],
    },
    frontPogruzM: { 
        img: [name.frontPogruzVOLVOL90F[1], name.frontPogruzLG936L[1], name.frontPogruzLG933L[1]],
        title: [name.frontPogruzVOLVOL90F[0], name.frontPogruzLG936L[0], name.frontPogruzLG933L[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 12000, 12000],
        properties: ['weight', 'bucketСapacity', 'enginePower', 'liftingHeight', 'carryingСapacity', 'turnRadius'],
        weight: ['15170', '10700', '10700'],
        bucketСapacity: ['2.7', '1.8', '1.8'],
        enginePower: ['175', '125', '125'],
        liftingHeight:['2.85', '2.95', '2.95'],
        carryingСapacity:['5.5', '3', '3'],
        turnRadius:['5.92', '5.912', '5.912'],
        link: [name.frontPogruzVOLVOL90F[2], name.frontPogruzLG936L[2], name.frontPogruzLG933L[2]],
    },
    mnpltrM: { 
        img: [name.mnpltrHD78[1], name.mnpltrHD120[1], name.mnpltrKamaz[1]],
        title: [name.mnpltrHD78[0], name.mnpltrHD120[0], name.mnpltrKamaz[0]],
        description: ['amet consectetur adipisicing elit.'],
        price: [7400, 11600, 14000],
        properties: ['bodyCapacity',  'boomLiftingCapacity', 'beadLength','boomLength', 'minimumReach', 'maximumReach'],
        bodyCapacity: ['3', '10' , '12',],
        boomLiftingCapacity: ['2', '5', '7',],
        beadLength: ['5', '8.5', '7', ],
        boomLength:['10', '13.5', '20', ],
        minimumReach:['3/2',  '5/2.3', '7/2.4',],
        maximumReach:['0.3/10',  '0.8/13.5', '0.35/20',],
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
                let preProperties = 4;
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
            .append(`<div class='btn btn-information'><a href='${nameTechnics.link[i]}'>Узнать подробнее</a></div>`);
        let newCard = $("<div class='border-warning text-center'></div>")
            .append(`<img class='card-image' src=${nameTechnics.img[i]} alt='${nameTechnics.title[i]}'>`)
            .append(`<h3 class='text-dark'>${nameTechnics.title[i]}</h3>`)
            .append(`<div class='card-header'>от ${nameTechnics.price[i]} р. за смену</div>`)
            .append(bodyCard);
        
        let linkCard = $(`<a id='tech' class='card border-warning ' href='${nameTechnics.link[i]}'></a>`)
            .append(newCard);
        $(".technics__menu-item")
            .append(linkCard); 
    }
}

/*Создаем список техники по умолчанию на страницах "Главная" и "Техника" */
    let defaultList = (selectedTechnic === null || selectedTechnic === 'allTechnics' ) ? all.autokranM: all[selectedTechnic];
    let choiceList = (selectedTechnic === null || selectedTechnic === 'allTechnics') ? 'autokranM': selectedTechnic;
    if ($('#mainPageCatalog').length !==0) {  
            $(`#${choiceList}`).addClass("techs-active");
            getTechnics(defaultList);
    }
    else if ($('#allTechnics').length !==0) {
            if (selectedTechnic === 'allTechnics' ) {
                for (let key in all) {
                    let defaultList = all[key];
                    $('#allTechnics').addClass("techs-active");
                    getTechnics(defaultList);
                }
            }
            else {
                $(`#${choiceList}`).addClass("techs-active");
                getTechnics(defaultList);
            }
    }
    else if ($('#autokrans').length !==0 ) {
        $('#autokrans').addClass("techs-active");
        getTechnics(all.autokranM);
    }
    else if ($('#excavatory-gusenichnye').length !==0 ) {
        $('#excavatory-gusenichnye').addClass("techs-active");
        getTechnics(all.ekskGusenichM);
    }
    else if ($('#excavatory-kolesnye').length !==0 ) {
        $('#excavatory-kolesnye').addClass("techs-active");
        getTechnics(all.ekskKolesM);
    }
    else if ($('#excavatory-pogruzchiki').length !==0 ) {
        $('#excavatory-pogruzchiki').addClass("techs-active");
        getTechnics(all.ekskPogrM);
    }

    else if ($('#frontalnye-pogruzchiki').length !==0 ) {
        $('#frontalnye-pogruzchiki').addClass("techs-active");
        getTechnics(all.frontPogruzM);
    }

    else if ($('#mini-excavatory').length !==0 ) {
        $('#mini-excavatory').addClass("techs-active");
        getTechnics(all.mineM);
    }

    else if ($('#mini-pogruzchiki').length !==0 ) {
        $('#mini-pogruzchiki').addClass("techs-active");
        getTechnics(all.minPogruzM);
    }

    else if ($('#manipulators').length !==0 ) {
        $('#manipulators').addClass("techs-active");
        getTechnics(all.mnpltrM);
    }

    else if ($('#samosavls').length !==0 ) {
        $('#samosavls').addClass("techs-active");
        getTechnics(all.samosvalM);
    }

    else if ($('#teleskopicheskie-pogruzchiki').length !==0 ) {
        $('#teleskopicheskie-pogruzchiki').addClass("techs-active");
        getTechnics(all.teleskPogrM);
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


/*Наполняем страницу техники*/
    
if ($(".tech")) {

        /*Полифиллл startsWith */
        if (!String.prototype.startsWith) {
            Object.defineProperty(String.prototype, 'startsWith', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(searchString, position) {
                position = position || 0;
                return this.indexOf(searchString, position) === position;
            }
            });
        }
        let selector = $(".tech");
        let nameTech =  selector.attr("id");
        let partWord = nameTech.slice(0,4);
        let keyName = Object.keys(name);
        let techics = keyName.filter(name => name.startsWith(partWord));
        $(".tech")
        .append(`<img src=${name[nameTech][1]} alt='${name[nameTech][0]}'>`); 
        let navMenu = $("<ul class='technic__selector'></ul>")
            .append( () => techics.map(technic => {
                let blockMenu='';
                if (nameTech === technic) {
                    blockMenu = `<li class='btn technic_active'><a class='nav-link' href=${name[technic][2]}>${name[technic][0]}</a></li>`;
                }
                else {
                    blockMenu = `<li class='btn btn-light technic_passive '><a class='nav-link' href=${name[technic][2]}>${name[technic][0]}</a></li>`;
                }
                return blockMenu;
            }));
        $(".nav-menu")
            .append(navMenu);

        //Наполняем таблицу свойствами
        //Полифилл findIndex
        if (!Array.prototype.findIndex) {
            Array.prototype.findIndex = function(predicate) {
            if (this == null) {
            throw new TypeError('Array.prototype.findIndex called on null or undefined');
            }
            if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;
        
            for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return i;
            }
            }
            return -1;
        };
        }
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
                props +=`<tr class='bg-secondary'><th class='text-left'>СТОИМОСТЬ</th><th class='text-right'> от ${all[typeOfTech].price[indexOfTech]} руб. ЗА СМЕНУ<br> (8 ЧАСОВ)</th></tr>`;
                return props;
            });
        let table =$("<table class='table table-hover'></table")
            .append(tbody);
        selectType = $(".card-body")
            .append(table);
    }