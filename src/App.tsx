import { FC, FormEvent, useRef, useState } from 'react';
import handelChange from './Functions/handelChange';

import './App.css';
import handleSubmit from './Functions/handleSubmit';

export interface Fruit {
  id: number;
  name: string;
}

const App: FC = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<number>(fruits.length | 0);
  const inputRef = useRef<HTMLInputElement>(null);

  const fruitsFC = () =>
    fruits.map(({ id, name }, index) => (
      <div key={index} className='fruit'>
        <div>{name}</div>
        <div
          className='remove_btn'
          role='button'
          onClick={() =>
            import('./Functions/removeFruit').then((removeFruit) =>
              removeFruit.default({ id, fruits, setFruits })
            )
          }
        >
          X
        </div>
      </div>
    ));

  return (
    <div className='App'>
      <h1>Write Your Favorites Fruits</h1>

      <div className='input_container'>
        <div className='fruits'>{fruitsFC()}</div>

        <form
          onSubmit={(e) =>
            handleSubmit({
              e,
              id,
              fruits,
              inputRef,
              name,
              setFruits,
              setName,
            })
          }
        >
          <input
            ref={inputRef}
            autoFocus
            type='text'
            name='name'
            value={name}
            className='fruit_input'
            onChange={(e) => handelChange({ e, setName })}
            maxLength={15}
          />
        </form>
      </div>
      <span
        role='button'
        onClick={() =>
          import('./Functions/showFruitInConsole').then((showFruitInConsole) =>
            showFruitInConsole.default(fruits)
          )
        }
      >
        <b>show Fruits in console</b>
      </span>
    </div>
  );
};

export default App;
