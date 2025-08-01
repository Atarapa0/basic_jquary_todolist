/*$(document).ready(function () {
  $("#addTaskButton").click(function () {
    console.log("Add Task button clicked");
    var inputValue = $("#taskInput").val();
    console.log("Input value: " + inputValue);
    if (inputValue != "") {
      $("#taskList").append(
        '<li><input type="checkbox" id="taskCheckbox" class="removeTaskButton"> <label for="taskCheckbox">' +
          inputValue +
          "</label></li>"
      );
      console.log("Added task: " + inputValue);
      $("#taskInput").val("");
    }
    console.log("Task input cleared");
  });
});

$(document).click(function (event) {
  $(".removeTaskButton").on("click", function () {
    // $(this).parent().remove(); 
    var checked = $(this).is(":checked");
    if (checked) {
      console.log("Checkbox is checked" + $(this).is(":checked"));
      $(this)
        .next("label")
        .css("text-decoration", "line-through", "color", "red");
    }else{
        console.log("Checkbox is not checked" + $(this).is(":not(:checked)"));
        $(this).next("label").css("text-decoration", "none", "color", "black");
    }
  });
});*/


$(document).ready(function () {
  $('#addTaskButton').click(function () {
    const taskText = $('#taskInput').val().trim();
    if (taskText !== '') {
      addTask(taskText);
      $('#taskInput').val('');
    }
  });

  function addTask(text) {
    const taskItem = `
            <li class="task-item">
                <label class="custom-checkbox">
                    <input type="checkbox" class="checkbox-input">
                    <span class="checkmark">
                        <svg class="icon-checkmark">
                            <use xlink:href="#icon-checkmark"></use>
                        </svg>
                    </span>
                    <span class="task-text">${text}</span>
                </label>
            </li>
        `;
    $('#taskList').append(taskItem);
  }

  // Enter tuşu ile görev ekleme
  $('#taskInput').keypress(function (e) {
    var taskText = $('#taskInput').val().trim();
    if (e.which === 13 && taskText !== '') {
      addTask(taskText);
      $('#taskInput').val('');
      e.preventDefault(); 
    }
  });
});
