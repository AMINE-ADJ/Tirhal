import React from "react";

export default function PrivateRegion() {
  return (
    <div className="bg-white h-[600px] rounded-2xl text-base text-center font-bold font-poppins shadow-2xl flex flex-col items-center justify-center gap-3">
      Vous n'avez pas d'accés à cette région car elle est privée !!
    </div>
  );
}
