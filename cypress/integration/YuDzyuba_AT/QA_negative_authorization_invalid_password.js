
describe('Негативный кейс авторизации - невалидный пароль', function () {
   it('Проверка, что получили нужный текст и есть кнопка крестика', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
	     cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })
})