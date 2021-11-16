

const formHandler = document.querySelector('form')
const search = document.querySelector('input')
const ms1=document.querySelector('#msg1')
const ms2=document.querySelector('#msg2')


formHandler.addEventListener('submit',(e)=>{
    e.preventDefault();
    ms1.textContent='loading.......'

    const val=search.value;
    fetch('/search?id='+val).then(res=>{
    res.json().then(i=>{
        if(i.error){
            ms1.textContent=i.error
            ms2.textContent=" "
        }else{
            ms1.textContent=i.name
            ms2.textContent=i.website
        }
    })
})
})


