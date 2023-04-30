// Base class for shapes; requires background color, text color, and text to be passed in
class Shape {
    constructor(bgColor, textColor, text) {
        // Size same for all children
        this.size = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        this.bgColor = bgColor;
        this.textColor = textColor;
        this.text = text;
    }
}

// Circle class requires same params as parent
class Circle extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
    }

    // Typical indentation practices not followed to avoid error in output format
    render() {
        return `${this.size}
<circle cx="150" cy="100" r="80" fill="${this.bgColor}" />
<text x="150" y="115" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

// Triangle class requires same params as parent; font placement slightly different
class Triangle extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
    }

    // Typical indentation practices not followed to avoid error in output format
    render() { 
        return `${this.size}
<polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />
<text x="150" y="140" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

// Squire class requires same params as parent
class Square extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
    }

    // Typical indentation practices not followed to avoid error in output format
    render() {
        return `${this.size}
<rect x="90" y="40" width="120" height="120" fill="${this.bgColor}" />
<text x="150" y="120" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

// Export class constructors
module.exports = { Circle, Triangle, Square };
