// Get the dom elements
const inputText = document.getElementById('inputText'); // input field
const ulList = document.getElementById('itemList');

// buttons
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const changeHTMLBtn = document.getElementById('changeHTMLBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');


// add item to the list
addBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    // check if input is empty
    if (!text) {
        return alert('Please enter some text to add an item.');
    }
    // create a new li element
    const li = document.createElement('li');
    li.innerText = text;
    // add classlist for styling
    li.className = 'p-6 bg-purple-100 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer text-xl';
    // append the li to the ul list
    ulList.appendChild(li);
    // clear the input field
    inputText.value = '';
})

// remove the last item from the list
removeBtn.addEventListener('click', ()=> {
    const lastItem = ulList.lastChild;
    ulList.removeChild(lastItem);
})

// change innerHTML of the list
changeHTMLBtn.addEventListener('click', () => {
    const text = inputText.value.trim();

    // check if input is empty
    if (!ulList.firstElementChild || !text) {
        return alert('Please enter some text to change innerHTML.');
    }
    ulList.firstElementChild.innerHTML = `<b>${text}</b>`;
    inputText.value = '';
})

// change style of the first item in the list
changeStyleBtn.addEventListener('click', () => {
    const firstItem = ulList.firstElementChild;

    // check if the first item exists
    if (!firstItem) {
        return alert('No items in the list to change style.');
    }
    firstItem.style.color = 'white';
    firstItem.style.backgroundColor = 'teal';
})