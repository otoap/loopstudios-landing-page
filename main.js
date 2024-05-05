let menu = document.getElementsByClassName("mobile-menu");
let dropDownMenu = document.getElementsByClassName("dropDown-menu")
let closeBtn = document.getElementsByClassName("img-x")[0];
menu = menu[0];
dropDownMenu = dropDownMenu[0];

menu.addEventListener("click", ()=> {
    if(dropDownMenu.style.display != "block") {
        dropDownMenu.style.display = "block";
    }
})

closeBtn.addEventListener("click", ()=> {
    if(dropDownMenu.style.display != "none") {
        dropDownMenu.style.display = "none"
    }
})



