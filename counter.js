


fetch('https://cpb0nr5i3b.execute-api.us-east-1.amazonaws.com/default/visitor_counter') 
.then(res => res.json())
.then((data) => {
    console.log(data);
    document.getElementById('count').insertAdjacentHTML('beforeend', data);
})
.catch(error => console.log('ERROR FOUND'))