export const ProjectTitle = () => {
  return (
    <>
      <p>Keep some dumb animals alive in your browser</p>
      <ul>
        <li>The pets will continue to eat, shit, and die when the extension is closed</li>
        <li>Take care of several pets at once</li>
        <li>Mod your own pets with the power of GIFs</li>
      </ul>
    </>
  );
};

export default {
  route: '/projects/browserbuddy',
  name: 'BrowserBuddy',
  theme: 'browserbuddy',
  titleComponent: <ProjectTitle />,
  bodyComponent: null,
  url: 'https://thyancey.github.io/browserbuddy/',
  urlTitle: 'Try it out!',
  repoUrl: 'https://github.com/thyancey/browserbuddy',
  gallery: [
    {
      image: 'browserbuddy/browserbuddy-themes.gif',
      caption: 'Each pet can be themed independently to match the images and mood',
      title: 'Customizable themes',
    },
    {
      image: 'browserbuddy/browserbuddy-extension.gif',
      caption: 'Check up on browserbuddies whenever you feel lonely, guilty, or just want to procrastinate.',
      title: `Eventually, it could be a chrome extension!`,
    },
  ],
};
