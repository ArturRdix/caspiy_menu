//Холодні закуски
const menuIceSnackItems = [
    {
        name: "Свіжі овочі та зелень",
        weight: "550",
        price: "100"
    },
    {
        name: "Асорті соління",
        weight: "350",
        price: "120"
    },
    {
        name: "Капрезе",
        description: "помідор, моцарелла, базилік, соус «Песто»",
        weight: "350",
        price: "160"
    },
    {
        name: "Рулетики з баклажанів",
        description: "смажені баклажани з начинкою з волоського горіха, соусу та часнику",
        weight: "200",
        price: "140"
    },
    {
        name: "Сирне плато",
        description: "сири: пармезан, дор-блю, брі, моцарелла, радомер, мед, м’ята, виноград, волоський горіх",
        weight: "500",
        price: "500"
    },
    {
        name: "Оселедець з картоплею",
        weight: "350",
        price: "100"
    },
    {
        name: "Тартар із лосося",
        weight: "250",
        price: "230"
    },
    {
        name: "Тартар із телятини",
        weight: "250",
        price: "190"
    },
    {
        name: "Тарілка домашнього сала",
        description: "сало солене, сало запечене, сало копчене, грінки, хрін",
        weight: "150/80",
        price: "150"
    },
    {
        name: "Бастурма",
        weight: "100",
        price: "80"
    }
];

//Гарячі закуски
const menuHotSnackItems = [
    {
        name: "Сулугуні в сухарях панко з солодко-гострим соусом",
        weight: "150/50",
        price: "100"
    },
    {
        name: "Кутаби з бараниною/телятиною",
        weight: "180",
        price: "90"
    },
    {
        name: "Кутаби з зеленню та сиром",
        weight: "180",
        price: "90"
    },
    {
        name: "Долма",
        description: "баранина, рис, цибуля, зелень у виноградному листі, соус",
        weight: "200/50",
        price: "250"
    }
];

//Салати
const menuSalatItems = [
    {
        name: "«Чабан»",
        description: "помідор, огірок, болгарський перець, цибуля, зелень, оливкова олія",
        weight: "250",
        price: "80"
    },
    {
        name: "«Грецький»",
        description: "помідор, огірок, болгарський перець, сир фета, маслини, мікс салат, оливкова олія",
        weight: "250",
        price: "110"
    },
    {
        name: "Теплий салат із овочів",
        description: "баклажан, помідор чері, болгарський перець, печериці, стебло селери, мікс салат, кунжутна олія",
        weight: "250",
        price: "120"
    },
    {
        name: "«Цезар» класичний",
        description: "куряче філе, бекон, салат айсберг, помідор чері, пармезан, сухарі, соус «Цезар»",
        weight: "250",
        price: "140"
    },
    {
        name: "«Цезар» з лососем і креветками",
        weight: "350",
        price: "280"
    },
    {
        name: "Салат з лососем",
        description: "лосось с/с, сир філадельфія, апельсин, мікс салат, лимонний сік, оливкова олія",
        weight: "250",
        price: "190"
    },
    {
        name: "Теплий салат з телятиною",
        description: "філе телятини, помідор чері, мікс салат, соус",
        weight: "250",
        price: "190"
    },
    {
        name: "«Каспій»",
        description: "лосось, сібас, креветки, мідії, авокадо, мікс салат, оливкова олія",
        weight: "250",
        price: "300"
    },

];

//Основні страви
const menuMainDishes = [
    {
        name: "Сібас із креветками",
        weight: "200/150",
        price: "310"
    },
    {
        name: "Лосось з овочами у вершковому соусі",
        weight: "180/170",
        price: "320"
    },
    {
        name: "Курча «Чкмерулі»",
        description: "курча запечене у вершковому соусі",
        weight: "1 шт.",
        price: "280"
    },
    {
        name: "Качка з овочами",
        weight: "150/200",
        price: "290"
    },
    {
        name: "Стейк із курятини",
        weight: "100",
        price: "80"
    },
    {
        name: "Качина грудка під ягідним соусом",
        weight: "250/100",
        price: "400"
    },
    {
        name: "Стейк «Нью-Йорк»",
        weight: "100",
        price: "140"
    },
    {
        name: "Стейк «Рібай»",
        weight: "100",
        price: "150"
    },
    {
        name: "Стейк зі свинини",
        weight: "100",
        price: "100"
    },
    {
        name: "Медальйони з телятини в беконі на подушці з картопляного пюре",
        weight: "200/150",
        price: "350"
    },
    {
        name: "Садж з рибою",
        description: "річкова риба, помідор, болгарський перець, печериці",
        weight: "800",
        price: "320"
    },
    {
        name: "Садж з бараниною/телятиною",
        description: "баранина/телятина, болгарський перець, помідор, баклажан, картопля, печериці, цибуля, вершкове масло",
        weight: "900",
        price: "350"
    },
];

