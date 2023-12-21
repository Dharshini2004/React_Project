import React from 'react'
import Grid from '@mui/material/Grid';
import bgimg from "../assets/images/abtbg.jpg";
// const backgroundImageUrl = 'url("../assets/images/bgimg.webp")';
const Aboutus = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "black",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>About Us</h2>
        <div style={{ textAlign: "center", fontSize: "20px", margin: "30px",fontWeight:"80px" }}>
          <p>
            The Garden Up Store is a one-stop hub for Indian brands and made-in-India products to meet all your gardening and ecologically conscious home décor needs. Our Store’s philosophy lies in our strong belief that locally sourced, handicraft, and indigenous products deserve a spotlight.
          </p>
          <p>
            This is why every product in the store is vetted by our small, passionate team of urban gardeners. In fact, unless a product is tried, tested, and approved by our founder, Ekta Chaudhary, it does not make its way into our curated inventory. You will find that every product is accompanied by transparent information about its origins and materials used.
          </p>
          <p>
            The Garden Up Store also supports Indian brands with excellent products but is in need of wide exposure. In the process, we cross paths with many highly skilled and ambitious artisans and small business owners across the country.
            We are proud to say that we mentor artisans, vendors, and handicraft communities. Many of our vendors are women from across the country whom we mentored, trained, and supported with the practical knowledge necessary for commercial success.
          </p>
          <p>
            The Store is now proudly run by a small team led by a former vendor with the same values and high standards. With our experience and ethical goals, we do our best to protect our vendors’ interests and deliver on our promises to our invaluable patrons.
          </p>
          <p>
            From the beginning, the ethos of our store has been simple but firm: high-quality products of high utility value that are environmentally and economically sustainable sold in a transparent process with minimal single-use packaging.
          </p>
        </div>
    </div >
    </>
  )
}

export default Aboutus