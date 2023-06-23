const newUser = {
    name: 'Joe',
    job: 'Teacher'
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
}).then(res => {
        if (!res.ok) {
            console.log('Problem')
            return
        }
        return res.json()
    })
    .then(data => console.log('Success'))
    .catch(error => console.log(error))