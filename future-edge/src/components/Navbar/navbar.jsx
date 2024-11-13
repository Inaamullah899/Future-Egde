import { Link } from "react-router-dom";
import Alumni from "../../routes/alumni";
import Card from "../Card/card";

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

          <div className="up-sect2-p1">
            All the below courses can be pursued after passing 12th exams and
            along with graduation
          </div>
        </div>
        <div className="down-sect2">
          <Card
            heading={"Financial Modelling"}
            list1={"27 hands-on courses"}
            list2={"NSE certification"}
            list3={"3+ Year Placement Assistance"}
            list4={
              "Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting, "
            }
            list5={
              "Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more"
            }
            list6={"Pricing: Rs 23,000"}
          />
          <Card
            heading={"Investment Banking Operation"}
            list1={"27 hands-on courses"}
            list2={"NSE certification"}
            list3={"3+ Year Placement Assistance"}
            list4={
              "Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting, "
            }
            list5={
              "Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more"
            }
            list6={"Pricing: Rs 23,000"}
          />
          <Card
            heading={"International Business & Retail Banking Operations"}
            list1={"27 hands-on courses"}
            list2={"NSE certification"}
            list3={"3+ Year Placement Assistance"}
            list4={
              "Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting, "
            }
            list5={
              "Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more"
            }
            list6={"Pricing: Rs 23,000"}
          />
        </div>
      </div>
      {/* section-3 */}
      <div className="sect-3">
        <div className="left-sect3">
          <div className="left-sect3-heading">
            Our Ultimate & <br />
            Most Assured Course
          </div>
          <div className="left-sect3-lists">
            <ul className="left-sect3-list1">
              <li>
                A 6months long prestigious course curated by industry leaders
                Morgan Stanley,
                <br /> Credit Suisse, and seasoned stock market professionals.
              </li>
              <li>
                This comprehensive program provides you with an extensive and
                well-rounded <br />
                education, encompassing
              </li>
            </ul>

            <ul className="left-sect3-list2">
              <li>Financial Modeling,</li>
              <li>Investment Banking Operations,</li>
              <li>An in-depth Overview of International Business,</li>
              <li>Retail Banking Operations, and</li>
              <li>
                and A profound understanding of Technical Analysis, including
                the art of trading
              </li>
            </ul>
          </div>
        </div>
        <div className="right-sect3">
          <Card
            heading={"Universal Banking Operation"}
            list1={"Financial Banking Course"}
            list2={"Investment Banking Operations"}
            list3={"International Business and Retail Banking Operations"}
            list4={"NSE certification"}
            list5={"Placement Assistance"}
            list6={
              "Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting, "
            }
            list7={
              "Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more"
            }
          />
        </div>
      </div>
      {/* <div className="sect-4">
        <div className="up-sect4">
          <div className="up-sect4-heading">What our Learners Say</div>
          <div className="up-sec4-p">
            100+ thousand people have already joined FutureEdge
          </div>
        </div>
        <div className="down-sect4">
          <div className="down-sect4-card">
            <div className="card-name">Amar Gupta</div>
            <div className="card-img">
              <img src="future-edge\src\assets\img2.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Navbar;
