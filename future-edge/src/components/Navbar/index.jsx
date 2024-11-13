import { Link } from "react-router-dom";
import Card from "../Card";
import Feedbakcard from "../FeedbackCard";

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
      <div className="sect-4">
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
    </>
  );
};
export default Navbar;
