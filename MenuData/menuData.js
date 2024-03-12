//Холодні закуски
const menuIceSnackItems = [
    {
        name: "Свіжі овочі та зелень",
        weight: "350",
        price: "120"
    },
    {
        name: "Асорті соління",
        weight: "350",
        price: "200"
    },
    {
        name: "Капрезе",
        description: "помідор, моцарелла, базилік, соус «Песто»",
        weight: "350",
        price: "200"
    },
    {
        name: "Рулетики з баклажанів",
        description: "смажені баклажани з начинкою з волоського горіха, соусом та часником",
        weight: "200",
        price: "180"
    },
    {
        name: "Рулетики з кабачків",
        weight: "200",
        price: "180"
    },
    {
        name: "Сирне плато",
        description: "сири: пармезан, дор-блю, брі, моцарелла, радомер, мед, м'ята, виноград, волоський горіх",
        weight: "500",
        price: "550"
    },
    {
        name: "Оселедець з картоплею",
        weight: "350",
        price: "180"
    },
    {
        name: "Рибне асорті",
        description: "сьомга с/с, сьомга х/к, масляна х/к, вугор смажений",
        weight: "400",
        price: "750"
    },
    {
        name: "Тартар із лосося",
        weight: "250",
        price: "350"
    },
    {
        name: "Тартар із телятини",
        weight: "250",
        price: "300"
    },
    {
        name: "Тарілка домашнього сала",
        description: "сало солене, сало запечене, сало копчене, грінки, хрін",
        weight: "230",
        price: "250"
    },
    {
        name: "Бастурма",
        weight: "100",
        price: "150"
    }
];

//Гарячі закуски
const menuHotSnackItems = [
    {
        name: "Сулугуні в сухарях панко з солодко-гострим соусом",
        weight: "200",
        price: "200"
    },
    {
        name: "Хачапурі по-аджарські",
        weight: "500",
        price: "220"
    },
    {
        name: "Кутаби з бараниною/телятиною",
        weight: "180",
        price: "150"
    },
    {
        name: "Кутаби з зеленню та сиром",
        weight: "180",
        price: "150"
    },
    {
        name: "Долма",
        description: "баранина, рис, цибуля, зелень у виноградному листі, соус",
        weight: "250",
        price: "300"
    },
    {
        name: "Кіш з лососем",
        weight: "1 шт",
        price: "80"
    }
];

//Салати
const menuSalatItems = [
    {
        name: "«Чабан»",
        description: "помідор, огірок, болгарський перець, цибуля, зелень, оливкова олія",
        weight: "250",
        price: "140"
    },
    {
        name: "«Грецький»",
        description: "помідор, огірок, болгарський перець, сир фета, маслини, мікс салат, оливкова олія",
        weight: "250",
        price: "150"
    },
    {
        name: "Теплий овочевий",
        description: "баклажан, помідор чері, болгарський перець, печериці, стебло селери, мікс салат, кунжутна олія",
        weight: "250",
        price: "150"
    },
    {
        name: "«Цезар» з куркою",
        description: "куряче філе, бекон, салат айсберг, помідор чері, пармезан, сухарі, соус «Цезар»",
        weight: "250",
        price: "200"
    },
    {
        name: "«Цезар» з лососем і креветками",
        weight: "350",
        price: "350"
    },
    {
        name: "Теплий з телятиною",
        description: "філе телятини, помідор чері, мікс салат, соус",
        weight: "250",
        price: "280"
    },
    {
        name: "«Каспій»",
        description: "лосось, сібас, креветки, мідії, авокадо, мікс салат, оливкова олія",
        weight: "250",
        price: "380"
    },
    {
        name: "Груша і хамон",
        weight: "250",
        price: "280"
    },
    {
        name: "Креветки та авокадо",
        weight: "250",
        price: "330"
    },
    {
        name: "«Мітла»",
        weight: "200",
        price: "100"
    },

];

