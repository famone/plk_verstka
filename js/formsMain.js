const formTabBtn = document.querySelectorAll('.tab-btns button')
const tabForm = document.querySelectorAll('.tab-form')

for(let i = 0; i < formTabBtn.length; i++){
    formTabBtn[i].addEventListener('click', function(){
        formTabBtn.forEach((item)=>{
            item.classList.remove('tabAc')
        })
        tabForm.forEach((item)=>{
            item.classList.remove('active')
        })
        formTabBtn[i].classList.add('tabAc')
        tabForm[i].classList.add('active')
    })
}