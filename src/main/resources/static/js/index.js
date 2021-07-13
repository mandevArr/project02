fetch('/api/foo')
  .then((d) => d.json())
  .then((d) => {
    document.querySelector('#app').innerHTML = JSON.stringify(d)
  })
