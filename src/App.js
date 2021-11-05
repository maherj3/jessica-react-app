import logo from './logo.svg';
import './App.css';
import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


export const label = (name) => {
    return `Hello ${name.toUpperCase()}`;
}

const App: React.FC = () => {

    return (
        <div className="App">
            <header className="App-header">
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
                {/*<h1>{label( 'react')}</h1>*/}
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<p>*/}
                {/*    Edit <code>src/App.js</code> and save to reload!*/}
                {/*</p>*/}
                {/*<p>Nice TDD</p>*/}
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
            </header>
            <MapContainer center={[52.37897, -1.23623067]} zoom={7} scrollWheelZoom={true} className="leaflet-container">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[52.37897, -1.23623067]}>
                    <Popup>
                        Datagraphic. <br /> Rugby Office.
                    </Popup>
                </Marker>
                <Marker position={[53.260262140717195, -1.3501924765608961]}>
                    <Popup>
                        Datagraphic. <br /> Chesterfield Office.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default App;
