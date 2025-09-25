import { useEffect, useState } from "react";
import sanityClient from "../client.js";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import LetterGlitch from "./bg-lib/letter-glitch";

const builder = new ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen relative">
      {/* Fixed background layer */}
      <div className="fixed inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          characters="SASHA FEDOROV - SOFTWARE DEVELOPER"
        />
      </div>
      
      {/* Content layer */}
      <main className="relative z-10">
        <div className="p-10 lg:pt-48 container mx-auto">
          <section className="rounded-lg shadow-2xl lg:flex p-20">
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-1"
              alt={author.name}
            />
            <div className="text-lg flex-col justify-center">
              <h1 className="cursive text-8xl text-white mb-4">
                Hey there. I'm{" "}
                <span className="text-white">{author.name}</span>
              </h1>
              <div className="cursive text-4xl text-white">
                <BlockContent
                  blocks={author.bio}
                  projectId="iacy8q5t"
                  dataset="production"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
