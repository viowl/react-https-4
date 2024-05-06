import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  console.log("isOpen:", isOpen);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt="Large Image" />
    </Modal>
  );
};

export default ImageModal;
