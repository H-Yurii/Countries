/* let user = {
    name: 'John',
    email: 'james@example.com'
}


let element = Handlebars.compile(document.querySelector('.element').innerHTML)

document.querySelector('.container').innerHTML = element(user) */


const productsData = {
    products: [
        {
            name: "Wireless Headphones",
            description: "High-quality sound with noise cancellation.",
            price: 120,
            image: "https://via.placeholder.com/300x200?text=Headphones"
        },
        {
            name: "Smart Watch",
            description: "Track your fitness and stay connected on the go.",
            price: 90,
            image: "https://via.placeholder.com/300x200?text=Smart+Watch"
        },
        {
            name: "Gaming Mouse",
            description: "Ergonomic design with RGB lighting.",
            price: 50,
            image: "https://via.placeholder.com/300x200?text=Gaming+Mouse"
        }
    ]
};

let productsList = Handlebars.compile(document.querySelector('.productsList').innerHTML)

document.querySelector('.products-container').innerHTML = productsList(productsData)


/* ------ 2. Aufgabe ------ */


/* Імпортувати з окремого файла масив об’єктів countries.  
Написати скрипт який буде рендерити на сторінці картки з 
країнами. */

let countriesData = {
    countries:  [ 
        { 
            name: "Australia", 
            capital: "Canberra", 
            currency: "Australian Dollar (AUD)", 
            language: "English", 
            population: 24970200, 
            flag: "https://wikiway.com/upload/iblock/742/800pxFlagofAustraliasvg.png", 
            infected: false 
        }, 
        { 
            name: "Bolivia", 
            capital: "Sucre", 
            currency: "Boliviano (BOB)", 
            language: "Spanish, Quechua, Aymara, Guarani", 
            population: 10461053, 
            flag: "https://wikiway.com/upload/iblock/5ed/800px-Flag_of_Bolivia.png", 
            infected: true 
        }, 
        { 
            name: "United Kingdom", 
            capital: "London", 
            currency: "Pound Sterling (GBP)", 
            language: "English", 
            population: 63395574, 
            flag: "https://wikiway.com/upload/iblock/5ec/800px-Flag_of_the_United_Kingdom_svg.png", 
            infected: false 
        }, 
        { 
            name: "Jamaica", 
            capital: "Kingston", 
            currency: "Jamaican Dollar (JMD)", 
            language: "English", 
            population: 2868380, 
            flag: "https://wikiway.com/upload/iblock/b83/600px-Flag_of_Jamaica_svg.png", 
            infected: false 
        }, 
        { 
            name: "Sweden", 
            capital: "Stockholm", 
            currency: "Swedish Krona (SEK)", 
            language: "Swedish", 
            population: 9723809, 
            flag: "https://wikiway.com/upload/iblock/5e3/800px-Flag_of_Sweden_svg.png", 
            infected: true 
        }, 
        { 
            name: "Portugal", 
            capital: "Lisbon", 
            currency: "Euro (EUR)", 
            language: "Portuguese", 
            population: 10799270, 
            flag: "https://wikiway.com/upload/iblock/2b1/600px-Flag_of_Portugal_svg.png", 
            infected: true 
        } 
    ]
}

let countriesList = Handlebars.compile(document.querySelector('.countriesList').innerHTML)

document.querySelector('.country-container').innerHTML  = countriesList(countriesData)