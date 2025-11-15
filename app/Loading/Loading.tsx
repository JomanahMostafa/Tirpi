"use client";

import React from "react";
import { TbAirBalloon } from "react-icons/tb";

const Loading = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-white flex items-center justify-center z-9999 overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-red-50 via-white to-green-50"></div>

      {/* Animated background blobs */}
      <div
        className="absolute top-20 left-10 w-96 h-96 bg-red-200/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "1s" }}
      ></div>

      {/* Main loading container */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-10">
        {/* Animated balloon container */}
        <div className="relative w-48 h-48">
          {/* Main bouncing balloon */}
          <style>{`
            @keyframes floatBounce {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-30px); }
            }
            @keyframes rotateOrbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .float-bounce { animation: floatBounce 2s ease-in-out infinite; }
            .rotate-orbit { animation: rotateOrbit 8s linear infinite; }
          `}</style>

          {/* Orbiting elements */}
          <div className="absolute inset-0 rotate-orbit">
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <TbAirBalloon className="w-8 h-8 text-green-600 opacity-70 filter drop-shadow-lg" />
            </div>
            <div className="absolute bottom-0 right-0">
              <TbAirBalloon className="w-8 h-8 text-red-500 opacity-50 filter drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <TbAirBalloon className="w-6 h-6 text-red-400 opacity-60" />
            </div>
          </div>

          {/* Central main balloon - floating */}
          <div className="absolute inset-0 flex items-center justify-center float-bounce">
            <TbAirBalloon
              className="w-24 h-24 text-red-600 filter drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 10px 20px rgba(220, 38, 38, 0.3))",
              }}
            />
          </div>

          {/* Pulse rings */}
          <div
            className="absolute inset-1/3 rounded-full border-2 border-red-400/40 animate-pulse"
            style={{ animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute inset-1/4 rounded-full border border-green-500/30 animate-pulse"
            style={{ animationDuration: "3s", animationDelay: "0.3s" }}
          ></div>
        </div>

        {/* Text content */}
        <div className="text-center space-y-3 relative z-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
            Preparing Your Journey
          </h1>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Loading amazing travel experiences
          </p>
        </div>

        {/* Advanced progress indicator */}
        <div className="flex items-center justify-center gap-2 relative z-20">
          <div
            className="w-2.5 h-2.5 bg-red-600 rounded-full animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "1.2s" }}
          ></div>
          <div
            className="w-2.5 h-2.5 bg-green-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.15s", animationDuration: "1.2s" }}
          ></div>
          <div
            className="w-2.5 h-2.5 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s", animationDuration: "1.2s" }}
          ></div>
        </div>

        {/* Decorative bottom line */}
        <div className="w-40 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-60 relative z-20"></div>
      </div>
    </div>
  );
};

export default Loading;
