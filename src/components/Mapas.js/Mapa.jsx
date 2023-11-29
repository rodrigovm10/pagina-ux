import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarcadorUtngDh, MarcadorUtngVic } from "./MarcadorUtng";
import { Box, Heading, Tabs } from "@chakra-ui/react";

const mapContainerStyle = {
  height: "60vh",
  width: "100%",
};

const midpointDoloresVictoria = {
  lat: 21.22535,
  lng: -100.72655,
};

const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#FF0000" }, { weight: 2 }],
  },
];
const apiKey = "AIzaSyDbeGjUNXpUDqjATFkrUjgxhuKKdKwzD-A";

export default function Mapa() {
  const mapOptions = {
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
    restriction: { latLngBounds: midpointDoloresVictoria },
    styles: mapStyles,
  };
  return (
    <>
    <Box overflow="hidden" p={8} m={4} >
      <Heading
					as='h1'
					size={{ base: 'md', lg: 'xl' }}
					textAlign='center'>
					Nuestros Campus
				</Heading>
    </Box>
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={midpointDoloresVictoria}
        zoom={10}
        options={mapOptions}
      >
        <MarcadorUtngDh />
        <MarcadorUtngVic />
      </GoogleMap>
    </LoadScript>
    </>
  );
}
