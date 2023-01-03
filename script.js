var carda = window.document.getElementById('card')
var list = document.getElementById('lista')
var res = document.getElementById('res')

var fotocarol = document.getElementById('fcarol')
var fototiago = document.getElementById('ftiago')
var fototaina = document.getElementById('ftainara')
var fotovini = document.getElementById('fvini')

var logoca = document.getElementById('lcarol')
var logoti = document.getElementById('ltiago')
var logota = document.getElementById('ltainara')
var logovi = document.getElementById('lvini')


function escolha() {
        fotocarol.style.display = 'none'
        fototiago.style.display = 'none'
        fototaina.style.display = 'none'
        fotovini.style.display = 'none'

        logoca.style.display = 'none'
        logoti.style.display = 'none'
        logota.style.display = 'none'
        logovi.style.display = 'none'

    if (list.style.display == 'block') {
        list.style.display = 'none'
    } else {
        list.style.display = 'block'
}
    
}

    function ca(){
        if (
            fotocarol.style.display == 'none' || fototiago.style.display == 'block' || fototaina.style.display == 'block' || fotovini.style.display == 'block' || logoca.style.display == 'none' || logoti.style.display == 'block' || logota.style.display == 'block' || logovi.style.display == 'block') {

                fotocarol.style.display = 'block'
                fototiago.style.display = 'none'
                fototaina.style.display = 'none'
                fotovini.style.display = 'none'
                
                logoca.style.display = 'block'
                logoti.style.display ='none'
                logota.style.display ='none'
                logovi.style.display ='none'

            } else {
             fotocarol.style.display = 'none'
             logoca.style.display = 'none'

            }
    }

    function ti(){
        if (
            fotocarol.style.display == 'block' || fototiago.style.display == 'none' || fototaina.style.display == 'block' || fotovini.style.display == 'block' || logoca.style.display == 'block' || logoti.style.display == 'none' || logota.style.display == 'block' || logovi.style.display == 'block') {

                fotocarol.style.display = 'none'
                fototiago.style.display = 'block'
                fototaina.style.display = 'none'
                fotovini.style.display = 'none'

                logoca.style.display = 'none'
                logoti.style.display ='block'
                logota.style.display ='none'
                logovi.style.display ='none'

            } else {
                fototiago.style.display = 'none'
                logoti.style.display = 'none'
            }

    }
    function ta(){
        if (
            fotocarol.style.display == 'block' || fototaina.style.display == 'none' || fototiago.style.display == 'block' || fotovini.style.display == 'block' || logoca.style.display == 'block' || logoti.style.display == 'block' || logota.style.display == 'none' || logovi.style.display == 'block') {

                fotocarol.style.display = 'none'
                fototaina.style.display = 'block'
                fototiago.style.display = 'none'
                fotovini.style.display = 'none'

                logoca.style.display = 'none'
                logoti.style.display ='none'
                logota.style.display ='block'
                logovi.style.display ='none'

            } else {
                fototaina.style.display = 'none'
                logota.style.display = 'none'
            }
    }

    function vi() {
        if (
            fotocarol.style.display == 'block' || fototaina.style.display == 'block' || fototiago.style.display == 'block' || fotovini.style.display == 'none' || logoca.style.display == 'block' || logoti.style.display == 'block' || logota.style.display == 'block' || logovi.style.display == 'none') {

                fotocarol.style.display = 'none'
                fototaina.style.display = 'none'
                fototiago.style.display = 'none'
                fotovini.style.display = 'block'

                logoca.style.display = 'none'
                logoti.style.display ='none'
                logota.style.display ='none'
                logovi.style.display ='block'

            } else {
                fotovini.style.display = 'none'
                logovi.style.display = 'none'
            }
    }
    