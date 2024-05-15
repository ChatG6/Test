import cfg from "@/config/config";
import { notifyBox } from "@/config/types";

export default function NotifyBox({ message, setDisplay }: notifyBox) {
  setTimeout(()=>setDisplay(false),cfg.notification_dur*1000)
  return (
    <div id="box" className="notif-box">
      <div>
        <button onClick={() => setDisplay(false)}>×</button>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}
