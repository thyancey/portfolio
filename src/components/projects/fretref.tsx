export const ProjectTitle = () => {
  return (
    <>
      <p>{'An app that helps you play tasty licks without all the hard work'}</p>
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
  route: '/projects/fretref',
  name: 'FretRef',
  description: 'An app that helps you play tasty licks without all the hard work',
  theme: 'fretref',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'http://fretref.com/',
  repoUrl: 'https://github.com/thyancey/tly-guitarapp',
  gallery: [],
};
