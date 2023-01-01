var carda = window.document.getElementById('card')
var list = document.getElementById('lista')
var res = document.getElementById('res')

var fotocarol = document.getElementById('fcarol')


function escolha() {
    if (list.style.display == 'block') {
        list.style.display = 'none'
    } else {
        list.style.display = 'block'
}
    
}

function ca(){
    if (
        fotocarol.style.display == 'block') {
            fotocarol.style.display = 'none'
        } else {
            fotocarol.style.display = 'block'
        }
    
}