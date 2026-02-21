import { useEffect, useState } from "react";
import { sharedMessageService } from "../components/services/sharedMessageService";

export function useSharedMessage() {
  const [sharedMessage, setSharedMessageState] = useState<string>(() =>
    sharedMessageService.get()
  );

  useEffect(() => {
    const unsubscribe = sharedMessageService.subscribe(() => {
      setSharedMessageState(sharedMessageService.get());
    });

    return unsubscribe;
  }, []);

  function setSharedMessage(msg: string) {
    sharedMessageService.update(msg);
    // re-render happens through subscription
  }

  return { sharedMessage, setSharedMessage };
}