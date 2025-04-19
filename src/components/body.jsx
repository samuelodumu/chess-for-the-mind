function Body() {
  return (
    <div className='flex flex-col items-center justify-center h-screen mt-5 pt-serif-regular-italic'>
      <h1>Why We Play</h1>
      <p className='fs-5 mb-8 '>
        It's more than winning — it's who you become in the process.
      </p>
      <div className='row p-3'>
        <div className='col-md-6'>
          <p>
            <span className='fw-semibold'>For the overthinker:</span> Chess
            teaches restraint — when to wait, and when to strike.
          </p>
        </div>
        <div className='col-md-6'>
          <p>
            <span className='fw-semibold'>For the restless:</span> The board is
            a quiet space where your mind finds rhythm.
          </p>
        </div>
        <div className='col-md-6'>
          <p>
            <span className='fw-semibold'>For the dreamer:</span> It's a canvas
            for strategy, imagination, and possibility
          </p>
        </div>
        <div className='col-md-6'>
          <p>
            <span className='fw-semibold'>For the lifelong learner:</span>{' '}
            There's always another layer to uncover.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
