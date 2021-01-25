import React from "react";
import { mount } from "auth/AuthApp";
import {useHistory, useLocation} from "react-router-dom";

export default function AuthApp({ onSignIn }) {
    const ref = React.useRef(null);
    const history = useHistory();
    const location = useLocation();

    React.useEffect(() => {
        const { navigate } = mount(ref.current, {
            onNavigate: path => {
                if(`${location.pathname}${location.search ?? ""}` !== path) {
                    history.push(path);
                }
            },
            onSignIn,
            initialPath: `${location.pathname}${location.search}`
        });

        history.listen(location => {
            navigate(`${location.pathname}${location.search ?? ""}`);
        })
    }, []);

    return <div ref={ref} />;
}
