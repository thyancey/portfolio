export const ProjectTitle = () => {
  return (
    <>
      <p>Keep some dumb animals alive in your browser</p>
      <ul>
        <li>The pets will continue to eat, shit, and die when the extension is closed</li>
        <li>Take care of several pets at once</li>
        <li>Mod your own pets with the power of GIFs</li>
        <li>
          {'Built with '}
          <a href='https://react.dev/' target='_blank'>
            {'React JS'}
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
          Janky, but functional - You can choose from a few different pets, and their abililties will persist in your
          browser, even when the page is closed. A lot more work is needed to make some fun & engaging virtual pets, so
          hopefully I'll revisit this someday! I'd really like to provide a backend, where users could create and share
          their own pets - most of the work is already in place to support it!
        </p>
      </div>
    </>
  );
};

export default {
  route: '/projects/browserbuddy',
  name: 'BrowserBuddy',
  theme: 'browserbuddy',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
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
