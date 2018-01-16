$(document).ready(function() {
  var flavors = ["chocolate", "rocky road", "strawberry", "pistachio", "vanilla"];

  flavors.forEach(function(placeHolder) {
  $("#output").append("<li>"+placeHolder+"</li>");
  });
});
