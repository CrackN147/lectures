async function nameOne() {
  const data = await fetch('https://catfact.ninja/fact', {'method': 'GET'});
  return await data.json();
}
data = {
  name: 'John',
  age: 30
}
async function sendDataToServer(data) {
  const responce = await fetch('urlToPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (responce.ok) {
    return await responce.json();
  }
}

nameOne();