//Основні страви
const menuMainDishes = [
    {
        name: "Сібас з креветками у персиковому соусі",
        weight: "350",
        price: "420"
    },
    {
        name: "Лосось з овочами у вершковому соусі",
        weight: "350",
        price: "450"
    },
    {
        name: "Курча «Чкмерулі»",
        description: "курча запечене у вершковому соусі",
        weight: "500",
        price: "350"
    },
    {
        name: "Качина грудка під ягідним соусом",
        weight: "350",
        price: "500"
    },
    {
        name: "Медальйони з телятини в беконі на подушці з картопляного пюре",
        weight: "350",
        price: "500"
    },
    {
        name: "Садж з бараниною/телятиною",
        description: "баранина/телятина, болгарський перець, помідор, баклажан, картопля, печериці, цибуля, вершкове масло",
        weight: "900",
        price: "450"
    },
    {
        name: "Стейк з курятини",
        weight: "100",
        price: "100"
    },
    {
        name: "Стейк зі свинини",
        weight: "100",
        price: "120"
    },
    {
        name: "Стейк «Нью-Йорк»",
        weight: "100",
        price: "150"
    },
    {
        name: "Стейк «Рібай»",
        weight: "100",
        price: "160"
    },
];

//Перші страви
const menuFirstDishes = [
    {
        name: "Бульйон із домашньої курки",
        description: "м'ясо домашньої курки, морква, цибуля, зелень",
        weight: "300",
        price: "120"
    },
    {
        name: "Дюшбара",
        description: "бульйон з бараниною, нут, цибуля, алича, шафран",
        weight: "400",
        price: "130"
    },
    {
        name: "Піті",
        description: "бульйон з бараниною, нут, цибуля, алича, шафран",
        weight: "300",
        price: "150"
    },
    {
        name: "Кюфта бозбаш",
        description: "тефтеля з баранини, картопля, нут, алича, м'ята",
        weight: "400",
        price: "160"
    },
    {
        name: "Ґаспачо",
        description: "томати, болгарський перець, зелень, цибуля, рукола",
        weight: "300",
        price: "150"
    },
    {
        name: "Крем-суп з печериць",
        description: "печериці, цибуля, вершки, спеції, тости",
        weight: "300",
        price: "150"
    },
    {
        name: "Крем-суп зі шпинату",
        description: "шпинат, цибуля, вершки, спеції, тости",
        weight: "300",
        price: "150"
    },
    {
        name: "Уха царська",
        description: "із червоної і білої риби",
        weight: "300",
        price: "250"
    },
];


//Страви на грилі
const menuGrillDishes = [
    {
        name: "Шашлик із сьомги із свіжими овочами",
        weight: "300",
        price: "400"
    },
    {
        name: "Сом на мангалі з гранатовим соусом",
        weight: "250",
        price: "350"
    },
    {
        name: "Креветки на мангалі з соусом «солодкий чилі»",
        weight: "250",
        price: "350"
    },
    {
        name: "Перепілка",
        weight: "1 шт.",
        price: "200"
    },
    {
        name: "Шашлик із домашнього кролика",
        weight: "100",
        price: "120"
    },
    {
        name: "Шашлик із домашньої курки",
        weight: "100",
        price: "90"
    },
    {
        name: "Каре ягняти",
        weight: "100",
        price: "150"
    },
    {
        name: "Шашлик із баранини",
        weight: "100",
        price: "90"
    },
    {
        name: "Шашлик із баранини на  кістці",
        weight: "100",
        price: "70"
    },
    {
        name: "Шашлик із телятини",
        weight: "100",
        price: "120"
    },
    {
        name: "Шашлик зі свинячого ошийка",
        weight: "100",
        price: "100"
    },
    {
        name: "Чалагач зі свинини",
        weight: "100",
        price: "100"
    },
    {
        name: "Свинячі ребра у східному соусі",
        weight: "100",
        price: "100"
    },
    {
        name: "Люля-кебаб із телятини",
        weight: "100",
        price: "120"
    },
    {
        name: "Люля-кебаб із баранини",
        weight: "100",
        price: "100"
    },
    {
        name: "Шашлик овочевий",
        description: "помідор, баклажан, болгарський перець, кабачок, гриби",
        weight: "500",
        price: "250"
    },
    {
        name: "Печериці з сиром",
        weight: "100",
        price: "70"
    },
];

