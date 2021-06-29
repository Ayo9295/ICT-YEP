// const fetch = require("node-fetch");
// async function getUsers() {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await res.json();
//         return data.map((user) =>{
//             console.log(user.name)
//             return user.name;
//         })
//     }
//     getUsers()

const http = require("http");
let request = http.get ('http://jsonplaceholder.typicode.com/users', (res)=>{
    if (res.statusCode !== 200) {
        console.log(`did not get an ok from the server. ${res.statusCode}`);
        res.resume();
        return;
    }
    let data ='';
    res.on('data',(chunk)=>{
        data += chunk;
    })
    res.on('close', () =>{
        console.log('retrieved all data');
        console.log(JSON.parse(data));
  
    })
    for (let i = 0; i < array.length; i++) {
        console.log[i].name;   
    }
})