//Страви на грилі
const menuGrillDishes = [
    {
        name: "Каре ягняти",
        weight: "100",
        price: "120"
    },
    {
        name: "Чалагач зі свинини",
        weight: "100",
        price: "80"
    },
    {
        name: "Шашлик зі свинячого ошийка",
        weight: "100",
        price: "75"
    },
    {
        name: "Шашлик із телятини",
        weight: "100",
        price: "90"
    },
    {
        name: "Шашлик із баранини",
        weight: "100",
        price: "70"
    },
    {
        name: "Шашлик із домашньої курки",
        weight: "100",
        price: "70"
    },
    {
        name: "Шашлик із сьомги із свіжими овочами",
        weight: "200/100",
        price: "280"
    },
    {
        name: "Сом на мангалі з гранатовим соусом",
        weight: "200/50",
        price: "150"
    },
    {
        name: "Креветки на мангалі з соусом «солодкий чилі»",
        weight: "200/50",
        price: "200"
    },
    {
        name: "Люля-кебаб із телятини",
        weight: "100",
        price: "90"
    },
    {
        name: "Люля-кебаб із баранини",
        weight: "100",
        price: "90"
    },
    {
        name: "Перепілка",
        weight: "1 шт.",
        price: "100"
    },
    {
        name: "Туюк в тандирі",
        description: "курча запечене в тандирі",
        weight: "1 шт.",
        price: "190"
    },
    {
        name: "Шашлик овочевий",
        description: "картопля, помідор, баклажан, болгарський перець",
        weight: "500",
        price: "200"
    },
    {
        name: "Ребра свині у східному соусі",
        weight: "100",
        price: "70"
    },
    {
        name: "Печериці з сиром",
        weight: "100",
        price: "50"
    },
];

//Перші страви
const menuFirstDishes = [
    {
        name: "Бульйон із домашньої курки",
        description: "м'ясо домашньої курки, морква, цибуля, зелень",
        weight: "300",
        price: "60"
    },
    {
        name: "Дюшбара",
        description: "бульйон з бараниною, нут, цибуля, алича, шафран",
        weight: "400",
        price: "80"
    },
    {
        name: "Піті",
        description: "бульйон з бараниною, нут, цибуля, алича, шафран",
        weight: "300",
        price: "110"
    },
    {
        name: "Кюфта бозбаш",
        description: "тефтеля з баранини, картопля, нут, алича, м'ята",
        weight: "400",
        price: "120"
    },
    {
        name: "Ґаспачо",
        description: "томати, болгарський перець, зелень, цибуля, рукола",
        weight: "300",
        price: "100"
    },
    {
        name: "Крем-суп з печериць",
        description: "печериці, цибуля, вершки, спеції, тости",
        weight: "300",
        price: "100"
    },
    {
        name: "Крем-суп зі шпинату",
        description: "шпинат, цибуля, вершки, спеції, тости",
        weight: "300",
        price: "110"
    },
    {
        name: "Уха царська",
        description: "із червоної і білої риби",
        weight: "300",
        price: "150"
    },
];

//Гарніри
const menuGarnier = [
    {
        name: "Картопля по-селянськи",
        weight: "150",
        price: "50"
    },
    {
        name: "Картопля фрі",
        weight: "150",
        price: "40"
    },
    {
        name: "Картопля запечена з салом",
        weight: "200",
        price: "60"
    },
];
const menuSouse = [
    {
        name: "Аджика",
        weight: "100",
        price: "30"
    },
    {
        name: "Мацоні",
        weight: "100",
        price: "30"
    },
    {
        name: "Нашарап",
        weight: "100",
        price: "40"
    },
    {
        name: "Томатний",
        weight: "100",
        price: "30"
    },
    {
        name: "Ягідно-гострий",
        weight: "100",
        price: "40"
    },
    {
        name: "Вершковий",
        weight: "100",
        price: "40"
    },
];
const menuBread = [
    {
        name: "Хліб",
        description: "білий / чорний",
        weight: "1 шт.",
        price: "3"
    },
    {
        name: "Лаваш тонкий",
        weight: "1 шт.",
        price: "5"
    },
    {
        name: "Грісіні",
        weight: "1 шт.",
        price: "5"
    },
    {
        name: "Фокачча з сиром",
        weight: "1 шт.",
        price: "80"
    },
];

