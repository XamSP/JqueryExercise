$(".btn").on("click", function(){
  const newTask = prompt("Nxt tsk?");
  console.log(newTask);
  var addedTask = "<li><span>" + newTask + "</span><i class=\"fa fa-trash\"aria-hidden=\"true\"></i></li>"
  $("#task-list").append(addedTask);
});

$(".fa").click(function(){
  console.log("targeted");
  $(this).parent().remove();
})