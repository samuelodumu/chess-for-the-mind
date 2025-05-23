import { useEffect } from 'react';

function Footer() {
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

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className='bg-dark py-0'
      style={{ color: '#d3c4ba' }}>
      <div className='container-fluid justify-content-center align-items-center pt-serif-regular'>
        <div className='row'>
          <div className='col-md-5 mt-4 py-3'>
            <h2 className='fw-semibold slide-in'>Quick links</h2>
            <div className='quick-links'>
              <a
                href='https://www.chessable.com/'
                target='_blank'
                className='mb-2 d-block slide-in'>
                <span className='fw-semibold'>Chessable: </span>Learn moves
                in-depth.
              </a>
              <a
                href='https://www.youtube.com/channel/UCQHX6ViZmPsWiYSFAyS0a3Q'
                target='_blank'
                className='mb-2 d-block slide-in'>
                <span className='fw-semibold'>GothamChess: </span>Discover the
                fun side of chess.
              </a>
              <a
                href='https://chessprophet.app/'
                target='_blank'
                className='mb-2 d-block slide-in'>
                <span className='fw-semibold'>Chess Prophet: </span>Win prizes
                predicting the winners of top games.
              </a>
            </div>
            <div className='socials my-3 slide-in'>
              <a
                href='https://www.linkedin.com/in/samuelodumu/'
                target='_blank'
                rel='noopener noreferrer'
                className='fs-4 px-4'>
                <i className='bi bi-linkedin'></i>
              </a>
              <a
                href='https://x.com/themainsamuel'
                target='_blank'
                rel='noopener noreferrer'
                className='fs-4 px-4'>
                <i className='bi bi-twitter-x'></i>
              </a>
              <a
                href='https://github.com/samuelodumu/'
                target='_blank'
                rel='noopener noreferrer'
                className='fs-4 px-4'>
                <i className='bi bi-github'></i>
              </a>
              <a
                href='https://www.youtube.com/@themainsamuel'
                target='_blank'
                rel='noopener noreferrer'
                className='fs-4 px-4'>
                <i className='bi bi-youtube'></i>
              </a>
            </div>
            <p className='m-0 p-0 slide-in'>
              © Chess For The Mind. All rights reserved.
            </p>
            <p className='m-0 p-0 slide-in'>Made with &lt;3 by Samuel Odumu</p>
          </div>
          <div className='col-md-7 mb-0 p-0 d-flex justify-content-center align-items-end slide-in'>
            <img
              src='/images/chess_stash.png'
              className='img-fluid'
              alt='chess pieces stashed together'></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
