import Codeblock from '../codeblock';

export const ProjectTitle = () => {
  return (
    <>
      <p>A roguelike slotmachine, where you also.. fight squirrels?</p>
      <ul>
        <li>Spin the wheel to earn cash or equip attacks</li>
        <li>Upgrade the reels to bend the odds in your favor - will you focus on damage, defense, combos, or cash!?</li>
        <li>Battle enemies at your own pace, but be careful - each spin costs cash, and you may run out eventually.</li>
        <li>
          Although I got this prototype to a playable state - there is quite a bit of work left in balancing the
          gameplay to make it engaging
        </li>
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
          Playable tech demo, with the ability to upgrade your machine and battle enemies. I haven't spent much time
          balancing anything - so the enemies are almost unbeatable and the game isn't that fun yet, sorry! I'm having
          some struggles balancing "WIN MORE MONEY" with "DEFEAT THAT ENEMY".
        </p>
      </div>
      <div>
        <h3>Premise</h3>
        <p>
          I thought it would be fun to make a slot machine that you could customize in realtime. After getting the
          initial mechanics down for spinning and upgrading, some ideas spawned around battling enemies.
        </p>
        <br />
        <p>
          After creating this, I found someone else who made a very successful roguelike slot machine game. For an
          actual completed game, check out{' '}
          <a href='https://store.steampowered.com/app/1404850/Luck_be_a_Landlord/'>"Luck be a Landlord"</a> on Steam
        </p>
      </div>
      <div>
        <h3>Metadata Mayhem</h3>
        <p>
          I had a lot of fun exploring different ways of combining attributes to influence combos and score effects.
          Since slot machines give you prizes for different combinations, this should too, right?
        </p>

        <br />
        <p>Each tile can be modified to use different stats</p>
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

        <p>Combos combine results to give the user bonuses</p>
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

        <p>Enemies have a variety of stats and attacks</p>
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
      </div>
    </>
  );
};

export default {
  route: '/projects/slots',
  name: '! SLOTS ! SLOTS ! SLOTS !',
  theme: 'slots',
  titleComponent: <ProjectTitle />,
  bodyComponent: <ProjectBody />,
  url: 'https://thyancey.github.io/slot-machine/',
  urlTitle: 'Play now',
  repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  gallery: [
    {
      image: 'slots/slots-attacks.gif',
      caption: 'The basic gameplay loop involves choosing upgrades, spinning the slots, and conquering foes',
    },
    {
      image: 'slots/slots-upgrades.gif',
      caption: 'Between rounds, the slot machine can be modified to spin the odds in your favor!',
    },
    {
      image: 'slots/slots-redesign1.gif',
      caption:
        'In earlier designs, I had more emphasis on skeuomorphic shapes. The colors were ugly and the buttons made no sense.',
    },
    {
      image: 'slots/slots-redesign2.gif',
      caption:
        "Later on, I attempted to move some buttons into a floating UI, this didn't stick well either. The neutral looking player box also distracted from the slot machine.",
    },
  ],
};
