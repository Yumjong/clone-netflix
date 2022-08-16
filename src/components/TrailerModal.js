import React from 'react';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';
import './TrailerModal.scss';

const TrailerModal = ({ show, setShow, movie }) => {
  console.log('for movie trailer', movie);
  const opts = {
    height: '660px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modalSize"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {movie?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TrailerModal;
