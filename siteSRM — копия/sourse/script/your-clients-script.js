// const ul = document.querySelector('.content-b');

// // const elementT = document.querySelector('.element-bloc');

// // const newBlocElement = elementT.content.cloneNode(true);
// // let newBlocElement = element.content.clonNode(true);


// const templateElement = document.querySelector('.element-bloc');
// const documentFragment = templateElement.content.cloneNode(true);

// ul.append(documentFragment);

// обязательно сохранять счётчик


var addAudit = function () {
    var elemKod = document.querySelector('.in-kod').innerHTML;
    var elemOutKod = document.querySelector('.out-kod');

    elemOutKod.innerHTML += '<div class="mt-1" >' + elemKod + '</div>';
};

document.onclick = function () {
    var elem = window.event.srcElement;
    if (elem.className === "btn") {
        addAudit();
        countAllClients += 1
    }
};

const func1 = () => {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const link = document.getElementById("link").value;
    console.log(`Name: ${name}\nLast Name: ${lastname}\n Link: ${link}`)
}

