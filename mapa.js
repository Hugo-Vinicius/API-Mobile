import React from 'react';
import MarkerIcon from '../MarkerIcon';	
import {Marker} from 'react-native-maps';	

export default function MarkerImpl({
  onPress,	
  mark,		
}) {
  return (
    <Marker
      onPress={onPress}
      tracksViewChanges={false}
      key={mark._id}
      coordinate={{	
        latitude: mark.latitude,
        longitude: mark.longitude
      }}
      title={`Marker_${mark.title}`}	
    >
      <MarkerIcon emoji={foodIcons[3].data} />	//personalizando o ícone no centro do marcador

    </Marker>
  );
}
