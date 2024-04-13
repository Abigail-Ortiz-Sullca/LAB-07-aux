import { useState, useEffect } from "react";

export const RandomComponent = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [color, setColor] = useState('#'+Math.floor(Math.random()*16777215).toString(16));

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (canvas) {
      const context = canvas.getContext('2d');
      const bubbles = [];

      const createBubbles = () => {
        for(let i = 0; i < 50; i++) {
          const bubble = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 100 + 50,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2
          };
          bubbles.push(bubble);
        }
      };

      const animateBubbles = () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for(let i = 0; i < bubbles.length; i++) {
          const bubble = bubbles[i];
          context.beginPath();
          context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2, false);
          context.strokeStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
          context.stroke();

          if(bubble.x + bubble.radius > window.innerWidth || bubble.x - bubble.radius < 0) {
            bubble.dx = -bubble.dx;
          }

          if(bubble.y + bubble.radius > window.innerHeight || bubble.y - bubble.radius < 0) {
            bubble.dy = -bubble.dy;
          }

          bubble.x += bubble.dx;
          bubble.y += bubble.dy;
        }

        requestAnimationFrame(animateBubbles);
      };

      createBubbles();
      animateBubbles();
    }
  }, []);

  function handleClick() {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setColor('#'+Math.floor(Math.random()*16777215).toString(16));
  }

  return (
    <div style={{ backgroundColor: color, padding: '10px', color: 'white' }}>
      <p>Número aleatorio: {number}</p>
      <button onClick={handleClick}>Generar nuevo número y color</button>
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
}




