const Card = ({ heading, list1, list2, list3, list4, list5, list6, list7 }) => {
  return (
    <>
      <div className="card">
        <div className="card-heading">
          <p>{heading}</p>
        </div>
        <div className="card-body">
          <div className="list">
            <ul>
              <li>{list1}</li>
              <li>{list2}</li>
              <li>{list3}</li>
              <li>{list4}</li>
              <li>{list5}</li>
              <li>{list6}</li>
            </ul>
          </div>
          <div>
            <button className="btn-4">Download Broucher</button>
          </div>
          <div>
            <button className="btn-5">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
