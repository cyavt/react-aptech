// import React from 'react';
import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import {useParams} from 'react-router-dom';

function PageHome() {
  const params = useParams();
  return (
    <div>
      <Header></Header>
      <Main page="detail" id={params.id}></Main>
      <Footer>
        <div className="download">
          <h2 className="download-title">Download</h2>
          <div className="download-links">
            <a
              href="https://movie-site-delta.vercel.app/play-page/Jumanji.mp4"
              download=""
            >
              480p
            </a>
            <a
              href="https://movie-site-delta.vercel.app/play-page/Jumanji.mp4"
              download=""
            >
              720p
            </a>
            <a
              href="https://movie-site-delta.vercel.app/play-page/Jumanji.mp4"
              download=""
            >
              1080p
            </a>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default PageHome;
