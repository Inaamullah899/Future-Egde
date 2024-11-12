import { Link } from "react-router-dom";
import Alumni from "../routes/alumni";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <b>
            <p>Future Edge</p>
          </b>

          <ul>
            <li>
              <Link to="/courses">Course </Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/why">Why FutureEdge</Link>
            </li>
            <li>
              <Link to="/mentors">Mentors</Link>
            </li>
            <li>
              <Link to="/alumni">Alumni</Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <button className="btn-1">Sign in</button>
          <button className="btn-2">Sign up</button>
        </div>
      </div>
      {/* section-1 */}
      <div className="sect1">
        <div className="left-sect1">
          <div className="left-sect1-heading">
            Unlock Your Potential in <br />
            Finance & Banking
          </div>
          <div className="left-sect1-p1">
            Transform your dreams into Careers
          </div>
          <div className="left-sect1-p2">
            Learn, build your job profile with exclusive placement
            <br />
            assistance for 3+ years and get placed in your dream <br />
            company. Join the collaborative community of live trainers,
            <br />
            catering to various Finance Skills needed in the finance industry.
          </div>
          <div>
            <button className="btn-3">Get Strated</button>
          </div>
        </div>
        <div className="right-sect1">
          <div className="img1">
            <img
              src="https://s3-alpha-sig.figma.com/img/d84c/56b2/785436de99a9639d790e22ad998397d5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZUGsgcCxEJuFq1cG358GpXCvHhItJ6~mEHOh6SDmlFCQ~MjB8KJCnAgkbM1OJN6RByHMZVK1RN4LoDzYjQUygAtw8xE-ILgam6KYgM0S7aPA~SLUfzL7eYabK1QfWGPrercKHAnndedWtqBatxrO84LtSeT0j9V7LTLsgxoOIa5NLSwcs1fzjsbsXPTyhxBAeAz42wBN~8ss2O7u6NuV6Bn8il7dItKZf4jYLWgt-g3Z3gNOTYIPJZEnFHI36p7z6c6l4~a1OwfGtovrzwiXMrormQbFiBNFOA5HOO7E-wrdPyUzvWqY0Z0a3Pzeru0e6iqAi8OfaF1jNFJgnwOCfg__"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* section-2 */}
      <div className="sect2">
        <div className="up-sect2">
          <div className="up-sect2-heading">Our Courses</div>

          <div className="up-sec-p1">
            All the below courses can be pursued after passing 12th exams and
            along with graduation
          </div>
        </div>
        <div className="down-sect2">
          <div className="card">
            <div className="card-heading">Financial Modelling</div>
            <ul>
              <li>27 hands-on courses</li>
              <li>NSE certification</li>
              <li>3+ Year Placement Assistance</li>
              <li>Skills: Financial Statement Analysis,</li>
              <li>Modeling, Accounting, Budgeting, Forecasting,</li>
              <li>
                Career paths: Investment Banking, Private Equity, FP&A, Corp
                Dev, and more
              </li>
            </ul>
            <div>
              <button className="btn-4">Download Broucher</button>
            </div>
            <div>
              <button className="btn-5">Buy Now</button>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">Financial Modelling</div>
            <ul>
              <li>27 hands-on courses</li>
              <li>NSE certification</li>
              <li>3+ Year Placement Assistance</li>
              <li>Skills: Financial Statement Analysis,</li>
              <li>Modeling, Accounting, Budgeting, Forecasting,</li>
              <li>
                Career paths: Investment Banking, Private Equity, FP&A, Corp
                Dev, and more
              </li>
            </ul>
            <div>
              <button className="btn-4">Download Broucher</button>
            </div>
            <div>
              <button className="btn-5">Buy Now</button>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">Financial Modelling</div>
            <ul>
              <li>27 hands-on courses</li>
              <li>NSE certification</li>
              <li>3+ Year Placement Assistance</li>
              <li>Skills: Financial Statement Analysis,</li>
              <li>Modeling, Accounting, Budgeting, Forecasting,</li>
              <li>
                Career paths: Investment Banking, Private Equity, FP&A, Corp
                Dev, and more
              </li>
            </ul>
            <div>
              <button className="btn-4">Download Broucher</button>
            </div>
            <div>
              <button className="btn-5">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
