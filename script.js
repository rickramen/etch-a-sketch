document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grid-container');
    const button = document.getElementById('reset-button');

    function createGrid(size) {
        container.innerHTML = ''; // Reset the grid

        // Set CSS variable for grid size
        container.style.setProperty('--grid-size', size);

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.className = 'grid-item';

            div.addEventListener('mouseover', () => {
                const randomColor = getRandomColor();
                div.style.backgroundColor = randomColor;
            });

            container.appendChild(div);
        }
    }

    button.addEventListener('click', () => {
        const size = parseInt(prompt("Enter grid size (max: 100):", ""));
        if (size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert("Enter a valid number between 1 and 100.");
        }
    });

    createGrid(16); // Initialize grid with default size
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
