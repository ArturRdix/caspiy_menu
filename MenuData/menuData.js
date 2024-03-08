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
        price: "40"
    },
    {
        name: "Еспресо актив",
        weight: "45",
        price: "35"
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
        name: "По-східному",
        weight: "180",
        price: "50"
    },
    {
        name: "Чорний / зелений",
        weight: "500",
        price: "60"
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
        price: "200"
    },
];

//Холодні напої
const menuIceDrink = [
    {
        name: "Вода Borjomi",
        weight: "0,5 л",
        price: "100"
    },
    {
        name: "Вода Borjomi",
        weight: "0,33 л",
        price: "70"
    },
    {
        name: "Вода Моршинська",
        description: "н/г, с/г",
        weight: "0,5 л",
        price: "50"
    },
    {
        name: "Вода Моршинська",
        description: "н/г, с/г",
        weight: "0,33 л",
        price: "50"
    },
    {
        name: "Coca-Cola, Fanta, Sprite,Pepsi",
        weight: "жб 0,33 л",
        price: "40"
    },
    {
        name: "Coca-Cola, Fanta, Sprite,Pepsi",
        weight: "скло 0,25 л",
        price: "50"
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
        description: "на вибір: яблуко / селера / грейпфрут / морква / апельсин",
        weight: "300",
        price: "140"
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
        price: "100"
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
    {
        name: "Тропічний сік",
        weight: "450",
        price: "80"
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
        name: "Маргарита Динна",
        description: "текіла, лікер, лимонний сік, лайм",
        weight: "0,150",
        price: "200"
    },
    {
        name: "Секс на пляжі",
        description: "горілка, лікери, апельсиновий сік, морс",
        weight: "0,300",
        price: "190"
    },
    {
        name: "Сієста",
        description: "текіла, лікер, лимонний сік",
        weight: "0,150",
        price: "190"
    },
    {
        name: "Сік джунглів",
        description: "джин, лікер, лимонний сік, апельсиновий сік",
        weight: "0,250",
        price: "180"
    },
    {
        name: "Мохіто",
        description: "ром, тростинний сироп, спрайт, лайм, м’ята",
        weight: "0,400",
        price: "180"
    },
    {
        name: "Джин з тоніком",
        weight: "0,250",
        price: "150"
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
        name: "Fragolino Sarsitano",
        description: "Rosso біле/Bianco солодке, (Італія)",
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
        description: " «Special Edition» напівсухе, напівсололке, солодке",
        weight: "1 пл.",
        price: "250"
    },
    {
        name: "CAVA Palau",
        description: "брют (Іспанія)",
        weight: "1 пл.",
        price: "500"
    },
    {
        name: "Рокка Россо Просекко",
        description: "(Італія)",
        weight: "1 пл.",
        price: "600"
    },
    {
        name: "Santa Chiara Просекко",
        description: "(Італія)",
        weight: "1 пл.",
        price: "600"
    },
    {
        name: "Contessa Chiara Асті",
        description: "(Італія)",
        weight: "1 пл.",
        price: "550"
    },
    {
        name: "Docs 8 Asti",
        description: "(Італія)",
        weight: "1 пл.",
        price: "500"
    },
    {
        name: "Мартіні Просекко/Асті",
        weight: "1 пл.",
        price: "750"
    }
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
        name: "Ріоджа Кастиліо",
        description: "сухе/напівсолодке (Іспанія)",
        weight: "100",
        price: "60"
    },
    {
        name: "Піно Гріджио",
        description: "сухе (Італія)",
        weight: "100",
        price: "50"
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
        name: "Кінзмараулі",
        description: "напівсолодке (Грузія)",
        weight: "100",
        price: "140"
    }
];

//Алкогольні Напої
//Вермути
const menuVermut = [
    {
        name: "Мартіні Россо",
        weight: "100",
        price: "60"
    },
    {
        name: "Мартіні Россо Фіеро",
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
        name: "Лімончелло",
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
        price: "80"
    },
    {
        name: "Bacardi Carta Negra",
        weight: "100",
        price: "81"
    },
    {
        name: "Bacardi Carta Spiced",
        weight: "100",
        price: "81"
    },
    {
        name: "Bacardi Oakheart Original",
        weight: "100",
        price: "81"
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
        name: "Beefeater",
        description: "Blood Orange/Pink",
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
        name: "Jameson",
        weight: "100",
        price: "180"
    },
    {
        name: "Джек Деніелс",
        weight: "100",
        price: "210"
    },
    {
        name: "Блек+Вайт",
        weight: "100",
        price: "100"
    },
    {
        name: "Беллс",
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
        name: "Ballantine`s",
        weight: "100",
        price: "150"
    },
    {
        name: "O`Brian",
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
        name: "АрАрАт",
        description: "3★",
        weight: "100",
        price: "150"
    },
    {
        name: "АрАрАт",
        description: "5★",
        weight: "100",
        price: "190"
    },
    {
        name: "Ужгород",
        description: "3★",
        weight: "100",
        price: "80"
    },
    {
        name: "Orbeliani",
        description: "3★",
        weight: "100",
        price: "80"
    },
    {
        name: "Orbeliani",
        description: "4★",
        weight: "100",
        price: "80"
    },
    {
        name: "Orbeliani",
        description: "5★",
        weight: "100",
        price: "90"
    },
    {
        name: "Аракс",
        description: "3★",
        weight: "100",
        price: "60"
    },
    {
        name: "Аракс",
        description: "5★",
        weight: "100",
        price: "90"
    },
    {
        name: "Легенда Вірменії",
        description: "3★",
        weight: "100",
        price: "70"
    },
    {
        name: "Легенда Вірменії",
        description: "5★",
        weight: "100",
        price: "90"
    },
    {
        name: "Легенда Вірменії",
        description: "10★",
        weight: "100",
        price: "140"
    },
    {
        name: "Колхида",
        description: "3★",
        weight: "100",
        price: "70"
    },
    {
        name: "Колхида",
        description: "5★",
        weight: "100",
        price: "80"
    },
    {
        name: "Алекс",
        description: "3★",
        weight: "100",
        price: "100"
    },
    {
        name: "Алекс",
        description: "5★",
        weight: "100",
        price: "110"
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
    }
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
        name: "Стелла Артуа",
        weight: "0.5 жб/пл.",
        price: "80"
    }, {
        name: "Стелла Артуа б/а",
        weight: "0.33 жб",
        price: "55"
    },
    {
        name: "Стелла Артуа",
        weight: "розливне",
        price: "70"
    },
    {
        name: "Корона",
        weight: "0.33 1 пл.",
        price: "90"
    },
    {
        name: "Льофф блонд",
        weight: "0.33 1 пл.",
        price: "95"
    },
    {
        name: "Левінбрау",
        weight: "0.33 1 пл.",
        price: "95"
    },
    {
        name: "Левінбрау",
        weight: "розливне",
        price: "70"
    },
    {
        name: "Хугарден Вайт",
        weight: "0.5 пл.",
        price: "100"
    },
    {
        name: "Хугарден Вайт",
        weight: "0.33 жб.",
        price: "120"
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