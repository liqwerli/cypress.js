
describe('Негативный кейс авторизации - неверный пароль', function () {
   it('Проверка, что получили нужный текст и есть кнопка крестика', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
