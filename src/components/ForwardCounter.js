import useCounter from "../hooks/use-conter";
import Card from "./Card";

const ForwardCounter = () => {
  // customHook으로 사용.
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
