import { Fruit } from '../App';

type Props = {
  id: number;
  fruits: Fruit[];
  setFruits: React.Dispatch<React.SetStateAction<Fruit[]>>;
};

export default ({ id, fruits, setFruits }: Props) => {
  const newFruits = fruits.filter((fruit) => fruit.id !== id);
  setFruits(newFruits);
};
