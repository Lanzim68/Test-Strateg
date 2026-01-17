let selectedTerm = null;
const terms = document.querySelectorAll('.term');
const defs = document.querySelectorAll('.def');

terms.forEach(btn => btn.addEventListener('click', () => {
    // Снимаем выделение с других терминов
    terms.forEach(t => t.classList.remove('selected'));
    btn.classList.add('selected');
    selectedTerm = btn;
}));

defs.forEach(btn => btn.addEventListener('click', () => {
    if (!selectedTerm) {
        alert("Сначала выберите компонент слева!");
        return;
    }

    if (selectedTerm.dataset.id === btn.dataset.match) {
        // Успех
        selectedTerm.classList.add('matched');
        btn.classList.add('matched');
        selectedTerm = null;
        checkWin();
    } else {
        // Ошибка
        btn.classList.add('error');
        setTimeout(() => btn.classList.remove('error'), 400);
    }
}));

function checkWin() {
    const matchedCount = document.querySelectorAll('.btn.matched').length;
    if (matchedCount === (terms.length + defs.length)) {
        alert("🎉 Отлично! Стратегия сформирована верно.");
    }
}

document.getElementById('reset-btn').onclick = () => location.reload();
