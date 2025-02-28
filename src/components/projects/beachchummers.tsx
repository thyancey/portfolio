export const ProjectTitle = () => {
  return (
    <>
      <p>Rule the beach by harnessing raw SEAGULL POWER</p>
      <ul>
        <li>Collect snacks, which you can use to "chum the beach"</li>
        <li>Throw chum and flock a massive swarm of seagulls</li>
        <li>Steal snacks from tourists and throw chum near them to unleash the swarm</li>
        <li>Don't get caught by the beach patrol! Feeding seagulls is illegull</li>
        <li>
          {'Built with '}
          <a href='https://godotengine.org/' target='_blank'>
            {'Godot'}
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
          Playable tech demo. You can choose several placeholder levels, which explore various unsettled game mechanics.
          Although you can complete bonus objectives, earn currencies - there isn't an ability to purchase upgrades or
          have any meaningful progression. I hope in the near future to condense the available levels to several fun
          experiences, and really focus on the gameplay.
        </p>
      </div>
      <div>
        <h2>How to Play</h2>
        <p>Your goal is to chase all tourists off the beach before the sun goes down.</p>
        <ul>
          <li>
            steal snacks from the beach, but make sure you aren't being watched. walk away from curious toursists until
            they go back to sleep
          </li>
          <li>after picking up some snacks, chum the beach to attract seagulls</li>
          <li>when a seagull is full, it calls in another friend</li>
          <li>if caught stealing snacks or chumming, the beach patrol will be called on you.</li>
        </ul>
      </div>

      <div>
        <h2>Controls</h2>
        <p>Keyboard</p>
        <ul>
          <li>walk: w/a/s/d</li>
          <li>throw chum: spacebar</li>
          <li>pause: escape</li>
        </ul>

        <p>Gamepad</p>
        <ul>
          <li>walk: left joystick</li>
          <li>throw chum: A</li>
          <li>pause: Start</li>
        </ul>
      </div>
    </>
  );
};

export default {
  route: '/projects/beachchummers',
  name: 'Beach Chummers',
  theme: 'beachchummers',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://cheeseoncheese.itch.io/beach-chummers',
  urlTitle: 'Play now on itch.io',
  repoUrl: '',
  gallery: [
    {
      image: 'beachchummers/beachchummers-intro-sm.gif',
      caption: 'a game about feeding seagulls in a 16 bit aesthetic',
    },
    {
      image: 'beachchummers/beachchummers-gameplay-sm.gif',
      caption: 'use snacks and seagulls to rid the beach of those pesky tourists',
    },
    {
      image: 'beachchummers/beachchummers-overworld-sm.gif',
      caption: 'chum exotic locations across chumtopia and amass a giant swarm',
    },
    {
      image: 'beachchummers/beachchummers-decorations.gif',
      caption: 'an earlier build of the game',
    },
  ],
};
