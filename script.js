setInterval(function time(){
    var d=new Date();
    var hours=23-d.getHours();
    var min=59-d.getMinutes();
    if((min+"").length==1){
        min='0'+min;
    }
    var sec=59-d.getSeconds();
    if((sec+"").length==1){
        sec='0'+sec;
    }
    
    document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = min;  
document.getElementById("second").innerHTML =sec;  
    if(hours==0){
        var h= document.getElementById("hour");
        h.style.color="red";
        h.style.fontWeight="bold";
        var m=document.getElementById("minute");
         m.style.color="red";
        m.style.fontWeight="bold";
        var s=document.getElementById("second");
         s.style.color="red";
        s.style.fontWeight="bold";
    }
},1000)


function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}