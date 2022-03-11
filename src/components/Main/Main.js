import React, {useSate}  from 'react';
import Head from '../Head/Head';
import './Main.css';


export default function Main() {
    const [head, setHead] = useState('head');
    const [middle, setMiddle] = useState('middle');
    const [bottom, setBottom] = useState('bottom');
  return (
    <main>
        <div>
          <Head
          head={head}

        </div>
        </main>
  )
}


