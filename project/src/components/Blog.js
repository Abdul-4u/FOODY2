// import React from "react";
// import { blog } from "../Data";
// const Blog = () => {
//     return (
//         <>
//             <section class="blogs" id="blogs">
//                 <h1 class="heading">
//                     our <span>blogs</span>
//                 </h1>

//                 <div class="box-container">
//                     {blog.map((item, index) => (
//                         <div class="box" key={index * Math.random()}>
//                             <div class="image">
//                                 <img src={item.img} alt="" />
//                             </div>
//                             <div class="content">
//                                 <a href="#" class="title">
//                                     tasty and refreshing spices
//                                 </a>
//                                 <span>by admin / 21st may, 2021</span>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
//                                     dicta.
//                                 </p>
//                                 <a href="#" class="btn">
//                                     read more
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Blog;
import React from "react";
import { blog } from "../Data";

const Blog = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          Our <span>Blogs</span>
        </h1>

        <div className="box-container">
          {blog.map((item, index) => (
            <article className="box" key={index * Math.random()}>
              <div className="image">
                <img src={item.img} alt={`Blog Post - ${item.title}`} />
              </div>
              <div className="content">
                <h2>
                  <a href="#" className="title" title={item.title}>
                    {item.title}
                  </a>
                </h2>
                <p>
                  <span>by {item.author} / {item.date}</span>
                </p>
                <p>
                  {item.excerpt}
                </p>
                <a href="#" className="btn" title={`Read More - ${item.title}`}>
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
