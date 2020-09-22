import React from "react";

function Quote(props) {

  return (
    <section id="quote" className="bg-parallax py-5 mt-3">
      <div className="container">
        <blockquote className="blockquote py-5 text-center border-0">
          <p className="mb-0 display-4">blah</p>
          <footer className="blockquote-footer ">Chris Tsui</footer>
        </blockquote>
      </div>
    </section>
  );
}

export default Quote;
