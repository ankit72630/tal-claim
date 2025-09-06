// src/hooks/useAlertsSocket.js
import { useEffect, useState } from 'react';

export default function useAlertsSocket() {
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    const sock = new WebSocket("ws://localhost:8000/ws/alerts");
    sock.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      setAlerts(a => [...a, msg]);
    };
    return () => sock.close();
  }, []);
  return alerts;
}
