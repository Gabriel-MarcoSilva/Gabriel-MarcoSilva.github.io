getBtn = document.getElementById("getBtn")
containerCards = document.getElementById("container-cards")

arrayData = []

const requestHTTP = (method, url) =>{

    const promise = new Promise((resolve, reject) =>{
        const xhr = new  XMLHttpRequest()
        
        xhr.open(method, url)
    
        xhr.responseType = 'json'
        
        xhr.onload = () =>{
    
            resolve(xhr.response)
            // arrayData = []
            // const data = JSON.parse(xhr.response)
            // arrayData = data.data
        
            // arrayData.map((item) =>{
            //     containerCards.appendChild(document.createElement("p").appendChild(document.createTextNode(item.first_name)))
            //     containerCards.appendChild(document.createElement("br"))
            // })
        
        }
        
        xhr.send()
    })

    return promise
}

const getData = () =>{
    requestHTTP("GET", "https://reqres.in/api/users").then(responseData =>{
        console.log(responseData)
    })
}

getBtn.addEventListener('click', getData)