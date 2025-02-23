import { getUrl } from '../../assets';
import { ScBodySideBySide } from '../project';

export const ProjectTitle = () => {
  return (
    <>
      <p>An app that helps you play tasty licks without all the hard work</p>
      <ul>
        <li>Use your ear to find what key and scale a song is in</li>
        <li>See all the notes you need to feel like a guitar god</li>
        <li>Practice scales, patterns, and learn new ones</li>
        <li>Works for multiple instruments and tunings!</li>
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
          Functional prototype, which I personally use every now and then. Although the UX may be confusing, you change
          instruments, keys, scales, etc. Using shift+click engages a scale finder, and there are some bonus features
          for CAGED patterns, midi instrument playback, and custom layouts. I may revisit this in the future, but if I
          do, I'll most likely start over and build it as an actual native mobile app. The underlying code uses a lot of
          outdated janky patterns, and I've found a lot more success in simplifying much of the music-related code in my{' '}
          <a href='#/projects/alteredchromatic'>Altered Chromatic</a> project.
        </p>
      </div>
      <div>
        <h2>What is FretRef?</h2>
        <p>
          When trying to learn guitar for the 10th time, I started delving into{' '}
          <a href='https://en.wikibooks.org/wiki/Guitar/Structure_of_the_CAGED_scale_shapes' target='_blank'>
            CAGED scale shapes
          </a>
          and other ways of relying on a guitar's isomorphic charactaristics. If you play a little guitar - this is how
          you can play almost any song using power chords, or can use a capo to easily change the key.
        </p>
        <br />
        <p>
          After memorizing several different shapes for major and minor scales, I realized that I could play along with
          almost any song, as long as I knew the key! One thing led to another, and I ended up with a toolbox for myself
          to facilitate jammin' with a playlist, without having to be around people or disappoint anyone. Naturally, I
          spent more time coding this app than learning guitar
        </p>
      </div>

      <div>
        <h2>FretRef can help you find the key/scale of a song</h2>
        <ScBodySideBySide>
          <div>
            <p>
              Identifying the key and scale of a song is pretty difficult for most of us. Assuming you have an "ear",
              FretRef has a built in key/scale finder. Click the notes along with a song, finding the ones that sound
              good and ruling out the ones that sound bad! As you choose which notes sound right, the app will provide
              options for which key and scale your song might be in. Once you've found your setup voila! All the notes
              you need to play are displayed on screen
            </p>
          </div>

          <div>
            <img src={getUrl('fretref/fretref-scalefinder.gif')} />
          </div>
        </ScBodySideBySide>
      </div>
      <div>
        <h2>FretRef displays what notes you can play for a variety of instruments</h2>
        <ScBodySideBySide className='reversed'>
          <div>
            <p>
              After decoding the relationships between notes, intervals, and scales - it was only a few more steps to
              decouple instrument as well! You can choose between a variety of string instruments and tunings - anywhere
              from a standard 6 string guitar to a 3 string shamizen!
            </p>
          </div>
          <div>
            <img src={getUrl('fretref/fretref-instruments.gif')} />
          </div>
        </ScBodySideBySide>
      </div>
    </>
  );
};

export default {
  route: '/projects/fretref',
  name: 'FretRef',
  theme: 'fretref',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'http://fretref.com/',
  urlTitle: 'FretRef.com',
  repoUrl: 'https://github.com/thyancey/tly-guitarapp',
  gallery: [
    {
      thumbnail: 'fretref/fretref-keys-t.gif',
      image: 'fretref/fretref-keys.gif',
      caption: 'Changing keys for a particular instrument and scale',
      title: 'Changing Keys',
    },
    {
      thumbnail: 'fretref/fretref-scales-t.gif',
      image: 'fretref/fretref-scales.gif',
      caption: 'Changing scales for a particular instrument and key',
      title: 'Changing Scales',
    },
    {
      thumbnail: 'fretref/fretref-chords-t.gif',
      image: 'fretref/fretref-chords.gif',
      caption:
        'Calcuating chords proved very difficult, as the same note can be represented in several places on a fretboard. I had to hardcode these',
      title: 'Displaying Chords',
    },
    {
      thumbnail: 'fretref/fretref-caged-t.gif',
      image: 'fretref/fretref-caged.gif',
      caption: 'For memorizing patterns using the C-A-G-E-D method',
      title: 'C-A-G-E-D Hints',
    },
    {
      thumbnail: 'fretref/fretref-instruments-t.gif',
      image: 'fretref/fretref-instruments.gif',
      caption: 'Supports different instruments and tuning. Even a banjo with the 5 string starting in a weird spot!',
      title: 'Instrument & Tuning Selection',
    },
    {
      image: 'fretref/fretref-scalefinder.gif',
      caption: 'The scalefinder allows you to play notes and mark which are valid',
      title: 'Scalefinder',
    },
    {
      image: 'fretref/fretref-old1.jpg',
      caption: 'Earlier iterations looked a lot like standard chord references',
      title: 'Older designs',
    },
  ],
};
