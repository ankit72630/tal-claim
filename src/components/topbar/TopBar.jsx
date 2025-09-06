import { useEffect } from "react";

import { toast } from 'react-toastify';
import { BellIcon } from "lucide-react";
import useAlertsSocket from "../../hooks/useAlertsSocket";

export default function TopBar() {
  const alerts = useAlertsSocket();

  useEffect(() => {
    if (alerts.length) {
      const latest = alerts[alerts.length -1];
      toast.info(`New alert: ${latest.type} on ${latest.claimNum}`);
    }
  }, [alerts]);

  return (
    <div className="relative">
      <BellIcon className="w-6 h-6" />
      {alerts.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
          {alerts.length}
        </span>
      )}
    </div>
  );
}
