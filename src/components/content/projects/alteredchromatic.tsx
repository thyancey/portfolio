export const ProjectTitle = () => {
  return (
    <>
      <p>{'What if music was simpler, and a piano had a black key for every white key?'}</p>
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
  route: '/projects/alteredchromatic',
  name: 'Altered Chromatic',
  description: 'What if music was simpler, and a piano had a black key for every white key?',
  theme: 'alteredchromatic',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'http://alteredchromatic.com/',
  repoUrl: 'https://github.com/thyancey/altered-chromatic',
  gallery: [],
};
