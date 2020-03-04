import React from 'react';

const LoadFiles = props => {
  return (
    <div className="loadFiles">
      <h3 className="title">Load file .csv / .txt</h3>
      <input type="file" name="kbvFile" id="kbvFile" onChange={props.change} />
      <button className="submit" onClick={props.click}>
        Send file
      </button>
    </div>
  );
};

export default LoadFiles;
