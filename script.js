var carda = window.document.getElementById('card')
var list = document.getElementById('lista')
var res = document.getElementById('res')

var fotocarol = document.getElementById('fcarol')
var fototiago = document.getElementById('ftiago')
var fototaina = document.getElementById('ftainara')
var fotovini = document.getElementById('fvini')


function escolha() {
    if (list.style.display == 'block') {
        list.style.display = 'none'
    } else {
        list.style.display = 'block'
}
    
}

    function ca(){
        if (
            fotocarol.style.display == 'none' || fototiago.style.display == 'block' || fototaina.style.display == 'block' || fotovini.style.display == 'block') {
                fotocarol.style.display = 'block'
                fototiago.style.display = 'none'
                fototaina.style.display = 'none'
                fotovini.style.display = 'none'

            } else {
             fotocarol.style.display = 'none'
            }
    }

    function ti(){
        if (
            fotocarol.style.display == 'block' || fototiago.style.display == 'none' || fototaina.style.display == 'block' || fotovini.style.display == 'block') {
                fotocarol.style.display = 'none'
                fototiago.style.display = 'block'
                fototaina.style.display = 'none'
                fotovini.style.display = 'none'

            } else {
                fototiago.style.display = 'none'
            }

    }
    function ta(){
        if (
            fotocarol.style.display == 'block' || fototaina.style.display == 'none' || fototiago.style.display == 'block' || fotovini.style.display == 'block') {
                fotocarol.style.display = 'none'
                fototaina.style.display = 'block'
                fototiago.style.display = 'none'
                fotovini.style.display = 'none'

            } else {
                fototaina.style.display = 'none'
            }
    }

    function vi() {
        if (
            fotocarol.style.display == 'block' || fototaina.style.display == 'block' || fototiago.style.display == 'block' || fotovini.style.display == 'none') {
                fotocarol.style.display = 'none'
                fototaina.style.display = 'none'
                fototiago.style.display = 'none'
                fotovini.style.display = 'block'

            } else {
                fotovini.style.display = 'none'
            }
    }
    