//Гарніри
const menuGarnier = [
    {
        name: "Картопляні трикутники",
        weight: "100",
        price: "100"
    },
    {
        name: "Картопля фрі",
        weight: "150",
        price: "100"
    },
    {
        name: "Картопля по-селянськи",
        weight: "150",
        price: "100"
    },
    {
        name: "Картопля запечена з салом",
        weight: "200",
        price: "150"
    },
];
const menuSouse = [
    {
        name: "Аджика",
        weight: "100",
        price: "50"
    },
    {
        name: "Мацоні",
        weight: "100",
        price: "50"
    },
    {
        name: "Нашарап",
        weight: "100",
        price: "50"
    },
    {
        name: "Томатний",
        weight: "100",
        price: "50"
    },
    {
        name: "Ягідно-гострий",
        weight: "100",
        price: "50"
    },
    {
        name: "Вершковий",
        weight: "100",
        price: "50"
    },
];

//Паста
const menuPasta = [
    {
        name: "Паста Карбонара",
        weight: "250",
        price: "180"
    },
    {
        name: "Паста з куркою і грибами",
        weight: "250",
        price: "200"
    },
    {
        name: "Паста з креветками і томатним соусом",
        weight: "350",
        price: "250"
    },
];

//Піца
const menuPizza = [
    {
        name: "Маргарита",
        weight: "600",
        price: "200"
    },
    {
        name: "Курка, гриби",
        weight: "600",
        price: "250"
    },
    {
        name: "Шинка, бекон",
        weight: "600",
        price: "250"
    },
    {
        name: "Лосось, сир филадельфія",
        weight: "600",
        price: "400"
    },
    {
        name: "Лосось, масляна",
        weight: "500",
        price: "400"
    },
    {
        name: "Фокачча з сиром",
        weight: "400",
        price: "150"
    },
];

//Десерти
const menuDesert = [
    {
        name: "Пахлава Бакинська",
        weight: "100",
        price: "120"
    },
    {
        name: "Панна котта",
        weight: "150",
        price: "120"
    },
    {
        name: "Сирники зі сметаною",
        weight: "200",
        price: "150"
    },
    {
        name: "Чізкейк «Нью-Йорк»",
        weight: "230",
        price: "150"
    },
    {
        name: "Штрудель з яблуками та морозивом",
        weight: "220",
        price: "150"
    },
    {
        name: "Наполеон",
        weight: "200",
        price: "150"
    },
    {
        name: "Шоколадний фондан",
        weight: "320",
        price: "150"
    },
    {
        name: "Меренговий рулет",
        weight: "100",
        price: "120"
    },
    {
        name: "Морозиво з джемом",
        weight: "130",
        price: "100"
    },
    {
        name: "Морозиво з фруктами",
        weight: "130",
        price: "100"
    },
    {
        name: "Морозиво з шоколадом",
        weight: "130",
        price: "100"
    },
    {
        name: "Сорбет манго",
        weight: "105",
        price: "150"
    },
];

//Гарячі напої
const menuCoffee = [
    {
        name: "«Американо»",
        weight: "120",
        price: "50"
    },
    {
        name: "«Американо» з молоком",
        weight: "170",
        price: "60"
    },
    {
        name: "Глясе",
        weight: "200",
        price: "70"
    },
    {
        name: "Еспресо",
        weight: "30",
        price: "40"
    },
    {
        name: "Еспресо ристрето",
        weight: "15",
        price: "40"
    },
    {
        name: "Кава по-віденськи",
        weight: "175",
        price: "70"
    },
    {
        name: "Капучино",
        weight: "90",
        price: "70"
    },
    {
        name: "Лате",
        weight: "180",
        price: "70"
    },
    {
        name: "Мегакапучино",
        weight: "180",
        price: "70"
    },
    {
        name: "Мокачино",
        weight: "200",
        price: "70"
    },
    {
        name: "Раф-кофе «Білий шоколад»",
        weight: "200",
        price: "80"
    },
    {
        name: "Раф-кофе «Карамельд»",
        weight: "200",
        price: "80"
    },
    {
        name: "Гарячий шоколад",
        weight: "150",
        price: "60"
    }
];
const menuTea = [
    {
        name: "Чай по-східному",
        weight: "180",
        price: "50"
    },
    {
        name: "Чай в асортименті",
        weight: "500",
        price: "60"
    },
    {
        name: "Чай фірмовий",
        description: "«Каспій»",
        weight: "1 л",
        price: "200"
    },
];

