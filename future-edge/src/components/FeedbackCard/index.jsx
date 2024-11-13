const Feedbakcard = ({ p1, name, url, p2, p3 }) => {
  return (
    <>
      <div className="f-card">
        <div className="f-card-name">{name}</div>
        <div className="f-card-img">
          <img src={url} alt="" />
        </div>
        <div className="f-card-p1">{p1}</div>
        <div className="f-card-p2">{p2}</div>
        <div className="f-card-p3">{p3}</div>
      </div>
    </>
  );
};
export default Feedbakcard;
