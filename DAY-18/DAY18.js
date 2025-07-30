//                                           DAY 18 JAVASCRIPT
/*
function clock(){
    let date=new Date();
    let h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var M=date.getMonth();
    h=h%12;
    h=h ? h : 12;
    let ampm=h >= 12 ? " PM " :" AM  ";
    let time=h+":" +m+ ":"+s+"" +ampm;
    setTimeout(() => {
        clock();
    },1000);
    document.getElementById("Myclock").innerHTML=time;
}
clock();

*/

/*
function clock() {
  let time = new Date().toLocaleTimeString("en-US");
  document.getElementById("Myclock").innerHTML = time;
  setTimeout(clock, 1000);
}

clock();


function clock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let month = date.getMonth() + 1; // Month 0-11 hota hai
    let ampm = date.getHours() >= 12 ? "PM" : "AM"; // original hour check

    // 12-hour format conversion
    h = h % 12;
    h = h ? h : 12;

    // Leading zero
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    month = month < 10 ? "0" + month : month;

    let time = "Month: " + month + " | " + h + ":" + m + ":" + s + " " + ampm;
    document.getElementById("Myclock").innerHTML = time;

    setTimeout(clock, 1000);
}

clock();
*/
function changeimg() {
  let img = document.getElementById("myImage");
  img.src ="./HCL.jpg";
}

