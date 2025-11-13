import React, { useEffect, useState } from "react";
import axios from "axios";

const Apicalling = () => {
  const [memes, setmemes] = useState([]);

  useEffect(() => {
    const api = "https://api.imgflip.com/get_memes";
    async function calling() {
      let res = await axios.get(api);
      setmemes(res.data.data.memes);
    }
    calling();
  }, []);

  return memes;
};

export default Apicalling;
