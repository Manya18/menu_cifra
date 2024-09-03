const vznList = [
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 132313,
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    }
]

const ListVZNWrapper = document.getElementsByClassName('menuListVZN-wrapper')[0];

vznList.forEach(vzn => {
    const vznItem = document.createElement('div');
    vznItem.classList.add('menuListVZN-item');

    const vznTitle = document.createElement('div');
    vznTitle.classList.add('menuListVZN-item-title');
    vznTitle.textContent = 'ВЗН №' + vzn.number;

    const vznInfo = document.createElement('div');
    vznInfo.classList.add('menuListVZN-item-info');
    
    const vznSender = document.createElement('div');
    vznSender.classList.add('menuListVZN-item-info-sender');
    vznSender.innerHTML = `<b>Отправитель:</b> ${vzn.sender}`;

    const vznRecipuient = document.createElement('div');
    vznRecipuient.classList.add('menuListVZN-item-info-recipient');
    vznRecipuient.innerHTML = `<b>Получатель:</b> ${vzn.receiver}`;

    const vznDate = document.createElement('div');
    vznDate.classList.add('menuListVZN-item-info-date');
    vznDate.innerHTML = `<b>Дата выдачи:</b> ${vzn.date}`;

    vznInfo.appendChild(vznSender);
    vznInfo.appendChild(vznRecipuient);
    vznInfo.appendChild(vznDate);

    vznItem.appendChild(vznTitle);
    vznItem.appendChild(vznInfo);
    ListVZNWrapper.appendChild(vznItem);
})
