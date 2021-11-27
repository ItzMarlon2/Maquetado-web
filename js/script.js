/*********** FUNCIONES DEL HEADER ESTATICO CON EL SCROLL ********** */
const bars_search = document.getElementById('ctn-bars-search')
window.onscroll = function(){
    const scroll = document.documentElement.scrollTop
    const header = document.getElementById('header')


    if(scroll >  20){
        header.classList.add('nav_mod')
    }else if(scroll<20){
        header.classList.remove('nav_mod')
    }
}
/********************* */

/*********** FUNCIONES DE LA BARRA DE NAVEGACIÓN RESPONSIVE ********** */
const nav = document.getElementById('nav')
const body = document.getElementById('container__all')

document.getElementById('btn_menu').addEventListener('click',  mostrar_menu)

function mostrar_menu(){
    header.classList.toggle('move_content')
    nav.classList.toggle('move_nav')
    body.classList.toggle('move_content')
}

window.addEventListener('reszise', function(){
    if(window.innerWidth > 760){
        header.classList.remove('move_content');
        nav.classList.remove('move_nav');
        body.classList.remove('move_content')
    }
})

/********************* */

/*********** FUNCIONES DE BÚSQUEDA ********** */

//Ejecutando FUNCIONES
document.getElementById('icon-search').addEventListener('click',mostrar_buscador)
document.getElementById('cover-ctn-search').addEventListener('click', ocultar_buscador)
//Declarando variables
const cover_ctn_search = document.getElementById('cover-ctn-search')
const input_search = document.getElementById('inputSearch')
const box_search = document.getElementById('box-search')

//Función para mostrar el buscador
function mostrar_buscador(){
    bars_search.style.top = "80px"
    cover_ctn_search.style.display="block"
    input_search.focus()
}

//Función para ocultar el buscador
function ocultar_buscador(){
    bars_search.style.top="-10px"
    cover_ctn_search.style.display="none"
    input_search.value =""
    box_search.style.display="none"

    if(input_search.value===""){
        box_search.style.display="none"
    }
}

//CREANDO FILTRADO DE BÚSQUEDA
document.getElementById('inputSearch').addEventListener('keyup', buscador_interno)

function buscador_interno(){
    const filter = input_search.value.toUpperCase()
    const li = box_search.getElementsByTagName("li")

    //Recorriendo elementos a filtrar mediante los "li"
    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('a')[0]
        const textValue = a.textContent || a.innerText
        if(textValue.toUpperCase().indexOf(filter) >-1){
            li[i].style.display = ""
            box_search.style.display="block"
            if(input_search.value===""){
                box_search.style.display="none"
            }
        }else{
            li[i].style.display="none"
        }
    }

}

/********************* */

/* GALERÍA */
const images=document.querySelectorAll('.img')
const containerImg=document.querySelector('.container-img')
const imageContainer = document.querySelector('.img-show')
const copy=document.querySelector('.copy')
const equis=document.querySelector('.fa-times-circle')

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'), image.getAttribute('alt'))
    })
})

const addImage = (src, alt)=>{
    containerImg.classList.toggle('move')
    imageContainer.classList.toggle('show')
    imageContainer.src=src
    copy.textContent=alt
    console.log(copy.textContent)
}

equis.addEventListener('click', ()=>{
    containerImg.classList.toggle('move')
    imageContainer.classList.toggle('show')
})

/********************/