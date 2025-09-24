import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = new ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const serializers = {
  types: {
    block: (props) => {
      switch (props.node.style) {
        case "h1":
          return <h1 className="text-4xl font-bold mb-4 text-gray-900">{props.children}</h1>;
        case "h2":
          return <h2 className="text-3xl font-bold mb-3 text-gray-800">{props.children}</h2>;
        case "h3":
          return <h3 className="text-2xl font-bold mb-2 text-gray-800">{props.children}</h3>;
        case "h4":
          return <h4 className="text-xl font-bold mb-2 text-gray-700">{props.children}</h4>;
        case "blockquote":
          return <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-4 italic text-gray-600 bg-gray-50">{props.children}</blockquote>;
        default:
          return <p className="mb-4 leading-relaxed text-gray-700">{props.children}</p>;
      }
    },
    code: (props) => (
      <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono">
        <code>{props.node.code}</code>
      </pre>
    ),
  },
  list: (props) => {
    const { type } = props;
    const bullet = type === "bullet";
    if (bullet) {
      return <ul className="list-disc list-inside mb-4 pl-4 space-y-2">{props.children}</ul>;
    }
    return <ol className="list-decimal list-inside mb-4 pl-4 space-y-2">{props.children}</ol>;
  },
  listItem: (props) => <li className="text-gray-700 leading-relaxed">{props.children}</li>,
  marks: {
    strong: (props) => <strong className="font-bold text-gray-900">{props.children}</strong>,
    em: (props) => <em className="italic">{props.children}</em>,
    underline: (props) => <span className="underline">{props.children}</span>,
    strike: (props) => <span className="line-through">{props.children}</span>,
    code: (props) => <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">{props.children}</code>,
    link: (props) => <a href={props.mark.href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">{props.children}</a>,
  },
};

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
            asset->{_id, url}
      
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => {
        setSinglePost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!singlePost) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="cursive flex items-center pl-2 text-2xl">
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={setSinglePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "500px" }}
          />
        </header>
        <div className="px-10 lg:px-48 py-1 lg:py-2 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="iacy8q5t"
            dataset="production"
            serializers={serializers}
          />
        </div>
      </article>
    </main>
  );
}
