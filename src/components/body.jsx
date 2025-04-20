import Button from './button';

function Body() {
  return (
    <div className='mt-5 pt-serif-regular-italic'>
      <div className='container-fluid d-flex flex-column p-3 justify-content-center'>
        {/* Why we play */}
        <h1>Why We Play</h1>
        <p className='fs-5'>
          It's more than winning — it's who you become in the process.
        </p>
        <div className='row'>
          <div className='col-sm-6'>
            <p>
              <span className='fw-semibold'>For the overthinker:</span> Chess
              teaches restraint — when to wait, and when to strike.
            </p>
          </div>
          <div className='col-sm-6'>
            <p>
              <span className='fw-semibold'>For the restless:</span> The board
              is a quiet space where your mind finds rhythm.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <p>
              <span className='fw-semibold'>For the dreamer:</span> It's a
              canvas for strategy, imagination, and possibility
            </p>
          </div>
          <div className='col-sm-6'>
            <p>
              <span className='fw-semibold'>For the lifelong learner:</span>{' '}
              There's always another layer to uncover.
            </p>
          </div>
        </div>
      </div>
      {/* The science of strategy */}
      <div className='container-fluid d-flex flex-column p-3 justify-content-center align-items-center'>
        <h1 className=''>🧬 The Science of Strategy</h1>
        <p className='fs-5'>
          Chess isn't just good for the soul — it's proven to strengthen the
          mind.
        </p>
        <div className='col-md-7'>
          <p>
            <span className='fw-semibold'>🧠 Memory Boost:</span> Chess
            activates both short-term and long-term memory. Studies show that
            playing chess can improve memory retention and recall, making it
            easier to learn new information.
          </p>
        </div>
        <div className='col-md-7'>
          <p>
            <span className='fw-semibold'>🎯 Improved Focus:</span> Regular play
            trains your brain to sustain attention. This can lead to better
            concentration in other areas of life, from work to school.
          </p>
        </div>
        <div className='col-md-7'>
          <p>
            <span className='fw-semibold'>🕰️ Cognitive Longevity:</span> Studies
            show a link between chess and reduced risk of cognitive decline.
            Engaging in mentally stimulating activities like chess can help keep
            your brain sharp as you age.
          </p>
        </div>
        <div className='row justify-content-center mt-4 p-2'>
          <blockquote className='blockquote'>
            <p className='fs-4 fw-semibold px-3 quote'>
              “Chess players demonstrate stronger planning, calculation, and
              reasoning skills — and the effects grow over time.”
            </p>
            <footer className='blockquote-footer text-end'>
              Cognitive Neuroscience Journal, 2021
            </footer>
          </blockquote>
        </div>
      </div>
      {/* Stories from the board */}
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <h1 className=''>✍️ Stories from the Board</h1>
        <p className='fs-5'>Real reflections from real players:</p>
        <div className='row mt-2 testimonials'>
          <div className='col-md-4 mb-4 testimonial'>
            <img
              className='w-50 h-auto rounded-circle'
              src='/images/doctor-uifaces.jpg'
              loading='lazy'
              alt='A doctor with a neutral expression against a neutral background'
            />
            <p className='mt-2 mb-0'>
              “Chess helped me rebuild my focus after burnout. It taught me
              patience in life, not just the game.”
            </p>
            <small>—Kai Takahashi, 28</small>
          </div>
          <div className='col-md-4 mb-4 testimonial'>
            <img
              className='w-50 h-auto rounded-circle'
              src='/images\woman_uifaces.jpg'
              loading='lazy'
              alt='A black woman with a fro and neutral expression against a blured background'
            />
            <p className='mt-2 mb-0'>
              “My daughter and I started learning together — now we play every
              Saturday morning. It's become our thing.”
            </p>
            <small>—Jasmine Olayiwa, 31</small>
          </div>
          <div className='col-md-4 mb-4 testimonial'>
            <img
              className='w-50 h-auto rounded-circle'
              src='/images/tech-bro-uifaces.jpg'
              loading='lazy'
              alt='A man with glasses against a blured background'
            />
            <p className='mt-2 mb-0'>
              “When I started playing, I was just curious. Now, it's the most
              mindful part of my week.”
            </p>
            <small>—Luis García, 19</small>
          </div>
          <div className='col-md-4 mb-4 testimonial'>
            <img
              className='w-50 h-auto rounded-circle'
              src='/images/smiling-boy.png'
              loading='lazy'
              alt='A smiling boy against a blured background'
            />
            <p className='mt-2 mb-0'>
              “On the board, I don't have to rush. I can breath, plan, and
              grow.”
            </p>
            <small>—Tunde Onakoya, 12</small>
          </div>
          <div className='col-md-4 mb-4 testimonial'>
            <img
              className='w-50 h-auto rounded-circle'
              src='/images/white-woman.jpg'
              loading='lazy'
              alt='A smiling boy against a blured background'
            />
            <p className='mt-2 mb-0'>
              “Chess is my escape. When I play, it's like nothing else matters.”
            </p>
            <small>—Zoe Monroe, 36</small>
          </div>
        </div>
      </div>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <h1>♟️ Your Next Move Starts Here</h1>
        <p className='fs-5'>
          Whether you're picking up a pawn for the first time or returning to
          the board after years away —{' '}
          <span className='fw-semibold'>this is your moment to begin!</span>
        </p>
        <div className='col-sm-9 fs-5'>
          <ul className='custom-list-style'>
            <li className='d-flex gap-4 text-start'>
              <span className='text'>
                💡 Beginner-friendly guides and lessons
              </span>
            </li>
            <li className='d-flex gap-4 text-start'>
              <span className='text'>
                🌍 Join a mindful community of learners
              </span>
            </li>
            <li className='d-flex gap-4 text-start'>
              <span className='text'>
                🔁 Practice, reflect, and grow at your own pace
              </span>
            </li>
          </ul>
          <div className='row'>
            <div className='col-sm-6'>
              <Button
                label={'📖 Take Your First Lesson'}
                onClick={() =>
                  window.open('https://www.chess.com/lessons', '_blank')
                }
                className={'rounded-pill p-3 mb-2 cta-button'}
                style={{ color: 'aliceblue', backgroundColor: '#b66a50' }}
              />
            </div>
            <div className='col-sm-6'>
              <Button
                label={'🤝 Join the Community'}
                onClick={() =>
                  window.open('https://discord.com/invite/chesscom', '_blank')
                }
                className={'rounded-pill p-3 mb-2 cta-button'}
                style={{
                  color: 'aliceblue',
                  backgroundColor: '#b66a50'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
