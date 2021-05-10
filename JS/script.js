addCircle(12,17,0,0,200,"JavaScript",1);
addCircle(31,1.5,200,60,190,"C/C++",2);
addCircle(24,2,255,60,60,"C++",3);
addCircle(35,9,200,100,100,"C#",4);
addCircle(31,17,200,60,190,"Python",5);
addCircle(10,10,255,60,60,"HTML",6);
addCircle(0,10,88,174,186,"CSS",7);
addCircle(13,2,0,0,150,"PHP",8);
addCircle(18,10,200,60,190,"SQL",9);
addCircle(24,18,0,255,0,"VBA",10);
addCircle(27,10,88,174,186,"Java",11);

window.onscroll = function() {myFunction()};

let allDiv = $('div').add('article').add('header').add('footer')
allDiv.addClass('hide')

let loader = $('#load')
loader.removeClass('hide')

setTimeout(()=>{

allDiv.removeClass('hide')
allDiv.addClass('show')
loader.removeClass('loader show')

$('article').css('animation-name', 'article');
$('article').css('animation-duration', '1s');
}, 1000); 

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var keyEvent=false;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.addEventListener("keydown", function (event) {
if (event.keyCode==13) {

    if(keyEvent==false){
        document.body.style.backgroundColor='#FFFFFF';
        document.getElementById("myHeader").style.backgroundColor='#FF3636';
        var elt= document.getElementsByClassName('keyE');
        for (var i = 0, length = elt.length; i < length; i++) {
        elt[i].style.backgroundColor = '#FFd8d8';
        }
        let test = document.querySelectorAll("#myFooter a");
        test.forEach((element)=>(element.style.color="#FF0000"));
        keyEvent=true;
    }else if(keyEvent==true){
        document.body.style.backgroundColor='#00FFFF';
        document.getElementById("myHeader").style.backgroundColor='#00bbbb';
        var elt= document.getElementsByClassName('keyE');
        for (var i = 0, length = elt.length; i < length; i++) {
        elt[i].style.backgroundColor = '#FFFFFF';
        }
        let test = document.querySelectorAll("#myFooter a");
        test.forEach((element)=>(element.style.color="#FFFFFF"));
        keyEvent=false;
    }
    
} }, true);

function addCircle(x,y,r,g,b,name,id){
    var circleDiv = document.getElementById("container-circle");
    var sheet = window.document.styleSheets[0];
    let texte='<div id="circle'+id+'" class="circle">';
    texte += '<p class="circle-text">'+name+'</p></div>'
    circleDiv.innerHTML +=texte;
    document.querySelector("#circle"+id).style.backgroundColor= 'rgb('+r+','+g+','+b+',0.25)';
    document.querySelector("#circle"+id).style.marginLeft= x+"%";
    document.querySelector("#circle"+id).style.marginTop= y+"%";
}
