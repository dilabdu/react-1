function NewsList(readMore, news, setShowModal, showModal) {
  return (
    <>
      {news.slice(0, readMore).map((item) => {
        return (
          <NewsItem
            key={item.id}
            item={item}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        );
      })}
      ;
    </>
  );
}
export default NewsList;
