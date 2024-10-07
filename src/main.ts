import { customElement } from 'solid-element';
import { MapGl } from './components/MapGlHurdal.jsx';

declare global {
    const __APP_VERSION__: string;
}

customElement("my-map-gl", {
    scenebgurl: ""
}, MapGl);


