import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalWrapperStyle = {
    position: "relative",
    zIndex: 1,
  };
  const higherIndexWrapperStyle = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "blue",
    padding: "10px",
  };
  return (
    <div>
      <div style={modalWrapperStyle}>
        <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          모달내용
        </Modal>
      </div>
      <div style={higherIndexWrapperStyle}>Z-index 2</div>
    </div>
  );
}

export default App;
