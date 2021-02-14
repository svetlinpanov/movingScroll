// Target scroll position
var targetY = 100;
var targetX = 100;

function initElement(name) {
    var fakeScroll = document.createElement('div')
    fakeScroll.className = name;
    const domElement = document.getElementById('container').appendChild(fakeScroll)
    return domElement;
}

// The `fakeScroll` is an element to make the page scrollable
// Here we are creating it and appending it to the `body`
var elements = [];
for (let index = 0; index < 4; index++) {
    const element = `fakeScroll${index + 1}`
    const domElement = initElement(element);
    elements.push({ element: domElement, x: index * 10, y: 0 });
}


// Update scroll `target`, and start the animation if it is not running already
function updateScroll(event) {
    moveElements();
}

function setNewTarget() {
    console.log('target reached');
}

function moveElements() {
    console.log('move');
    elements.map((el, index) => {
        const transform = generateTransform(index, el);
        console.log(el.element);
        console.log(transform);
        setTransform(el.element, transform);
    })
}

// Listen for `scroll` event to update `target` scroll position
// window.addEventListener('scroll', updateScroll)
window.addEventListener('mousewheel', updateScroll)

// window.addEventListener('scroll', (event) => {
//     console.log(event);
// })

function generateTransform(index, { element, x, y }) {
    var currentX = x;
    var currentY = y;
    if (x >= 490 || y >= 490) {
        return;
    }
    if (x < targetX) {
        currentX += 10;
    }
    else if (y < targetY) {
        currentY += 10;
    } else {
        targetY += 50;
        targetX += 50;
    }
    console.log(index);
    elements[index] = { element, currentX, currentY };
    return `translate(${currentX}px, ${currentY}px)`;
}

function setTransform(el, transform) {
    el.style.transform = transform
    el.style.WebkitTransform = transform
}




