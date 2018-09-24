// To Do List App

// selecting the container
const container = document.querySelectorAll('.container')[1];

// selecting add element
const add = document.querySelector('.add');

// calling the add button
container.addEventListener('click', e => {
  if (e.target == add) {
    const input = document.querySelector('.inputText'); // selecting the input
    const li = document.createElement('li'); // creating the li
    const ol = document.querySelector('.toDoList'); // selecting the ol
    li.textContent = input.value; // appending the input text
    ol.appendChild(li); // appending new li to the ol
    input.value = ''; // resetting the text box

    const up = document.createElement('button'); // creating up button
    const down = document.createElement('button'); // creating down button
    const remove = document.createElement('button'); // creating remove button

    up.className = 'btn'; // giving the button 'btn' class
    up.className += ' up'; // giving the button 'up' class
    down.className = 'btn'; // giving the button 'btn' class
    down.className += ' down'; // giving the button 'down' class
    remove.className = 'btn'; // giving the button 'btn' class
    remove.className += ' remove'; // giving the button 'remove' class

    up.textContent = 'Up'; // setting the text content of up content
    down.textContent = 'Down'; // setting the text content of dwwn content
    remove.textContent = 'Remove'; // setting the text content of remove content

    li.appendChild(up);
    li.appendChild(down);
    li.appendChild(remove);
  }
});

// selecting the ol element
const ol = document.querySelector('.toDoList');

ol.addEventListener('click', e => {
  const up = document.querySelectorAll('.up');
  const remove = document.querySelectorAll('.remove');
  for (let i = 0; i < remove.length; i++) {
    if (e.target == remove[i]) {
      const li = e.target.parentNode;
      ol.removeChild(li);
    }
  }
});

const div = document.querySelector('.list');
div.addEventListener('click', e => {
  if (e.target.tagName == 'BUTTON') {
    if (e.target.className == 'btn up') {
      const li = e.target.parentNode;
      const prevLi = li.previousElementSibling;
      const ol = li.parentNode;
      if (prevLi) {
        ol.insertBefore(li, prevLi);
      }
    }
    if (e.target.className == 'btn down') {
      const li = e.target.parentNode;
      const nextLi = li.nextElementSibling;
      const ol = li.parentNode;
      if (nextLi) {
        ol.insertBefore(nextLi, li);
      }
    }
  }
});