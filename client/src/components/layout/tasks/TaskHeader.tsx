import classes from "./TaskHeader.module.css";

interface Props {
  text: string;
}

export const TaskHeader = ({ text }: Props) => {
  return (
    <h2 className={ classes.header }>{ text }</h2>
  );
}
