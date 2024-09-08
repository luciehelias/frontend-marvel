import loadingGif from "../src/assets/loading-gif.gif";

import "../Styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <p>En cours de chargement</p>
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
};

export default Loading;
