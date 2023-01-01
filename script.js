var carda = window.document.getElementById('card')
var list = document.getElementById('lista')
var res = document.getElementById('res')

var fotocarol = document.getElementById('fcarol')
var fototiago = document.getElementById('ftiago')


function escolha() {
    if (list.style.display == 'block') {
        list.style.display = 'none'
    } else {
        list.style.display = 'block'
}
    
}

    function ca(){
        if (
            fotocarol.style.display == 'block' || fototiago.style.display == 'block') {
                fotocarol.style.display = 'none'
                fototiago.style.display = 'none'

            } else {
             fotocarol.style.display = 'block'
            }
    }

        function ti(){
            if (
                fototiago.style.display == 'block') {
                    fototiago.style.display = 'none'
                } else {
                    fototiago.style.display = 'block'
                }

    
}