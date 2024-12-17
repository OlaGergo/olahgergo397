fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(res=>document.getElementById('lga').innerHTML=res[0].title)
//le kérjük az adatokat egy oldalrol is kiiratjuk az oldalra
fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(res=>console.log(res))
//le kérjük az adatokat és kiiratjuk a consoleba