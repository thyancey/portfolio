import Codeblock from '../codeblock';

export const ProjectTitle = () => {
  return (
    <>
      <p>
        {
          'I had ChatGPT write this copy for me. Thanks, robot. Spin the reels of fortune in a world of slot machines, where excitement and anticipation reign supreme. The clinking of coins, the flashing lights, and the thrilling soundtracks create an immersive gaming experience that keeps players coming back for more.'
        }
      </p>
      <ul>
        <li>
          {'In this realm of chance, every pull of the lever or press of the button represents a shot at big winnings.'}
        </li>
        <li>{`Whether you're chasing cherries, lucky sevens, or bonus symbols, the spinning reels hold the promise of jackpots and thrilling payouts.`}</li>
        <li>{'With each spin, the heart races, and dreams of hitting the ultimate jackpot come to life.'}</li>
      </ul>
    </>
  );
};

export const ProjectBody = () => {
  return (
    <>
      <h3>{'Premise'}</h3>
      <p>{'I thought it would be fun to make a slot machine that you could customize in realtime. After getting the initial mechanics down for spinning and upgrading, some ideas spawned around battling enemies.'}</p>
      <br/>

      <h3>{'Some data structures'}</h3>
      <p>{'Each tile can be modified to use different stats'}</p>

      <Codeblock>{`{
  key: 'flame',
  label: 'Flame',
  debugLabel: 'attack +1, hurt self -1',
  img: AssetMap.Rflame,
  attributes: ['attack'],
  score: 250,
  effects: [
    { type: 'attack', value: 1 },
    { type: 'health', value: -1 },
  ],
}`}</Codeblock>


<p>{'Combos combine results to give the user bonuses'}</p>
<Codeblock>{`{
  label: '"attack" combo',
  attributes: ['attack'],
  bonuses: [
    { bonusType: 'unique', multiplier: 2 },
    { bonusType: 'same', multiplier: 3 },
    { bonusType: 'any', multiplier: 2 },
    { bonusType: '*', multiplier: 2 },
  ],
}`}</Codeblock>

<p>{'Enemies have a variety of stats and attacks'}</p>
<Codeblock>{`{
  label: 'SQUIRREL',
  hp: 15,
  hpMax: 15,
  defense: 0,
  img: AssetMap.Enemy_Squirrel,
  attackIdx: 0,
  attackDefs: [
    {
      label: 'tail whip',
      attack: 3,
      defense: 0
    },
    {
      label: 'acorn shield',
      attack: 0,
      defense: 5
    },
  ],
}`}</Codeblock>
    </>
  );
};

export default {
  route: '/projects/slots',
  name: '! SLOTS ! SLOTS ! SLOTS !',
  description: 'A roguelike slot machine, where you bend the odds in your favor to earn cash and battle enemies',
  theme: 'slots',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/slot-machine/',
  repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  gallery: [
    {
      image: 'slots-attacks.gif',
      caption: 'The basic gameplay loop involves choosing upgrades, spinning the slots, and conquering foes',
    },
    {
      image: 'slots-upgrades.gif',
      caption: 'Between rounds, the slot machine can be modified to spin the odds in your favor!',
    },
    {
      image: 'slots-redesign1.gif',
      caption: 'In earlier designs, I had more emphasis on skeuomorphic shapes. The colors were ugly and the buttons made no sense.',
    },
    {
      image: 'slots-redesign2.gif',
      caption: 'Later on, I attempted to move some buttons into a floating UI, this didn\'t stick well either. The neutral looking player box also distracted from the slot machine.',
    },
  ],
};
