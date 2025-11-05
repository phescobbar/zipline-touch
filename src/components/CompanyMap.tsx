import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

interface CompanyMapProps {
  className?: string;
}

const CompanyMap = ({ className = "" }: CompanyMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Coordinates for Rua do Acampamento nº 380, Centro - Santa Maria - RS
  const companyLocation: [number, number] = [-53.8069, -29.6842];

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: companyLocation,
        zoom: 15,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Create custom marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'custom-marker';
      markerEl.innerHTML = `
        <div style="
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8));
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="transform: rotate(45deg)"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      `;

      // Add marker to map
      new mapboxgl.Marker({ element: markerEl })
        .setLngLat(companyLocation)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="padding: 8px;">
              <strong style="font-size: 14px; color: hsl(var(--foreground));">Zipline Tecnologia</strong>
              <p style="font-size: 12px; color: hsl(var(--muted-foreground)); margin-top: 4px; margin-bottom: 0;">
                Rua do Acampamento nº 380<br/>
                Centro - Santa Maria - RS
              </p>
            </div>`
          )
        )
        .addTo(map.current);

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (showTokenInput && !mapboxToken) {
    return (
      <div className={`bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 ${className}`}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Configurar Mapa
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Para visualizar o mapa, insira seu token público do Mapbox.
              <br />
              Obtenha gratuitamente em{' '}
              <a
                href="https://account.mapbox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
          <div className="w-full max-w-md space-y-3">
            <input
              type="text"
              placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOi..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={() => mapboxToken && setShowTokenInput(false)}
              disabled={!mapboxToken}
              className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Carregar Mapa
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapContainer}
        className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-2xl" />
    </div>
  );
};

export default CompanyMap;
