var a = prompt('podaj szerokość obrazu');
var carousel = $("#carousel");
var ul = $("ul");
var li = $("li");
var img = $("img");
var controls = $(".carousel-controls");
var right = $(".carousel-controls-right");
var pointers = $(".pointers");
carousel.css("width", a);
carousel.css("height", a * 0.65);
ul.css("width", a * 5);
ul.css("height", a * 0.65);
li.css("width", a);
li.css("height", a * 0.65);
img.css("width", a);
img.css("height", a * 0.65);
// controls.css("lineHeight", a * 0.65);  //ta deklaracja nie działa, jak ją odkomentuję to znikają mi kontrolki:(
controls.css("height", a * 0.65);
right.css("left", a - 50);
pointers.css("top", a * 0.65 - 35);
pointers.css("paddingLeft", (a - 100) / 2);
$(function(){
  var carouselList = $("#carousel ul");
  var carouselPointers = $("#carousel .pointers");
  var interval = setInterval(changeSlide, 3000);
  function changeSlide() {
    carouselList.animate({'marginLeft':-a}, 500, moveFirstSlide);
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
    carouselList.css({marginLeft:-a});
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
    changeSlide();
  });
  $('.carousel-controls-left').click(function() {
    changeSlideBack();
  });
});

