type Props = {
  e: React.ChangeEvent<HTMLInputElement>;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export default ({ e, setName }: Props) => setName(e.target.value);
