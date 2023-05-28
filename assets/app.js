const click_section=document.querySelector(".click_section");
const btn_activ=document.querySelector(".btn_activ");
const header=document.querySelector(".header")



btn_activ.addEventListener("click",function () {

    click_section.classList.toggle("btn_x");
    // click_section.classList.remove("click_section")
    if( click_section.classList.contains("btn_x")){
        btn_activ.innerText="X";
        btn_activ.style.color = "black";
        btn_activ.style.position = "fixed";
        btn_activ.style.opacity=1000;
    }else{
        btn_activ.innerHTML="&#9776";
        btn_activ.style.color = "white";
    }
});