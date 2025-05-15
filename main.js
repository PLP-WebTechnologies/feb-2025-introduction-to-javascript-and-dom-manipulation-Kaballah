// Changing text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.getElementById('header').textContent = "Text Changed!";
    document.getElementById('paragraph').textContent = "The content has been updated dynamically.";
});

// Modifying CSS styles
document.getElementById('changeStyleBtn').addEventListener('click', () => {
    document.getElementById('header').style.color = "blue";
    document.getElementById('paragraph').style.fontSize = "20px";
    document.getElementById('paragraph').style.fontWeight = "bold";
});

// Adding an element
document.getElementById('addElementBtn').addEventListener('click', () => {
    const newElement = document.createElement('p');
    
    newElement.textContent = "This is a new paragraph added dynamically!";
    newElement.id = "newParagraph";

    document.getElementById('content').appendChild(newElement);
});

// Removing an element
document.getElementById('removeElementBtn').addEventListener('click', () => {
    const newElement = document.getElementById('newParagraph');

    if (newElement) {
        newElement.remove();
    } else {
        alert("No element to remove!");
    }
});