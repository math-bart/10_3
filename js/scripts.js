$(function(){
  var carouselList = $("#carousel ul");
  var carouselPointers = $("#carousel .pointers");
  var interval = setInterval(changeSlide, 3000);
  function changeSlide() {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
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
    carouselList.css({marginLeft:-400});
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

