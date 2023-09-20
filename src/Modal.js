import React from "react";
import ReactDOM from "react-dom";
const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
};
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};
const Modal = ({ open, onClose, children }) => {
  // onCose를 누르면 이게 호출돼 실행 () => setIsModalOpen(false)
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        {children}
        <button onClick={onClose}>모달닫기</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};
// 포탈은
// 부모컴포넌트 돔계층구조 바깥에 있는 돔 노드로
// 자식을 렌더링하는 최고의 방법

// 포탈없이 모달생성 후 문제점

// portal 의 특징중 하나는 이벤트버블링이 가능하다
// () =>
// 돔트리에서의 부모가 아니더라도, 리액트 트리에서의 상위 부모컴포넌트에게 이벤트 버블링 가능하다.

export default Modal;
