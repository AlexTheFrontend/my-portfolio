import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import * as Constants from "../graphqlAPI.js";
import axios from "axios";

export default function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GET_POSTS_QUERY,
      });

      const allRes = res.data;
      console.log("All Results", allRes);
      setPostData(allRes.allPost);
    };
    fetchData();
    //   useEffect(() => {
    //     sanityClient
    //       .fetch(
    //         `{
    //             allPosts {
    //                 _id,
    //     title,
    //     slug{
    //       current
    //     }
    //     mainImage{
    //       asset{
    //         _id,
    //         url,
    //         altText
    //       }
    //     }
    //             }
    //         }`
    //       )
    //       .then((data) => setPostData(data))
    //       .catch((err) => console.error(err));
    //   }, []);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Welcome to my page of blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full object-cover absolute rounded-r"
                    />
                    <span className="blog relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-grey-800 text-lg font-blog px-3 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

// {
//     users {
//       id
//       email
//     }
//   }

//   *[] { id, email }