//Десерти
const menuDesert = [
    {
        name: "Пахлава Бакинська",
        weight: "100",
        price: "80"
    },
    {
        name: "Панна котта",
        weight: "150",
        price: "80"
    },
    {
        name: "Сирники зі сметаною",
        weight: "150/50",
        price: "80"
    },
    {
        name: "Чізкейк «Нью-Йорк»",
        weight: "230",
        price: "120"
    },
    {
        name: "Штрудель з яблуками та морозивом",
        weight: "120/100",
        price: "100"
    },
    {
        name: "Наполеон",
        weight: "200",
        price: "100"
    },
    {
        name: "Шоколадний фондан",
        weight: "120/100",
        price: "120"
    },
    {
        name: "Морозиво з джемом",
        weight: "100/30",
        price: "50"
    },
    {
        name: "Морозиво з фруктами",
        weight: "100/30",
        price: "50"
    },
    {
        name: "Морозиво з шоколадом",
        weight: "100/30",
        price: "50"
    },
];

//Гарячі напої
const menuCoffee = [
    {
        name: "«Американо»",
        weight: "120",
        price: "35"
    },
    {
        name: "«Американо» з молоком",
        weight: "170",
        price: "40"
    },
    {
        name: "Глясе",
        weight: "200",
        price: "50"
    },
    {
        name: "Еспресо",
        weight: "30",
        price: "30"
    },
    {
        name: "Еспресо допіо",
        weight: "60",
        price: "35"
    },
    {
        name: "Еспресо кон-панна",
        weight: "40",
        price: "35"
    },
    {
        name: "Еспресо макіято",
        weight: "30",
        price: "35"
    },
    {
        name: "Еспресо ристрето",
        weight: "15",
        price: "30"
    },
    {
        name: "Еспресо актив",
        weight: "45",
        price: "35"
    },
    {
        name: "Кава по-віденськи",
        weight: "175",
        price: "50"
    },
    {
        name: "Капучино",
        weight: "90",
        price: "45"
    },
    {
        name: "Лате",
        weight: "180",
        price: "50"
    },
    {
        name: "Мегакапучино",
        weight: "180",
        price: "50"
    },
    {
        name: "Мокачино",
        weight: "200",
        price: "50"
    },
    {
        name: "Гарячий шоколад",
        weight: "150",
        price: "40"
    }
];
const menuTea = [
    {
        name: "По-східному",
        weight: "180",
        price: "30"
    },
    {
        name: "Чорний / зелений",
        weight: "500",
        price: "40"
    },
    {
        name: "Трав'яний / фруктовий",
        weight: "500",
        price: "40"
    },
    {
        name: "Чорний з бергамотом",
        weight: "500",
        price: "40"
    },
    {
        name: "Зелений саусеп",
        weight: "500",
        price: "40"
    },
    {
        name: "Зелений із жасмином",
        weight: "500",
        price: "40"
    },
    {
        name: "Чай фірмовий",
        description: "«Каспій»",
        weight: "1 л",
        price: "150"
    },
];

//Холодні напої
const menuIceDrink = [
    {
        name: "Вода Borjomi",
        weight: "0,5 л",
        price: "40"
    },
    {
        name: "Вода Моршинська",
        description: "н/г, с/г",
        weight: "0,5 л",
        price: "30"
    },
    {
        name: "Pepsi",
        weight: "0,33 л",
        price: "20"
    },
    {
        name: "Coca-Cola, Fanta, Sprite",
        weight: "0,25 л",
        price: "20"
    },
    {
        name: "Сік «Сандора»",
        weight: "1 л",
        price: "50"
    },
    {
        name: "Компот",
        weight: "1 л",
        price: "45"
    },
    {
        name: "Узвар",
        weight: "1 л",
        price: "40"
    },
    {
        name: "Фреш",
        description: "на вибір: яблуко / селера / грейпфрут / морква / апельсин",
        weight: "300",
        price: "80"
    },
    {
        name: "Смузі",
        description: "ягідний",
        weight: "70",
        price: "150"
    },
];
const menuZeroCocktail = [
    {
        name: "Молочний коктейль",
        weight: "270",
        price: "50"
    },
    {
        name: "Оригінальний лимонад",
        weight: "450",
        price: "55"
    },
    {
        name: "Мохіто",
        weight: "400",
        price: "80"
    },
    {
        name: "Тропічний сік",
        weight: "450",
        price: "50"
    },
    {
        name: "Том і Джері",
        weight: "400",
        price: "70"
    },
    {
        name: "Крейзі манкі",
        weight: "450",
        price: "85"
    }
];

