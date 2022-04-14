import { useSelector } from 'react-redux';

export default function Result() {
  const { submitNumbersResult } = useSelector((state) => state.numbers);

  return <div>{submitNumbersResult && <div>{submitNumbersResult}</div>}</div>;
}
