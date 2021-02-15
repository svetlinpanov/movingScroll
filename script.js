// Current positions
var currentX = 0;
var currentY = 0;
var currentVector = 0;
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
const element = `fakeScroll`
const scrollElement = initElement(element);

// Update scroll `target`, and start the animation if it is not running already
function updateScroll(event) {
    generateTransform();
}

// Listen for `scroll` event to update `target` scroll position
//window.addEventListener('scroll', updateScroll2)
window.addEventListener('mousewheel', updateScroll)

// window.addEventListener('scroll', (event) => {
//     console.log(event);
// })

function generateTransform() {
    console.log('generate')
    if (currentX >= 460 || currentY >= 460) {
        return;
    }
    if (currentX < targetX) {
        currentX += 10;
    }
    else if (currentY < targetY) {
        currentVector = 90;
        currentY += 10;
    }
    if (currentX >= targetX && currentY >= targetY) {
        currentVector += 90;
        targetY += 100;
        targetX += 100;
    }
    const transform = `translate(${currentX}px, ${currentY}px) rotate(${currentVector}deg)`

    setTransform(scrollElement, transform);
    console.log(`(${currentX}px, ${currentY}px) (${currentVector}deg)`)
}

function setTransform(el, transform) {
    el.style.transform = transform
    el.style.WebkitTransform = transform
}




