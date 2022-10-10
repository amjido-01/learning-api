const textBtn = document.querySelector(`#btn1`);
const userBtn = document.querySelector(`#btn2`);
const usersBtn = document.querySelector(`#btn3`)

const getTextData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`, `/test.txt`, true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = xhr.responseText;
            displayData(data)
        }
    }
}

let displayData = (data) => {
    let htmlTemplate = `<h5> ${data.toUpperCase()} </h5>`
    const textDisplay = document.querySelector(`#text-display`).innerHTML = htmlTemplate;
}
textBtn.addEventListener(`click`, getTextData)


let userName = 'khalid'.toUpperCase();
let userEmail = 'khalid@gmail.com'
const getUser = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/users.json', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = xhr.responseText;
            let jsonData = JSON.parse(data);
            jsonData.forEach((items) => {
                if (items.name.toUpperCase() === userName && items.email === userEmail) {
                    console.log(items)
                    displayUserData(items)
                }
            })
        }
    }
}
const displayUserData = (items) => {
    let htmlTemplate = `<ul>
        <li>ID: ${items.id}</li>
        <li>NANE: ${items.name}</li>
        <li>EMAIL: ${items.email}</li>
    </ul>`
    const userDisplay = document.querySelector(`#user-display`).innerHTML = htmlTemplate;
}
userBtn.addEventListener(`click`, getUser);

const getUsers = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/users.json', true);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            let convertData = JSON.parse(data);
            console.log(convertData)
            displayUsersData(convertData)
        }
    }
}

const displayUsersData = (convertData) => {
    let htmlTemplate = '';
    convertData.forEach((items) => {
        htmlTemplate += `<ul>
            <li>id: ${items.id}</li>
            <li>NAME: ${items.name}</li>
            <li>EMAIL: ${items.email}</li>
        </ul>`
    })
    const usersDisplay = document.querySelector(`#users-display`).innerHTML = htmlTemplate;
}
usersBtn.addEventListener(`click`, getUsers)