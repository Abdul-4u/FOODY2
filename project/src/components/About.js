// import React from "react";
// import AboutImg from "../assets/images/about-img";
// const About = () => {
//     return (
//         <>
//             <section className="about" id="about">
//                 <h1 className="heading">
//                     <span>about</span> us
//                 </h1>

//                 <div className="row">
//                     <div className="image">
//                         <img src={AboutImg} alt="" />
//                     </div>

//                     <div className="content">
//                         <h3>what makes our food special?</h3>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                             Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
//                             ratione a officiis id temporibus autem? Quod nemo facilis
//                             cupiditate. Ex, vel?
//                         </p>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
//                             amet enim quod veritatis, nihil voluptas culpa! Neque consectetur
//                             obcaecati sapiente?
//                         </p>
//                         <a href="#" className="btn">
//                             learn more
//                         </a>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default About;
import React from "react";
import AboutImg from "../assets/images/about-img";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About</span> Us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="About Us - Specializing in Delicious Cuisine" />
          </div>

          <div className="content">
            <h2>What Sets Our Food Apart?</h2>
            <p>
              Discover the unique flavors and passion behind our culinary creations. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?
            </p>
            <p>
              Indulge in a culinary experience like no other. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?
            </p>
            <a href="#learn-more" className="btn" title="Explore Our Menu">
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
