import Task from './task';

let list = null;
let tasks = null;

let listen = function() {
    let taskElements = list.querySelectorAll('.task');

    for(let i = 0; i < taskElements.length; i++) {
        taskElements[i].addEventListener('click', function() {
            tasks[i].toggle();
            render();
        });
    }
};

let render = function() {
    let html = tasks
        .map(task => `<li class='task ${task.completed ? 'completed': ''}'>${task.content}</li>`);

    list.innerHTML = html;

    listen();
};

let init = function() {
    list = document.getElementById('todo');
    tasks = [];

    tasks.push( new Task('Finish this talk') );

    render();
};

export { init };