// import React from 'react';

function PageHome(props) {
    const { children } = props;
  return (
    <div>
      { children }
      <div className="copyright">
        <p>© MovieVennie All Right Reserved</p>
      </div>
    </div>
  );
}

export default PageHome;
