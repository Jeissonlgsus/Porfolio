import { useState } from 'react';
import { ReactNode } from "react";
import './Burger.css';
import icon from '../../../assets/header/List.png'

interface BurgerProps {
  primary?: boolean;
  secondary?:boolean;
  tertiary?:boolean;
  children: ReactNode;
}

export const Burger = ({
  primary = false,
  secondary = false,
  tertiary = false,
  children,
}: BurgerProps) => {
  let mode = undefined;
  let button = 'storybook-burger--closeBtn'
  let off = 'storybook-burger--off'

  const [ menu , setMenu] = useState(false)
  const menuValue = () =>{
    setMenu(!menu)
}

  if (primary){
    mode = 'storybook-burger--primary'
  } else if (secondary){
    mode = 'storybook-burger--secondary'
  } else if (tertiary){
    mode = 'storybook-burger--tertiary'
  }
  
  return (
    <div>
      <button className={menu ? off : button} onClick={menuValue}>
        <img className='storybook-burger--img' src={icon} alt='list'/>
      </button>
      <div className={menu ? mode : off}>
      <button className={button} onClick={menuValue}>
        <img className='storybook-burger--img' src={icon} alt='list'/>
      </button>
      {children}
      </div>
    </div>
  );
};
