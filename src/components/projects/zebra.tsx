import { getUrl } from '../../assets';
import { ProjectDef } from '../../store/data';
import Codeblock from '../codeblock';
import { ScBodySideBySide } from '../project';

export const ProjectTitle = () => {
  return (
    <>
      <p>Solve puzzles by interviewing wacky characters and using deductive reasoning!</p>
      <ul>
        <li>Varying difficulty from easy to expert</li>
        <li>Themed puzzles, a wide cast of characters</li>
        <li>Includes customizable settings and a series of tutorials to accomodate new players</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <h3>Inspiration</h3>
      <ScBodySideBySide>
        <div>
          <p className='indented'>
            Growing up, I played a lot of games in the "Dr Brain" series from Sierra, most notably the "Brainwaves"
            puzzle within{' '}
            <a href='https://en.wikipedia.org/wiki/The_Time_Warp_of_Dr._Brain' target='_blank'>
              The Timewarp of Dr Brain.
            </a>{' '}
            I hadn't seen this type of puzzle reproduced in the same creative and sudoku-like format, so I set out to
            make it myself!
          </p>
        </div>
        <div>
          <img src={getUrl('zebratables/brainwaves.png')} />
        </div>
      </ScBodySideBySide>

      <br />
      <h3>How I represent the puzzles</h3>
      <ScBodySideBySide>
        <div>
          <p className='indented'>
            One of the early challenges was figuring out how to represent the puzzles. The current structure defines
            which attributes are displayed, which cells define the solution, and which clues and characters appear to
            help you solve the puzzle.
          </p>
          <br />
          <p className='indented'>
            My process for creating puzzles typically involves coming up with objects that compare and constrast in many
            different ways. For example: For football, basketball, and tennis - football and basketball use a *leather*
            ball, while basketball and tennis have a *round* ball.
          </p>
          <br />
          <p className='indented'>
            In the early stages, I went down a rabbithole in having dynamically generated puzzles. Although a puzzle
            would have a set number of attributes, the solution and clues would be randomly generated each time you
            played - ideally this was for my benefit, so that I wouldn't have to come up with all the custom puzzles and
            prompts. As development continued, I found that auto-generating puzzles was in direct conflict with making
            the clues fun, creative, and challenging - and I spent more time messign with the puzzle generation code
            than making the actual game!. Perhaps someday I'll revisit automatic puzzle generation with AI - but for now
            I enjoy explicitly creating the puzzles myself
          </p>
        </div>
        <div>
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
          ['The parent's porridge wasn't good enough for golidlocks.', 'face1'],
          ['Mama bear eats her food straight from the fridge.', 'skull']
        ],
      }`}</Codeblock>
        </div>
      </ScBodySideBySide>
    </>
  );
};

export default {
  route: '/projects/zebra',
  name: 'Zebra Tables',
  theme: 'zebra',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://zebratables.com/',
  urlTitle: 'Play now at zebratables.com',
  // repoUrl: 'https://github.com/thyancey/zebratables',
  gallery: [
    {
      image: 'zebratables/zebratables-clues-sm.gif',
      caption: `Interview witnesses to solve the puzzle`,
    },
    {
      image: 'zebratables/zebratables-arcademode-sm.gif',
      caption:
        'A new arcade mode gives immediate feedback on your guesses. Make 3 mistakes and you lose - try to solve the puzzle without any mistakes for a perfect score!',
    },
    {
      image: 'zebratables/zebratables-navigation-sm.gif',
      caption: 'Intuitive gestures for mobile and desktop, allowing you to explore larger puzzles with ease',
    },
    {
      image: 'zebratables/zebratables-tutorial-sm.gif',
      caption: 'A new tutorial module helps players learn how to play the game',
    },
    {
      image: 'zebratables/zebratables-settings-sm.gif',
      caption:
        'Users can customize volume settings and enable various experimental flags. Settings are saved between sessions',
    },
    {
      image: 'zebratables/zebratables-themes-sm.gif',
      caption: 'Puzzles vary in size, difficulty, and sometimes theme - with different characters and color palettes',
    },
    {
      image: 'zebratables/zebra-1.png',
      caption: 'An older iteration of the game',
    },
  ],
} as ProjectDef;
