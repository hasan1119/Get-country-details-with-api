var api = 'https://api.kanye.rest'
const loadKanye = () => {
    fetch(api).then(res => res.json()).then(data => {
        var quote = document.getElementById('quote')
        var p = document.createElement('p')
        p.innerText = data.quote;
        quote.appendChild(p)
    })
}