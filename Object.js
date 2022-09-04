function book(title, author, pages) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.info = function () {
      return title + ",by " + author + " " + pages + ", pages";
    });
}

const thehobit = new book("The hobit", "J.R.R. Tolkien", 295);
//console.log(thehobit.info());

//  Factorty Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// const circle = createCircle(1);

//circle.draw();

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);
//another.draw();

//Circle.call({}, 1); // the first argument is the object that "this" refers to if we dont use new on assign it will refer to the window object or if we are running it on a node enviroment it will refer to the global object , the second argument is parameters

//all objects have a constructor in js , constructor is the function the object is made up of ,
// all functions are objects in js
// Circle["value_name"] we use this array notation for case like if we dont know the key or key have sign characters inside it

// Enumurating  Properties
// we for in

for (let key in another) {
  if (typeof another[key] !== "function") console.log(key, another[key]);
}
