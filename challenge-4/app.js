const taskip = document.getElementById('taskInput');
const addbutton = document.getElementById('addButton');
const tasklist = document.getElementById('taskList');
const ttltasks = document.getElementById('totalTasks');
const completedtasks = document.getElementById('completedTasks');
let emptyList = document.querySelector('.empty-list');
let totaltask = 0;
let completedtask = 0;

addbutton.addEventListener('click', () => {
  
  if (taskip.value.trim() === '') {
    return;
  }

  let li = document.createElement('li');
  li.className = 'task-item';

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('complete-checkbox');

  let span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskip.value.trim();

  let deletebutton = document.createElement('button');
  deletebutton.textContent = 'Delete';
  deletebutton.className = 'delete-button';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deletebutton);
  tasklist.appendChild(li);

  totaltask++;
  ttltasks.innerHTML = `Total tasks: ${totaltask}`;
  emptyList.innerHTML=`${totaltask} task added`;
  taskip.value = '';

  // Deleting task
  deletebutton.addEventListener('click', () => {
    if(checkbox.checked){
      completedtasks.innerHTML = `Completed: ${--completedtask}`;}
    li.remove();
    totaltask--;
    

    if (totaltask === 0) {
      emptyList.classList.remove('hidden');
    }
  
    ttltasks.innerHTML = `Total tasks: ${totaltask}`;
    emptyList.innerHTML=`${totaltask} task added`;
  });


  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      span.classList.add('completed');
      completedtasks.innerHTML = `Completed: ${++completedtask}`;
      span.style.textDecoration = "line-through";
      
    } else {
      span.classList.remove('completed');
      completedtasks.innerHTML = `Completed: ${--completedtask}`;
    }
  });
});


taskip.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addbutton.click();
  }
});
});
