window.addEventListener('scroll', ()=>{
   let title = document.getElementById("checkTitle")

   let deltaTime = 0.249
   let scroll = Math.round(window.scrollY)* deltaTime +(window.innerHeight/4)/3
   
   title.style.cssText =`top: ${scroll}px`
})