import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import * as L from 'leaflet';

const mapUrl =
  'https://dev.chronicle.rip/api/v1/ms/plots-in-viewport?bounds=115.19192682579163,-8.635945622432802,115.19218364730479,-8.635783199701216';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  private readonly southWest = L.latLng(-8.635945622432802, 115.19192682579163);
  private readonly northEast = L.latLng(-8.635783199701216, 115.19218364730479);
  private readonly bounds = L.latLngBounds(this.southWest, this.northEast);
  private map: L.Map | null = null;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  public setMapToBounds() {
    if (!this.map) return;

    this.map.fitBounds(this.bounds);
  }

  public recenterMap() {
    this.setMapToBounds();
  }

  private async initMap() {
    this.map = L.map('map');
    this.setMapToBounds();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 25,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    this.setMapData();
  }

  private async fetchMapData() {
    try {
      const res = await fetch(mapUrl);
      const resJson = await res.json();

      return resJson;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  private async setMapData() {
    if (!this.map) return;

    const features: GeoJSON.GeoJsonObject = await this.fetchMapData();

    if (!features) return;

    L.geoJson(features, {
      style: {
        color: '#088',
        opacity: 0.8,
        fillColor: '#088',
        fillOpacity: 0.8,
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup(
          `<div style="display:flex;flex-direction:column">
            <text>
              ID: ${feature.properties.plot_id}
            </text>
            <text>
              Name: ${feature.properties.cemetery_name}
            </text>
            <text>
              Status: ${feature.properties.status}
            </text>
          </div>`,
          { className: 'custom-popup' }
        );
        layer.on('mouseover', () => layer.openPopup());
      },
    }).addTo(this.map);
  }
}
