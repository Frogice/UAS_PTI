import React from "react";

const TabletMock = ({ shutDown }) => {
  return (
    <React.Fragment>
      <div className="ipad-mock">
        <span className="ipad-mock-camera" />
        <figure className={`ipad-mock-img ${shutDown ? "shutdown" : ""}`}>
          {!shutDown && <img src="" alt="background-black" />}
        </figure>
        <span className="ipad-mock-button" />
      </div>
    </React.Fragment>
  );
};

export default TabletMock;
