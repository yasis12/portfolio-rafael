import './LandingPage.css'

function LandingPage() {

  const submitButton = () => {
    alert('COMPLETED');
  }

  return (
    <>
    <div className='LandingPage'>
      <div id='landingPageTitle'>
        <h1>Hi I'm Rafael</h1>
      </div>
      <div id='button-card'>
        <form onSubmit={submitButton}>
          <div className='button-row'>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
          </div>
          <div className='button-row'>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
          </div>
          <div className='button-row'>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
            <div className='button-container'>
              <button>[...]</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LandingPage;