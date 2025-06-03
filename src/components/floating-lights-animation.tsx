"use client"

import { useEffect } from "react"
import Link from "next/link"

export function FloatingLightsAnimation() {
  useEffect(() => {
    // This effect runs only on client-side
    const headers = document.querySelectorAll(".header")
    headers.forEach((header, index) => {
      setTimeout(() => {
        header.classList.add("visible")
      }, index * 6000) // Stagger the animations
    })
  }, [])

  return (
    <div className="animation-container">
      {/* Animated text headers */}
      <p id="head1" className="header">
        Accelerating Personalized Medicine Research
      </p>
      <p id="head2" className="header">
        Decentralized
      </p>
      <p id="head3" className="header">
        Transparent
      </p>
      <p id="head4" className="header">
        Funding research for life-altering diseases
      </p>
      <p id="head5" className="header">
        Welcome to Poscidon
      </p>

      <div className="button-wrapper">
        <Link href="/apply-for-funding" className="animation-button z-20">
            Apply for Funding
        </Link>
      </div>

      {/* Floating light particles */}
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>

      <style jsx>{`
        .animation-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: radial-gradient(#010737, #020a4f);
          animation: fadeIn 1s ease-out;
        }

        .button-wrapper {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          pointer-events: auto;
        }

        .animation-button {
          display: inline-block;
          border: 2px solid white;
          background: transparent;
          color: white;
          width: 300px;
          height: 60px;
          font-size: 1.3em;
          border-radius: 5px;
          opacity: .5;
          transition: .3s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          white-space: nowrap;
          cursor: pointer;
          pointer-events: auto;
          text-decoration: none;
        }

        .animation-button:hover {
          border: 2px solid #ffffff;
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          color: #ffffff;
          opacity: .8;
          transition: .3s;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .light {
          position: absolute;
          width: 0px;
          opacity: .75;
          background-color: white;
          box-shadow: #e9f1f1 0px 0px 20px 2px;
          opacity: 0;
          top: 100vh;
          bottom: 0px;
          left: 0px;
          right: 0px;
          margin: auto;
          pointer-events: none;
        }

        .x1 {
          animation: floatUp 4s infinite linear;
          transform: scale(1.0);
        }

        .x2 {
          animation: floatUp 7s infinite linear;
          transform: scale(1.6);
          left: 15%;
        }

        .x3 {
          animation: floatUp 2.5s infinite linear;
          transform: scale(.5);
          left: -15%;
        }

        .x4 {
          animation: floatUp 4.5s infinite linear;
          transform: scale(1.2);
          left: -34%;
        }

        .x5 {
          animation: floatUp 8s infinite linear;
          transform: scale(2.2);
          left: -57%;
        }

        .x6 {
          animation: floatUp 3s infinite linear;
          transform: scale(.8);
          left: -81%;
        }

        .x7 {
          animation: floatUp 5.3s infinite linear;
          transform: scale(3.2);
          left: 37%;
        }

        .x8 {
          animation: floatUp 4.7s infinite linear;
          transform: scale(1.7);
          left: 62%;
        }

        .x9 {
          animation: floatUp 4.1s infinite linear;
          transform: scale(0.9);
          left: 85%;
        }

        @keyframes floatUp {
          0% {
            top: 100vh;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            top: 0vh;
            opacity: .8;
          }
          75% {
            opacity: 1;
          }
          100% {
            top: -100vh;
            opacity: 0;
          }
        }

        .header {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: 200;
          color: white;
          font-size: 2em;
          width: 100%;
          text-align: center;
          opacity: 0;
          pointer-events: none;
        }

        #head1 {
          animation: fadeOut 5s ease-in;
        }

        #head2 {
          animation: fadeOut 5s ease-in;
          animation-delay: 6s;
        }

        #head3 {
          animation: fadeOut 5s ease-in;
          animation-delay: 12s;
        }

        #head4 {
          animation: fadeOut 5s ease-in;
          animation-delay: 17s;
        }

        #head5 {
          animation: finalFade 5s ease-in;
          animation-fill-mode: forwards;
          animation-delay: 22s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          80% {
            opacity: .9;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes finalFade {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          80% {
            opacity: .9;
          }
          100% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .header {
            font-size: 1.5em;
            width: 90%;
          }
          
          .animation-button {
            width: 250px;
            font-size: 1.1em;
            height: 50px;
          }
        }
      `}</style>
    </div>
  )
}
