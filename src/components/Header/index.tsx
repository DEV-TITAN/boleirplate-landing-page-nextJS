export function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">

        <a href="/" className="logo mr-auto">
          <img src="/img/logo.png" alt="" className="img-fluid" />
        </a>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li className="drop-down"><a href="">Drop Down</a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="drop-down"><a href="#">Deep Drop Down</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>

          </ul>
        </nav>

        <a href="#about" className="get-started-btn scrollto">Get Started</a>

      </div>
  </header>

  );
}