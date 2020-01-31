import React, { Fragment } from "react";
import Nav from "../components/nav";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
    /* this.state={
            date:new Date()
        }*/
  }
  /*tick(){
        setInterval(() => {
            this.a++;
            this.setState({date:new Date()})
        }, 1000);
    }
    componentDidMount(){
        this.tick();
    }*/
  /* FETCH  */
  componentDidMount() {
    //fetch("https://source.unsplash.com/random" ).then(results=>console.log(results))
    fetch("https://randomuser.me/api/?results=9")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.results.map((pic, index) => {
          return (
            <div key={index + "picture"} className="col-md-4 my-5 text-center">
              <img className="img-fluid pic-item zoom" src={pic.picture.large} data-action="zoom" />
            </div>
          );
        });
        this.setState({ pictures: pictures });
      });
  }

  /* Fetch end */
  render() {
    return (
      <Fragment>
        <section className="sec1">
          <Nav />
          <div className="container">
            <div className="row nopm pt-5 justify-content-start">
              <div className="col-md-6">
                <h3>A React Framework</h3>
                <h1>NextJS</h1>
                <p>
                  Quick lookup for starting to learn Next.js. If you sayin'
                  yourself 'How can i learn a react framework, how can i create
                  quick..' then you are right place.
                </p>
                <p>
                  Learn how CSSBattle powers their blazing fast, exciting
                  platform with ZEIT Now.
                </p>
                <div className="d-flex w-100 ">
                  <div className="col-md-6 dark-btn">Votes</div>
                  <div className="col-md-6 dark-btn ml-auto">Test</div>
                </div>
              </div>
              <div className="hero">
                <img src="/static/hero.png" className="pl-5 ml-5" />
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
                CSSBattle runs on a React-powered frontend, hosted with ZEIT
                Now. For its backend, it uses Firestore as the persistance
                layer, Cloud Functions to run backend code, and Cloud Storage to
                store user assets. Its blog is powered by Eleventy.
              </p>
              <p>
                The entire website is a monorepo consisting of the actual game
                and the blog. There are two separate builders to deploy the 2
                components, which are connected through redirects. Additionally,
                there are redirects setup on Now to have pretty API URLs
                redirected to Firebase Cloud Function URLs. For every new
                feature the team works on, they take advantage of Now’s
                deployment preview feature to verify that everything works
                smoothly before hitting production.
              </p>
              <p>
                This choice of tech has allowed the creators of CSSBattle to
                build and iterate on a highly performant, highly engaging game
                within just one single month, while being able to scale to
                hundreds of thousands of submissions without any server
                know-how.
                <br />
              </p>
            </div>
          </div>
        </section>
        <section className="sec3">
          <div className="container py-5">
            <img
              className="small-12 medium-6 columns img-fluid zoom"
              src="https://unsplash.it/1920/600/?random&image=212"
              alt=""
            />
          </div>
        </section>
        <section className="sec4">
          <div className="container p-5 ">
            <div className="row mx-auto">{this.state.pictures}</div>
          </div>
        </section>
        </Fragment>
    );
  }
}

export default Main;
