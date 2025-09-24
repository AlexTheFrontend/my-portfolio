import React from 'react';

const LiquidEther = ({ 
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  resolution = 0.5,
  isBounce = false,
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 3000,
  autoRampDuration = 0.6
}) => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at 50% 50%, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
        backgroundSize: '400% 400%',
        animation: 'liquidEtherAnimation 8s ease-in-out infinite',
        zIndex: -1,
        opacity: 0.7
      }}
    >
      <style jsx>{`
        @keyframes liquidEtherAnimation {
          0% {
            background-position: 0% 50%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            background-position: 100% 50%;
            transform: scale(1.05) rotate(90deg);
          }
          50% {
            background-position: 100% 100%;
            transform: scale(1) rotate(180deg);
          }
          75% {
            background-position: 50% 100%;
            transform: scale(1.05) rotate(270deg);
          }
          100% {
            background-position: 0% 50%;
            transform: scale(1) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LiquidEther;