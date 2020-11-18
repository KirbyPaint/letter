$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const skill1Input= $("input#skill1").val();
    const skill2Input= $("input#skill2").val();
    const daughterInput= $("input#daughter").val();
    const crimeInput= $("input#crime").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".skill1").text(skill1Input);
    $(".skill2").text(skill2Input);
    $(".daughter").text(daughterInput);
    $(".crime").text(crimeInput);

    $("#story").show();
  });
});