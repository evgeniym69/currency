'use strict';

class App {
	constructor() {
		new $shared['registration']({
      "className": 'fx-registration-form',
      "callback": () => {setTimeout(() => {location.href = "video.html"}, 5000)},
      "translation": {
        ru: {
           200: 'Спасибо вы успешно зарегистрировались, данные о регистрации отправлены вам на почтовый ящик. <br /><br /> Вас ждет первый урок <br /> <a href="/video.html" class="st-link__btn turn-center">Смотреть</a>',
           423: 'Мы заподозрили странную активность с вашего IP попробуйте через 5 секунд и удостоверьтесь что вы ввели правильные данные',
           400: 'Возникли проблемы с регистрацией пользователя. Возможные причины:',
           500: 'Временные неполадки сервера, извините. Попробуйде позже, мы уже проводим технические работы по исправлению данной проблемы!'
        }
      },
      "headers": {
        "Content-Type": "application/json",
        "point": "fx",
      }
    })
	}
}

window.addEventListener('DOMContentLoaded', function(){
	new App();
});
