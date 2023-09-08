export const ProjectTitle = () => {
  return (
    <>
      <p>{'A twist on the classic game, built in PhaserJS'}</p>
      <ul>
        <li>{'feed some cute critters, but be careful, they get hangry!'}</li>
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
  route: '/projects/raccoontrapper',
  name: 'Raccoon Trapper',
  description: 'A twist on the classic game, built in PhaserJS',
  theme: 'raccoontrapper',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/tly-raccoon-trapper/',
  repoUrl: 'https://github.com/thyancey/tly-raccoon-trapper',
  gallery: [],
};