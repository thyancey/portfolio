import Codeblock from '../codeblock';

export const ProjectTitle = () => {
  return (
    <>
      <p>
        {
          'Spin the reels of fortune in a world of slot machines, where excitement and anticipation reign supreme. The clinking of coins, the flashing lights, and the thrilling soundtracks create an immersive gaming experience that keeps players coming back for more.'
        }
      </p>
      <ul>
        <li>
          {'I had ChatGPT write this copy for me. Thanks, robot.'}
        </li>
        <li>
          {'In this realm of chance, every pull of the lever or press of the button represents a shot at big winnings.'}
        </li>
        <li>{`Whether you're chasing cherries, lucky sevens, or bonus symbols, the spinning reels hold the promise of jackpots and thrilling payouts.`}</li>
        <li>{'With each spin, the heart races, and dreams of hitting the ultimate jackpot come to life.'}</li>
      </ul>
    </>
  );
}

export const ProjectBody = () => {
  return (
    <>
      <h3>{'Premise'}</h3>
      <p>{'A roguelike slot machine, where you bend the odds in your favor to earn cash and battle enemies'}</p>
      <p>
        {
          'Spin the reels of fortune in a world of slot machines, where excitement and anticipation reign supreme. The clinking of coins, the flashing lights, and the thrilling soundtracks create an immersive gaming experience that keeps players coming back for more.'
        }
      </p>
      <ul>
        <li>
          {'In this realm of chance, every pull of the lever or press of the button represents a shot at big winnings.'}
        </li>
        <li>{`Whether you're chasing cherries, lucky sevens, or bonus symbols, the spinning reels hold the promise of jackpots and thrilling payouts.`}</li>
        <li>{'With each spin, the heart races, and dreams of hitting the ultimate jackpot come to life.'}</li>
      </ul>

      <h3>{'Rogue-like Elements'}</h3>
      <p>{'Here is what a codeblock looks like with another theme'}</p>

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
      <p>
        {
          'Spin the reels of fortune in a world of slot machines, where excitement and anticipation reign supreme. The clinking of coins, the flashing lights, and the thrilling soundtracks create an immersive gaming experience that keeps players coming back for more.'
        }
      </p>
    </>
  );
}

export default {
  route: '/projects/slots',
  name: '!SLOTS!SLOTS!SLOTS!',
  description: 'A roguelike slot machine, where you bend the odds in your favor to earn cash and battle enemies',
  theme: 'slots',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/slot-machine/',
  repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  gallery: [
    {
      image: 'slots-1.png',
      caption: 'The basic gameplay loop involves making upgrades, rolling the dice, and conquering foes',
    },
    {
      image: 'slots-2.png',
      caption: 'Between rounds, the slot machine can be modified to spin the odds in your favor!',
    },
  ],
}