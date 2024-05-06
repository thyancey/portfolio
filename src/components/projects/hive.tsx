export const ProjectTitle = () => {
  return (
    <>
      <p>
        As the alien queen in "Hive", you must skillfully manage resources to nurture and expand your brood, multiplying
        your alien children into an unstoppable swarm.
      </p>
      <ul>
        <li>Gather resources</li>
        <li>Hatch hundreds of worms, control them with pheremones</li>
        <li>Avoid (or hunt) hungry alien creatures</li>
        <li>Solve puzzles and gather rare items</li>
        <li>Built with Godot</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return <></>;
};

export default {
  route: '/projects/hive',
  name: 'Hive',
  theme: 'slots',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://cheeseoncheese.itch.io/hive',
  repoUrl: '',
  gallery: [
    {
      image: 'slots-attacks.gif',
      caption: 'The basic gameplay loop involves choosing upgrades, spinning the slots, and conquering foes',
    },
  ],
};
