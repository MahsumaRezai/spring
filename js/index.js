// skill section 
function button(element, color) {
    element.style.background = color;
}
button();

// fom section 
function form() {
    let username = document.getElementById("name").value;
    let emailuser = document.getElementById("email").value;
    let subject = document.getElementById("sub").value;
    let vaild = true;
    if (username == "") {
        document.getElementById("name").style.border = "1px solid red";
        vaild = false;
    }
    if (emailuser == "") {
        document.getElementById("email").style.border = "1px solid red";

        vaild = false;
    }
    if (subject == "") {
        document.getElementById("sub").style.border = "1px solid red";

        vaild = false;
    }
    return vaild;
}