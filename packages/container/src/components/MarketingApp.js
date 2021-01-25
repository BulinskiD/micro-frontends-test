import React from "react";
import { mount } from "marketing/MarketingApp";
import {useHistory, useLocation} from "react-router-dom";

export default function MarketingApp() {
  const ref = React.useRef(null);
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    const { navigate } = mount(ref.current, {
      onNavigate: path => {
        if(`${location.pathname}${location.search ?? ""}` !== path) {
          history.push(path);
        }
      }
    });

    history.listen(location => {
      navigate(`${location.pathname}${location.search ?? ""}`);
    })
  }, []);

  return <div ref={ref} />;
}
