var carousel = $("#carousel");
var a = carousel.innerWidth() + 6;
function setDimensions(a) {
var ul = $("ul");
var li = $("li");
var img = $("img");
var controls = $(".carousel-controls");
var right = $(".carousel-controls-right");
var pointers = $(".pointers");
carousel.css("height", a * 0.65);
ul.css("width", a * 5);
ul.css("height", a * 0.65);
li.css("width", a);
li.css("height", a * 0.65);
img.css("width", a);
img.css("height", a * 0.65);
controls.css("lineHeight", a * 0.65+"px");  
controls.css("height", a * 0.65);
right.css("left", a - 50);
pointers.css("top", a * 0.65 - 35);
pointers.css("paddingLeft", (a - 100) / 2);
}
setDimensions(a);

$( window ).resize(function() {
	var a = carousel.innerWidth() + 6;	
  setDimensions(a);
});

$(function(){
  var carouselList = $("#carousel ul");
  var carouselPointers = $("#carousel .pointers");
  var interval = setInterval(changeSlide, 3000);
  function changeSlide() {
    carouselList.animate({'marginLeft':-(carousel.innerWidth() + 6)}, 500, moveFirstSlide);
    carouselPointers.animate({'marginLeft':20}, 500, moveFirstPointer);
  }
  function moveFirstSlide() {
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }
  function moveFirstPointer() {
  var firstPointer = carouselPointers.find("div:first");
  var lastPointer = carouselPointers.find("div:last");
    firstPointer.before(lastPointer);
    carouselPointers.css({marginLeft:0});
  }
  function changeSlideBack() {
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({marginLeft:-(carousel.innerWidth() + 6)});
    carouselList.animate({'marginLeft':0}, 500);
    carouselPointers.animate({'marginLeft':-20}, 500, moveLastPointer);
  }
  function moveLastPointer() {
  var firstPointer = carouselPointers.find("div:first");
  var lastPointer = carouselPointers.find("div:last");
    lastPointer.after(firstPointer);
    carouselPointers.css({marginLeft:0});
  }
  $('.carousel-controls-right').click(function() {
	clearInterval(interval);
    changeSlide();
	interval = setInterval(changeSlide, 3000);
  });
  $('.carousel-controls-left').click(function() {
	clearInterval(interval);
    changeSlideBack();
	interval = setInterval(changeSlide, 3000);
  });
});

