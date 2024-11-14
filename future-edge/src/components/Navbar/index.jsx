import { Link } from "react-router-dom";
import Card from "../Card";
import Feedbakcard from "../FeedbackCard";
import Cardwhy from "../CardWhy";

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
              <Link to="/testimonial">Testimonials</Link>
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
      {/* sect-4 */}
      <div className="sect-4" id="testimonials">
        <div className="up-sect4">
          <div className="up-sect4-heading">What our Learners Say</div>
          <div className="up-sect4-p">
            100+ thousand people have already joined FutureEdge
          </div>
        </div>
        <div className="down-sect4">
          <Feedbakcard
            name={"Abhishek Gupta"}
            url={
              "https://s3-alpha-sig.figma.com/img/7ac8/74a5/0b0566f64bacf7d1329f5929023046e9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=knQ7eN7IpsSTbsfamobwjQYc5vg2CQ6CYyoDG~nFLK1v8g0bCRwxIYImjnZhKNdGgTvSz~URNoEsLNwEtGZW1F4mYUp8-0xXQPvTFeCsMdGsVFfgQu6JDy59h60-y5prb8HmcTfiZMb9zr~GzmazITTJpymIdm68qslSo9ewBMt-9IarI75ayTP8a5ehc15VFGPRJQ8ivvGjuVBp0abpzthrukXo1AVBYmsGwLokElTBE4eKVVHqxL9Qie46gPT3eaKMXDifH~akPh2vN2bvUgGr2T2BxjiA-nMHGAK2~3EQEpz2RB-9rDW3onLtGJX-wa-9geCbDNYDaiInaWVVsg__"
            }
            p1={
              "   “This course has significantly enhanced my professional life,particularly in terms of data organization. Previously, it would take me hours to segregate data, but after completing the course, the process has become much more streamlined. Implementing this course effectively can give you a competitive edge.”"
            }
            p2={"Currency Research Analyst "}
            p3={"Barclays"}
          />
          <Feedbakcard
            name={"Abhishek Gupta"}
            url={
              "https://s3-alpha-sig.figma.com/img/7ac8/74a5/0b0566f64bacf7d1329f5929023046e9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=knQ7eN7IpsSTbsfamobwjQYc5vg2CQ6CYyoDG~nFLK1v8g0bCRwxIYImjnZhKNdGgTvSz~URNoEsLNwEtGZW1F4mYUp8-0xXQPvTFeCsMdGsVFfgQu6JDy59h60-y5prb8HmcTfiZMb9zr~GzmazITTJpymIdm68qslSo9ewBMt-9IarI75ayTP8a5ehc15VFGPRJQ8ivvGjuVBp0abpzthrukXo1AVBYmsGwLokElTBE4eKVVHqxL9Qie46gPT3eaKMXDifH~akPh2vN2bvUgGr2T2BxjiA-nMHGAK2~3EQEpz2RB-9rDW3onLtGJX-wa-9geCbDNYDaiInaWVVsg__"
            }
            p1={
              "   “This course has significantly enhanced my professional life,particularly in terms of data organization. Previously, it would take me hours to segregate data, but after completing the course, the process has become much more streamlined. Implementing this course effectively can give you a competitive edge.”"
            }
            p2={"Currency Research Analyst  "}
            p3={"Barclays"}
          />
          <Feedbakcard
            name={"Abhishek Gupta"}
            url={
              "https://s3-alpha-sig.figma.com/img/7ac8/74a5/0b0566f64bacf7d1329f5929023046e9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=knQ7eN7IpsSTbsfamobwjQYc5vg2CQ6CYyoDG~nFLK1v8g0bCRwxIYImjnZhKNdGgTvSz~URNoEsLNwEtGZW1F4mYUp8-0xXQPvTFeCsMdGsVFfgQu6JDy59h60-y5prb8HmcTfiZMb9zr~GzmazITTJpymIdm68qslSo9ewBMt-9IarI75ayTP8a5ehc15VFGPRJQ8ivvGjuVBp0abpzthrukXo1AVBYmsGwLokElTBE4eKVVHqxL9Qie46gPT3eaKMXDifH~akPh2vN2bvUgGr2T2BxjiA-nMHGAK2~3EQEpz2RB-9rDW3onLtGJX-wa-9geCbDNYDaiInaWVVsg__"
            }
            p1={
              "   “This course has significantly enhanced my professional life,particularly in terms of data organization. Previously, it would take me hours to segregate data, but after completing the course, the process has become much more streamlined. Implementing this course effectively can give you a competitive edge.”"
            }
            p2={"Currency Research Analyst  Barclays"}
            p3={"Barclays"}
          />
        </div>
      </div>
      {/* sect-5 */}
      <div className="sect-5">
        <div className="up-sect5">Why Choose Future Edge</div>
        <div className="down-sect5">
          <div className="down-sect5-1">
            <Cardwhy
              url={
                "https://s3-alpha-sig.figma.com/img/a96f/5bdb/fa19901ad5077ba5ee6ba5882d80bffa?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDCl41c4e0HoMega9JH-KdzU0u9QTYbgLXtTdu3o9WHrLk9yPbVHH5yEDVOkJvUcskTzi0ebFmxFWYSlrsz2s5I9B~ADeR2503SN1xrRORlemz9K~wrmR49j10--Ia3f0bImjhNrd0SjaWZgbqX569GZ1VkcuqCQsqn15s7z6a2m6NcAwlYQxCrU2N599GQGXkDZAkUwHS~IfxCY5QPAlgEiOLrQCCGnmhFQHPXFKiQYq47mxyKQBTCrmlROmtcPbSz5TR2Wy13p-LpgOHiWHiVn~UXtd2En14ntiki3SFWi49GkfegpqBSliy6hyLtknKi~JRnNivkar3LkUyLTMg__"
              }
              heading={"In-Demand Certifications"}
              para={
                "FutureEdge provides courses that offer industry-relevant professional certification from CIMA, ACCA, NSDC, FPSB India and others"
              }
            />
            <Cardwhy
              url={
                "https://s3-alpha-sig.figma.com/img/249f/b4ae/f6417707f282cba608791cd876961750?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IJHuoDVEfWQQTDlEVJKHW~HU9SgQB2FNke8fKjeOB3LHNJlTegnP2-I-LmHFuujSsBUtmLg0cEySb~Jz1zx6WjoPuwgSJHtds2uyJD6zt~4h0P7ObVtTgave6fewuEaoN62-2csOVtJDeDAkrL1a9~Dk416eEpuFYmZET-sBS4mXjb4ry3PU2mQkAKY66A7Uq~i27obMkN9ab3RYPrDntb4MBjH4budOsf64SA6DBg7QUKcJf6X1nAJ91Sfk0eso7l-cXDo6V-3ohogP8JOKiIKsLRx8mkHFxQVsqWBnXA03wX3452LNLqaV8oU52dog0NhFf6r3AWuVfwsaFEzztg__"
              }
              heading={"Hand-s On Learning"}
              para={
                "Our one-of-a-kind active learning system delivers concept-based application-oriented learning and skill upgradation."
              }
            />
            <Cardwhy
              url={
                "https://s3-alpha-sig.figma.com/img/2a67/db1f/ca2c545e6dde02b30d6bc168986632d7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YrzaHAl~nRZLb~EqTw3DsLzxFY~v0FN4ZvoQW8DNd-Wl5gysC87OxemFyqta7qOMLi38Y8oMBeV1lAgX2RL-a48AI06H6eZ6dLCR5WcgcqHgL0oDr3Eos2mAl6EABrsi1e5jm26P1dAehQ9y5pqyza0FFPFqx211p1~V3Yh21gWJ1pjL6D94EWe~VJFqaYWqo7IInKFJ0mP0rOZlPnvXI6lG66QwNOiErjl~gjMA0q33eRKnNEmakv1qFTLXqRnO4N888U3oPqV17S9eMdhvF9Rzjoqd7ek92yW8xCbXW9YkuIG3vX7O8WmIVNdqiqPr~ec2tMO8y8A5NyEDBOUy9A__"
              }
              heading={"Convient Flexible Learning"}
              para={
                "The flexible learning method is designed to meet working professionals’ and students’ unique schedules and specific needs."
              }
            />
            <Cardwhy
              url={
                "https://s3-alpha-sig.figma.com/img/d113/d6c4/c2af5917ebb444abe3929d005b6f8fd1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjcQpeeKsCDDpyjVAZUBPQ~xSQwsm9yEZnfNT~8Nf3-TxmVmHib04xjya7bbiO0O7QnuKwL-7iKtY9UubeosBs~TEvQ7d6Hr6ZFfywCuBOFQlnN33dfulk30C6xa4HIuzRiNnTl1YSO7mJnT6fwO~~aYXrRh80bC3qC25kR7vaeiUsHQgD2HBhP2qKjPJzFuUe3tiHj1vOfYgLYmOfFx5GC54v-04JuuD6NwfuuMOfw76ZAslaz5YfjrN8g4CBaMyBoW6iF3MhuzawGRv73utnToJvx9tw8pDN4YiHQA5s2kKYgdXDhmymNDDlj240Rh8ouMaNzl7TCIQe2XV7jnhg__"
              }
              heading={"Expert Faculty"}
              para={
                "Our training faculty members of handpicked industry experts and experienced professionals deliver exceptional experiential training."
              }
            />
            <Cardwhy
              url={
                "https://s3-alpha-sig.figma.com/img/a96f/5bdb/fa19901ad5077ba5ee6ba5882d80bffa?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDCl41c4e0HoMega9JH-KdzU0u9QTYbgLXtTdu3o9WHrLk9yPbVHH5yEDVOkJvUcskTzi0ebFmxFWYSlrsz2s5I9B~ADeR2503SN1xrRORlemz9K~wrmR49j10--Ia3f0bImjhNrd0SjaWZgbqX569GZ1VkcuqCQsqn15s7z6a2m6NcAwlYQxCrU2N599GQGXkDZAkUwHS~IfxCY5QPAlgEiOLrQCCGnmhFQHPXFKiQYq47mxyKQBTCrmlROmtcPbSz5TR2Wy13p-LpgOHiWHiVn~UXtd2En14ntiki3SFWi49GkfegpqBSliy6hyLtknKi~JRnNivkar3LkUyLTMg__"
              }
              heading={"3+ years Placement Assistance"}
              para={
                "Get jobs aligned with career goals and choose from a list of curated matching preferences. Comprehensive interview preparation and resume building."
              }
            />
            <Cardwhy
              url={
                "https://s3-alpha-sig.figma.com/img/e118/8d0d/9ac02ce8978952422944c4b4fad15980?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIPVJpoJrm42iVRySzcmmCqWrjFUMCYtCYdF73gcaE8C4pHF2qEnl9DWMJKjeyRT-LO9ijwuX8-VDRk-tTYS1Upv7rWwkb4a8ikVlXORgv-2mg2GuaHSvp-emi1bvhSYuYfBphBJ82X2kNbNRE~UlrBOEPmmjAUvi-fVUb1GCHtHMN9AT2s~ffKf0cfi9otVih1wTU8mmk3jKXWT6cDvIFHy0J7S~RSbALVWXjXa5howKdVdNF8ce04Sz2wVWxnaWZuiX~7veZrPsWo1NFjLcaG0UvmU8aFa5oXlwxWwMN8-PCVYe1~LNx-XPTepALOW0hmztmgV1L6EgOR6HMfyWw__"
              }
              heading={"Growth Support Mentors"}
              para={
                "Growth support mentors help improve learning and enhance career aspirations with candidates’ potential."
              }
            />
          </div>
          <div className="down-sect5-2">
            <div className="down-sect5-2-left">
              <p>
                Exclusive Placement <br /> Assistance of 3+ Years
              </p>
              <button className="btn-7">Get Strated</button>
            </div>
            <div className="down-sect5-2-right">
              <img
                src="https://s3-alpha-sig.figma.com/img/90f8/f8dc/f13001f598a57fb78b55c2fada289b0e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YGGCi0INzSUqRRzZsz3pV1UqXRTSfOZ5-hgoQLTOpGu965-X9kBvWXwTL2ZtJsIS48KQR6IYpkXP2hpU-1GVryE27mqBGKRcPGixdUcEcX1qZzQ-ZX3CnkUsCcqo03sML7JyyttIEJEEt8nQPkxFe8tSwJo5uDbTJO5kcrv90~5e5s4SnuwKtLk~7UbKxK4esdNo-WA1KJzHajMIBug6mEbbqx3N4qQ-aoA9o6cx7Q20WxqDX3H1IlpD3la-43asjmH8Teq7u02K~RXONM6WQVa6ayJbsDG2y1U2au7TX9W3rdAuGCuKgf2AjGDr0gkE49pwkUoUOlrDNRI9CTo7lA__"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* sect-6 */}
      <div className="sect-6">
        <div className="up-sect6">
          <div className="up-sect6-heading">Meet Your Instructors</div>
          <div className="up-sect6-p1">
            Our faculty are all professionally qualified and have rich industry
            experience, essential for giving a practical
            <br />
            context to concepts
          </div>
        </div>
        <div className="down-sect6">
          <Feedbakcard
            name={"Amar Gupta"}
            url={
              "https://s3-alpha-sig.figma.com/img/7ac8/74a5/0b0566f64bacf7d1329f5929023046e9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=knQ7eN7IpsSTbsfamobwjQYc5vg2CQ6CYyoDG~nFLK1v8g0bCRwxIYImjnZhKNdGgTvSz~URNoEsLNwEtGZW1F4mYUp8-0xXQPvTFeCsMdGsVFfgQu6JDy59h60-y5prb8HmcTfiZMb9zr~GzmazITTJpymIdm68qslSo9ewBMt-9IarI75ayTP8a5ehc15VFGPRJQ8ivvGjuVBp0abpzthrukXo1AVBYmsGwLokElTBE4eKVVHqxL9Qie46gPT3eaKMXDifH~akPh2vN2bvUgGr2T2BxjiA-nMHGAK2~3EQEpz2RB-9rDW3onLtGJX-wa-9geCbDNYDaiInaWVVsg__"
            }
            p1={
              "Has completed all three CFA levels in first attempt 4+ Years Experience Training For Financial Modeling and Independent Trader"
            }
            p2={"CFA, Commodity Trader Morgan Stanley"}
            p3={"Morgan Stanley"}
          />
          <Feedbakcard
            name={"Amar Gupta"}
            url={
              "https://s3-alpha-sig.figma.com/img/7ac8/74a5/0b0566f64bacf7d1329f5929023046e9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=knQ7eN7IpsSTbsfamobwjQYc5vg2CQ6CYyoDG~nFLK1v8g0bCRwxIYImjnZhKNdGgTvSz~URNoEsLNwEtGZW1F4mYUp8-0xXQPvTFeCsMdGsVFfgQu6JDy59h60-y5prb8HmcTfiZMb9zr~GzmazITTJpymIdm68qslSo9ewBMt-9IarI75ayTP8a5ehc15VFGPRJQ8ivvGjuVBp0abpzthrukXo1AVBYmsGwLokElTBE4eKVVHqxL9Qie46gPT3eaKMXDifH~akPh2vN2bvUgGr2T2BxjiA-nMHGAK2~3EQEpz2RB-9rDW3onLtGJX-wa-9geCbDNYDaiInaWVVsg__"
            }
            p1={
              "4+ years of Experience in- Risk Management & Valuation Ex BNY Mellon Risk AnalystTrained 1000+ Students & Independent CA in New Delhi"
            }
            p2={"NITIE MBA, CA "}
            p3={"Barclays"}
          />
          <Feedbakcard
            name={"Amar Gupta"}
            url={
              "https://s3-alpha-sig.figma.com/img/7ac8/74a5/0b0566f64bacf7d1329f5929023046e9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=knQ7eN7IpsSTbsfamobwjQYc5vg2CQ6CYyoDG~nFLK1v8g0bCRwxIYImjnZhKNdGgTvSz~URNoEsLNwEtGZW1F4mYUp8-0xXQPvTFeCsMdGsVFfgQu6JDy59h60-y5prb8HmcTfiZMb9zr~GzmazITTJpymIdm68qslSo9ewBMt-9IarI75ayTP8a5ehc15VFGPRJQ8ivvGjuVBp0abpzthrukXo1AVBYmsGwLokElTBE4eKVVHqxL9Qie46gPT3eaKMXDifH~akPh2vN2bvUgGr2T2BxjiA-nMHGAK2~3EQEpz2RB-9rDW3onLtGJX-wa-9geCbDNYDaiInaWVVsg__"
            }
            p1={
              "10+ Year Experience Fund Manager, Product Management & Entrepreneurship Trained 10000+ students in premiere institution CFA Charter holder since 2020 Ex Co Founder  A.K Researc"
            }
            p2={"CFA,IIM-MBA, B-Techy "}
            p3={"JP Morgan & Chase"}
          />
        </div>
      </div>
      {/* sect-y */}
      <div className="sect-7">
        <div className="sect7-heading">Where FutureEdge Alumni Work</div>
        <div className="sect7-p1">
          Our Alumni are all placed in reputed firms in high positions due to
          the knowledge, skills and placement <br /> assistance gained from our
          courses.
        </div>

        <div className="imgs">
          <img
            src="https://s3-alpha-sig.figma.com/img/34d0/ed64/3a2c83081511088a05bda758d194892f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OygVl3Xj2YklHcZPQgc~74JBGih9IdkVKtA43UvGXlPEECBFmcdSTT9lRq7j-6HiPeO276qFzwR8jxhMrLNaCzsTRKcu0Qdsfle-T-RAnhEgKOkof~nI7GQXr4EZsNeCnI7MXnFc-Tf-WtifU-um0D5jn1sQ0B0xmkdXDCSmKbOui01ZqzEV1npF~8h8vPNEcPTumiQYnTHtQldv6cby0sZSg4IkeTNjVe8YvnyK6q6ka7~0pew7E2CYrW0s2kDcqmSfqvjBMOngtMwporQqVegpSqzRxQV0msTbaG5cznvBFI-2-OfxARSGw4ieFGEP3GojujFE9TNUs4S-xuvU0g__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/52b8/73fe/ce3cd391b4cd62bf962194460281a91b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFAaoTTu~bZkFzsSX7W94HcYD6pX89UllTpvkTECmoOoi2zjTdvIKWgAmThbTWtP3XYuePG7Dn-7-2pgTimot2-~doMo-EYmZnjPAqxKFOHFcnEVysBkH0lEANr3usEmFoabCBzhxvKSdnNunt2DU4Sm1McdWQlf~53ZzYzxWnbh6Ff9x4C~wt8jJ33ev0oFa8XBtZk2h0cvi-8vsBNXj0Sw5a0RFkxh8GxQF3vsN~bv0WsXM0mp6OJDxMwtrU4nKGyZBwBO3TBlLV8UHzthP8KcId19SEcwcVVDv6xj5Cl4cKpWBtoDKDkyBCcbcojVd6eNpCrnTLu0Fqgq9D7EOw__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2203/e238/13cd03a45b96ac57d0f8fc6aff788958?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iZk2h34K6y03EfUFsIE640mMzXf9VZnnEnvp3RoI833VWEH3CrDF0POVEcYHVtoC3jInP56ScdBl~TTrB41cYMvEQxScJujR3EZGZ3P0TLlUi7sPaCJwFGmLnMsr7yFkvq4mvMGl63voUpWCHc3xmPGMHAGoUm1P48uiiO7v~Vtn7WRjg4FxtQqyNpSfPislDcALgnwGbtWcQlf7sCuMr9TRq-JvS4oeGXQp9Ncj5-ep9xK-IRBafOr1Puej-PJls7jEY1IEmuVlgQB4nEfMeuySGrjXeOBJKVxPO-4YaYkLUSRdGhaqQSUYC2fYRMvD6qya9TLCdv5zpWRxALgGyg__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/52b8/73fe/ce3cd391b4cd62bf962194460281a91b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFAaoTTu~bZkFzsSX7W94HcYD6pX89UllTpvkTECmoOoi2zjTdvIKWgAmThbTWtP3XYuePG7Dn-7-2pgTimot2-~doMo-EYmZnjPAqxKFOHFcnEVysBkH0lEANr3usEmFoabCBzhxvKSdnNunt2DU4Sm1McdWQlf~53ZzYzxWnbh6Ff9x4C~wt8jJ33ev0oFa8XBtZk2h0cvi-8vsBNXj0Sw5a0RFkxh8GxQF3vsN~bv0WsXM0mp6OJDxMwtrU4nKGyZBwBO3TBlLV8UHzthP8KcId19SEcwcVVDv6xj5Cl4cKpWBtoDKDkyBCcbcojVd6eNpCrnTLu0Fqgq9D7EOw__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/7c6b/9524/61ada476a5a1fc1cfcad94bc80eeda72?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgRjxnV98dW34nq--tqbxu059Xjx63-gNT9FAhVkxpBvXTqWmGFM5-r9xZPttrjoxxaezM2kBbwhFc7pgamQI58CCDjJb~rwyzXmtK44a1Mw1w34myrY1uEFUHDFI0OwzGCAMKwbF6HaOIQqXk-~y~3IehlmpFN2ABAwlavvIpXw17GhJ4e8sifmCltXoMNJhCyorIxS3~VDz3NpOPjYJCgjIoL7RmudbXE6duMQK7praxIW9Vl4JooCY7y~Uuuj~VCvkSIyJrbtJpnvmDFOnx8c1OrAm3abNNbfNAE75~5f1Z9ah9kBX3gBppOD1X71FR7Gjv07FqGnr5lM~8nBNA__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/d265/d0fc/75916da4140ffe2ac27a8f5ca22d9270?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ebCfGI8Tz4BlkPw0JsIr0Ils6iBuocVnv3pM0aRtnGmIuKGre432h1Bms5pXWIh~0SowSt0aycFgFvwFSwMTu9xyCQWrpaIKrHMTuECxbFtli9Vz~KvPcK9ofvDGiauTZwMsZzsiqK8BuLKaTtf5ObIp5AYWAiyu1gNzMhFCh1gL6Cs4xOK9pcL08ewrYPoJwbC9FlneuejuibPGNnuT94fDkhbEZF8pnY80iae0ACPUyPGaWfzhWdKQUAtRYEseLNp4CW5sqK2gqOVjQrSWt-Orvwz5shvPU8X6Y57qHdkQo84GQtUR8k4sVBJ9L9vXZn-Vs05O2Qtwvwo4LueBjw__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/ab3e/c77b/0a9a18c548dc9e4264d72667e229fae9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qw7PjdvJVsILlCiBNCcEBxA3z~ISRPbfZgJRSlwVqEVwprxP62rS0caSFgdahZcrZGnpAJu21hiNMu9C71KSUg5ZT5evAPZ-Pf5-JN1cbhl0ZAcmFJYPI-kVT3Nn-xnWO7iK2jRRlotMFtvEdZhEAY8yr50lSdzHstwSv1eiT6RUjYfP6Yh2gYFAym6IcgzRuDQZFRDalavhngKHwjDq5kFjf98tJCOM8df4p~lpOKQuZqQnWxoJX1Bq32X67RdAaYlleuUjedbU5U8J52Z5cAQY9-GXPdxPKU0ibESrJ1kxBiQwu8D73OHruBSDz6JXCL9iSkVE15eoElz-7gKmMA__"
            alt=""
          />
        </div>
      </div>
      {/* sect-8 */}
      <div className="sect-8">
        <div className="up-sect8">
          <p>
            Ready to Transform Your <br />
            Career ?
          </p>
          <button className="btn-6  ">Get Strated</button>
        </div>
        <div className="down-sect8">
          <div className="down-sect8-1">
            <div className="down-sect8-1-left">
              <img
                src="https://s3-alpha-sig.figma.com/img/b006/0488/b1028d892da34840b50f5a55d8fcbd97?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=by4059t4iiIiODSMBP92EjibdRVBvqRGBtIEcXE7jEHdl3sVUDDfaRMMlJfb8b8vr1NraxhNj42meAfmBvFHGl4LKHC~4L4oCWv6kpsz62X94vVRD65-dC3P3-L5k~NavTzSl4GgSmXxuq1ofLU0PvvSjVvxCa-6VPVyfZnCbRBme9T1biG3lr4QJd19Rl~Iwyk0gdViAV1FMsIbHQyR3Qg0qDywjePoI-Xrx0O7ilIUld~1C6NEWaDFdzsZd9JyEBXkER~BKKUVAGDzFWHsfjt9H3AtbNPojAK1n9YTLNgpUhQaww~SaMcMFYWvLR3fZnT3FbQneB41aWUgL8LXKw__"
                alt=""
              />
            </div>
            <div className="down-sect8-1-right">
              <div className="li-st">
                <h3>Explore</h3>
                <div className="para">
                  <p>Home</p>
                  <p>Courses</p>
                  <p>Features</p>
                  <p>About Us</p>
                </div>
              </div>
              <div className="li-st">
                <h3>Company</h3>
                <div className="para">
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                  <p>Contact Us</p>
                </div>
              </div>
              <div className="li-st">
                <h3>Get in touch</h3>
                <div className="para">
                  <p>
                    B-1213 We Work,
                    <br /> Andheri 400093
                  </p>
                  <p>
                    +91-8850991017 <br />
                    +91-8424853124
                  </p>
                  <p>info@FutureEdges.in</p>
                </div>
              </div>
            </div>
          </div>
          <div className="down-sect8-2">
            <div className="down-sect8-2-left">
              &copy; 2021 FutureEdge. All rights reserved
            </div>
            <div className="down-sect8-2-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="50px"
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="50px"
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M13 10a3 3 0 1 1-6 0q.001-.257.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049q.048.243.049.5m-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12m2.4-4.1h1.199a.3.3 0 0 0 .301-.3V6.401a.3.3 0 0 0-.301-.301H12.4a.3.3 0 0 0-.301.301V7.6c.001.165.136.3.301.3M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4m5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="50px"
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
