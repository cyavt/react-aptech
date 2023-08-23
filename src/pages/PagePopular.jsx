// import React from 'react';
import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

function PageHome() {
  return (
    <div>
      <Header></Header>
      <Main page="popular"></Main>
      <Footer>
        <div className="next-page">
          <a href="#" className="next-btn">
            Next Page
          </a>
        </div>
      </Footer>
    </div>
  );
}

export default PageHome;