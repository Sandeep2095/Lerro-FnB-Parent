import React from 'react';
import brandImg from '../assets/brandspage.jpg';
import Banner from '../components/shared/banner/Banner';
import { Link } from 'react-router-dom';
import brandlogo1 from '../assets/brandlogo1.jpg';
import brandlogo2 from '../assets/brandlogo2.jpg';
import brandlogo3 from '../assets/brandlogo3.jpg';


const Brands = () => {
  return (
    <div>
      <Banner title={"Brands"} bgImg={brandImg}></Banner>

      {/* the logos of all the cild companies or brands goes here */}
      <div style={{ maxWidth: "1350px" }} className="row col-gap-3 mx-auto my-4">
        <div className="col-lg text-center">
          <Link>
            <img
              style={{ width: "100%", maxWidth: "400px" }}
              className="p-3 my-1 mx-auto"
              src={brandlogo1}
              alt="mamasexy"
            />
          </Link>
        </div>
        <div className="col-lg text-center">
          <Link>
            <img
              style={{ width: "100%", maxWidth: "400px" }}
              className="p-3 my-1 mx-auto"
              src={brandlogo2}
              alt="mamasexy"
            />
          </Link>
        </div>
        <div className="col-lg text-center">
          <Link>
            <img
              style={{ width: "100%", maxWidth: "400px" }}
              className="p-3 my-1 mx-auto"
              src={brandlogo3}
              alt="mamasexy"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brands