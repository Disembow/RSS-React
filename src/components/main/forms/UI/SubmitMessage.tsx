import React from 'react';
import { TProps } from '../../../../types/props-types';

const CreateSumbitMessage = (props: TProps) => {
  return (
    <div className="submit__popup" ref={props.reference}>
      Thx a lot for submiting. Information could be seen under the input form.
    </div>
  );
};

export default CreateSumbitMessage;
