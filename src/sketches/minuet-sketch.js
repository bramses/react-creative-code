import palettes from 'nice-color-palettes';
import { random } from 'canvas-sketch-util';

const sketch = (p) => {
    
    // Set height and width of canvas
    const canvasWidth = p.windowWidth;
    const canvasHeight = p.windowHeight;  
    const pg1 = [9,1,2,1,9,11,9,8,11,2,6,8,1,2,1,9,11,8,6,1,2,6,9,11,8,9,8,4,6,4,2,1,2,6,9,8,9,8,4,6,2,1,11,6,2,9,1,2,1,9,11,9,8,11,6,2,8,1,2,1,8,9,8,6,1,8,4,11,9,4,9,8,9,8,6,1,4,8,9,8,3,8,6,9,4,1,11,1,11,9,9,5,7,9,4,8,4,10,0,3,2,7];

    let palatte
    // Setup function
    p.setup = () => {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background(255);
        p.fill(0);
        p.noFill();
        const randomNumber = random.rangeFloor(0, 100);
        palatte = palettes[randomNumber];
        p.noStroke();
        p.frameRate(60); // assuming 90 bpm is 1.5 beat per sec so at 60 frameS per second 90 frames = 4 frames per beat 
    }
    let counter = 0;
    // Draw function
    p.draw = () => {
        p.background(255);
        if (counter > pg1.length * 30) p.noLoop(); 

        let _size = counter % 30; // a size tween

        if (_size === 0) {
            p.fill(palatte[random.rangeFloor(0, 4)])
        }

        // p.fill(palatte[random.rangeFloor(0,4)])
        p.circle(canvasWidth / 2, canvasHeight / 2, pg1[Math.floor(counter / 30)] * 10 + _size);
        counter++;
    }
}
export default sketch;