export const ProjectTitle = () => {
  return (
    <>
      <p>{'An app that helps you play tasty licks without all the hard work'}</p>
      <ul>
        <li>{'Some stuff to say'}</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <h2>{'How to Play'}</h2>
      <p>{'Some more details'}</p>
    </>
  );
};

export default {
  route: '/projects/fretref',
  name: 'FretRef',
  description: 'An app that helps you play tasty licks without all the hard work',
  theme: 'fretref',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'http://fretref.com/',
  repoUrl: 'https://github.com/thyancey/tly-guitarapp',
  gallery: [
    {
      thumbnail: 'fretref-keys-t.gif',
      image: 'fretref-keys.gif',
      caption: 'Changing keys for a particular instrument and scale',
    },
    {
      thumbnail: 'fretref-scales-t.gif',
      image: 'fretref-scales.gif',
      caption: 'Changing scales for a particular instrument and key',
    },
    {
      thumbnail: 'fretref-chords-t.gif',
      image: 'fretref-chords.gif',
      caption: 'Calcuating chords proved very difficult, as the same note can be represented in several places on a fretboard. I had to hardcode these',
    },
    {
      thumbnail: 'fretref-caged-t.gif',
      image: 'fretref-caged.gif',
      caption: 'For memorizing patterns using the C-A-G-E-D method',
    },
    {
      thumbnail: 'fretref-instruments-t.gif',
      image: 'fretref-instruments.gif',
      caption: 'Supports different instruments and tuning. Even a banjo with the 5 string starting in a weird spot!',
    },
    {
      image: 'fretref-scalefinder.gif',
      caption: 'The scalefinder allows you to play notes and mark which are valid',
    },
    {
      image: 'fretref-old1.jpg',
      caption: 'Earlier iterations looked a lot like standard chord references',
    }
  ],
};
