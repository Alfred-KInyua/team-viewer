import React from 'react';

function Footer() {
  const date = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h4 className="text-center">
            Team member allocation App {date.getFullYear()}
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
