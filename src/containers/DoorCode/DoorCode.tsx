import React from 'react';
import './DoorCode.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {addNumber, removeNumber, enterCode} from './doorCodeSlice';


const BUTTONS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

const DoorCode:React.FC = () => {
  const currentCodeState = useSelector((state: RootState) => state.doorCode.stars);
  const currentStringState = useSelector((state: RootState) => state.doorCode.string);
  const dispatch = useDispatch();

 return (
    <div className='door_lock'>
      <h4 className='door_lock'>{currentCodeState}</h4>
      {BUTTONS.map(code => (
        <button
          key={code}
          onClick={() => dispatch(addNumber(code))}
        >{code}
        </button>
      ))}
      <button onClick={() => dispatch(removeNumber())}>del</button>
      <button onClick={() =>dispatch(enterCode())}>E</button>
    </div>
  );
}

export default DoorCode;