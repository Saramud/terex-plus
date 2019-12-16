const all = {
    autokran: { 
        img: '/build/img/card-1.jpeg',
        title: 'Автокран',
        description: 'amet consectetur adipisicing elit.'
    },
    mini: { 
        img: '/build/img/card-1.jpeg',
        title: 'Миниэкскаватор',
        description: 'amet consectetur adipisicing elit.'
    },
    samosval: { 
        img: '/build/img/card-1.jpeg',
        title: 'Самосвал',
        description: 'amet consectetur adipisicing elit.'
    },
    ekskGusenich: { 
        img: '/build/img/card-1.jpeg',
        title: 'Экскаватор гусеничный',
        description: 'amet consectetur adipisicing elit.'
    },
    ekskKoles: { 
        img: '/build/img/card-1.jpeg',
        title: 'Экскаватор колёсный',
        description: 'amet consectetur adipisicing elit.'
    },
    ekskPogr: { 
        img: '/build/img/card-1.jpeg',
        title: 'Экскаватор погрузчик',
        description: 'amet consectetur adipisicing elit.'
    },
};


$(".techs").click(function() {
    let selectors = (".techs");
    let selector = $(this);
    let ident = selector.attr("id");
    $(".techs.techs-active").removeClass("techs-active");
    $(selector).addClass("techs-active");

    $(function() {
        $("div.card").remove();
        let z = all[ident];

        let bodyCard = $("<div class='card-body'></div")
            .append(`<h3>${z.title}</h3>`)
            .append(`<p>${z.description}</p>`);

        let newCard = $("<div class=' card col-md-6 col-lg-3'></div>")
            .append(`<img class='card-img-top' src=${z.img} 'alt='экскаватор'>`)
            .append(bodyCard);
        $(".technics__menu-item")
            .append(newCard); 
    });
});