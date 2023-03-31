import React, { useRef } from 'react';

const CreateSumbitMessage = () => {
  const ref = useRef(null);

  const clickHandler = function () {
    const div = ref.current! as HTMLElement;
    div.remove();
  };

  return (
    <div className="overlay" ref={ref} onClick={clickHandler}>
      <div className="submit__popup">
        Thx a lot for submiting. You could see the card under the input form.
      </div>
    </div>
  );
};

export default CreateSumbitMessage;
