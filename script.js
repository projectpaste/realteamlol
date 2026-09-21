// Ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('action-btn');
    const message = document.getElementById('secret-message');

    // Слушаем клик по кнопке
    button.addEventListener('click', () => {
        // Переключаем видимость сообщения
        message.classList.toggle('hidden');
        
        // Меняем текст кнопки в зависимости от состояния
        if (message.classList.contains('hidden')) {
            button.textContent = 'Нажми на меня';
        } else {
            button.textContent = 'Скрыть';
        }
    });
});
