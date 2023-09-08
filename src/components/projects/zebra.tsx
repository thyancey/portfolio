import Codeblock from '../codeblock';

export const ProjectTitle = () => {
  return (
    <>
      <p>{'Solve puzzles using a combination of boring tables and deductive reasoning!'}</p>
      <ul>
        <li>{'Varying difficulty from easy to expert'}</li>
        <li>{`Themed puzzles`}</li>
        <li>{'Save and restore progress'}</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <h3>{'Premise'}</h3>
      <p>{'Solve puzzles using a combination of boring tables and deductive reasoning!'}</p>
      <p>{'Embark on an adventure of logic and frustration'}</p>
      <ul>
        <li>{'Varying difficulty from easy to expert'}</li>
        <li>{`Themed puzzles`}</li>
        <li>{'Save and restore progress'}</li>
      </ul>

      <h3>{'Puzzle definition'}</h3>
      <Codeblock>{`{
  title: 'Basic Tutorial',
  description: 'Goldilocks did some breaking and entering, now it\'s time for soup.',
  layout: '2x3',
  attributeLabels: [
    'bear',
    'temperature'
  ],
  attributes: [
    [ 'papa bear', 'mama bear', 'baby bear' ],
    [ 'too hot', 'too cold', 'just right' ]
  ],
  solution:[
    [ 0, 0 ],
    [ 1, 1 ],
    [ 2, 2 ]
  ],
  hints:[
    ['The parent\'s porridge wasn\'t good enough for golidlocks.', 'face1'],
    ['Mama bear eats her food straight from the fridge.', 'skull']
  ],
}`}</Codeblock>
      <p>
        {`here's some more text that will have a lot more information in the future. This text is long, as it should describe many things. Let's keep putting words in here. Blah, blah blah, blah blah.`}
      </p>
      <ul>
        <li>{'Varying difficulty from easy to expert'}</li>
        <li>{`Themed puzzles`}</li>
        <li>{'Save and restore progress'}</li>
      </ul>
    </>
  );
};

export default {
  route: '/projects/zebra',
  name: 'Zebra Tables',
  description: 'Solve puzzles using a combination of boring tables and deductive reasoning!',
  theme: 'zebra',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/tly-truth-tables/',
  repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  gallery: [
    {
      image: 'zebra-1.png',
      caption: `Trying to fit the isometric grid in a responsive space was challening. Although I still don't have it quite right, allowing the user to zoom and pan the space seemed like the right answer.`,
    },
    {
      image: 'zebra-2.png',
      caption:
        'Since some may have not interacted with a puzzle like this before, it was important to make a tutorial flow. ',
    },
    {
      image: 'zebra-3.png',
      caption: `Using LocalStorage, the player can save and continue their progress. As the levels and their order changes, it's important to keep track of which particular puzzles users have solved, and whether or not they have been updated. If the puzzle hasn't changed, why should someone have to replay it?`,
    },
  ],
};
