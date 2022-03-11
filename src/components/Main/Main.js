import React, { useState } from 'react';
import Bottom from '../Bottom/Bottom';
import Head from '../Head/Head';
import Middle from '../Middle/Middle';
import Preview from '../../components/Preview/Preview';
import './Main.css';


export default function Main() {
  const [head, setHead] = useState('head');
  const [middle, setMiddle] = useState('middle');
  const [bottom, setBottom] = useState('bottom');
  return (
    <main>
      <div>
        <Head
          setHead={setHead}/>
        <Middle
          setMiddle={setMiddle}/>
        <Bottom
          setBottom={setBottom}/>
         
        <Preview 
          head={head}
          middle={middle}
          bottom={bottom}/>
          
            

      </div>
    </main>
  );
}


