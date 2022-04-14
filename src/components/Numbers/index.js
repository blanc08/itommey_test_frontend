import { useSelector } from 'react-redux';

export default function Numbers() {
  const { submitNumbersResult } = useSelector((state) => state.numbers);

  return <div>{submitNumbersResult && <div>{submitNumbersResult}</div>}</div>;
}
