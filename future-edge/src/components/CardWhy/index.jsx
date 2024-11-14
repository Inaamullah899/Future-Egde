const Cardwhy = ({ url, heading, para }) => {
  return (
    <>
      <div className="w-card">
        <img src={url} alt="" />
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </>
  );
};
export default Cardwhy;
