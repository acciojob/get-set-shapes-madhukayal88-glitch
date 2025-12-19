// Rectangle constructor
function Rectangle(width, height) {
    this._width = width;
    this._height = height;
}

// Getter for width
Object.defineProperty(Rectangle.prototype, "width", {
    get: function () {
        return this._width;
    }
});

// Getter for height
Object.defineProperty(Rectangle.prototype, "height", {
    get: function () {
        return this._height;
    }
});

// Method to calculate area
Rectangle.prototype.getArea = function () {
    return this._width * this._height;
};

// Square constructor (inherits from Rectangle)
function Square(side) {
    Rectangle.call(this, side, side);
}

// Inherit Rectangle prototype
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// Method to calculate perimeter
Square.prototype.getPerimeter = function () {
    return 4 * this._width;
};