//Холодні напої
const menuIceDrink = [
    {
        name: "Вода Borjomi",
        weight: "0,33 л",
        description: "скло",
        price: "70"
    },
    {
        name: "Вода Borjomi",
        weight: "0,5 л",
        description: "скло",
        price: "100"
    },
    {
        name: "Вода Саірме",
        description: "газована/ не газована",
        weight: "0,5 л",
        price: "90"
    },
    {
        name: "Вода Набіглаві",
        weight: "0,5 л",
        price: "90"
    },
    {
        name: "Вода Моршинська",
        weight: "0,33 л",
        price: "50"
    },
    {
        name: "Вода Моршинська",
        weight: "0,5 л",
        price: "50"
    },
    {
        name: "Натахтарі",
        description: "скло",
        weight: "0,5 л",
        price: "90"
    },
    {
        name: "Coca-Cola, Fanta, Sprite, Pepsi",
        weight: "пл. 0,25 л",
        price: "50"
    },
    {
        name: "Coca-Cola, Fanta, Sprite, Pepsi",
        weight: "банка 0,33 л",
        price: "40"
    },
    {
        name: "Сік «Сандора»",
        weight: "1 л",
        price: "100"
    },
    {
        name: "Компот",
        weight: "1 л",
        price: "120"
    },
    {
        name: "Узвар",
        weight: "1 л",
        price: "120"
    },
    {
        name: "Фреш",
        description: "яблуко / селера / грейпфрут / морква / апельсин",
        weight: "300",
        price: "140"
    },
];
const menuZeroCocktail = [
    {
        name: "Молочний коктейль",
        weight: "270",
        price: "100"
    },
    {
        name: "Том і Джері",
        weight: "400",
        price: "100"
    },
    {
        name: "Крейзі манкі",
        weight: "450",
        price: "110"
    },
    {
        name: "Смузі ягідний ",
        weight: "400",
        price: "120"
    },
    {
        name: "Тропічний сік",
        weight: "450",
        price: "80"
    },
    {
        name: "Оригінальний лимонад",
        weight: "450",
        price: "100"
    },
    {
        name: "Мохіто",
        weight: "400",
        price: "120"
    },
];

//Дитяче меню
const menuKids = [
    {
        name: "Картопляне пюре",
        weight: "200",
        price: "60"
    },
    {
        name: "Каша гречана",
        weight: "150",
        price: "60"
    },
    {
        name: "Каша рисова",
        weight: "200",
        price: "60"
    },
    {
        name: "Пене",
        description: "макарони з курочкою у вершках",
        weight: "200",
        price: "100"
    },
    {
        name: "Курячі парові котлетки",
        weight: "100",
        price: "90"
    },
    {
        name: "Парові котлетки з телятини",
        weight: "100",
        price: "100"
    },
    {
        name: "Шашличок з курочки",
        weight: "100",
        price: "90"
    },
    {
        name: "Нагетси",
        weight: "150",
        price: "120"
    },
];
//Алкогольні коктейлі
const menuAlcoCockt = [
    {
        name: "Апероль Шприц",
        description: "сухе ігристе вино, Aperol, апельсин",
        weight: "0,250",
        price: "190"
    },
    {
        name: "Банановий дайкірі",
        description: "ром, лікер, банановий сік",
        weight: "0,200",
        price: "190"
    },
    {
        name: "Блакитна лагуна",
        description: "горілка, лікер, апельсиновий сік, спрайт",
        weight: "0,300",
        price: "160"
    },
    {
        name: "Віскі-кола",
        weight: "0,250",
        price: "150"
    },
    {
        name: "Вільна куба",
        description: "ром, кола",
        weight: "0,250",
        price: "150"
    },
    {
        name: "Джин з тоніком",
        weight: "0,250",
        price: "150"
    },
    {
        name: "Маргарита Динна",
        description: "текіла, лікер, лимонний сік, лайм",
        weight: "0,150",
        price: "200"
    },
    {
        name: "Мохіто",
        description: "ром, тростинний сироп, спрайт, лайм, м’ята",
        weight: "0,400",
        price: "180"
    },
    {
        name: "Секс на пляжі",
        description: "горілка, лікери, апельсиновий сік, морс",
        weight: "0,300",
        price: "190"
    },
    {
        name: "Сік джунглів",
        description: "джин, лікер, лимонний сік, апельсиновий сік",
        weight: "0,250",
        price: "180"
    },
    {
        name: "Сієста",
        description: "текіла, лікер, лимонний сік",
        weight: "0,150",
        price: "190"
    },
    {
        name: "Б-52",
        weight: "60",
        price: "100"
    },
    {
        name: "Зелений мексиканець",
        weight: "50",
        price: "80"
    }
];

