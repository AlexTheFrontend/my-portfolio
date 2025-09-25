import { useRef } from "react";
import LaserFlow from "./bg-lib/laser-flow";
import image from "../images/bg-new-2.png";

export default function Home() {

  const imageRef = useRef(null);

  return (
    <main>
      <div
        style={{
          height: '800px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#060010'
        }}
        onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = imageRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = imageRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
      >
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          horizontalSizing={0.9}
          color="#bec8c8ff"
        />

        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '36%',
          height: '20%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          zIndex: 6
        }}>
          <section className="flex justify-center min-h-screen pt-12 lg:pt-64 px-8 positioned-absolute w-full" style={{ zIndex: 10 }}>
            <h1 className="text-7xl text-red-400 font-bold cursive leading-none lg:leading-snug home-name">
              Kia ora, I'm Sasha!
            </h1>
          </section>
        </div>

        <img
          ref={imageRef}
          src={image}
          alt="Reveal effect"
          style={{
            position: 'absolute',
            width: '100%',
            top: '-50%',
            zIndex: 5,
            mixBlendMode: 'lighten',
            opacity: 0.3,
            pointerEvents: 'none',
            '--mx': '-9999px',
            '--my': '-9999px',
            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat'
          }}
        />
      </div>
    </main>
  );
}
