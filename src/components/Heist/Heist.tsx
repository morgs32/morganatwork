import React from 'react';

Heist.propTypes = {};
Heist.defaultProps = {};

export default function Heist() {
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
      <div className="text-left">You're a pretty smart fella.</div>
      <br />
      <strong>Gene Hackman</strong>
      <br />
      <div className="text-left">Ah, not that smart.</div>
      <br />
      <strong>Guy</strong>
      <br />
      <div className="text-left">[If] you're not that smart, how'd you figure it out?</div>
      <br />
      <strong>Gene Hackman</strong>
      <div className="text-left">I tried to imagine a fella smarter than myself. Then I thought to
                                 think, "what would he do?"
      </div>
    </div>
  );
}

