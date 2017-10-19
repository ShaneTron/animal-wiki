$(document).ready(function() {
  // var input = $("input:radio[name=animal]:checked").val();

  $("#creature").submit(function(event) {
    event.preventDefault();
    var input = $("input:radio[name=animal]:checked").val();
    if (input === "dragon") {
      $("#dragon").show();
    } else if (input === "unicorn") {
      $("#unicorn").show();
    } else if (input === "sasquatch") {
      $("#sasquatch").show();
    }
  })
})
