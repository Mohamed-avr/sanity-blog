// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Blog from "./Blog.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          datetime,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => {
        setPostData(data[0]);
        console.log(data);
      })
      .catch(console.error);
  }, [slug]);

  if (!postData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="pb-10">
        <div>
          <div className="abs-image z-0  relative border-b-2 sm:w-[90rem] bg-blue-400 h-[15rem]  sm:h-[26rem] justify-center flex -mr-[0rem] sm:-mr-[21rem] p-0  overflow-hidden ">
            <img
              className="sm:w-[90rem] sm:h-[50rem] w-full h-[20rem] sm:flex hidd -mt-4"
              src={postData.mainImage.asset.url}
              alt='nune-num'
            />
            <div className="bg-gradient-to-r absolute from-blue-400/30 to-blue-500/90  top-0 left-0 w-full h-full  flex justify-center items-center">
              <Link to={"/blog"} className='m-0'>
                <button className=" px-4 py-2 bg-white/60   text-black/50 shadow-xl  rounded-xl "> العودة للمدونة</button>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div  className="px-4">
          <h2 className="text-3xl font-bold mt-10">{postData.title} ؟</h2>
          <span> </span>
          <div className="mt-[4rem]">
            <BlockContent
              blocks={postData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
        
      </div>
    );
  }
}
