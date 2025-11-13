import React, { useEffect, useRef, useState } from "react";
import "./customanimetion.css";

const fieldWidth = 650;
const fieldHeight = 400;
const ballDiameter = 200;
const maxX = fieldWidth - ballDiameter - 2;
const maxY = fieldHeight - ballDiameter - 2;

export default function Animetion() {
  const ballRef = useRef(null);
  const fieldRef = useRef(null);
  const controlsRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [lastSelected, setLastSelected] = useState("none");
  const lastButtonRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const vxRef = useRef(5);
  const vyRef = useRef(5);
  const goRightRef = useRef(true);
  const goDownRef = useRef(true);

  
  useEffect(() => {
    if (fieldRef.current) {
      fieldRef.current.style.width = fieldWidth + "px";
      fieldRef.current.style.height = fieldHeight + "px";
    }
    if (ballRef.current) {
      ballRef.current.style.width = ballDiameter + "px";
      ballRef.current.style.height = ballDiameter + "px";
    }
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!running) return;

      if (goRightRef.current) {
        xRef.current += vxRef.current;
        if (xRef.current >= maxX) goRightRef.current = false;
      } else {
        xRef.current -= vxRef.current;
        if (xRef.current <= 0) goRightRef.current = true;
      }

      if (goDownRef.current) {
        yRef.current += vyRef.current;
        if (yRef.current >= maxY) goDownRef.current = false;
      } else {
        yRef.current -= vyRef.current;
        if (yRef.current <= 0) goDownRef.current = true;
      }

      if (ballRef.current) {
        ballRef.current.style.left = xRef.current + "px";
        ballRef.current.style.top = yRef.current + "px";
      }
    }, 15);

    return () => clearInterval(interval);
  }, [running]);

  const runButtonRef = useRef(null);
  useEffect(() => {
    const btn = runButtonRef.current;
    if (!btn) return;
    if (running) {
      btn.classList.remove("btn-success");
      btn.classList.add("btn-warning");
      btn.innerHTML = '<span class="bi bi-pause"></span>&nbsp;PAUSE';
    } else {
      btn.classList.remove("btn-warning");
      btn.classList.add("btn-success");
      btn.innerHTML = '<span class="bi bi-play"></span>&nbsp;RUN';
    }
  }, [running]);

  
  function ballClicked(btn) {
    if (!btn) return;
    const current = btn.innerText.toLowerCase();

    if (lastSelected === "none") {
      if (lastButtonRef.current) {
        lastButtonRef.current.classList.remove("btn-secondary");
        lastButtonRef.current.classList.add("btn-outline-secondary");
      }
      btn.classList.remove("btn-outline-primary");
      btn.classList.add("btn-primary");
    } else if (lastSelected !== current) {
      if (lastButtonRef.current) {
        lastButtonRef.current.classList.remove("btn-primary");
        lastButtonRef.current.classList.add("btn-outline-primary");
      }
      btn.classList.remove("btn-outline-primary");
      btn.classList.add("btn-primary");
    }

    if (ballRef.current) {
      switch (current) {
        case "basketball":
          ballRef.current.style.backgroundImage = "url('image/basketball.jpg')";
          break;
        case "football":
          ballRef.current.style.backgroundImage = "url('image/football.jpg')";
          break;
        case "volleyball": 
          ballRef.current.style.backgroundImage = "url('image/volleyball.jpg')";
          break;
        case "human":
          ballRef.current.style.backgroundImage = "url('image/human.png')";
          break;
        case "cartoon":
          ballRef.current.style.backgroundImage = "url('image/cartoon.png')";
          break;
        case "logo":
          ballRef.current.style.backgroundImage = "url('image/logo.jpg')";
          break;
        default:
      }

      ballRef.current.style.backgroundSize = "cover";
      ballRef.current.style.backgroundPosition = "center";
      ballRef.current.style.backgroundColor = "transparent";
    }

    lastButtonRef.current = btn;
    setLastSelected(current);
  }

  // ปุ่ม none
  function noneClicked(btn) {
    if (!btn) return;
    if (lastSelected !== "none" && lastButtonRef.current) {
      lastButtonRef.current.classList.remove("btn-primary");
      lastButtonRef.current.classList.add("btn-outline-primary");
    }

    btn.classList.remove("btn-outline-secondary");
    btn.classList.add("btn-secondary");

    if (ballRef.current) {
      ballRef.current.style.backgroundImage = "";
      ballRef.current.style.backgroundColor = "lightgray";
    }

    lastButtonRef.current = btn;
    setLastSelected("none");
  }

  return (
    <div className="anim-conteiner bg-light mt-2" style={{marginTop: "5px",height: "500px",backgroundImage: "url('./image/tower.gif')", backgroundSize: "cover",backgroundPosition: "center",}}>
       <h3 className="text-start">ANIMATION PAGE</h3>
      <div id="field" ref={fieldRef} className="anim-field">
        <div id="ball" ref={ballRef} className="anim-ball" />
      </div>
      <div className="anim-control d-flex justify-content-between align-items-center mt-3" ref={controlsRef}>
        <button
          ref={runButtonRef}
          id="run"
          className="btn btn-success me-4"
          onClick={() => setRunning(!running)}
        >
          <span className="bi bi-play" /> RUN
        </button>

        <div>
          <button
            id="none"
            className="btn btn-secondary me-2"
            onClick={(e) => noneClicked(e.currentTarget)}
          >
            NONE
          </button>
          {["Basketball", "Football", "Volleyball", "Human", "Cartoon", "LOGO"].map((label) => (
            <button
              key={label}
              className="btn btn-outline-light me-2"
              onClick={(e) => ballClicked(e.currentTarget)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
