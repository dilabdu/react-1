export default function NewsItem({ item, setShowModal, showModal }) {
  return (
    <section className="article container">
      <img
        className="article_image"
        src={item.Image}
        alt={item.title}
        width={400}
        heigt={300}
      />
      <div className="article_content">
        <h3 className="article_title">{item.title}</h3>
        <p className="article_description">{item.description}</p>
        <button
          onClick={() => setShowModal(!showModal)}
          className="article_link"
        >
          Read more
        </button>
      </div>
    </section>
  );
}
