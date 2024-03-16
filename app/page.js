// "use client"
// import { useState,useEffect } from "react";
import Image from "next/image";
export default function Home() {
  
  // const [count, setcount] = useState(0)
  return (
    // <div>
    //   I am a component {count}
    //   <button onClick={()=> setcount(count+1)}>Click me</button>
    // </div>
    <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" fill={true} src="https://qph.cf2.quoracdn.net/main-qimg-b1208f07c106b44d8d988df36166ff74"
      alt=""/>
    </div>

  );
}

