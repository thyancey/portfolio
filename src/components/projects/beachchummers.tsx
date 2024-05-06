export const ProjectTitle = () => {
  return (
    <>
      <p>Rule the beach by harnessing raw SEAGULL POWER</p>
      <ul>
        <li>Collect snacks, which you can use to "chum the beach"</li>
        <li>Throw chum and flock a massive swarm of seagulls</li>
        <li>Steal snacks from tourists and throw chum near them to unleash the swarm</li>
        <li>Don't get caught by the beach patrol! Feeding seagulls is illegull</li>
        <li>Built in Godot</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <h2>How to Play</h2>
      <p>
        Your goal is to chase all tourists off the beach before the sun goes down.
      </p>
      <ul>
        <li>steal snacks from the beach, but make sure you aren't being watched. walk away from curious toursists until they go back to sleep</li>
        <li>after picking up some snacks, chum the beach to attract seagulls</li>
        <li>when a seagull is full, it calls in another friend</li>
        <li>if caught stealing snacks or chumming, the beach patrol will be called on you.</li>
      </ul>

      <br/>
      <br/>
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
    </>
  );
};

export default {
  route: '/projects/beachchummers',
  name: 'Beach Chummers',
  theme: 'beachchummers',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://cheeseoncheese.itch.io/beachchummers',
  repoUrl: '',
  gallery: [
    {
      image: 'beachchummers-decorations.gif',
      caption: 'Steal snacks, but don\'t get caught!',
    },
  ],
};
