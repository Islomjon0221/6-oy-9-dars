import { useMemo , useCallback, useState } from 'react';

function Third() {

  const [count, setCount] = useState(0);

  const first = useMemo(() => {
    let result = 0;
    for (let i = 1; i <= count; i++) {
      result += i;
    }
    return result;
  }, [count]);


  
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  const second = useMemo(() => {
    let result = 0;
    for (let i = 1; i <= 1000000; i++) {
      result += i;
    }
    return result;
  }, []);
  
    return (
    <>
    <h3 className='third'>1. {second}</h3>
    <div className='t-wrapper'>
      <button onClick={handleClick}>2. Bosing</button>
      <p className='third'>2. Son: {count}</p>
      <p className='third'>3. Hisob-kitob natijasi: {first}</p>
    </div>
    </>
    )
}




export default Third