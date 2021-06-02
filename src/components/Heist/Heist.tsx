import React from 'react';

const Heist: React.FC = () => {
  return (
    <div
      className="text-center mb-4"
      style={{
        width: 300,
        margin: 'auto',
      }}
    >
      <strong>Guy</strong>
      <br />
      <div className="text-start">You're a pretty smart fella.</div>
      <br />
      <strong>Gene Hackman</strong>
      <br />
      <div className="text-start">Ah, not that smart.</div>
      <br />
      <strong>Guy</strong>
      <br />
      <div className="text-start">[If] you're not that smart, how'd you figure it out?</div>
      <br />
      <strong>Gene Hackman</strong>
      <div className="text-start">I tried to imagine a fella smarter than myself. Then I thought, "what would he do?"
      </div>
    </div>
  );
}

export default Heist
