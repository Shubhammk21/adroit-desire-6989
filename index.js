
let see2=document.querySelector("#video2");
let see1=document.querySelector("#video1");
let see3=document.querySelector("#video3");
see2.addEventListener("click",function(event){
    let cl=document.querySelector("#play");
    // cl.src=""
    cl.src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_GainPerspective_FINAL.mp4"
})
see1.addEventListener("click",function(event){
    let cl=document.querySelector("#play");
    cl.src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_SeeValueFast_FINAL.mp4"
})
see3.addEventListener("click",function(event){
    let cl=document.querySelector("#play");
    cl.src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_Templates_FINAL.mp4"
})

let see4=document.querySelector("#video1_1");
let see5=document.querySelector("#video2_2");
let see6=document.querySelector("#video3_3");
let cl2=document.querySelector("#play_2");

see4.addEventListener("click",function(event){
    cl2.src="https://static.airtable.com/images/homescreen/homepage-apps-dashboard.jpg"
})
see5.addEventListener("click",function(event){
    cl2.src="https://static.airtable.com/images/homescreen/homepage-run-code.jpg"
})
see6.addEventListener("click",function(event){
    cl2.src="https://static.airtable.com/images/homescreen/homepage-getsupport.jpg"
})
let bbb=document.querySelector("#blur");
let a=document.querySelector("#product");
let aaa=document.querySelector("#head");

// let close=document.querySelectorAll("#head_1>div>div");
// close.style.display="none";

a.addEventListener("click",function(event){
    let a1=document.querySelector("#a");
    a.style.backgroundColor="black";
    a.style.color="white";
    bbb.style.filter="blur(8px)";
    a1.style.display="block"
    bbb.addEventListener("click",function(event){   
        a1.style.display="none"
        bbb.style.filter="";
        a.style.backgroundColor="";
        a.style.color="";
        // filter: blur(8px);
        // -webkit-filter: blur(8px);
    });
})
a.addEventListener("dblclick",function(event){ 
    let a1=document.querySelector("#a");
    b.style.backgroundColor="";
    b.style.color="";   
    bbb.style.filter="";
    a1.style.display="none"
    a1.style.cursor="pointer"
})

let b=document.querySelector("#sol");
b.addEventListener("click",function(event){
    let a1=document.querySelector("#b");
    b.style.backgroundColor="black";
    b.style.color="white";
    bbb.style.filter="blur(8px)";
    //bbb.style.-webkit-filter=
    a1.style.display="block"
    bbb.addEventListener("click",function(event){
        a1.style.display="none"
        bbb.style.filter="";
        b.style.backgroundColor="";
        b.style.color="";
        // filter: blur(8px);
        // -webkit-filter: blur(8px);
    });
})
b.addEventListener("dblclick",function(event){ 
    let a1=document.querySelector("#b");
    b.style.backgroundColor="";
    b.style.color="";   
    bbb.style.filter="";
    a1.style.display="none"
    a1.style.cursor="pointer"
})




let d=document.querySelector("#ent");
d.addEventListener("click",function(event){
    let a1=document.querySelector("#d");
    d.style.backgroundColor="black";
    d.style.color="white";
    bbb.style.filter="blur(8px)";
    a1.style.display="block"
    bbb.addEventListener("click",function(event){
        a1.style.display="none"
        bbb.style.filter="";
        d.style.backgroundColor="";
        d.style.color="";
        // filter: blur(8px);
        // -webkit-filter: blur(8px);
    });
})
d.addEventListener("dblclick",function(event){ 
    let a1=document.querySelector("#d");
    d.style.backgroundColor="";
    d.style.color="";   
    bbb.style.filter="";
    a1.style.display="none"
    a1.style.cursor="pointer"
})

let e=document.querySelector("#res");
e.addEventListener("click",function(event){ 
    let a1=document.querySelector("#e");
    e.style.backgroundColor="black";
    e.style.color="white";   
    bbb.style.filter="blur(8px)";
    a1.style.display="block"
    bbb.addEventListener("click",function(event){
        a1.style.display="none"
        bbb.style.filter="";
        e.style.backgroundColor="";
        e.style.color="";
        // filter: blur(8px);
        // -webkit-filter: blur(8px);
    });
       
})
// let e1=document.querySelector("#res");
e.addEventListener("dblclick",function(event){ 
    let a1=document.querySelector("#e");
    e.style.backgroundColor="";
    e.style.color="";   
    bbb.style.filter="";
    a1.style.display="none"
    a1.style.cursor="pointer"
})
// let f=document.querySelector("#checkbtn");
// f.addEventListener("click",function(event){ 
//     let a1=document.querySelector("#shu1");
//     f.style.backgroundColor="black";
//     f.style.color="white";   
//     bbb.style.filter="blur(8px)";
//     a1.style.display="block"
//     bbb.addEventListener("click",function(event){
//         a1.style.display="none"
//         bbb.style.filter="";
//         e.style.backgroundColor="";
//         e.style.color="";
//         // filter: blur(8px);
//         // -webkit-filter: blur(8px);
//     });
       
// })


