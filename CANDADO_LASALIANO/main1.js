function comprobarContrasena() {

    const l1 = document.getElementById("label1").textContent.trim("*");
    const l2 = document.getElementById("label2").textContent.trim("S");
    const l3 = document.getElementById("label3").textContent.trim(4);
    const l4 = document.getElementById("label4").textContent.trim("L");
    const l5 = document.getElementById("label5").textContent.trim("*");

    console.log(l1, l2, l3, l4, l5);
    
    if (l1 === "*" && l2 === "S" && l3 === "4" && l4 === "L" && l5 === "*") {
        window.location.href = "pg2.html";
    } else {
        alert("¡Error! Los valores no son correctos.");
    }
}