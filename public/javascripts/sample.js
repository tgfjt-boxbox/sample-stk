var myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

document.addEventListener('DOMContentLoaded', (event) => {
  const $jumon = document.getElementById('js-jumon')
  const $input = document.querySelector('[name=name]')

  $input.addEventListener('input', (event) => {
    fetch(`/api/jumon?q=${event.target.value}`, { headers: myHeaders })
      .then((res) => res.json())
      .then((result) => {
        const newlist = result.jumon.map((j) => {
          return `<li>${j.name}: ${j.description}</li>`
        }).join('')
        $jumon.innerHTML = newlist
      })
  })
})
