import React, { useEffect, useRef } from 'react';

const AIBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animFrameId;
    let width, height;
    let nodes = [];
    let pulses = [];

    const COLORS = {
      node: ['#818cf8', '#a78bfa', '#60a5fa', '#38bdf8', '#f472b6'],
      line: 'rgba(139,92,246,',
      bg: '#020617'
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const randomBetween = (a, b) => a + Math.random() * (b - a);

    class Node {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = randomBetween(0, width);
        this.y = randomBetween(0, height);
        this.vx = randomBetween(-0.3, 0.3);
        this.vy = randomBetween(-0.3, 0.3);
        this.r = randomBetween(2, 4.5);
        this.color = COLORS.node[Math.floor(Math.random() * COLORS.node.length)];
        this.alpha = randomBetween(0.6, 1);
        this.pulseT = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulseT += 0.04;
        if (this.x < -20 || this.x > width + 20 || this.y < -20 || this.y > height + 20) {
          this.reset();
          this.x = randomBetween(0, width);
          this.y = randomBetween(0, height);
        }
      }
      draw() {
        const pulse = 0.7 + 0.3 * Math.sin(this.pulseT);
        // Glow
        const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 5 * pulse);
        grd.addColorStop(0, this.color + 'cc');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 5 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    class Pulse {
      constructor(x, y, tx, ty) {
        this.x = x; this.y = y;
        this.tx = tx; this.ty = ty;
        this.progress = 0;
        this.speed = randomBetween(0.006, 0.014);
        this.color = COLORS.node[Math.floor(Math.random() * COLORS.node.length)];
      }
      update() {
        this.progress += this.speed;
        return this.progress < 1;
      }
      draw() {
        const px = this.x + (this.tx - this.x) * this.progress;
        const py = this.y + (this.ty - this.y) * this.progress;
        const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
        grd.addColorStop(0, this.color + 'ff');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
    }

    const init = () => {
      const count = Math.floor((width * height) / 14000);
      nodes = Array.from({ length: count }, () => new Node());
    };

    let frame = 0;
    const maxDist = 180;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      frame++;

      // Clear with slight trail
      ctx.fillStyle = COLORS.bg;
      ctx.globalAlpha = 0.18;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;

      // Draw grid lines (subtle AI grid)
      if (frame % 2 === 0) {
        ctx.strokeStyle = 'rgba(99,102,241,0.04)';
        ctx.lineWidth = 1;
        const step = 80;
        for (let x = 0; x < width; x += step) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
        }
        for (let y = 0; y < height; y += step) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
        }
      }

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = COLORS.line + alpha + ')';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Occasionally send a pulse along the connection
            if (frame % 120 === 0 && Math.random() < 0.04) {
              pulses.push(new Pulse(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y));
            }
          }
        }
      }

      // Update & draw pulses
      pulses = pulses.filter(p => p.update());
      pulses.forEach(p => p.draw());

      // Update & draw nodes
      nodes.forEach(n => { n.update(); n.draw(); });

      // Overlay gradient to darken edges
      const radGrd = ctx.createRadialGradient(width / 2, height / 2, height * 0.1, width / 2, height / 2, height * 0.8);
      radGrd.addColorStop(0, 'transparent');
      radGrd.addColorStop(1, 'rgba(2,6,23,0.7)');
      ctx.fillStyle = radGrd;
      ctx.globalAlpha = 0.7;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
        background: '#020617'
      }}
    />
  );
};

export default AIBackground;
