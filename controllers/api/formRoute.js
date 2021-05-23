window.onload = () => {
    formInputGenerator()
}

const formInputGenerator= () => {
    fetch('"https://listen-api.listennotes.com/api/v2"')
    .then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        showInputData(data)
    })
}

showRandomData = (randomData) => {

    if (randomData.results[0].gennre === "male") {
        document.getElementById('gender').innerHTML = "<i class='fas fa-mars'></i>"
    } else {
        document.getElementById('gender').innerHTML = "<i class='fas fa-venus'></i>"
    }

    document.getElementById('name').innerText = `${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}`

    document.getElementById('age').innerText = `${randomUser.results[0].dob.age}`

    document.getElementById('email').innerText = `${randomUser.results[0].email}`

    document.getElementById('phone').innerText = `${randomUser.results[0].phone}`

    
}


