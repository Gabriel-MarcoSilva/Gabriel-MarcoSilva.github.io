getBtn = document.getElementById("getBtn")
containerCards = document.getElementById("container-cards")


baseURL = "https://reqres.in/api"

arrayData = []

const requestHTTP = (method, url, data) => {
    
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        
        xhr.open(method, url)

        //xhr.responseType = 'json'
        
        data ? xhr.setRequestHeader('Content-Type', 'application/json') : null
        
        xhr.onload = () => {
            
            if (xhr.status >= 400) {
                reject(chr.response)
            } else {
                resolve(xhr.response)
                
                arrayData = []
                
                if (!data) {
                    const info = JSON.parse(xhr.response)
                    arrayData = info.data

                    console.log(arrayData)
                    
                    arrayData.map((item) => {
                        let card = document.createElement("div")
                        let img = document.createElement("div")
                        img.style.backgroundImage = "url(images/gif.gif)"
                        img.className = "img-card"
                        card.className = "card"
                        card.appendChild(document.createElement("p").appendChild(document.createTextNode("Nome: " + item.first_name)))
                        card.appendChild(img)
                        card.appendChild(document.createElement("p").appendChild(document.createTextNode(item.email)))
                        containerCards.appendChild(card)
                    })
                }
            }

        }

        xhr.onerror = () => {
            reject("erro de comunicação")
        }

        xhr.send(JSON.stringify(data))
    })

    return promise
}

function getData() {
    requestHTTP("GET", `https://reqres.in/api/users`).then(responseData => {
        //console.log(responseData)
    })
}

function postData() {
    requestHTTP("POST", `${baseURL}/register`, {
        email: "eve.holt@reqres.in",
        password: "pistol"
    }).then(responseData => {
        console.log(responseData)
    }).catch(error => {
        console.log(error)
    })
}

getBtn.addEventListener('click', postData)