export const ProjectTitle = () => {
  return (
    <>
      <p>{'A roguelike shooter build in GameMaker studio'}</p>
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
  route: '/projects/dropship',
  name: 'Dropship!',
  description: 'A roguelike shooter build in GameMaker studio',
  theme: 'dropship',
  titleComponent: <ProjectTitle />,
  // bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/tly-dropship/',
  repoUrl: '',
  gallery: [
    {
      image: 'dropship-projectiles.gif',
      caption: 'Projectiles are fully parameterized to allow for many unique combinations. In this example, the missile is slow and explodes after some time. The green nuke is wobbly, and makes a huge explosion on impact, but fizzles out if it doesn\'t hit anything',
      title: 'Projectile properties',
    },
  ],
};
