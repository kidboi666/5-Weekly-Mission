import React from "react";

export default function SignFormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F0F6FF]">
      <div className="flex flex-col items-center w-full px-[32px] md:w-[400px]">
        {children}
      </div>
    </div>
  );
}
