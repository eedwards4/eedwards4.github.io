const slider = document.querySelector('.slider');

const images = [
    'images/Traverse.jpg',
    'images/wildfire.jpg',
    'images/c.jpg',
    'images/computerBrain.png'
]

function rotateImages() {
    images.prepend(images.pop());
}

function activate(e) {
    const items = document.querySelectorAll('.item');
    const oldActive = slider.querySelector('.item');

    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length-1]);

    rotateImages();

    const newActive = slider.querySelector('.item');
    newActive.style.background = '';
    oldActive.style.background = '';
}

document.addEventListener('click',activate,false);