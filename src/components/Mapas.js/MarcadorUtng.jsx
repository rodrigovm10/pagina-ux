import React, { useState } from "react";
import { InfoWindowF, MarkerF } from "@react-google-maps/api";

import Utng from "../../assets/CampusDh.png";
import UtngVic from "../../assets/CampusVic.png";

export const MarcadorUtngDh = () => {
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);
  const positionDh = {
    lat: 21.1654971,
    lng: -100.9263531,
  };

  return (
    <>
      <MarkerF
        position={positionDh}
        onClick={() => {
          setSelectedEmpresa(positionDh);
        }}
        tracksViewChanges={false}
        icon={{
          url: Utng,
          scaledSize: new window.google.maps.Size(45, 45),
        }}
      />
      {selectedEmpresa === positionDh && (
        <InfoWindowF
          position={positionDh}
          onCloseClick={() => {
            setSelectedEmpresa(null);
          }}
        >
          <div>
            <h1>DOLORES HIDALGO</h1>
          </div>
        </InfoWindowF>
      )}
    </>
  );
};

export const MarcadorUtngVic = () => {
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);
  const positionVic = {
    lat: 21.21807,
    lng: -100.230657,
  };

  return (
    <>
      <MarkerF
        position={positionVic}
        onClick={() => {
          setSelectedEmpresa(positionVic);
        }}
        tracksViewChanges={false}
        icon={{
          url: UtngVic,
          scaledSize: new window.google.maps.Size(45, 45),
        }}
      />
      {selectedEmpresa === positionVic && (
        <InfoWindowF
          position={positionVic}
          onCloseClick={() => {
            setSelectedEmpresa(null);
          }}
        >
          <div>
            <h1>VICTORIA</h1>
          </div>
        </InfoWindowF>
      )}
    </>
  );
};
