// GET REQUEST
fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  .then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status)
      return
    }

    response.json().then((data) => {
      console.log(data)
    })
  })
  .catch((err) => {
    console.log('Fetch Error :-S', err)
  })

// POST REQUEST
url = 'localhost:3000/post-example'

data = {
  "foo": "bar",
  "lorem": "ipsum"
}

fetch(url, {
  method: 'post',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: data
})
  .then(json)
  .then((data) => {
    console.log('Request succeeded with JSON response', data)
  })
  .catch((error) => {
    console.log('Request failed', error)
  })

// Promise.all

async function fetchJson(url) {
  const response = await fetch(url)
  return await response.json()
}

function fetchAll() {
  Promise.all([
    fetchJson("http://locahost:3000/employees"),
    fetchJson("http://locahost:3000/roles")
  ]).then(([employees, roles]) => {
    console.log(employees, roles)
  })
}