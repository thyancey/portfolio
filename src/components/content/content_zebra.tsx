import Codeblock from '../codeblock';

function Content() {
  return (
    <>
      <h2>{'ZEBRA TABLES'}</h2>

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
}

export default Content;
