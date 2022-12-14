import './Message.scss';

const Message = () => {
  return (
    <div className='message-body'>
      <div className='main'>
        <h2 className='title'>Stay Home Stay Safe</h2>
        <div className='home'>
          <div className='tree'>
            <div className='treeMain'>
              <div className='branch'></div>
              <div className='branch'></div>
            </div>
            <div className='trunk'></div>
          </div>
          <div className='homeBody'>
            <div className='wall'></div>
            <div className='chimney'></div>
            <div className='terrace'> </div>
            <div className='door'></div>
            <div className='window'></div>
          </div>
          <div className='ground'></div>
          <div className='covid'> </div>
          <div className='covid1'></div>
          <div className='covid2'> </div>
          <div className='covid3'></div>
        </div>
      </div>
    </div>
  );
};

export default Message;