//Дитяче меню
const menuKids = [
    {
        name: "Картопляне пюре",
        weight: "200",
        price: "35"
    },
    {
        name: "Каша гречана",
        weight: "150",
        price: "25"
    },
    {
        name: "Каша рисова",
        weight: "200",
        price: "30"
    },
    {
        name: "Пене",
        description: "макарони з курочкою у вершках",
        weight: "200",
        price: "60"
    },
    {
        name: "Курячі парові котлетки",
        weight: "100",
        price: "55"
    },
    {
        name: "Парові котлетки з телятини",
        weight: "100",
        price: "60"
    },
    {
        name: "Рибні парові котлетки",
        weight: "100",
        price: "70"
    },
    {
        name: "Шашличок з курочки",
        weight: "100",
        price: "60"
    },
    {
        name: "Нагетси",
        weight: "150",
        price: "70"
    },
];
//Алкогольні коктейлі
const menuAlcoCockt = [
    {
        name: "Апероль Шприц",
        description: "сухе ігристе вино, Aperol, апельсин",
        weight: "0,250",
        price: "120"
    },
    {
        name: "Банановий дайкірі",
        description: "ром, лікер, банановий сік",
        weight: "0,200",
        price: "120"
    },
    {
        name: "Блакитна лагуна",
        description: "горілка, лікер, апельсиновий сік, спрайт",
        weight: "0,300",
        price: "100"
    },
    {
        name: "Маргарита Динна",
        description: "текіла, лікер, лимонний сік, лайм",
        weight: "0,150",
        price: "130"
    },
    {
        name: "Секс на пляжі",
        description: "горілка, лікери, апельсиновий сік, морс",
        weight: "0,300",
        price: "110"
    },
    {
        name: "Сієста",
        description: "текіла, лікер, лимонний сік",
        weight: "0,150",
        price: "130"
    },
    {
        name: "Сік джунглів",
        description: "джин, лікер, лимонний сік, апельсиновий сік",
        weight: "0,250",
        price: "120"
    },
    {
        name: "Мохіто",
        description: "ром, тростинний сироп, спрайт, лайм, м’ята",
        weight: "0,400",
        price: "120"
    },
    {
        name: "Джин з тоніком",
        weight: "0,250",
        price: "90"
    },
    {
        name: "Віскі-кола",
        weight: "0,250",
        price: "80"
    },
    {
        name: "Вільна куба",
        description: "ром, кола",
        weight: "0,250",
        price: "80"
    }
];

