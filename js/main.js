document.addEventListener('DOMContentLoaded', function () {

    // search 
    const search = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');

    search.addEventListener('input', function(){

        if(search.value !== ''){
            searchBtn.classList.add('visible-search-btn')
            searchBtn.disabled = false
        }else{
            searchBtn.classList.remove('visible-search-btn')
            searchBtn.disabled = true
        }
    })

    // burger
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const cross = document.querySelector('.cross');

    burger.addEventListener('click', function(){
        mobileMenu.classList.add('active')
    })
    cross.addEventListener('click', function(){
        mobileMenu.classList.remove('active')
    })

    // toTop

    const toTop = document.querySelector('#toTop');
    toTop.addEventListener('click', function(){
        window.scrollTo( 0, 0 );
    })

    // drop-menu
    const linkWithDrop = document.querySelectorAll('.link-with-drop');
    const dropMenu = document.querySelectorAll('.drop');
    

    for(let i = 0; i < linkWithDrop.length; i++){
        linkWithDrop[i].addEventListener('mouseover', function(){
            dropMenu.forEach((item)=>{
               item.style.display = 'none'
            })
            dropMenu[i].style.display = 'block'
        })
    }

    dropMenu.forEach((item)=>{
        let catLink = item.querySelectorAll('.category-link');
        let subCat = item.querySelectorAll('.sub-cat-links');

        for(let i = 0; i < catLink.length; i++){
           
            catLink[i].addEventListener('click', function(){
                catLink.forEach((sub)=>{
                    sub.classList.remove('active');
                })
                subCat.forEach((sub)=>{
                    sub.classList.remove('active');
                })
                catLink[i].classList.add('active');
                subCat[i].classList.add('active');
            })
        }

        item.addEventListener('mouseleave', function(){
            item.style.display = 'none'
        })
    })


    // switchers-btn
    let switchBtn = document.querySelectorAll('.switch-btn span');
    
    for(let i = 0; i < switchBtn.length; i++){
        switchBtn[i].addEventListener('click', function(){
            switchBtn.forEach((item) =>{
                item.classList.remove('activeSwitch')
            })
            switchBtn[i].classList.add('activeSwitch');
        })
        
    }

    // search
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.822743, 30.314170],
            zoom: 14
        });

        myMap.geoObjects.add(new ymaps.Placemark(
            [59.822743, 30.314170], {}, {
                preset: 'islands#icon',
                iconColor: '#1E6EE2',
            }));
    }

    // yandex maps

});