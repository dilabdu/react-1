import "./main.css";
import Modal from "../modal/Modal";
import { useState } from "react";
import NewsList from "../news/newList";
import MainPageHeader from "../main-page/mainPage";
import news from "/src/data";
function Main() {
  const [showModal, setShowModal] = useState(true);
  let [readMore, setRedMore] = useState(3);

  const changeReadMore = (num) => {
    setRedMore((readMore += num));
  };

  return (
    <main className="main">
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <MainPageHeader />
      <>
        <NewsList
          readMore={readMore}
          setRedMore={setRedMore}
          showModal={showModal}
          setShowModal={setShowModal}
          news={news}
        />
      </>

      <div className="main_load-more-wrapper container">
        <button
          onClick={() => changeReadMore(+1)}
          className="main_load-more btn"
        >
          Load more
        </button>
        {readMore > 3 && (
          <button
            onClick={() => changeReadMore(-1)}
            className="main_load-more btn"
          >
            Less More
          </button>
        )}
      </div>
    </main>
  );
}

export default Main;
