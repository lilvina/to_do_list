$(document).ready(function() {

  var $newItemForm = $("#new_to_do_list");
  console.log($newItemForm);
  var toDoList = []


  $newItemForm.on("submit", function(event) {
      event.preventDefault();
      console.log('form submitted!');
      console.log($("#task_name").val());  // my to-do list information
     
      toDoList.push($('#to_do_list').val());

      // add new to do list to view
      var $newTI = $('<li>' + $('#task_name').val() + '</li>');
      $('#to_do_list').append($newTI);

      // add new to do list to model
      toDoList.push({
        task_name: $('task_name').val(),
        quantity: 1
      });
    });

      


      var task1 = {
    task_name: "cleaning",
    description: "nice and neat"
    };

toDoList.push(task1);

      // add a click event
      $(".task").click(function() {
        $(this).remove();
        console.log(this);
      });
    });