//Винна карта
//Ігристі вина
const menuFizzyVine = [
    {
        name: "Fragolino Sarsitano",
        description: "Rosso/Bianco солодке, (Італія)",
        weight: "1 пл.",
        price: "160"
    },
    {
        name: "Lambrusco Dell`Emilia Fiore",
        description: "напівсолодке (Італія)",
        weight: "1 пл.",
        price: "170"
    },
    {
        name: "Французький бульвар",
        description: " «Special Edition» напівсухе, напівсололке, солодке",
        weight: "1 пл.",
        price: "210"
    },
    {
        name: "Don Luciano",
        description: "солодке біле, рожеве, лаванда (Італія)",
        weight: "1 пл.",
        price: "210"
    },
    {
        name: "CAVA Masia de la Luz",
        description: "брют (Іспанія)",
        weight: "1 пл.",
        price: "420"
    },
    {
        name: "Рокка Россо Просекко",
        description: "(Італія)",
        weight: "1 пл.",
        price: "470"
    },
    {
        name: "Мартіні Просекко/Асті",
        weight: "1 пл.",
        price: "500"
    }
];
//Вина білі
const menuWhiteVine = [
    {
        name: "Шевальє де П’єр Бланк",
        description: "сухе/напівсолодке (Франція)",
        weight: "100",
        price: "32"
    },
    {
        name: "Цинандалі",
        description: "сухе (Грузія)",
        weight: "100",
        price: "41"
    },
    {
        name: "Гаві Аврора",
        description: "сухе (Італія)",
        weight: "100",
        price: "88"
    },
    {
        name: "Алазані",
        description: "напівсолодке (Грузія)",
        weight: "100",
        price: "37"
    },
    {
        name: "Ріоджа Кастиліо",
        description: "сухе/напівсолодке (Іспанія)",
        weight: "100",
        price: "47"
    }
];
//Рожеві вина
const menuPinkVine = [
    {
        name: "Піно Гріджио",
        description: "сухе (Італія)",
        weight: "100",
        price: "43"
    },
    {
        name: "Домен Пельо",
        description: "сухе (Франція)",
        weight: "100",
        price: "63"
    }
];
//Червоні вина
const menuRedVine = [
    {
        name: "Шевальє де П’єр Бланк",
        description: "сухе/напівсолодке (Франція)",
        weight: "100",
        price: "32"
    },
    {
        name: "Namaqua",
        description: "сухе (ПАР)",
        weight: "100",
        price: "34"
    },
    {
        name: "Монтепульчано",
        description: "сухе (Італія)",
        weight: "100",
        price: "39"
    },
    {
        name: "Сапераві",
        description: "сухе (Грузія)",
        weight: "100",
        price: "43"
    },
    {
        name: "Мукузані",
        description: "сухе (Грузія)",
        weight: "100",
        price: "54"
    },
    {
        name: "Ріоджа Кастиліо",
        description: "сухе/напівсолодке (Іспанія)",
        weight: "100",
        price: "47"
    },
    {
        name: "Алазані",
        description: "напівсолодке (Грузія)",
        weight: "100",
        price: "37"
    },
    {
        name: "Кінзмараулі",
        description: "напівсолодке (Грузія)",
        weight: "100",
        price: "60"
    }
];

//Алкогольні Напої
//Вермути
const menuVermut = [
    {
        name: "Мартіні Россо",
        weight: "100",
        price: "45"
    },
    {
        name: "Мартіні Б’янко",
        weight: "100",
        price: "45"
    }
];
//Лікери
const menuLicker = [
    {
        name: "Becherovka",
        weight: "100",
        price: "69"
    },
    {
        name: "Becherovka Lemond",
        weight: "100",
        price: "62"
    },
    {
        name: "Jagermeister",
        weight: "100",
        price: "110"
    },
    {
        name: "Baileys",
        weight: "100",
        price: "133"
    }
];
//Ром
const menuRome = [
    {
        name: "Bacardi Carta Blanca",
        weight: "100",
        price: "80"
    },
    {
        name: "Bacardi Carta Negra",
        weight: "100",
        price: "81"
    },
    {
        name: "Captain Morgan Gold/Dark",
        weight: "100",
        price: "100"
    },
    {
        name: "Captain Morgan Spiced Black",
        weight: "100",
        price: "110"
    }
];
//Джин
const menuJin = [
    {
        name: "Beefeater",
        weight: "100",
        price: "96"
    },
    {
        name: "Beefeater Blood Orange/Pink",
        weight: "100",
        price: "105"
    },
    {
        name: "Bombay Sapphire",
        weight: "100",
        price: "148"
    }
];

