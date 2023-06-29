import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { useState } from "react";
import { NotificationBannerContext } from "./Components/NotificationBanner/NotificationContext";
import "./App.css";
import NotificationBanner from "./Components/NotificationBanner";

const App = () => {
    const [notify, setNotify] = useState(null);

    const setNotifyMessage = (message, type, time) => {
        setNotify({ message, type });
        setTimeout(() => {
            setNotify(null);
        }, time);
    };
    return (
        <>
            <NotificationBannerContext.Provider value={{ notify, setNotifyMessage: setNotifyMessage }}>
                <>
                    <Router>
                        <NotificationBanner />
                        <Nav />
                        <Route exact path="/" component={Home} />
                    </Router>
                </>
            </NotificationBannerContext.Provider>
        </>
    );
};

export default App;
