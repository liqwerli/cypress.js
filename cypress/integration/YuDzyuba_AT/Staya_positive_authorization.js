
describe('Позитивный кейс авторизации', function () {
   it('Проверка, что получили нужный текст', function () {
   		cy.visit('https://staya.dog/');
		cy.get('.header-bottom__right--link').click();   
		cy.get('.auth-form > form > [type="email"]').type('yus.dzyuba@yandex.ru');
		cy.get('.auth-form > form > [type="password"]').type('Qastudiovis1');
		cy.get('.auth-form__submit').click();
		cy.contains('Мои заказы');   
    })
})

