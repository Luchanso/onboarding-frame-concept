import React, { Fragment, useLayoutEffect, useRef, useState } from "react";
import Popup from "arui-feather/popup";
import "./styles.css";

export default function App() {
  const divRef = useRef();
  const popupRef = useRef();
  const [style, setStyle] = useState({});

  useLayoutEffect(() => {
    popupRef.current.setTarget(divRef.current);
    const size = divRef.current.getBoundingClientRect();
    const padding = 16;

    console.log(size);
    setStyle({
      top: size.y - padding,
      left: size.x - padding,
      width: size.width + padding * 2,
      height: size.height + padding * 2
    });
  }, []);

  return (
    <Fragment>
      <div className="onBoardingFrame" style={style} />
      <div className="container">
        <div className="App">
          <button>Hello world</button>
          <br />
          <br />
          {/* Пример с текстовым блоком */}
          <div>
            Good <span ref={divRef}>text</span>
          </div>

          <br />
          <br />
        </div>
        <Popup ref={popupRef} visible={false} directions={["bottom-center"]}>
          Hello world
        </Popup>
      </div>
    </Fragment>
  );
}
