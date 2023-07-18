import {useState} from 'react';
import { Stage, OrbitControls, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { Table } from "./Table";
import { useConfigurator } from "../contexts/Configurator";

export const Experience = () => {
  const {legs} = useConfigurator();
  return (
    <>
      <Stage 
        intensity={0.7}
        // environment="studio"
        environment="dawn"
        // shadows={{
        //   type: 'accunulative', 
        //   color: "#d9afd9",
        //   colorBlend: 2,
        //   opacity: 2
        // }}
        adjustCamera={2}
      >
        <Table />
      </Stage>
      <OrbitControls 
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
