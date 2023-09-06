import Codeblock from '../codeblock';

function Content() {
  return (
    <>
      <h2>{'!SLOTS!SLOTS!SLOTS!'}</h2>
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

      <h3>{'Rouge-like Elements'}</h3>
      
      <Codeblock>{
`{
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
}`    }</Codeblock>
      <p>
        {
          'Spin the reels of fortune in a world of slot machines, where excitement and anticipation reign supreme. The clinking of coins, the flashing lights, and the thrilling soundtracks create an immersive gaming experience that keeps players coming back for more.'
        }
      </p>
    </>
  );
}

export default Content;
