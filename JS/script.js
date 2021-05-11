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

function deroulant(id,i) {
  var x = document.getElementById(id);
  console.log($('#'+i))
  if (x.style.display === "block") {
    x.style.display = "none";
    $('#'+i).removeClass("fas fa-chevron-up")
    $('#'+i).addClass("fas fa-chevron-down")
  } else {
    x.style.display = "block";
    $('#'+i).removeClass("fas fa-chevron-down")
    $('#'+i).addClass("fas fa-chevron-up");
  }
}


window.addEventListener("keydown", function (event) {
  if (event.keyCode==13) {

    if(keyEvent==false){
      $('body').css("background-color",'#FFFFFF');
      $("#myHeader").css("background-color",'#FF3636');
      $('.keyE').css("background-color",'#FFd8d8')
      let couleurIcones = document.querySelectorAll("#myFooter a");
      couleurIcones.forEach((element)=>(element.style.color="#FF0000"));
      $('.line').css('border-right','solid thin #ff0000');
      keyEvent=true;
    }else if(keyEvent==true){
      $('body').css("background-color",'#00FFFF');
      $("#myHeader").css("background-color",'#00bbbb');
      $('.keyE').css("background-color",'#FFFFFF')
      let couleurIcones = document.querySelectorAll("#myFooter a");
      couleurIcones.forEach((element)=>(element.style.color="#FFFFFF"));
      $('.line').css('border-right','solid thin #00ffff');
      keyEvent=false;
    }  
  } }, true);

function addCircle(x,y,r,g,b,name,id){
  let circleDiv = $("#container-circle");
  let texte='<div id="circle'+id+'" class="circle">';
  texte += '<p class="circle-text">'+name+'</p></div>'
  circleDiv.append(texte);
  $("#circle"+id).css("background-color",'rgb('+r+','+g+','+b+',0.25)');
  $("#circle"+id).css("marginLeft", x+"%");
  $("#circle"+id).css("marginTop",y+"%");
}

var slideIndex = 1;
		showSlides(slideIndex);
		
		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}
		
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}
		
		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  if (n > slides.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
			  slides[i].style.display = "none";  
		  }
		  slides[slideIndex-1].style.display = "block";  
		}
