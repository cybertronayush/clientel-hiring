import { createContext } from "react";

export const NotificationBannerContext = createContext({
    Notification: "",
    setNotification: () => {},
});
