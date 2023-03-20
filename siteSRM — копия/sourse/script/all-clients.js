var addAudit = function () {
    var elemKod = document.querySelector('.in-kod').innerHTML;
    var elemOutKod = document.querySelector('.out-kod');

    elemOutKod.innerHTML += '<div>' + elemKod + '</div>';
};

document.onclick = function () {
    var elem = window.event.srcElement;
    if (elem.className === "btn") {
        addAudit();
    }
};

// const FIO = document.getElementById("clientFullname").value;
// const callNumber = document.getElementById('clientCallNumber').value;
// console.log(FIO)

let countAllClients = 5

for (let index = 0; index <= countAllClients; index++) {
    addAudit();
}

const func1 = () => {
    const FIO = document.getElementById("clientFullname").ariaValueText;
    const callNumber = document.getElementById("clientCallNumber").ariaValueText;
    // const link = document.getElementById("link").value;
    console.log(FIO)
}
