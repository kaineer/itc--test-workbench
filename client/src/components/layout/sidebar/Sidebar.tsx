import { useState } from 'react';
import classes from './Sidebar.module.css'
import clsx from 'clsx';
import { Buttons } from './buttons/Buttons';

interface Props {
  stable?: boolean;
}

const StableSidebar = () => {
  return (
    <div className={clsx(classes.sidebar, classes.revealed)}>
      <Buttons />
    </div>
  )
}

const SmartSidebar = () => {
  const [ reveal, setReveal ] = useState<boolean>();

  const revealSidebar = () => setReveal(true);
  const hideSidebar = () => setReveal(false);

  return (
    <div
      className={clsx(classes.sidebar, {[classes.revealed]: reveal})}
      onMouseEnter={ revealSidebar }
      onMouseLeave={ hideSidebar }
    >
      { reveal && <Buttons /> }
    </div>
  );
}

export const Sidebar = ({ stable = false }: Props) => {
  return stable ? <StableSidebar /> : <SmartSidebar />;
}
