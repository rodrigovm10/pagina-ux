import React, { useState } from "react";
import { InfoWindowF, MarkerF } from "@react-google-maps/api";

import Utng from "../../assets/CampusDh.png";
import UtngVic from "../../assets/CampusVic.png";
import { Flex, Link } from "@chakra-ui/react";

export const MarcadorUtngDh = () => {
  const [isVisible, setIsVisible] = useState(false);
  const positionDh = {
    lat: 21.1654971,
    lng: -100.9263531,
  };

  return (
    <>
      <MarkerF
        position={positionDh}
        onClick={() => setIsVisible(true)}
        tracksViewChanges={false}
        icon={{
          url: Utng,
          scaledSize: new window.google.maps.Size(45, 45),
        }}
      />
      {isVisible && (
        <InfoWindowF
          position={positionDh} 
          onCloseClick={() => setIsVisible(false)} 
        >
          <div>
            <h6>DOLORES HIDALGO</h6>
            <div>Av. Educacion Tecnologica No.34, Fracc. Universidad, Dolores Hidalgo Cuna de la Independencia Nacional, Guanajuato.C.P. 37800</div>
            <div>Tel. (418) 182 5500</div>
            <Link href='https://maps.google.com/maps?ll=21.170584,-100.935408&z=14&t=m&hl=es-ES&gl=US&mapclient=embed&cid=14923944837352888638' isExternal>
                <Flex align='center'>
                Ampliar el mapa
                </Flex>
            </Link>
          </div>
        </InfoWindowF>
      )}
    </>
  );
};

export const MarcadorUtngVic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const positionVic = {
    lat: 21.21807,
    lng: -100.230657,
  };

  return (
    <>
      <MarkerF
        position={positionVic}
        onClick={() => setIsVisible(true)} 
        tracksViewChanges={false}
        icon={{
          url: UtngVic,
          scaledSize: new window.google.maps.Size(45, 45),
        }}
      />
      {isVisible && (
        <InfoWindowF
          position={positionVic} 
          onCloseClick={() => setIsVisible(false)}
        >
          <div>
            <h6>VICTORIA</h6>
            <div>Carretera Victoria- San Luis de la Paz km. 1, Col. Del Paso Hondo Victoria, Guanajuato, C.P. 37920</div>
            <div> Tel.(419) 293 9098, (419) 293 9023</div>
            <Link href='https://maps.google.com/maps?ll=21.21807,-100.230657&z=14&t=m&hl=es-ES&gl=US&mapclient=embed&cid=10891143913900151125' isExternal align='center'>
                  <Flex align='center'>
                    Ampliar el mapa
                  </Flex>
                </Link>
          </div>
        </InfoWindowF>
      )}
    </>
  );
};