//Винна карта
//Ігристі вина
const menuFizzyVine = [
    {
        name: "Fragolino Sarsitano Rosso",
        description: "біле, (Італія)",
        weight: "1 пл.",
        price: "250"
    },
    {
        name: "Fragolino Sarsitano Bianco",
        description: "солодке, (Італія)",
        weight: "1 пл.",
        price: "250"
    },
    {
        name: "Lambrusco Dell`Emilia Fiore",
        description: "напівсолодке (Італія)",
        weight: "1 пл.",
        price: "250"
    },
    {
        name: "Французький бульвар",
        weight: "1 пл.",
        price: "250"
    },
    {
        name: "Мартіні Просекко/Асті",
        weight: "1 пл.",
        price: "750"
    },
    {
        name: "CAVA Palau",
        description: "брют (Іспанія)",
        weight: "1 пл.",
        price: "500"
    },
    {
        name: "Docs 8 Asti",
        description: "(Італія)",
        weight: "1 пл.",
        price: "500"
    },
    {
        name: "Contessa Chiara Асті",
        description: "(Італія)",
        weight: "1 пл.",
        price: "550"
    },
    {
        name: "Santa Chiara Просекко",
        description: "(Італія)",
        weight: "1 пл.",
        price: "600"
    },
    {
        name: "Рокка Россо Просекко",
        description: "(Італія)",
        weight: "1 пл.",
        price: "600"
    },
];
//Вина білі
const menuWhiteVine = [
    {
        name: "Шевальє де П’єр Бланк",
        description: "сухе/напівсолодке (Франція)",
        weight: "100",
        price: "40"
    },
    {
        name: "Цинандалі",
        description: "сухе (Грузія)",
        weight: "100",
        price: "60"
    },
    {
        name: "Гаві Аврора",
        description: "сухе (Італія)",
        weight: "100",
        price: "90"
    },
    {
        name: "Алазані",
        description: "напівсолодке (Грузія)",
        weight: "100",
        price: "50"
    },
    {
        name: "Піно Гріджио",
        description: "сухе (Італія)",
        weight: "100",
        price: "50"
    },
    {
        name: "Ріоджа Кастиліо",
        description: "сухе/напівсолодке (Іспанія)",
        weight: "100",
        price: "60"
    },
    {
        name: "Верментіно Монталто",
        description: "сухе",
        weight: "100",
        price: "50"
    },
    {
        name: "Vinho Verde",
        description: "сухе/напівсолодке (Іспанія)",
        weight: "100",
        price: "40"
    }
];
//Рожеві вина
const menuPinkVine = [
    {
        name: "Піно Гріджио",
        description: "сухе (Італія)",
        weight: "100",
        price: "60"
    },
    {
        name: "Домен Пельо",
        description: "сухе (Франція)",
        weight: "100",
        price: "70"
    }
];
//Червоні вина
const menuRedVine = [
    {
        name: "Шевальє де П’єр Бланк",
        description: "сухе/напівсолодке (Франція)",
        weight: "100",
        price: "40"
    },
    {
        name: "Namaqua",
        description: "сухе (ПАР)",
        weight: "100",
        price: "60"
    },
    {
        name: "Монтепульчано",
        description: "сухе (Італія)",
        weight: "100",
        price: "40"
    },
    {
        name: "Ріоджа Кастиліо",
        description: "сухе/напівсолодке (Іспанія)",
        weight: "100",
        price: "60"
    },
    {
        name: "Алазані",
        description: "напівсолодке (Грузія)",
        weight: "100",
        price: "50"
    },
    {
        name: "Сапераві",
        description: "сухе (Грузія)",
        weight: "100",
        price: "50"
    },
    {
        name: "Мукузані",
        description: "сухе (Грузія)",
        weight: "100",
        price: "60"
    },
    {
        name: "Кінзмараулі",
        description: "напівсолодке (Грузія)",
        weight: "100",
        price: "60"
    },
    {
        name: "Хванчкара",
        description: "напівсолодке (Грузія)",
        weight: "100",
        price: "140"
    }
];

