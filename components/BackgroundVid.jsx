import React from "react";
import { Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Background.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function BackgroundVid() {
  return (
    <>
      <Container>
        <header>
          <div className="overlay"></div>
          <video
            className="video"
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source src="./w01_z07.mov" type="video/mp4"></source>
          </video>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">
                  <strong>Open-IVF</strong>
                </h1>
                <p className="lead mb-0">Watch your embyro grow</p>
              </div>
            </div>
          </div>
        </header>

        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <p>
                  At Open IVF we work with IVF clinics to make assisted
                  reproduction more transparent and easy the patient journey
                </p>
                <p>
                  When deciding to use assisted reprodution there can be a
                  period of anxiety and stress during the days between egg
                  pickup and fertilisation to embryo transfer.
                </p>
                <p>
                  We have created a service where you can feel closer to your
                  embryo and watch it grow. Recent studies have shown that
                  couples that watch thier embryos develop have a higher chance
                  of achieving pregnancy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <style jsx>{`
        header {
          position: relative;
          background-color: black;
          height: 75vh;
          min-height: 25rem;
          width: 100%;
          overflow: hidden;
        }

        header video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          z-index: 0;
          -ms-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
        }

        header .container {
          position: relative;
          z-index: 2;
        }

        header .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: black;
          opacity: 0.5;
          z-index: 1;
        }

        @media (pointer: coarse) and (hover: none) {
          header {
            background: url("https://source.unsplash.com/XT5OInaElMw/1600x900")
              black no-repeat center center scroll;
          }
          header video {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export { BackgroundVid };
