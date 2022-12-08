import "./App.css";
import "./Component/Header";
import Header from "./Component/Header";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import linkedin_img from "./static/images/icons8-linkedin-64.png";
import github_img from "./static/images/github-character.png";
import mail_img from "./static/images/icons8-inbox-64.png";
import cv_img from "./static/images/cv.png";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="cards">
        <Card title="About Me"></Card>
        <Card title="My Skills"></Card>
        <Card title="My Hobbies"></Card>
      </div>

      <div className="footerElements">
        <Footer
          foot_elem="linkedin"
          img={linkedin_img}
          site="https://www.linkedin.com/in/marco-melchiorri/"
          alt={"linkedin_img"}
        ></Footer>
        <Footer
          foot_elem="github"
          img={github_img}
          site="https://www.linkedin.com/in/marco-melchiorri/"
          alt={"github_img"}
        ></Footer>

        <Footer
          foot_elem="mail"
          img={mail_img}
          site=""
          alt={"mail_img"}
        ></Footer>

        <Footer foot_elem="pdf" img={cv_img} site="" alt={"cv_img"}></Footer>
      </div>
    </div>
  );
}

export default App;
