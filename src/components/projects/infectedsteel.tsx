export const ProjectTitle = () => {
  return (
    <>
      <p>A roguelike space shooter, built in GameMaker studio</p>
      <ul>
        <li>Choose from a wide variety of ships and loadouts</li>
        <li>Combine weapons and unleash chaos on your enemies</li>
        <li>
          {'Built with '}
          <a href='https://gamemaker.io/en' target='_blank'>
            {'GameMaker'}
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
          Tech demo, but needs some real content. This was my first larger GameMaker project. Although it does some
          really cool things - I am not a fan of coding in GameMaker, at least with how I've structured this project. I
          may follow-up with some more structured levels, but most likely I would want to remake a similar game in Godot
          before spending too much energy finishing this up.
        </p>
        <br />
        <p>
          Regardless - you can equip a ship, try various loadouts, and fight a few wave-based rounds with viruses,
          turrets, and space raccoons. Some of the weapons are pretty fun to play with, especially with some of the
          bouncy wall effects.
        </p>
      </div>
    </>
  );
};

export default {
  route: '/projects/infectedsteel',
  name: 'Infected Steel',
  theme: 'infectedsteel',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
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
