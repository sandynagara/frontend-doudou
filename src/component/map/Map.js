import { MapContainer, TileLayer,useMap,useMapEvents,GeoJSON} from "react-leaflet";
import React,{useState,useEffect,useRef} from "react";
import "leaflet/dist/leaflet.css";
import * as WMS from "leaflet.wms";
import configApi from "../config.json"
import L from "leaflet";

function Map({
  setbangunanSelect,
  bangunanSelect,
  setOpen,
  basemap,
  opacityBasemap,
  opacityBangunan,
  opacityBatas,
  opacityFoto}) {
  
  const [map, setMap] = useState(false)
  
  const [change, setChange] = useState(true);
  const [position, setPosition] = useState(false)
  const [first, setFirst] = useState(true)
  const [geojsonSelect, setGeojsonSelect] = useState(false)
  const tileRef = useRef();

  const TileLayerHandler = () => {
    setChange(false)
    return <TileLayer url={basemap} maxZoom={22} />;
  };

  useEffect(() => {
    setChange(true)
  }, [basemap])
  

  useEffect(() => {
    if(map){
      tileRef.current
      .getContainer()
      .style.setProperty("filter", `opacity(${opacityBasemap}%)`);
    }
  }, [])

  useEffect(() => {
    if(map){
      map.target.eachLayer(function(layer) {
        if(layer._name==="doudou:bangunan"){
          layer.setOpacity(opacityBangunan*0.01)
        }else if(layer._name==="doudou:Batas_desa_doudo"){
          layer.setOpacity(opacityBatas*0.01)
        }else if(layer._name==="doudou:mosaik_doudo"){
          layer.setOpacity(opacityFoto*0.01)
        }
      });
    }
  }, [opacityBangunan,opacityBatas,opacityFoto])

  useEffect(() => {
    if(map){
      tileRef.current
      .getContainer()
      .style.setProperty("filter", `opacity(${opacityBasemap}%)`);
    }
  }, [opacityBasemap])

  useEffect(() => {
    if(bangunanSelect){
        var geojsondata = {
          "type": "FeatureCollection", 
          "features":[bangunanSelect]}
        var geojsongroup = L.geoJSON(geojsondata);
        var center = geojsongroup.getBounds().getCenter()
        setGeojsonSelect(geojsondata)
        setPosition([center["lat"],center["lng"]])
    }
  }, [bangunanSelect])
  
  var Changedview = center => {
    const map = useMap();
    map.setView(center.center);
    return null;
  }

  useEffect(() => {
      setChange(true)
  }, [basemap])
  

  var panggil = (cb, url) => {
    fetch(url,{
        method: 'GET',
        credentials: 'include'
      })
      .then((respond) => respond.json())
      .then((json) => cb(json))
      .catch((err)=>{
        console.log(err,"err")
      });
  };

  var CustomWMSLayer =  (props) => {
    var map = useMap();
      if(first){
        console.log(first)
        const { url, options, layers } = props;
        const source = WMS.source(url, options);
        var layer= source.getLayer(layers)
        layer.addTo(map);
        setFirst(false);
      }
    return null;
  }

  var getFeatureInfoUrl = (url, map, e,layer) => {
    // Construct a GetFeatureInfo request URL given a point
    var size = map.getSize(),
      params = {
        request: "GetFeatureInfo",
        service: "WMS",
        srs: "EPSG:4326",
        styles: "",
        transparent: true,
        version: "1.1.1",
        format: "application/json",
        bbox: map.getBounds().toBBoxString(),
        height: size.y,
        width: size.x,
        layers: layer,
        query_layers: layer,
        info_format: "application/json",
        X: Math.round(e.containerPoint.x),
        Y: Math.round(e.containerPoint.y),
      };

    return url + L.Util.getParamString(params, url, true);
  };

  var GetFeatureInfoUrlHandle = () =>{
    var map = useMap();
    map = useMapEvents({
      click(e) { 
        var url = getFeatureInfoUrl(
          configApi.SERVER_GEOSERVER+"geoserver/doudou/wms?",map,e,"bangunan"
        );
        panggil((result) => {
            console.log(result)
            if(result["features"].length > 0){
              setOpen("Bangunan")
              setbangunanSelect(result["features"][0])
              setGeojsonSelect(result)
            }else{
              setGeojsonSelect(false)
              setPosition(false)
            }
           
        }, url);
      },
    });
    return null
  }

  var SelectedLayerHandler = () =>{
    return <GeoJSON data={geojsonSelect} style={{color:"yellow"}} />
  }

  return (
    <div className="w-screen h-screen z-0">
      <MapContainer
        center={[-6.956534, 112.505224]}
        zoom={17}
        className="h-screen w-screen"
        zoomControl={false}
        whenReady={(e)=>setMap(e)}
      >
        {change ? <TileLayerHandler /> : <TileLayer ref={tileRef} url={basemap} style={{opacity:"0.5"}} maxZoom={22} />}
        <CustomWMSLayer
          url={configApi.SERVER_GEOSERVER+"geoserver/doudou/wms"}
          layers={"doudou:mosaik_doudo"}
          options={{
            format: "image/png",
            transparent: "true",
            tiled: "true",
            info_format: "application/json",
            identify: false,
            maxZoom: 22,
          }}
        />
        <CustomWMSLayer
            url={configApi.SERVER_GEOSERVER+"geoserver/doudou/wms"}
            layers={"doudou:Batas_desa_doudo"}
            options={{
                format: "image/png",
                transparent: "true",
                tiled: "true",
                info_format: "application/json",
                identify: false,
                maxZoom: 22,
            }}
        />
        <CustomWMSLayer
          url={configApi.SERVER_GEOSERVER+"geoserver/doudou/wms"}
          layers={"doudou:bangunan"}
          options={{
            format: "image/png",
            transparent: "true",
            tiled: "true",
            identify: false,
            maxZoom: 22,
            opacity:0.8
          }}
        />
        
        {position && <Changedview center={position}/> }
        {geojsonSelect && <SelectedLayerHandler/>}
        <GetFeatureInfoUrlHandle/>
      </MapContainer>
    </div>
  )
}

export default Map