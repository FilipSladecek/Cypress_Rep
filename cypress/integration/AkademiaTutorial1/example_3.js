/// <reference types="cypress" />

describe('Test set for academy', () =>{

    it('Akademia testing aplikacie', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a[href="http://automationpractice.com/"] img').click() //kliknutie na logo
        cy.get('#search_query_top').type('xxxxxxxxxxxxxxxxxxxxxxxxx{enter}') //vyhľadanie určeného stringu
        cy.contains('No results were found for your search') //overenie, že sa nič nenašlo
        cy.get('a[href="http://automationpractice.com/"] img').click() //kliknutie na logo - vrátenie na domovskú stránku
        cy.get('.sf-with-ul').should('contain.text', 'Women') //overenie pozície na domovskej stránke
    });

    it('Akademia testing aplikacie_2', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click() //prejdenie na okno prihlásenia
        cy.get('#email').type('--tvoj email--') //zadanie emailu
        cy.get('#passwd').type('--tvoje heslo--') //zadanie hesla
        cy.get('#SubmitLogin').click() //login po zadaní údajov
        cy.get('.lnk_wishlist').should('contain.text', 'My wishlist') //overenie prihlásenia
        cy.get('a[href="http://automationpractice.com/index.php?controller=order"]').eq(0).click() //otvorenie košíka
        cy.get('.alert-warning').should('contain.text','Your shopping cart is empty') //overenie, či je prázdny
        cy.get('.logout').should('contain.text','Sign out').click() //odhlásenie
        cy.get('.login') //overenie odhlásenia
    });

    it('Akademia testing aplikacie_3', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.product-name').contains('Blouse').click() //otvorenie okna produktu
        cy.get('.exclusive').contains('Add to cart').click() //pridanie do košíka
        cy.wait(5000) //počkať na správu úspešného pridania
        cy.get('.icon-ok') //kontrola či je produkt v košíku
    });

    it('Akademia testing aplikacie_4', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.product-name').contains('Blouse').click() //otvorenie okna produktu
        cy.get('.exclusive').contains('Add to cart').click() //pridať do košíka
        cy.wait(5000) //počkať na správu úspešného pridania
        cy.get('.icon-ok') //overenie úspešného pridania
        cy.contains('Continue shopping').click() //zrušenia okna produktu
        cy.get('.logo.img-responsive').click() //prechod na domovskú stánku
        cy.get('.ajax_cart_quantity').contains('1').should('contain.text','1').click() //kontorla prítomnosti produktu v košíku a otvorenie košíka
        cy.get('a[href="http://automationpractice.com/index.php?controller=order&step=1"]').click() //postúpenie ku objednávke
        cy.get('#email').type('--tvoj email--') //zadanie emailu
        cy.get('#passwd').type('--tvoje heslo--') //zadanie hesla
        cy.get('#SubmitLogin').click() //login po zadaní údajov
        cy.contains('Proceed to checkout').click({force: true}) //ďalší krok - tlačidlo sa "skrývalo" za inou vrstvou
        cy.get('a[href="http://automationpractice.com/index.php?controller=order&step=1"]').click() //ďalší krok
        cy.get('button[name="processAddress"]').click() //ďalší krok
        cy.get('#cgv').click() //checknutie checkboxu
        cy.get('button[name="processCarrier"]').click() //ďalší krok
        cy.get('a[href="http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment"]').click() //vybratie spôsobu platby
        cy.get('p').children('button[type="submit"]') //overenie, či je možné potvrdiť objednávku
    });

    it.only('Akademia testing trigger()', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a[href="http://automationpractice.com/index.php?id_category=8&controller=category"]')
        .contains('Dresses').trigger('mousedown',{force: true})
        cy.wait(100)
        cy.get('a[href="http://automationpractice.com/index.php?id_category=8&controller=category"]')
        .contains('Dresses').trigger('mouseup',{force: true})
        //cy.get('a[href="http://automationpractice.com/index.php?controller=cart&add=1&id_product=2&token=e817bb0705dd58da8db074c69f729fd8"]')
        //.eq(0).trigger('click')
        cy.get('a[href="http://automationpractice.com/"] img').trigger('click')
    });
    
    it('Akademia testing shadow()', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#searchbox')
        .find('search')
    });

    it('Akademia testing shadow()', () => {
        cy.visit('https://books-pwakit.appspot.com/',{timeout: 6000})
    });
})