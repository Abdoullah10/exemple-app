
"use client"
import { useContext } from "react";
import { abdou } from "./logique/three";
import Three from "./logique/three";


const olditems={clavier:50,
  pc:500,
  stylo:5,}


  const Mtg = () => {
    const newitem = useContext(abdou);
    const mergedItems = { ...olditems, ...newitem };
    return mergedItems;
};

export default Mtg;