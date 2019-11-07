import * as Color from 'color';

const sketch = (p) => {
    
    // Set height and width of canvas
    const canvasWidth = p.windowWidth;
    const canvasHeight = p.windowHeight;  

    // Setup function
    p.setup = () => {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background(0);
    }

    // Draw function
    let counter = 0;
    p.draw = () => {
        p.fill(new Color('#7743CE').alpha(0.5).lighten(0.2).mix(Color("black")).rgb().string());
        p.square(50, 50, 100); 
        
        counter++;
    }
}
export default sketch;
    