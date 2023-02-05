import { Fruit } from '../App';

type Props = {
  e: React.FormEvent<HTMLFormElement>;
  id: number;
  fruits: Fruit[];
  name: string;
  inputRef: React.RefObject<HTMLInputElement>;
  setFruits: React.Dispatch<React.SetStateAction<Fruit[]>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export default ({
  e,
  id,
  fruits,
  inputRef,
  name,
  setFruits,
  setName,
}: Props) => {
  e.preventDefault();

  const findByName = fruits.find(
    (f) => f.name.toLowerCase() === name.toLowerCase()
  );

  if (findByName) {
    console.log(findByName);
    return inputRef.current?.classList.add('error');
  }

  inputRef.current?.classList.remove('error');

  let lastId = fruits.length > 0 ? fruits[fruits.length - 1].id : id;

  setFruits((fruits) => [...fruits, { id: lastId++, name }]);
  setName('');
};
