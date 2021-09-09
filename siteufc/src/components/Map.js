/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = () => {
  return (
    <div className="google-map-code">
      <h3 className="map-title">Localisation de nôtre Dojo</h3>
      <iframe
        src="https://www.google.com/maps/d/u/2/embed?mid=15ws2k1azx-qxIfsOm9J1nf9SLA1T9qnr"
        width="640"
        height="480"
      ></iframe>
    </div>
  );
};
export default Map;
