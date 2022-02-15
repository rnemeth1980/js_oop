/* // object
const circleObject = {
    // properties
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    // method
    draw: function() {
        console.log('draw one');
    }
}; 

circleObject.draw(); */

// factory function
function createCircle (radius) {
    return {
        radius,
        draw: function(){
            console.log('draw two');
        }
    }
}

const circle = createCircle(1);
//circle.draw();

// constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw three');
    }
}

const another = new Circle(1);

another.draw();