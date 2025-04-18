import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map-esri',
  standalone: true,
  templateUrl: './map-esri.component.html',
  styleUrls: ['./map-esri.component.css'],
})
export class MapEsriComponent implements AfterViewInit {
  isBrowser = false;

  constructor() {
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.loadMap();
    }
  }
  loadMap(): void {
    if (typeof window === 'undefined') {
      // Siamo lato server -> blocca
      return;
    }

    loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic'])
      .then(([Map, MapView, Graphic]) => {
        const map = new Map({
          basemap: 'streets-navigation-vector',
        });

        const view = new MapView({
          container: 'viewDiv',
          map: map,
          center: [12.4964, 41.9028], // Roma
          zoom: 6,
        });

        const point = {
          type: 'point',
          longitude: 9.19,
          latitude: 45.4642,
        };

        const markerSymbol = {
          type: 'simple-marker',
          color: 'red',
          outline: {
            color: 'white',
            width: 1,
          },
        };

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
        });

        view.graphics.add(pointGraphic);
      })
      .catch((err) => {
        console.error('Esri loader error:', err);
      });
  }
}