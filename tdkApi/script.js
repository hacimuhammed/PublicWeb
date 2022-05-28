const btn = document.getElementById('click')
const list1 = document.getElementById('list1')
const list2 = document.getElementById('list2')
const inp = document.getElementById('inp')
const baslik1 = document.getElementById('baslik1')
const baslik2 = document.getElementById('baslik2')

let arr = []
let anlamCount, atasozuCount
const vars = [list1, list2, baslik1, baslik2]
btn.addEventListener('click', () => {
    for(let i=0;i<vars.length;i++){vars[i].style.opacity = 0}
    setTimeout(() => {
        for(let i=0;i<vars.length;i++){vars[i].innerHTML = ""}
    }, 1000);

    fetch('https://sozluk.gov.tr/gts?ara='+ inp.value)
        .then(response => response.json())
        .then(json => arr = JSON.parse(JSON.stringify(json)))

    setTimeout(() => {
        anlamCount = arr[0].anlamlarListe.length
        atasozuCount = arr[0].atasozu.length

        baslik1.innerText = anlamCount + " açıklama bulundu."
        baslik2.innerText = atasozuCount + " atasözü bulundu."

        for(let i = 0; i < anlamCount; i++){
            list1.innerHTML += "<li>" + arr[0].anlamlarListe[i].anlam + "</li>"
            list1.style.opacity = 1
            baslik1.style.opacity = 1
        }
        for(let i = 0; i < atasozuCount; i++){
            list2.innerHTML += "<li>" + arr[0].atasozu[i].madde + "</li>"
            list2.style.opacity = 1
            baslik2.style.opacity = 1
        }
    }, 1500);
})