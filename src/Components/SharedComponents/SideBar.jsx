import LieuCard from "./LieuCard";
import RegionCard from "./RegionCard";
import AddrespoLieu from "../Respo/AddRespoLieu";
import AddrespoRegion from "../Respo/AddRespoRegion";
import PrivateRegion from "./PrivateRegion";
export default function SideBar(props) {
  return (
    <div
      className={`bg-white h-[630px] left-0 pl-5 py-2 ${
        props.isOpen ? `w-[500px]` : `w-0`
      } transition-width ease-out duration-500 `}
    >
      <>
        {props.isOpen ? (
          <>
            {(() => {
              switch (props.WhatToToggle) {
                case "Region":
                  return <RegionCard code={props.code} />;
                case "Lieu":
                  return <LieuCard />;
                case "AddRespLieu":
                  return <AddrespoLieu />;
                case "AddRespRegion":
                  return <AddrespoRegion />;
                case "PrivateRegion":
                  return <PrivateRegion />;
                default:
                  return null;
              }
            })()}
          </>
        ) : (
          <> </>
        )}
      </>
    </div>
  );
}
