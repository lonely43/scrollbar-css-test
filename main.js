window.addEventListener('scroll', ()=>{
   let title = document.getElementById("checkTitle")
   let scroll = window.scrollY+400
   console.log(scroll)
   title.style.cssText =`top: ${scroll*0.25}px`
})