//Алкогольні Напої
//Вермути
const menuVermut = [
    {
        name: "Мартіні Россо Фіеро",
        weight: "100",
        price: "60"
    },
    {
        name: "Мартіні Россо",
        weight: "100",
        price: "60"
    },
    {
        name: "Мартіні Б’янко",
        weight: "100",
        price: "60"
    }
];
//Лікери
const menuLicker = [
    {
        name: "Becherovka",
        weight: "100",
        price: "110"
    },
    {
        name: "Becherovka Lemond",
        weight: "100",
        price: "100"
    },
    {
        name: "Jagermeister",
        weight: "100",
        price: "140"
    },
    {
        name: "Baileys",
        weight: "100",
        price: "160"
    },
    {
        name: "Шерідан",
        weight: "100",
        price: "220"
    },
    {
        name: "Абсент",
        weight: "100",
        price: "200"
    },
    {
        name: "Лімончелло",
        weight: "100",
        price: "100"
    }
];
//Ром
const menuRome = [
    {
        name: "Bacardi Carta Blanca",
        weight: "100",
        price: "140"
    },
    {
        name: "Bacardi Carta Negra",
        weight: "100",
        price: "140"
    },
    {
        name: "Bacardi Carta Spiced",
        weight: "100",
        price: "120"
    },
    {
        name: "Bacardi Oakheart Original 35%",
        weight: "100",
        price: "100"
    },
    {
        name: "Captain Morgan Black",
        weight: "100",
        price: "130"
    },
    {
        name: "Captain Morgan White",
        weight: "100",
        price: "110"
    },
    {
        name: "Captain Morgan Gold",
        weight: "100",
        price: "120"
    },
    {
        name: "Captain Morgan Dark",
        weight: "100",
        price: "120"
    }
];
//Джин
const menuJin = [
    {
        name: "Beefeater",
        weight: "100",
        price: "120"
    },
    {
        name: "Beefeater Blood Orange",
        weight: "100",
        price: "120"
    },
    {
        name: "Beefeater Blood Pink",
        weight: "100",
        price: "120"
    },
    {
        name: "Bombay Sapphire",
        weight: "100",
        price: "150"
    },
    {
        name: "Gordon`s 37,5%",
        weight: "100",
        price: "150"
    }
];

