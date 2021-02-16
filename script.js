// Current positions
var currentX = 0;
var currentY = 0;
var currentVector = 0;
// Target scroll position
var targetY = 100;
var targetX = 100;
var flip = false;

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

function updateScroll(event) {
    console.log(event);
    if (event.deltaY > 0) {
        generateTransformDown()
    } else {
        generateTransformUp()
    }
}

// Listen for `scroll` event to update `target` scroll position
//window.addEventListener('scroll', updateScroll2)
window.addEventListener('mousewheel', updateScroll)

// window.addEventListener('scroll', (event) => {
//     console.log(event);
// })

function generateTransformUp() {
    console.log('move up')
    if (currentX === 0 && currentY === 0) {
        return;
    }

    if (currentY > targetY) {
        currentY -= 10;
        flip = true;
    } else if (currentX > targetX) {
        currentX -= 10;
        flip = false;
    }
    if (currentX <= targetX && currentY <= targetY) {
        targetX -= 100;
        targetY -= 100;
    }
    currentVector = flip ? 90 : 0
    const transform = `translate(${currentX}px, ${currentY}px) rotate(${currentVector}deg)`
    setTransform(scrollElement, transform);
}

function generateTransformDown() {
    console.log('move down')
    if (currentX >= 460 || currentY >= 460) {
        return;
    }
    if (currentX < targetX) {
        currentX += 10;
        flip = false;
    }
    else if (currentY < targetY) {
        currentY += 10;
        flip = true;
    }
    if (currentX >= targetX && currentY >= targetY) {
        targetY += 100;
        targetX += 100;
    }
    currentVector = flip ? 90 : 0
    const transform = `translate(${currentX}px, ${currentY}px) rotate(${currentVector}deg)`
    setTransform(scrollElement, transform);
}

function setTransform(el, transform) {
    el.style.transform = transform
    el.style.WebkitTransform = transform
}




