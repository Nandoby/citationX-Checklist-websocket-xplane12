import { useEffect, useRef, useState } from 'react';

export const useXPlane = (datarefNames: string[]) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const ws = useRef<WebSocket | null>(null);
  const isInitialized = useRef(false);
  
  // Utilisation d'un Ref pour stocker la correspondance ID <-> Nom
  const idToNameRef = useRef<Record<number, string>>({});

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const startXPlaneSession = async () => {
      try {
        // 1. OBTENIR LES IDS (HTTP)
        const nameFilters = datarefNames.map(n => `filter[name]=${n}`).join('&');
        const response = await fetch(`http://localhost:8086/api/v2/datarefs?${nameFilters}`);
        const result = await response.json();
        
        // On remplit notre dictionnaire de correspondance
        const subscriptions = result.data.map((dr: any) => {
          idToNameRef.current[dr.id] = dr.name;
          return { id: dr.id, interval_ms: 200 };
        });

        // 2. OUVRIR LA WEBSOCKET
        ws.current = new WebSocket('ws://localhost:8086/api/v2');

        ws.current.onopen = () => {
          console.log("✅ WebSocket connecté");
          setTimeout(() => {
            if (ws.current?.readyState === WebSocket.OPEN) {
              const message = {
                req_id: 100,
                type: "dataref_subscribe_values", // Nom exact selon tes tests
                params: { datarefs: subscriptions }
              };
              ws.current.send(JSON.stringify(message));
            }
          }, 50);
        };

        ws.current.onmessage = (event) => {
          const msg = JSON.parse(event.data);

          // Adaptation au format : {"data":{"ID": VAL},"type":"dataref_update_values"}
          if (msg.type === "dataref_update_values") {
            const updates = msg.data;
            
            setValues(prev => {
              const newValues = { ...prev };
              
              Object.keys(updates).forEach((id) => {
                const numericId = Number(id);
                const name = idToNameRef.current[numericId];
                if (name) {
                  newValues[name] = updates[id];
                }
              });
              
              return newValues;
            });
          }
        };

        ws.current.onerror = (err) => console.error("WS Error:", err);

      } catch (err) {
        console.error("Échec de l'initialisation X-Plane:", err);
      }
    };

    startXPlaneSession();

    return () => {
      if (ws.current) ws.current.close();
      isInitialized.current = false;
    };
  }, []); // [] garantit que la connexion ne se fait qu'une fois au montage

  return values;
};