//Віскі
const menuWhiskey = [
    {
        name: "Джек Деніелс",
        weight: "100",
        price: "210"
    },
    {
        name: "Jameson",
        weight: "100",
        price: "180"
    },
    {
        name: "Блек+Вайт",
        weight: "100",
        price: "100"
    },
    {
        name: "Беллс Оріджінал",
        weight: "100",
        price: "100"
    },
    {
        name: "ВАТ 69",
        weight: "100",
        price: "90"
    },
    {
        name: "Glen Clyde",
        weight: "100",
        price: "80"
    },
    {
        name: "Red Label",
        weight: "100",
        price: "150"
    },
    {
        name: "Ballantine`s Finest",
        weight: "100",
        price: "150"
    },
    {
        name: "Ірланд.віскі O`Brian",
        weight: "100",
        price: "150"
    },
    {
        name: "Chivas Regal",
        description: "12 років",
        weight: "100",
        price: "360"
    },
    {
        name: "Chivas Regal",
        description: "18 років",
        weight: "100",
        price: "600"
    }
];
//Коньяк/Бренді
const menuBrandi = [
    {
        name: "Бренді АрАрАт",
        description: "3★",
        weight: "100",
        price: "150"
    },
    {
        name: "Бренді АрАрАт",
        description: "5★",
        weight: "100",
        price: "190"
    },
    {
        name: "Бренді Orbeliani",
        description: "3★",
        weight: "100",
        price: "80"
    },
    {
        name: "Бренді Orbeliani",
        description: "4★",
        weight: "100",
        price: "80"
    },
    {
        name: "Бренді Orbeliani",
        description: "5★",
        weight: "100",
        price: "90"
    },
    {
        name: "Коньяк Аракс",
        description: "3★",
        weight: "100",
        price: "60"
    },
    {
        name: "Коньяк Аракс",
        description: "5★",
        weight: "100",
        price: "70"
    },
    {
        name: "Коньяк Легенда Вірменії",
        description: "3★",
        weight: "100",
        price: "70"
    },
    {
        name: "Коньяк Легенда Вірменії",
        description: "4★",
        weight: "100",
        price: "90"
    },
    {
        name: "Коньяк Легенда Вірменії",
        description: "10★",
        weight: "100",
        price: "140"
    },
    {
        name: "Коньяк Колхида",
        description: "3★",
        weight: "100",
        price: "70"
    },
    {
        name: "Коньяк Колхида",
        description: "5★",
        weight: "100",
        price: "80"
    },
    {
        name: "Закарпатський «Ужгород»",
        description: "3★",
        weight: "100",
        price: "80"
    },
    {
        name: "Martell VS",
        weight: "100",
        price: "340"
    },
    {
        name: "Martell VSOP",
        weight: "100",
        price: "560"
    },
    {
        name: "Hennessy VS",
        weight: "100",
        price: "400"
    },
    {
        name: "Hennessy VSOP",
        weight: "100",
        price: "720"
    }
];

//Горліка
const menuVodka = [
    {
        name: "Absolutl",
        weight: "100",
        price: "100"
    },
    {
        name: "Absolut",
        description: "Кавун, Лайм, Манго",
        weight: "100",
        price: "100"
    },
    {
        name: "Grey Goose",
        weight: "100",
        price: "150"
    },
    {
        name: "Хортиця",
        description: "айс, срібна, платинум, преміум",
        weight: "100",
        price: "40"
    },
    {
        name: "Перша Гільдія",
        description: "класична, поважна, знатна",
        weight: "100",
        price: "40"
    },
    {
        name: "Хлібна сльоза",
        weight: "100",
        price: "40"
    },
];
//Текіла
const menuTequila = [
    {
        name: "Olmeca Blanco",
        weight: "100",
        price: "190"
    },
    {
        name: "Olmeca Gold",
        weight: "100",
        price: "190"
    },
    {
        name: "Olmeca Silver",
        weight: "100",
        price: "190"
    },
    {
        name: "Сан Хосе Сільвер",
        weight: "100",
        price: "110"
    }
];
//Пиво
const menuBeer = [
    {
        name: "Корона",
        weight: "0.35 1 пл.",
        price: "95"
    },
    {
        name: "Левінбрау",
        weight: "0.33 1 пл.",
        price: "95"
    },
    {
        name: "Левінбрау",
        weight: "0.5 розливне",
        price: "70"
    },
    {
        name: "Льофф блонд",
        weight: "0.33 1 пл.",
        price: "95"
    },
    {
        name: "Стелла Артуа",
        weight: "0.5 жб.",
        price: "80"
    },
    {
        name: "Стелла Артуа",
        weight: "0.5 пл.",
        price: "80"
    },
    {
        name: "Стелла Артуа б/а",
        weight: "0.33 жб",
        price: "55"
    },
    {
        name: "Стелла Артуа",
        weight: "0.5 розливне",
        price: "70"
    },
    {
        name: "Хугарден Вайт",
        weight: "0.33 жб.",
        price: "100"
    },
    {
        name: "Хугарден Вайт",
        weight: "0.5 пл.",
        price: "120"
    },
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
const menuOter = [
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