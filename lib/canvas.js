export function p5Sketch(parentElement) {
    const p5 = require("p5");
        const sketch = new p5((p) => {
        let canvasWidth;
        let canvasHeight;
        let parentStyle;
          p.setup = () => {
            parentStyle = window.getComputedStyle(parentElement);
            canvasWidth = parseInt(parentStyle.width);
            canvasHeight = parseInt(parentStyle.width) * 0.4;
            p.createCanvas(canvasWidth,canvasHeight).parent(parentElement);
            p.background("black");
            p.noStroke();
          };
          p.windowResized = () => {
            parentStyle = window.getComputedStyle(parentElement);
            canvasWidth = parseInt(parentStyle.width);
            canvasHeight = parseInt(parentStyle.width) * 0.4;
            p.resizeCanvas(canvasWidth,canvasHeight);
          };
          p.draw = () => {
            if (p.mouseIsPressed) {
              p.fill(255,50,100);
            } else {
              p.fill(255);
            }
            p.ellipse(p.mouseX, p.mouseY, 20, 20);
          };
        });
        return sketch;
};
