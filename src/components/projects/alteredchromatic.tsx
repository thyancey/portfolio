export const ProjectTitle = () => {
  return (
    <>
      <p>What if music was simpler, and a piano had a black key for every white key?</p>
      <ul>
        <li>Every white key has a black key!</li>
        <li>The default "C Major" scale now starts at "A"</li>
        <li>Every letter has a sharp. THERE IS NO G: A, A#, B, B#, C, C#, D, D#, E, E#, F, F#. Isn\'t that nice?</li>
        <li>Notes are always labeled the same, independent of scale!</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <h2>What the hell is this all about?</h2>
      <p>I need to fill in a better explanation and some music theory. Probably some supporting images and charts.</p>
    </>
  );
};

export default {
  route: '/projects/alteredchromatic',
  name: 'Altered Chromatic',
  theme: 'alteredchromatic',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'http://alteredchromatic.com/',
  repoUrl: 'https://github.com/thyancey/altered-chromatic',
  gallery: [
    {
      image: 'alteredchromatic-concept.gif',
      caption: 'Like the Fretref project, you can change keys and scales. This time, scales encompass modes',
      title: 'Keys, Scales, and Modes',
    },
    {
      image: 'alteredchromatic-keyboard.gif',
      caption: 'You can play this stupid piano with your keyboard!',
      title: 'Keyboard controlled... keyboard',
    },
  ],
};
