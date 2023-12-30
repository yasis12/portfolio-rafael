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
          <div id='button-row-top'>
            <div id='button-top-one'>
              <button>[...]</button>
            </div>
            <div id='button-top-two'>
              <button>[...]</button>
            </div>
            <div id='button-top-three'>
              <button>[...]</button>
            </div>
            <div id='button-top-four'>
              <button>[...]</button>
            </div>
            <div id='button-top-five'>
              <button>[...]</button>
            </div>
            <div id='button-top-six'>
              <button>[...]</button>
            </div>
            <div id='button-top-seven'>
              <button>[...]</button>
            </div>
            <div id='button-top-eight'>
              <button>[...]</button>
            </div>
          </div>
          <div id='button-row-middle'>
            <div id='button-middle-one'>
              <button>[...]</button>
            </div>
            <div id='button-middle-two'>
              <button>[...]</button>
            </div>
            <div id='button-middle-three'>
              <button>[...]</button>
            </div>
            <div id='button-middle-four'>
              <button>[...]</button>
            </div>
            <div id='button-middle-five'>
              <button>[...]</button>
            </div>
            <div id='button-middle-six'>
              <button>[...]</button>
            </div>
            <div id='button-middle-seven'>
              <button>[...]</button>
            </div>
            <div id='button-middle-eight'>
              <button>[...]</button>
            </div>
          </div>
          <div id='button-row-bottom'>
            <div id='button-bottom-one'>
              <button>[...]</button>
            </div>
            <div id='button-bottom-two'>
              <button>[...]</button>
            </div>
            <div id='button-bottom-three'>
              <button>[...]</button>
            </div>
            <div id='button-bottom-four'>
              <button>[...]</button>
            </div>
            <div id='button-bottom-five'>
              <button>[...]</button>
            </div>
            <div id='button-bottom-six'>
              <button>[...]</button>
            </div>
            <div id='button-bottom-seven'>
              <button>[...]</button>
            </div>
            <div id='button-bottom-eight'>
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