export const ProjectTitle = () => {
  return (
    <>
      <p>What if music was simpler, and a piano had a black key for every white key?</p>
      <ul>
        <li>Every white key has a black key!</li>
        <li>The default "C Major" scale now starts at "A"</li>
        <li>Every letter has a sharp. THERE IS NO G: A, A#, B, B#, C, C#, D, D#, E, E#, F, F#. Isn\'t that nice?</li>
        <li>Notes are always labeled the same, independent of scale!</li>
        <li>
          {'Built with '}
          <a href='https://react.dev/' target='_blank'>
            {'React JS'}
          </a>
        </li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <div>
        <h3>Status</h3>
        <p>
          Just functional enough to enrage music enthusiasts. At the moment, you can see both the AlteredChromatic and
          traditional piano layouts. There are options to change the current key and scale with on-screen references to
          which keys should be played.
        </p>
        <br />
        <p>
          What the app needs next is some good explanation of what the heck I was trying to do, and possibly support for
          other instruments
        </p>
        <br />
      </div>
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
  urlTitle: 'Tickle the ivory',
  repoUrl: 'https://github.com/thyancey/altered-chromatic',
  gallery: [
    {
      image: 'alteredchromatic/alteredchromatic-concept.gif',
      caption: 'Like the Fretref project, you can change keys and scales. This time, scales encompass modes',
      title: 'Keys, Scales, and Modes',
    },
    {
      image: 'alteredchromatic/alteredchromatic-keyboard.gif',
      caption: 'You can play this stupid piano with your keyboard!',
      title: 'Keyboard controlled... keyboard',
    },
  ],
};
