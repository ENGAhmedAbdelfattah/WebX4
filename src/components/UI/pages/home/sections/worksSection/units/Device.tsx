"use client";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
type props = {
  liveSrc: string;
};
function Device({ liveSrc }: props) {
  return (
    <>
      <DeviceFrameset device="MacBook Pro">
        <div className="iframe-box">
          <iframe
            loading="lazy"
            className="iframe-device"
            width="100%"
            height="600px"
            title="Breezy Windows logo"
            src={liveSrc}
          />
        </div>
      </DeviceFrameset>
      <DeviceFrameset device="iPhone X" landscape={false}>
        <div className="iframe-box">
          <iframe
            loading="lazy"
            className="iframe-device"
            width="100%"
            height="900px"
            title="Breezy Windows logo"
            src={liveSrc}
          />
        </div>
      </DeviceFrameset>
    </>
  );
}

export default Device;

// width: 183px;
// height: 30px;
// top: 26px;
// left: 50%;
// transform: translateX(-50%);
// style= {{ position: "relative", left: "-11px", width:"calc(100% + 10px)"}}

// width={250} height={500}
// height={700}
// width={300} height = {500}
// height: 563px;


