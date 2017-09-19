$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    total = 0;
    $("#trait-responses").show();
    $("input:checkbox[name=characterTraits]:checked").each(function() {
      var traits = parseInt($(this).val());
      total += traits;
    })
    if (total > 0) {
      alert("your healthy");
    } else if (total < 0) {
      alert("youre dying");
    } else {
      alert("youre ok");
    }
  })
})
