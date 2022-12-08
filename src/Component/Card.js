import React from "react";
import "../styles/Card.css";
import typescript_img from '../static/images/typescript.png'
import javascript_img from '../static/images/java-script.png'
import html_img from '../static/images/html-5.png'
import css_img from '../static/images/css-3.png'
import node_img from '../static/images/nodejs.png'
import react_img from '../static/images/react.png'
import postgres_img from '../static/images/postgre.png'

export default function Card({ title, text }) {
  if (title === "About Me") {
    return (
      <div className="card">
        <div className="container">
          <h4>{title}</h4>
          <p>
            I graduated in computer<a href="https://web.uniroma2.it/"> @Tor Vergata</a>. I love
            coding every day and I think that the only way to improve as
            developer is to practice daily, but also accept that programming,
            and writing code requires time, and patience and can be frustrating
            (I've proved it on my skin), but it's part of the process.
          </p>
        </div>
      </div>
    );
  } else if (title === "My Skills") {
    return (
      <div className="card">
        <div className="container">
          <h4>{title}</h4>
          <p>Here a list of tech skills</p>
          <ul>
            <div className="row"><img className="list_img" src={typescript_img} alt="typescript"></img><li>Typescript</li></div>

            <div className="row"><img className="list_img" src={javascript_img} alt="javascript"></img><li>Javascript</li></div>

            <div className="row"><img className="list_img" src={html_img} alt="html"></img><li>HTML</li></div>

            <div className="row"><img className="list_img" src={css_img} alt="css"></img><li>CSS</li></div>

            <div className="row"><img className="list_img" src={node_img} alt="nodejs"></img><li>Node.JS</li></div>

            <div className="row"><img className="list_img" src={react_img} alt="react"></img><li>React</li></div>

            <div className="row"><img className="list_img" src={postgres_img} alt="postgres"></img><li>Postgres</li></div>
            
           

          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="container">
          <h4>{title}</h4>
        </div>
      </div>
    );
  }
}
