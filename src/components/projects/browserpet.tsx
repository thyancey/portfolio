export const ProjectTitle = () => {
  return (
    <>
      <p>{'Keep some dumb animals alive in a chrome extension'}</p>
      <ul>
        <li>{'The pets will continue to eat, shit, and die when the extension is closed'}</li>
        <li>{'Take care of several pets at once'}</li>
        <li>{'Mod your own pets with the power of GIFs'}</li>
      </ul>
    </>
  );
};

export default {
  route: '/projects/browserpet',
  name: 'BrowserPet',
  description: 'Keep some dumb animals alive in a chrome extension',
  theme: 'browserpet',
  titleComponent: <ProjectTitle />,
  bodyComponent: null,
  url: 'https://thyancey.github.io/tly-browserpet/',
  repoUrl: 'https://github.com/thyancey/tly-browserpet',
  gallery: [
    {
      image: 'browserpet-extension.gif',
      caption: 'Check up on browserpets whenever you feel lonely, guilty, or just want to procrastinate.',
      title: 'It\'s a Chrome extension!'
    }
  ],
};
