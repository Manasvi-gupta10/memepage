import React, { useEffect, useState } from "react";
import Apicalling from "./Apicalling";
import Card from "./Card";
import Search from "./Search";

const Body = () => {
  const memes = Apicalling();
  const [allmemes, setmemes] = useState(memes);

  useEffect(() => {
    if (memes && memes.length) {
      setmemes(memes);
    }
  }, [memes]);

  return (
    <div className="flex flex-col p-6 w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        Meme Template Viewer
      </h1>

      <Search allmemes={memes} setmemes={setmemes} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {allmemes.map((meme) => (
          <Card key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
};

export default Body;
