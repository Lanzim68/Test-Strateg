const draggables = document.querySelectorAll('.drag-item');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(item => {
    item.addEventListener('dragstart', () => item.classList.add('dragging'));
    item.addEventListener('dragend', () => item.classList.remove('dragging'));
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', e => {
        e.preventDefault();
        zone.classList.add('hover');
    });

    zone.addEventListener('dragleave', () => zone.classList.remove('hover'));

    zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('hover');
        const draggedItem = document.querySelector('.dragging');
        
        if (draggedItem.id === zone.dataset.match) {
            zone.classList.add('correct');
            zone.innerText = draggedItem.innerText;
            draggedItem.style.display = 'none';
            checkWin();
        } else {
            alert('Попробуйте еще раз!');
        }
    });
});

function checkWin() {
    if (document.querySelectorAll('.correct').length === 4) {
        alert('Поздравляем! Вы верно определили все компоненты!');
    }
}

document.getElementById('resetBtn').onclick = () => location.reload();
