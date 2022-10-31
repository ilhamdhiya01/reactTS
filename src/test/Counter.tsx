import Button from '../components/Button';
  // const [number, setNumber] = useState(0);
  // const addOneHandler = () => {
  //   setNumber(number + 1);
  // };
  // const addFiveHandler = () => {
  //   setNumber((number) => number + 5);
  // };
  // const minOneHandler = () => {
  //   setNumber(number - 1);
  // };
  // const minFiveHandler = () => {
  //   setNumber((number) => number - 5);
  // };
interface CounterProps {
  btnhandlerone: () => void,
  btnhandlerfive: () => void,
  btnminonehandler: () => void,
  btnminfivehandler: () => void,
  shownumber: number,
}
export default function Counter({ btnhandlerone, btnhandlerfive, btnminonehandler, btnminfivehandler, shownumber} : CounterProps) {
  return (
    <div className='flex justify-center items-center gap-2'>
      <Button onClick={() => btnminfivehandler()} className='px-2 bg-blue-500 text-white rounded-sm'>- 5</Button>
      <Button onClick={() =>  btnminonehandler()} className='px-2 bg-blue-500 text-white rounded-sm'>- 1</Button>
      <span>{shownumber}</span>
      <Button onClick={() => btnhandlerone()} className='px-2 bg-blue-500 text-white rounded-sm'>+ 1</Button>
      <Button onClick={() => btnhandlerfive()} className='px-2 bg-blue-500 text-white rounded-sm'>+ 5</Button>
    </div>
  );
}
