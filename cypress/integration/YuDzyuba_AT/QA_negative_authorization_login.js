
describe('Негативный кейс авторизации - неверный логин', function () {
   it('Проверка, что получили нужный текст и есть кнопка крестика', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('yuliya@dzyuba.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})