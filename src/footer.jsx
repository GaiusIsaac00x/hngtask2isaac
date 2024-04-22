import coxmox from './assets/images/cosmox.svg';
import coxmox1 from './assets/images/Cosmox1.svg';
function Footer() {
  return (
    <footer className="mt-5 pb-5" style={{ backgroundColor: 'rgba(4, 21, 47, 1)' }}>
      <div className="container pt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12">
            <div className="row justify-content-center">
              <div className="col-lg-2">
                <div className="text-md-center text-left mt-3 mb-md-0 mb-5">
                  <img src={coxmox} alt="" className="img-fluid" /><br />
                  <img src={coxmox1} alt="" className="img-fluid mt-3" />
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-2">
                <div>
                  <a href="" className="mt-3">Collective</a>
                </div>
                <div className="mt-2">
                  <a href="">Faces.art</a>
                </div>
                <div className="mt-2">
                  <a href="">Oddities</a>
                </div>
                <div className="mt-2">
                  <a href="">Mythics</a>
                </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <a href="" className="mt-3">Grails</a>
                </div>
                <div className="mt-2">
                  <a href="">Contact Us</a>
                </div>
                <div className="mt-2">
                  <a href="">Podcast</a>
                </div>
                <div className="mt-2">
                  <a href="">Shop</a>
                </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <a href="" className="mt-3">Careers</a>
                </div>
                <div className="mt-2">
                  <a href="">Documentation</a>
                </div>
                <div className="mt-2">
                  <a href="">Privacy Policy</a>
                </div>
                <div className="mt-2">
                  <a href="">Terms of Use</a>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="text-end">
                  <img src="./assets/images/x.svg" alt="" />
                  <img src="./assets/images/opensea.svg" alt="" />
                  <img src="./assets/images/discord.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
