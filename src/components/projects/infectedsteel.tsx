export const ProjectTitle = () => {
  return (
    <>
      <p>A roguelike shooter build in GameMaker studio</p>
      <ul>
        <li>Choose from a wide variety of ships and loadouts</li>
        <li>Combine weapons and unleash chaos on your enemies</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <h2>How to Play</h2>
      <p>Some more details</p>
    </>
  );
};

export default {
  route: '/projects/infectedsteel',
  name: 'Infected Steel',
  theme: 'infectedsteel',
  titleComponent: <ProjectTitle />,
  // bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/infected-steel/',
  urlTitle: 'Play now',
  repoUrl: '',
  gallery: [
    {
      image: 'infectedsteel/infectedsteel-title.png',
      title: '',
      caption: '',
    },
    {
      image: 'infectedsteel/infectedsteel-waves.png',
      title: 'Wave battles',
      caption: 'Fight waves of enemies',
    },
    {
      image: 'infectedsteel/dropship-projectiles.gif',
      title: 'Projectile properties',
      caption:
        "Projectiles are fully parameterized to allow for many unique combinations. In this example, the missile is slow and explodes after some time. The green nuke is wobbly, and makes a huge explosion on impact, but fizzles out if it doesn't hit anything",
    },
  ],
};
