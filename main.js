let button = document.querySelector('#getText');

let showText = document.querySelector('#output');

let buttonJson = document.querySelector('#userJson')

button.addEventListener('click', getText);

buttonJson.addEventListener('click' , userJson)


document.getElementById('fetch').addEventListener('click',getPost)
document.getElementById('addPost').addEventListener('submit',addPost)


function getText() {
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        showText.innerHTML = data; 
        
    })
    .catch((err) => console.log(err))
};

function userJson() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let outPut = "<h2>users</h2>"
        data.forEach((user) =>{
            outPut += `
            <ul class='list-group mb-3'> 
                <li class='list-group-item'>ID: ${user.id} </li>
                <li class='list-group-item' >name: ${user.name}</li>
                <li class='list-group-item' >lastname: ${user.lastname}</li>
                <li class='list-group-item'>job: ${user.job}</li>
            </ul>
            `;
        });
        showText.innerHTML =outPut
    })
};

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let veriler = '<h2 class="mb-4">PlaceHolder data</h2>';
        data.forEach((post) => {
            veriler += `
            <div class='card card-body mb-3'> 
               <h3>${post.title} </h3>
               <p>${post.body}</p>
            </div>
            `
        });
        showText.innerHTML = veriler

    })
};
function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
            'accept':'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title,body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}
