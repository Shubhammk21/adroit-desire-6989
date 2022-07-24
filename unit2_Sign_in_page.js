let form=document.querySelector("form");
let data=JSON.parse(localStorage.getItem("unit2_project_data")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let dd=document.querySelector("#details");
    data.forEach(function(el){ 
        if(form.pass2.value!=el.pass2 && form.email.value===el.email){
            dd.style.backgroundColor="red"
            document.querySelector("#details >p").innerText="X The Password you entered does not correct. Did you mean to create an account?"
        }
        else if(form.pass2.value===el.pass1 && form.email.value===el.email){
            alert("Sucessfully login");
            window.location.href="index.html"
            return;
        }
        else if(form.email.value==el.email){
            dd.style.backgroundColor="red"
            document.querySelector("#details >p").innerText="X The email you entered does not belong to any account. Did you mean to create an account?"
        }
        else{
            dd.style.backgroundColor="red"
            document.querySelector("#details >p").innerText="X The email you entered does not belong to any account. Did you mean to create an account?"
        }
    })
    
})