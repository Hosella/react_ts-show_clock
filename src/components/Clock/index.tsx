import { FC, useEffect, useRef, useState } from "react";

type Props = {
  name: number;
  setName: React.Dispatch<React.SetStateAction<number>>;
}

export const Clock: FC<Props> = ({ name, setName }) => {
  const [time, setTime] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(new Date().toLocaleTimeString());
    }, 1000)

    const nameId = window.setInterval(() => {
      setName(Math.round(Math.random() * 500));
    }, 3000);

    return () => {
      window.clearInterval(timerId);
      window.clearInterval(nameId);
    }
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.log('Clock name update')
  }, [name])

  return (
    <div>
      {`Clock name: ${name}`}
      <br />
      {time}
    </div>
  )
}