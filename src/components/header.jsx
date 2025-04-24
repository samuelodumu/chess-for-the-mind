import { useEffect } from 'react';
import Button from './button';
import '../App.css';

function Header() {

  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className='d-flex flex-column align-items-center justify-content-center text-center p-4 text-light pt-serif-bold-italic hero'>
      <h1 className='fw-bold display-3 slide-in'>Strengthen your mind.</h1>
      <h1 className='fw-bold display-3 slide-in'>Find your calm.</h1>
      <h1 className='fw-bold display-3 slide-in'>Make your next move count.</h1>
      <div className='col-lg-7 justify-content-center'>
        <p className='fs-4 mt-2 slide-in'>
          In a world that moves too fast, chess invites you to slow down — and
          think deeply. Whether you're a beginner or a seasoned player, every
          move you make is a step toward sharper thinking, greater patience, and
          mental clarity.
        </p>
        {(
          <Button
            label={'Start Your Journey'}
            onClick={() => window.open('https://www.chess.com', '_blank')}
            className={`btn-lg mt-4 px-3 py-2 rounded-5 fw-bold hero-button slide-in`}
            style={{
              backgroundColor: 'aliceblue',
              color: '#7a5c47', zIndex: '100',
            }}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
