function getCursorPosition(event) {

/*
    let x = event.clientX
    let y = event.clientY
    let rdx = Math.round(x/100)
    rdx *= 100
    let rdy = Math.round(x/100)
    rdy *= 100
    //alert(rdx);
    document.getElementById("squaree").style.left = x
    document.getElementById("squaree").style.top = y
*/

    document.getElementById("squaree").style.left = event.clientX;
    document.getElementById("squaree").style.top = event.clientY;
 }
