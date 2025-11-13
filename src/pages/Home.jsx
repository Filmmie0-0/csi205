const Home = () => {
  return (
    <>
      <div className="text-center d-flex flex-column align-items-center justify-content-center"style={{marginTop: "5px",height: "480px", backgroundImage: "url('./image/tower.gif')", backgroundSize: "cover",backgroundPosition: "center", }}>
        <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: "15px",padding: "20px 40px",color: "white", maxWidth: "600px",textAlign: "center",backdropFilter: "blur(5px)",}}>
          <img width={200}height={200}src="./public/images/wolfalone.png"alt="Student"className="rounded-circle mb-3 shadow"style={{ objectFit: "cover" }}/>
          <h5 className="text-light mt-2">นายรัฐภูมิ ลื้มเลิศ</h5>
          <h5 className="text-light">รหัสนักศึกษา: 67172347</h5>
          <h5 className="text-light">ชั้นปีที่ 2 สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</h5>
          <h5 className="text-light">คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม</h5> 
          <h5 className="text-light"> ชอบกินก๋วยเตี๋ยว และชอบเล่นเกม FPS มาก ชอบการพักผ่อน</h5>
        </div>
      </div>
    </>
  );
};

export default Home;
