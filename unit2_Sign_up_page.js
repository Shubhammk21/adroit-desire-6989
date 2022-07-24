let form=document.querySelector("form");
let data=JSON.parse(localStorage.getItem("unit2_project_data")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(form.pass1.value==form.pass2.value && form.email.value!=""){
        form.shu.style.backgroundColor="blue";
        form.shu.style.color="white"
        let obj={
            email:form.email.value,
            pass1:form.pass1.value,
        };
        console.log(obj)
        data.push(obj);
        alert("Sucessfully Created Accound ")
        localStorage.setItem("unit2_project_data",JSON.stringify(data));
        window.location.href="unit2_Sign_in_page.html"
    }
    else if(form.pass1.value!==form.pass2.value){
        alert("Paaword does not match");
    }
    else{
        alert("Please fill all boxed");
    }
})





