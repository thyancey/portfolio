export const ProjectTitle = () => {
  return (
    <>
      <p>A twist on the classic game, built in PhaserJS</p>
      <ul>
        <li>feed some cute critters, but be careful, they get hangry!</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <h2>How to Play</h2>
      <p>
        Your goal is to feed as many porch critters as possible, while keeping the feral animals away. Convert feral
        critters by feeding them.
      </p>
      <ul>
        <li>sling food bowls at feral raccoons to tame them, but be careful not to waste it!</li>
        <li>tame raccoons can get on the porch, hug them for bonus points!</li>
        <li>feral raccoons will bite you, kick them away!</li>
      </ul>

      <h2>Controls</h2>
      <ul>
        <li>up / down: move granny between lanes</li>
        <li>space: sling food bowl</li>
        <li>left: extend your arms for a hug</li>
        <li>right: charge kick</li>
      </ul>
    </>
  );
};

export default {
  route: '/projects/raccoontrapper',
  name: 'Raccoon Trapper',
  theme: 'raccoontrapper',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/tly-raccoon-trapper/',
  repoUrl: 'https://github.com/thyancey/tly-raccoon-trapper',
  gallery: [
    {
      image: 'raccoontrapper-game.jpg',
      caption: 'The game starts out pretty slow',
      title: 'Level 1',
    },
    {
      image: 'raccoontrapper-racc.gif',
      caption: 'This little guy was made with the Aseprite pixel editor',
      title: 'Raccoon Enemy',
    },
    {
      image: 'raccoontrapper-granny.gif',
      caption:
        "This granny loves to feed porch critters - but look out for her powerful kicks - she doesn't take any shit!",
      title: 'Gramma',
    },
  ],
};
