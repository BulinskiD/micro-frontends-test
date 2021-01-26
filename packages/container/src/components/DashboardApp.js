import React from "react";
import { mount } from "dashboard/DashboardApp";

export default function DashboardApp() {
    const ref = React.useRef(null);
    React.useEffect(() => {
        mount(ref.current)
    }, []);

    return <div ref={ref} />;
}
