document.addEventListener('DOMContentLoaded', ()=>{

    const button = document.querySelector('button')
    button.addEventListener('click', ()=> {
        setTimeout(() => button.classList.toggle('buttonChanged'), 1000)    // Using two Callback to change color of the button. Doing unneccessary stuff
        button.value = 'There you are'  // funktioniert nicht
    })
    
})

    function showCountries() {
        let xhr = new XMLHttpRequest                                // xhr = XmlHttpRequest
        xhr.open('GET','https://restcountries.com/v3.1/all', true)  // Request is initialized
        xhr.send()                                                  // Actual Object is send
        xhr.onload = function() {                                   // what to do on response
            if(xhr.status == 200){
                console.log('You Got a HTTP Status Code 200')
                let countriesJSONlist = JSON.parse(this.response)   // Responseobject is actually a JSON file
                countriesJSONlist.forEach(country => { 
                    const singleCountryDiv = document.createElement('div')
                    singleCountryDiv.innerHTML = country.name.common
                    console.log(singleCountryDiv.innerHTML)
                    document.getElementById('listDiv').appendChild(singleCountryDiv)
                })
            }    
        }
    }
