$(function() {

  function Task(name, desc){
    this.name = name;
    this.desc = desc;
  }

  Task.all = [
    new Task("Cleaning", "My House"),
    new Task("Book", "Read"),
    new Task("Coding", "Study programming")

  ];

  Task.prototype.render = function(){
    $toDoList.append('<li class="task">' + this.name + ' - ' + this.desc + '</li>');
    console.log('render')
  }

  Task.prototype.save = function(){
    Task.all.push(this);
  }

  var $newList = $("#new-list");

  var $toDoList = $('#todo-list');

  _.each(Task.all, function (task, index){
    task.render()
  });

  $newList.on('submit', function(event) {
    event.preventDefault();

    var taskName = $('#task-name').val();
    var taskDesc = $('#task-desc').val();
    var taskData = {name: taskName, desc: taskDesc};

    task.push(taskData);

    $newList.append('<li class="task">' + taskData.name + ' - ' + taskData.desc + '</li>');


    $newList[0].reset();
    $('#task-name').focus();
  });

  $toDoList.on('click', 'task', function() {
    $(this).addClass('done');
  });

});

