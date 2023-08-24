// Задание 1. 
// Вы разрабатываете страницу для отображения информации о товаре. У вас есть объект product, который содержит информацию о товаре, включая название, цену и URL изображения товара. Вам необходимо отобразить эту информацию на странице с использованием v-bind.
// Добавьте кнопку, которая будет изменять цену товара. При нажатии на кнопку должна генерироваться скидка на товар от 1 до 20% и обновиться цена товара в соответствии с значением скидки


// const product = new Vue ({
//     el: "#product",
//     data: {
//         product: {
//             name: "Samsung",
//             price: 50_000,
//             url: "https://c.dns-shop.ru/thumb/st4/fit/0/0/4443a25baee97e5b1f75c4e9bad9eded/f76ac36b9234f01140b421885d462f84f6752a10ef9f67ae6bee09876b247249.jpg.webp",
//             hasDiscount: false,
//         },
//     },
//     methods: {
//         makeDiscount() {
//             if(!this.product.hasDiscount) {
//                 // пример преподавателя, как можно было сделать рандомно:
//                 // let random = parseInt(Math.random() * 20);
//                 // this.product.price = this.product.price * random / 100;
//                 const newPrice = Number((this.product.price * 0.8).toFixed(2)); // здесь статичная скидка 20%
//                 this.product.price = newPrice;
//                 this.product.hasDiscount = true;
//             }
//         },
//     },
// })

// Задание 2
// Вы разрабатываете простое приложение для отображения списка пользователей. У вас есть массив объектов users, где каждый объект представляет одного пользователя с его именем и возрастом. Вам необходимо отобразить каждого пользователя из массива в виде списка на странице.

// const users = new Vue ({
//     el: "#users",
//     data: {
//         users: [
//             {id: 1, nameUser: "Сергей", age: 28},
//             {id: 2, nameUser: "Сергей", age: 28},
//             {id: 3, nameUser: "Светлана", age: 26},
//             {id: 4, nameUser: "Алексей", age: 26},
//         ],
//     },
// })

// Задание 3
// Вы разрабатываете приложение для создания списка покупок. У вас есть массив объектов items, где каждый объект представляет товар с его названием и количеством. Вам необходимо отобразить список товаров, предоставить возможность изменять количество каждого товара и отмечать товары, которые уже куплены.

// const listOfProducts = new Vue({
//     el: '#listOfProducts',
//     data: {
//         message: '',
//         items: [
//             {nameItem: 'Молоко', quantity: '', isBought: false},
//             {nameItem: 'Хлеб', quantity: '', isBought: false},
//             {nameItem: 'Яблоки', quantity: '', isBought: false},
//             {nameItem: 'Мясо', quantity: '', isBought: false},
//         ],
//     },
//     methods: {
//         // addItem() {
//         //     this.items.push(this.message);
//         //     this.message = '';
//         // },
//         // deleteItem() {
//         //     this.items.splice(this.message, 1);
//         // },
//     },
// })

// Задание 4
// Вы разрабатываете приложение для управления списком контактов. У вас есть форма с полями "Имя", "Фамилия" и "Email", где пользователь может вводить информацию о новом контакте. После добавления контакта он должен отображаться в списке контактов. Требуется связать форму с данными и отображать список контактов на странице.
const ListOfContacts = new Vue({
    el: "#listOfContacts",
    data: {
        nameContact: "", 
        lactNameContact: "", 
        emailContact: "",
        contacts: [],
    },
    methods: {
        addContact() {
            this.contacts.push({
                nameContact: this.nameContact,
                lactNameContact: this.lactNameContact,
                emailContact: this.emailContact
            });
            this.nameContact = "";
            this.lactNameContact = "";
            this.emailContact = "";
        },
    },
})
// name, lastName, email