import CardList from "../Components/CardList";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import SubHeader from "../Components/SubHeader";
import { GlobalContext } from "../App";
import Navbar from "../Components/Navbar";

function AnimeSearch({ cardSelect }) {
  const { searchBar, navReset, paginationReset } = useContext(GlobalContext);
  const [contents, setContents] = useState([]);
  const param = useParams();

  useEffect(() => {
    const searchedContent = async () => {
      const newContent = await fetch(
        `https://api.jikan.moe/v4/anime?q=${param.name}&sfw`
      ).then((res) => res.json());
      setContents(newContent.data);
    };
    searchedContent(param.name);
    navReset();
  }, [param.name]);

  useEffect(() => {
    paginationReset();
  }, []);

  return (
    <>
      <div className="content-container">
        <Header />
        {searchBar ? <SubHeader /> : null}
        {contents.length !== 0 ? (
          <div className="container">
            <Navbar />
            <CardList items={contents} cardSelect={cardSelect} />
          </div>
        ) : (
          <main className="loading-container">
            <h2 className="loading-data">Fetching data, Please wait...</h2>
          </main>
        )}
      </div>
    </>
  );
}

export default AnimeSearch;
