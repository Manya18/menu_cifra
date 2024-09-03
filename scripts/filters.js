document.getElementById('filters-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let numberVZN = document.getElementById('numberVZN').value;
    let sender = document.getElementById('sender').value;
    let receiver = document.getElementById('receiver').value;
    let period = document.getElementById('period').value;

    if (!/^\d{1,20}$/.test(numberVZN)) {
        document.getElementById('numberVZN').style.borderColor = 'red';
        alert('Номер ВЗН должен быть целым положительным числом до 20 знаков.');
        return;
    }
    if (sender.length > 50 || receiver.length > 50) {
        document.getElementById('receiver').style.borderColor = 'red';
        document.getElementById('sender').style.borderColor = 'red';
        alert('Отправитель и получатель должны быть строками до 50 символов.');
        return;
    }
    const dateRegex = /^(\d{2}\.\d{2}\.\d{4}) - (\d{2}\.\d{2}\.\d{4})$/;
    if (!dateRegex.test(period)) {
        document.getElementById('period').style.borderColor = 'red';
        alert('Дата принятия должна быть в формате "dd.mm.yyyy - dd.mm.yyyy".');
        return;
    }
    alert('Форма заполнена верно');
    document.location.href = '../pages/menu-listVZN.html'
})