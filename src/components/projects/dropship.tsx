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
  bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/tly-dropship/',
  repoUrl: '',
  gallery: [],
};
