import { useState } from 'react';
import RadixCounter from "../components/RadixCounter";
import Value from "../components/Value";
import Adder from "../components/Adder";
import Timer from "../components/Timer";
import Temperature from "../components/Temperature";

const Components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div style={{ backgroundImage: "url('./image/tower.gif')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 0", }}>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: "20px", padding: "30px 50px", color: "white", textAlign: "center", width: "80%", maxWidth: "800px", backdropFilter: "blur(5px)", boxShadow: "0 0 15px rgba(0,0,0,0.4)", }}>

          <h2 className="mb-4 text-light fw-bold">COMPONENT PAGE</h2>
          {/* ส่วนเนื้อหา */}
          <Value name={'COUNTER'} value={counter} setValue={setCounter} />
          <Adder />
          <Timer />
          <Temperature />

          <p className="fw-bold mt-4 fs-4 text-light">
            67172347 นายรัฐภูมิ ลื้มเลิศ
          </p>
        </div>
      </div>
    </>
  );
};

export default Components;
