import React from 'react';

type TPopup = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
};

const Popup = ({ setActive, children }: TPopup) => {
  return (
    <div className="overlay" onClick={() => setActive(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
