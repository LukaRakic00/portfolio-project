import { TypeAnimation } from 'react-type-animation';

function Typing() {

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Java',
        600,
        'Kotlin',
        600,
        'Next.js',
        600,
        'TypeScript',
        600,
        'MySQL',
        600
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#84ffff", fontWeight: 'bold', display: 'inline-block', width: '38.5%' }}
      repeat={2}
    />
  );
};

export default Typing;