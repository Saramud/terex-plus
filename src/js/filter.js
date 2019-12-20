const all = {
    autokran: { 
        img: ['/build/img/card-1.jpeg', '/build/img/card-1.jpeg', '/build/img/card-1.jpeg'],
        title: ['Автокран','Автокран башенный', 'Автокран башенный'],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000]
    },
    mini: { 
        img: ['/build/img/card-1.jpeg'],
        title: ['Миниэкскаватор'],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000]
    },
    samosval: { 
        img: ['/build/img/card-1.jpeg'],
        title: ['Самосвал'],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000]
    },
    ekskGusenich: { 
        img: ['/build/img/card-1.jpeg', '/build/img/card-1.jpeg', '/build/img/card-1.jpeg'],
        title: ['Экскаватор гусеничный', 'Автокран башенный', 'Автокран башенный'],
        description: ['amet consectetur adipisicing elit.', 'amet consectetur adipisicing elit.','amet consectetur adipisicing elit.' ],
        price: [12000, 13000, 11000]
    },
    ekskKoles: { 
        img: ['/build/img/card-1.jpeg'],
        title: ['Экскаватор колёсный'],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000]
    },
    ekskPogr: { 
        img: ['/build/img/card-1.jpeg'],
        title: ['Экскаватор погрузчик'],
        description: ['amet consectetur adipisicing elit.'],
        price: [12000, 13000, 11000]
    },
};
/*Создаем список техники на первом экране по умолчанию*/
$('#autokran').addClass("techs-active");
let defaultList = all.autokran;
for (let i = 0; i < defaultList.img.length; i+=1) {
    let bodyCard = $("<div class='card-body'></div")
        .append(`<p>${defaultList.description[i]}</p>`)
        .append("<div class='btn btn-secondary'><a href='#'>Узнать подробнее</a></div>");
    let newCard = $("<div class='card border-warning text-center'></div>")
        .append(`<h3>${defaultList.title[i]}</h3>`)
        .append(`<div class='card-header bg-warning '>${defaultList.price[i]} руб. за смену</div>`)
        .append(`<img class='card-img-top card__img' src=${defaultList.img[i]} 'alt='экскаватор'>`)
        .append(bodyCard);
    $(".technics__menu-item")
        .append(newCard); 
}

/*Меняем список техники по клику*/
$(".techs").click(function() {
    let selector = $(this);
    let ident = selector.attr("id");
    $(".techs.techs-active").removeClass("techs-active");
    $(selector).addClass("techs-active");

    $("div.card").remove();
    let selectList = all[ident];
    for (let i = 0; i < selectList.img.length; i+=1) {
        let bodyCard = $("<div class='card-body'></div")
            .append(`<p>${selectList.description[i]}</p>`)
            .append("<div class='btn btn-secondary'><a href='#'>Узнать подробнее</a></div>");
        let newCard = $("<div class='card border-warning text-center'></div>")
            .append(`<h3>${selectList.title[i]}</h3>`)
            .append(`<div class='card-header bg-warning '>${selectList.price[i]} руб. за смену</div>`)
            .append(`<img class='card-img-top card__img' src=${selectList.img[i]} 'alt='экскаватор'>`)
            .append(bodyCard);
        $(".technics__menu-item")
            .append(newCard); 
    }
});