const responses = {
    "привіт": "Привіт! 👋 Я твій віртуальний гід по світу Штучного Інтелекту. Ти можеш запитати мене про: <br><br>🔹 Історію ШІ<br>🔹 Типи ШІ<br>🔹 Застосування<br>🔹 Етику<br>🔹 Майбутнє",
    
    "історія": `🏛 <strong>Історія розвитку ШІ:</strong>
    <br><br>
    🔹 <strong>1950:</strong> Алан Тюрінг запропонував "Тест Тюрінга" для перевірки інтелекту машин.
    <br>
    🔹 <strong>1956:</strong> Дартмутська конференція — саме тут народився термін "Artificial Intelligence".
    <br>
    🔹 <strong>1997:</strong> Комп'ютер Deep Blue переміг чемпіона світу з шахів Гаррі Каспарова.
    <br>
    🔹 <strong>Сьогодення:</strong> Поява генеративних моделей (як ChatGPT) змінила світ технологій назавжди.`,

    "типи": `🤖 <strong>Типи ШІ за рівнем можливостей:</strong>
    <br><br>
    1. <strong>Вузький ШІ (ANI):</strong> Спеціалізується на одній задачі (Siri, рекомендації YouTube, автопілот). Це єдиний тип, що існує зараз.
    <br>
    2. <strong>Загальний ШІ (AGI):</strong> Гіпотетична машина, яка зможе мислити та навчатися як людина.
    <br>
    3. <strong>Суперінтелект (ASI):</strong> Інтелект, що значно перевершує людський у всіх сферах.`,

    "застосування": `💡 <strong>Де застосовується ШІ сьогодні?</strong>
    <br><br>
    🏥 <strong>Медицина:</strong> Аналіз знімків МРТ, розробка нових ліків.
    <br>
    🚗 <strong>Транспорт:</strong> Автопілоти Tesla та оптимізація маршрутів.
    <br>
    🎨 <strong>Мистецтво:</strong> Генерація картин (Midjourney) та музики.
    <br>
    📱 <strong>Побут:</strong> Розумні будинки, голосові асистенти та перекладачі.`,

    "етика": `⚖️ <strong>Етичні виклики ШІ:</strong>
    <br><br>
    ⚠️ <strong>Упередженість:</strong> Алгоритми можуть переймати людські стереотипи.
    <br>
    ⚠️ <strong>Безробіття:</strong> Автоматизація може замінити людей багатьох професій.
    <br>
    ⚠️ <strong>Діпфейки:</strong> Створення підроблених відео, які важко відрізнити від реальності.
    <br>
    ⚠️ <strong>Відповідальність:</strong> Хто винен в аварії безпілотного авто — розробник чи власник?`,

    "майбутнє": `🚀 <strong>Що нас чекає у майбутньому?</strong>
    <br><br>
    Ми рухаємося до створення <strong>AGI</strong> (Загального ШІ). Очікується симбіоз людини та машини (нейроінтерфейси). ШІ допоможе вирішити глобальні проблеми, такі як зміна клімату та невиліковні хвороби, але також вимагатиме суворого контролю безпеки.`
};

const chatIcon = document.getElementById('chat-icon');
const chatContainer = document.getElementById('chat-container');
const closeChat = document.querySelector('.close-chat');
const sendBtn = document.getElementById('send-button');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

if (chatIcon) {
    chatIcon.addEventListener('click', () => {
        chatContainer.style.display = 'flex';
        chatIcon.style.display = 'none';
    });
}

if (closeChat) {
    closeChat.addEventListener('click', () => {
        chatContainer.style.display = 'none';
        chatIcon.style.display = 'flex';
    });
}

function sendMessage() {
    const text = userInput.value.trim().toLowerCase();
    
    if (text === "") return;

    addMessage(userInput.value, 'user-message');
    userInput.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(text);
        addMessage(botResponse, 'bot-message');
    }, 500);
}

function getBotResponse(input) {
    if (input.includes("історі") || input.includes("виник")) return responses["історія"];
    if (input.includes("тип") || input.includes("види")) return responses["типи"];
    if (input.includes("застосуван") || input.includes("де використ")) return responses["застосування"];
    if (input.includes("етик") || input.includes("проблем") || input.includes("ризик")) return responses["етика"];
    if (input.includes("майбутн") || input.includes("перспектив")) return responses["майбутнє"];
    if (input.includes("привіт") || input.includes("добрий день")) return responses["привіт"];

    return "Вибачте, я поки не розумію цього запитання. Спробуйте запитати про 'історію', 'типи' або 'майбутнє' ШІ.";
}

function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.innerHTML = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
}