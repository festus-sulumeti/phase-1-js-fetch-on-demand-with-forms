const init = () => {
    const input = document.querySelector('input');
    
    input.addEventListener('input', (event) => {
        const value = event.target.value;
        const result = document.querySelector('.result');
        result.innerHTML = value;
    }

    );

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        const ul = document.querySelector('ul');
        json.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = user.name;
            ul.appendChild(li);
        });
    });

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input');
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);
        input.value = '';
    });
  
}

document.addEventListener('DOMContentLoaded', init);