import { useState } from 'react';
import Button from './button';
import '../App.css';

function Header() {
  const [hover, setHover] = useState(false);
  return (
    <header className='d-flex flex-column align-items-center justify-content-center text-center col-12 text-light pt-serif-bold-italic hero'>
      <h1 className='text-2xl fw-bold display-3'>Strengthen your mind.</h1>
      <h1 className='text-2xl fw-bold display-3'>Find your calm.</h1>
      <h1 className='text-2xl fw-bold display-3'>Make your next move count.</h1>
      <div className='col-md-7 mx-auto'>
        <p className='fs-4 mt-2'>
          In a world that moves too fast, chess invites you to slow down — and
          think deeply. Whether you're a beginner or a seasoned player, every
          move you make is a step toward sharper thinking, greater patience, and
          mental clarity.
        </p>
        <Button
          label={'Start Your Journey'}
          onClick={() => (window.open('https://www.chess.com', '_blank'))}
          className='btn-lg mt-4 px-3 py-2 rounded-5 fw-bold'
          style={{
            backgroundColor: 'aliceblue',
            color: '#7a5c47',
            transform: hover ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.2s ease-in-out'
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
    </header>
  );
}

export default Header;
