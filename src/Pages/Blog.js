import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import Header from "../Components/Header.js";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      body,
      slug,
      mainImage{
        asset->{
        _id,
        url
      }
    }
  }`
      )
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    
    <>
      <Header/>
      <section className="flex sm:justify-start  justify-center  items-start flex-row flex-wrap mt-24 px-3  ">
        {posts.map((post) => {
          return (
            <Link to={"/blog/" + post.slug.current} key={post.slug.current} className='hover:bg-gray-50 rounded-xl'>
              <article
                key={post.id}
                className=" rounded-xl w-[20rem] h-[26rem] p-2 pt-0 mb-8   "
              >
                <div className="rounded-xl ">
                  <img
                    className="w-[20rem] h-[18rem] rounded-xl"
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <span className="bg-blue-500/20 py-1 font-medium px-2 rounded-md text-blue-500 ">
                    {post.slug.current}
                  </span>
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-bold text-black/75"> {post.title} ؟</h3>
                  <h5 className=" text-sm text-black/40 mt-1"> {  post.body[2].children['0'].text.slice(0 ,73)}... </h5>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
}

