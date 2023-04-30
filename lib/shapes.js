// Base class for shapes
class Shape {
    constructor(color, text) {
        this.size = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        this.color = color;
        this.text = text;
    }
}

class Circle extends Shape {
    constructor(size, color, text) {
        super(size, color, text);
    }

    render() {
    `${this.size}
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
    `
    }
}

class Triangle extends Shape {
    constructor(size, color, text) {
        super(size, color, text);
    }

    render() {
    `${this.size}
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
    `
    }
}

class Square extends Shape {
    constructor(size, color, text) {
        super(size, color, text);
    }

    render() {
    `${this.size}
    <rect x="90" y="40" width="120" height="120" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
    `
    }
}

module.exports = { Circle, Triangle, Square };
