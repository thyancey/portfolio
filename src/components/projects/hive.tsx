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
        <li>
          {'Built with '}
          <a href='https://godotengine.org/' target='_blank'>
            {'Godot'}
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
          Tech demo, but needs some real content. This was my first Godot project, and got a little bloated over time. I
          hope to revisit it soon and round out a few levels so that I can wrap this up until I feel like remaking the
          concept from scratch.
        </p>
        <br />
        <p>
          Regardless - you can control the swarm queen, gather resources day-to-day, solve a few simple puzzles and
          fight some enemies! Worth playing around with for a bit.
        </p>
      </div>
    </>
  );
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
      caption: "Find unique items, but make sure you've brought enough units to carry them home",
    },
    {
      image: 'hive/hive-caves.png',
      caption: 'Explore dark caves to find rare resources',
    },
    {
      image: 'hive/hive-resources.png',
      caption:
        'Accomplish as much as you can each day, as your resources accumulate. Return to old locations, or travel to new, plentiful areas',
    },
  ],
};
