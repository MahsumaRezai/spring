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
        alert("write your name");
        vaild = false;
    }
    if (emailuser == "") {
        alert("write your Email");
        vaild = false;
    }
    if (subject == "") {
        alert("write your subject");
        vaild = false;
    }
    return vaild;
}