import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

/**
 * Matrix-style digital rain rendered on a canvas.
 * Sits behind content (absolute, pointer-events-none). Only visible in dark mode.
 */
export default function MatrixRain({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== 'dark') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFｦｧｨｩ<>[]{}#$%&*+-/'.split('');
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -50);
    };
    resize();

    let animationId: number;
    let last = 0;
    const draw = (time: number) => {
      animationId = requestAnimationFrame(draw);
      // throttle to ~24fps for a classic feel + less CPU
      if (time - last < 42) return;
      last = time;

      ctx.fillStyle = 'rgba(5, 8, 5, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // leading character is brighter
        ctx.fillStyle = Math.random() > 0.975 ? '#c2ffc2' : '#00ff41';
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    animationId = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  if (theme !== 'dark') return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