//Віскі
const menuWhiskey = [
    {
        name: "Блек+Вайт",
        weight: "100",
        price: "80"
    },
    {
        name: "Беллс",
        weight: "100",
        price: "81"
    },
    {
        name: "Глен Клайд",
        weight: "100",
        price: "80"
    },
    {
        name: "Red Label",
        weight: "100",
        price: "118"
    },
    {
        name: "Ballantine`s",
        weight: "100",
        price: "100"
    },
    {
        name: "Jameson",
        weight: "100",
        price: "120"
    },
    {
        name: "Chivas Regal",
        description: "12 років",
        weight: "100",
        price: "200"
    },
    {
        name: "Chivas Regal",        
        description: "18 років",
        weight: "100",
        price: "450"
    }
];
//Коньяк/Бренді
const menuBrandi = [
    {
        name: "АрАрАт",
        description: "3 роки",
        weight: "100",
        price: "80"
    },
    {
        name: "АрАрАт",
        description: "5 років",
        weight: "100",
        price: "81"
    },
    {
        name: "Ужгород",
        description: "3 роки",
        weight: "100",
        price: "100"
    },
    {
        name: "Закарпатський",
        description: "4 років",
        weight: "100",
        price: "110"
    },
    {
        name: "Таврія крафт колекшн",
        description: "5 років",
        weight: "100",
        price: "81"
    },
    {
        name: "Таврія крафт колекшн",
        description: "Пряний",
        weight: "100",
        price: "100"
    },
    {
        name: "Колхида",
        description: "3 роки",
        weight: "100",
        price: "110"
    },
    {
        name: "Колхида",
        description: "5 років",
        weight: "100",
        price: "81"
    },
    {
        name: "Алекс",
        description: "3 роки",
        weight: "100",
        price: "100"
    },
    {
        name: "Алекс",
        description: "5 років",
        weight: "100",
        price: "110"
    },
    {
        name: "Martell VS",
        weight: "100",
        price: "110"
    },
    {
        name: "Hennessy VS",
        weight: "100",
        price: "110"
    },
    {
        name: "Hennessy VSOP",
        weight: "100",
        price: "110"
    }
];

//Горліка
const menuVodka = [
    {
        name: "Свояк",
        description: "стандарт/на березових бруньках",
        weight: "100",
        price: "30"
    },
    {
        name: "Качине полювання",
        weight: "100",
        price: "30"
    },
    {
        name: "Хортиця",
        description: "айс, срібна, платинум, преміум",
        weight: "100",
        price: "34"
    },
    {
        name: "Перша Гільдія",
        description: "знатна, поважна",
        weight: "100",
        price: "36"
    },
    {
        name: "United Stars",
        weight: "100",
        price: "35"
    },
    {
        name: "Президентський стандарт",
        weight: "100",
        price: "42"
    },
    {
        name: "Absolutl",
        weight: "100",
        price: "67"
    },
    {
        name: "Absolut",        
        description: "Kurant/Citron",
        weight: "100",
        price: "69"
    },
    {
        name: "Grey Goose",      
        weight: "100",
        price: "150"
    }
];
//Текіла
const menuTequila = [
    {
        name: "Olmeca Blanco",
        weight: "100",
        price: "117"
    },
    {
        name: "Olmeca Gold",
        weight: "100",
        price: "113"
    }
];
//Пиво
const menuBeer = [
    {
        name: "Стелла Артуа",
        weight: "1 пл.",
        price: "50"
    },
    {
        name: "Корона",
        weight: "1 пл.",
        price: "58"
    },
    {
        name: "Льофф блонд",
        weight: "1 пл.",
        price: "75"
    },
    {
        name: "Левінбрау",
        weight: "1 пл.",
        price: "75"
    },
    {
        name: "Хугарден Вайт",
        weight: "1 пл.",
        price: "75"
    }
];

//Кальяни
const menuHookah = [
    {
        name: "Classic",
        price: "200"
    },
    {
        name: "Hard",
        price: "230"
    }
];
//Добавки
const menuOtherHookah = [
    {
        name: "Сік",
        price: "35"
    },
    {
        name: "Молоко",
        price: "30"
    }
];
//Фруктові чаші
const menuFruitDop = [
    {
        name: "Апельсин",
        price: "75"
    },
    {
        name: "Грейпфрут",
        price: "90"
    },
    {
        name: "Гранат",
        price: "115"
    }
];

//Інше
//Бій посуду
const menuOter=[
    {
        name: "Келихи",
        description: "за 1 шт.",
        price: "150"
    },
    {
        name: "Склянки",
        description: "за 1 шт.",
        price: "100"
    },
    {
        name: "Чарка",
        description: "за 1 шт.",
        price: "50"
    },
    {
        name: "Тарілка банкетна",
        description: "за 1 шт.",
        price: "300"
    },
    {
        name: "Тарілка біла",
        description: "за 1 шт.",
        price: "200"
    },
    {
        name: "Чашка банкетна",
        description: "за 1 шт.",
        price: "200"
    },
    {
        name: "Блюдце банкетне",
        description: "за 1 шт.",
        price: "120"
    },
    {
        name: "Чашка біла",
        description: "за 1 шт.",
        price: "150"
    },
    {
        name: "Блюдце біле",
        description: "за 1 шт.",
        price: "50"
    },
]