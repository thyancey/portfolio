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
  theme: 'hive',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://cheeseoncheese.itch.io/hive',
  urlTitle: 'Play now on itch.io',
  repoUrl: '',
  gallery: [
    {
      image: 'hive/hive-items.png',
      caption: 'Find unique items, but make sure you\'ve brought enough units to carry them home',
    },
    {
      image: 'hive/hive-caves.png',
      caption: 'Explore dark caves to find rare resources',
    },
    {
      image: 'hive/hive-resources.png',
      caption: 'Accomplish as much as you can each day, as your resources accumulate. Return to old locations, or travel to new, plentiful areas',
    }
  ],
};
