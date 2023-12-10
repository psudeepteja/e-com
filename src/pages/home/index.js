import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../feature/Counter/counterSlice'
import SimpleSlider from '../../components/Carousel'

function Home() {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const slides = [
    <img key={1} src="/images/01_bullets.jpg" alt="Slide 1" />,
    <img key={2} src="/images/02_bullets.jpg" alt="Slide 2" />,
    <img key={3} src="/images/03_bullets.jpg" alt="Slide 3" />,
    // Add more slides as needed
  ];

    return (
      <div>
      <h1> Home Page</h1>
      {/* <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => count > 0 && dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div> */}

<SimpleSlider slides={slides} />

      </div>
    );
  }
  
  export default Home;
  