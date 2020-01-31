// pages/about.js
import { useAmp } from "next/amp";
import Nav from "../components/nav"
import Link from "next/link";
import Head from "next/head";
export const config = { amp: "hybrid" };
const Blogs = () => (
    useAmp() ? (
      <amp-img alt="A cute kitten"
      src="https://unsplash.it/1920/600/?random&image=212"
      width="1920"
      height="600"
      layout="responsive"
      >
    </amp-img>
    ) : (
      <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          href="https://fat.github.io/zoom.js/css/zoom.css"
          rel="stylesheet"
        />
        <link href="/main.css" rel="stylesheet" />
      </Head>
  
      <section className="sec1">
        <Nav />
        <div className="container">
          <div className="row nopm pt-5 justify-content-start">
            <div className="col-md-6">
              <h3>Tüm Blog Yazılar</h3>
              <h1>BLOG</h1>
              <p>
                Quick lookup for starting to learn Next.js. If you sayin' yourself
                'How can i learn a react framework, how can i create quick..' then
                you are right place.
              </p>
              <p>
                Learn how CSSBattle powers their blazing fast, exciting platform
                with ZEIT Now.
              </p>
              <div className="d-flex w-100 ">
                <div className="col-md-6 dark-btn">Votes</div>
                <div className="col-md-6 dark-btn ml-auto">Test</div>
              </div>
            </div>
            <div className="hero">
              <img src="hero.png" className="pl-5 ml-5" />
            </div>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="container">
          <div className="row justify-content-start mx-auto my-0 pt-5 px-md-5">
            <h4>WHY NEXT.JS</h4>
            <h2>The world’s leading companies use Next.js</h2>
            <p>
              CSSBattle runs on a React-powered frontend, hosted with ZEIT Now.
              For its backend, it uses Firestore as the persistance layer, Cloud
              Functions to run backend code, and Cloud Storage to store user
              assets. Its blog is powered by Eleventy.
            </p>
            <p>
              The entire website is a monorepo consisting of the actual game and
              the blog. There are two separate builders to deploy the 2
              components, which are connected through redirects. Additionally,
              there are redirects setup on Now to have pretty API URLs redirected
              to Firebase Cloud Function URLs. For every new feature the team
              works on, they take advantage of Now’s deployment preview feature to
              verify that everything works smoothly before hitting production.
            </p>
            <p>
              This choice of tech has allowed the creators of CSSBattle to build
              and iterate on a highly performant, highly engaging game within just
              one single month, while being able to scale to hundreds of thousands
              of submissions without any server know-how.
              <br/>
            </p>
          </div>
        </div>
      </section>
      <section className="sec3">
        <div className="container py-5">
          <img
            className="small-12 medium-6 columns img-fluid"
            src="https://unsplash.it/1920/600/?random&image=212"
            alt=""
            data-action="zoom"
          />
        </div>
      </section>
      <section className="sec4"></section>
  
      {/*<script dangerouslySetInnerHTML={{ __html: 'alert("mahmut")'}}></script>*/}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
      <script src="https://fat.github.io/zoom.js/js/zoom.js"></script>
     
    </div>
    )
   
  );
  

export default Blogs