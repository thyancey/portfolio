export const ProjectTitle = () => {
  return (
    <>
      <p>{'Keep some dumb animals alive in a chrome extension'}</p>
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
  route: '/projects/browserpet',
  name: 'BrowserPet',
  description: 'Keep some dumb animals alive in a chrome extension',
  theme: 'browserpet',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/tly-browserpet/',
  repoUrl: 'https://github.com/thyancey/tly-browserpet',
  gallery: [],
};
