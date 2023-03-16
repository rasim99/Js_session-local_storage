let suptext=document.getElementById("sup");
let addBtn=document.querySelectorAll(".btn-primary");
addBtn.forEach(btn=>{
        btn.addEventListener("click",function (e) {
             e.preventDefault();
            let id=btn.parentNode.parentNode.getAttribute("data-id")
            
            if (localStorage.getItem("basket")==null) {
                localStorage.setItem("basket",JSON.stringify([]))
            }
            let bArr=JSON.parse(localStorage.getItem("basket"))
            let exist=bArr.find(f=>f.id==id)
            if (exist==undefined) {
                bArr.push({
                  id:id,
                  count:1  
                })
            }
            suptext.innerText=bArr.length;
           
            localStorage.setItem("basket", JSON.stringify(bArr))
            
        })
})


