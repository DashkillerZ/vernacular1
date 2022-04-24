import './header.css';

function menuopen(){
    document.querySelector(".nav-resp").classList.toggle("navopen");
    document.querySelector(".nav-button>div").classList.toggle("animate");
    document.querySelector(".nav-button>div>div:nth-child(1)").classList.toggle("animate1");
    document.querySelector(".nav-button>div>div:nth-child(2)").classList.toggle("animate2");
    document.querySelector(".nav-button>div>div:nth-child(3)").classList.toggle("animate3");
}
  function Header() {
  window.addEventListener("resize", function(event) {
      if(document.body.clientWidth>830){
          document.querySelector(".nav-resp").classList.remove("navopen");
          document.querySelector(".nav-button>div").classList.remove("animate");
          document.querySelector(".nav-button>div>div:nth-child(1)").classList.remove("animate1");
          document.querySelector(".nav-button>div>div:nth-child(2)").classList.remove("animate2");
          document.querySelector(".nav-button>div>div:nth-child(3)").classList.remove("animate3");
      }
  });
  return (
    <div className="main">
      <div className="header">
          <img src="https://mentorplus.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.0db42e3e.svg&w=384&q=75" alt="" />
          <div className="nav">
              <a href="#">Home</a>
              <a href="#" className='active'>Plans&nbsp;&amp;&nbsp;Pricing</a>
              <a href="#">FAQ's</a>
              <a href="#">Contact&nbsp;us</a>
          </div>
          <div className="auth">
              <a href="#">Login</a>
              <a href="#">Signup</a>
              <div className="nav-button" onClick={()=>{menuopen()}}>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
          </div>
      </div>
      <div className="nav-resp">
            <a href="#">Home</a>
            <a href="#" className=''>Plans&nbsp;&amp;&nbsp;Pricing</a>
            <a href="#">FAQ's</a>
            <a href="#">Contact&nbsp;us</a>
        </div>
    </div>

  );
}
export default Header;