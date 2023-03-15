let api = 'https://randomuser.me/api/?results=1'
const container = document.querySelector('.container')
const btn = document.querySelector(".btn")
const button = document.querySelector("button")
fetch(api)
.then(res => res.json())
.then(data => getData(data))

function getData(data) {
    let persons = data.results


    persons.forEach(persons =>{
        console.log(persons);
        let {title , first , last } = persons.name
        container.innerHTML += `
        <div class="wrapper">
            <h2 class='p'>${title} ${first} ${last}</h2>
            <p class='tel'>${persons.phone}</p>
            <img src=${persons.picture.medium} alt=${first}>
        </div>
        `
    })
}
btn.addEventListener('click' , e=>{
    container.innerHTML += `
        
        `
})
