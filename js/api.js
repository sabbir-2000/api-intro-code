// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(data => data.json())
//         .then(data => console.log(data))
// }

// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(data => data.json())
//         .then(data => console.log(data))
// }

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(data => data.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => displayUsers(users))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => console.log(posts))
}
/* aytake bole auto call kore deya */
// loadPosts();

function displayUsers(users) {
    const ul = document.getElementById('users');
    for (const user of users) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} , email: ${user.email}`;
        ul.appendChild(li);
    }

}