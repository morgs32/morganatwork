import React, { useEffect, useRef } from 'react';

const Utterances: React.FC = () => {

  const divRef = useRef<HTMLDivElement>()
  useEffect(() => {
    if (!divRef.current) {
      return;
    }
    const div = divRef.current
    // docs - https://utteranc.es/
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'morgs32/morganatwork');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment :speech_balloon:');
    // script.setAttribute('theme', 'photon-dark');
    script.setAttribute('crossorigin', 'anonymous');

    div.appendChild(script);

    return () => {
      // cleanup - remove the older script with previous theme
      div.removeChild(div.firstChild);
    };
  }, []);

  return (
    <div className="py-5" ref={divRef} />
  )
};

export default Utterances
