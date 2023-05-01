// Import shape functions
const { Square, Triangle, Circle } = require("../lib/shapes");

// Testing svg text output for Circle
describe("Circle", () => {
  // 1st Test
  it("should render svg for red circle with black ASM text", () => {

    // Renders entire svg text, adding sample user inputs from params
    const testSvg = new Circle(`red`, `black`, `ASM`).render()

    // Exemplar Circle
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="red" />
<text x="150" y="115" font-size="55" text-anchor="middle" fill="black">ASM</text>
</svg>`;

    expect(testSvg).toEqual(expectedSvg)
  });

  // 2nd Test
  it("should render svg for yellow circle with black BAT text", () => {

    // Renders entire svg text, adding sample user inputs from params
    const testSvg = new Circle(`yellow`, `black`, `BAT`).render()

    // Exemplar Circle
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="yellow" />
<text x="150" y="115" font-size="55" text-anchor="middle" fill="black">BAT</text>
</svg>`;

    expect(testSvg).toEqual(expectedSvg)
  });
});

// --------------------------------------------------------------------------------------------------------------

// Testing svg text output for Triangle
describe("Triangle", () => {
  // Test 1
  it("should render svg for blue triangle with white F4 text", () => {

    // Renders entire svg text, adding sample user inputs from params
    const testSvg = new Triangle(`blue`, `white`, `F4`).render()

    // Exemplar Triangle
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="blue" />
<text x="150" y="140" font-size="55" text-anchor="middle" fill="white">F4</text>
</svg>`;

    expect(testSvg).toEqual(expectedSvg)
  });

  // Test 2
  it("should render svg for green triangle with gold HLK text", () => {

    // Renders entire svg text, adding sample user inputs from params
    const testSvg = new Triangle(`green`, `gold`, `HLK`).render()

    // Exemplar Triangle
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="green" />
<text x="150" y="140" font-size="55" text-anchor="middle" fill="gold">HLK</text>
</svg>`;

    expect(testSvg).toEqual(expectedSvg)
    });
});


// --------------------------------------------------------------------------------------------------------------

// Testing svg text output for Square
describe("Square", () => {
  // Test 1
  it("should render svg for yellow square with blue X-M text", () => {
    // Renders entire svg text, adding sample user inputs from params
    const testSvg = new Square(`yellow`, `blue`, `X-M`).render()
    
    // Exemplar Square
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="90" y="40" width="120" height="120" fill="yellow" />
<text x="150" y="120" font-size="55" text-anchor="middle" fill="blue">X-M</text>
</svg>`;

    expect(testSvg).toEqual(expectedSvg)
  });

  // Test 2
  it("should render svg for red square with purple MAG text", () => {
    // Renders entire svg text, adding sample user inputs from params
    const testSvg = new Square(`red`, `purple`, `MAG`).render()
    
    // Exemplar Square
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="90" y="40" width="120" height="120" fill="red" />
<text x="150" y="120" font-size="55" text-anchor="middle" fill="purple">MAG</text>
</svg>`;

    expect(testSvg).toEqual(expectedSvg)
  });
});
