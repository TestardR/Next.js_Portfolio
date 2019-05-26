import React, { Fragment } from 'react';

const Loader = () => {
  return (
    <Fragment>
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner" />
        </span>
      </div>
    </Fragment>
  );
};

export default Loader;
