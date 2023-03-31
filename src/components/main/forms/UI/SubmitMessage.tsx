import React from 'react';

const CreateSumbitMessage = ({ callback }: { callback: () => void }) => {
  return (
    <div className="overlay" onClick={callback}>
      <div className="submit__popup">
        Thx a lot for submiting. You will see the card under the input form.
      </div>
    </div>
  );
};

export default CreateSumbitMessage;
