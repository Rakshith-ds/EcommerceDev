import { useEffect } from "react";
import "../css/home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <div>
      <section className="header">
        <div className="banner">
          <div className="banner-img">
            <img src="https://i.ibb.co/crp25Fp/banner-1.jpg" alt="" />
          </div>
          <div className="banner-title">
            <h1>Fashion Story</h1>
            <h1>Women's Lifestyle</h1>
          </div>
        </div>
      </section>

      {/* <!-- fashion trends --> */}
      <section className="fashion-trends">
        <div className="container">
          <div className="fashion-box">
            <div className="title-style text-center">
              <h1>Vogue Trends</h1>
            </div>
            <p className="text-center sm-bt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              illo nobis harum omnis aut maxime nam enim delectus, quo excepturi
              a qui ea quos quia, facere tempore explicabo nemo repudiandae.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="trending-img">
                <img src="https://i.ibb.co/WGhY4L9/trending-1.jpg" alt="" />
                <button type="button" className="btn-buy">
                  Buy Now
                </button>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="trending-img">
                <img src="https://i.ibb.co/1KdJSYy/trending-2.jpg" alt="" />
                <button type="button" className="btn-buy">
                  Buy Now
                </button>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="trending-img">
                <img src="https://i.ibb.co/sqJXqrF/trending-3.jpg" alt="" />
                <button type="button" className="btn-buy">
                  Buy Now
                </button>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Offer section --> */}

      <section className="offer">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="https://i.ibb.co/gjjSk0z/exclusive.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <div className="subscribe">
              <h4>Vogue Exclusive</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                explicabo quia exercitationem iusto animi quos molestiae
                delectus, tempora reiciendis sapiente saepe recusandae,
                provident, alias eligendi magnam? A obcaecati modi ab.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Latest blog --> */}
      <section className="fashion-blog">
        <div className="title-style text-center">
          <h1>Latest Fashion Blog</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="blog-img">
                <img src="https://i.ibb.co/7jq8mJf/blog-2.jpg" alt="" />
                <h5>Buy 1 Get 1 free</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-img">
                <img src="https://i.ibb.co/JpqQqNk/blog-1.jpg" alt="" />
                <h5>New style 50% off</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-img">
                <img src="https://i.ibb.co/RY5nxYb/blog-3.jpg" alt="" />
                <h5>New Shoes Collection</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
