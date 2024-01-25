var tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text = "Кнопка";
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "#143F6B";
tg.MainButton.show()

let usercard = document.getElementById("usercard");

let profName = document.createElement('p');
profName.innerText = `${tg.initDataUnsafe.user.language_code}`;

usercard.appendChild(profName);