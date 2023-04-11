import React, { useState, useEffect, useRef } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001aef1c03756b94dc88c077e93631ec3ad";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;
  const id = useRef(null);

  // fetch picture from pexels api: https://www.pexels.com/zh-tw/api/
  const search = async (url) => {
    setPage(1);

    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
    setInput("");
  };

  // Load more pictures
  const morepicture = async () => {
    let newURL;

    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    }

    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
  };

  useEffect(() => {
    id.current = 1;
    if (currentSearch === "") {
      search(initialURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch, searchURL]);

  useEffect(() => {
    if (page !== 1) {
      id.current = 1;
      morepicture();
    }
  }, [page]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
        input={input}
        currentSearch={currentSearch}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={() => setPage(page + 1)}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
