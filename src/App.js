import "./App.css";
import "./Component/Header";
import Header from "./Component/Header";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import linkedin_img from "./static/images/icons8-linkedin-64.png";
import github_img from "./static/images/github-character.png";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="cards">
        <Card title="About Me"></Card>
        <Card title="My Skills"></Card>
        <Card title=""></Card>
      </div>

      <div className="footerElements">
        <Footer
          foot_elem="linkedin"
          img={linkedin_img}
          site="https://www.linkedin.com/in/marco-melchiorri/"
        ></Footer>
        <Footer
          foot_elem="github"
          img={github_img}
          site="https://www.linkedin.com/in/marco-melchiorri/"
        ></Footer>
      </div>
    </div>
  );
}

export default App;
