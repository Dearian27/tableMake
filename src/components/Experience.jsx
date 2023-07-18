import {useState} from 'react';
// import { PointLight} from "@react-three/fiber";
import { Stage, OrbitControls, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { Table } from "./Table";
import { useConfigurator } from "../contexts/Configurator";

export const Experience = () => {
  const {legs} = useConfigurator();
  const [legsColor, setLegsColor] = useState();
  return (
    <>
      <Stage 
        intensity={1.5}
        environment="city"
        // shadows={{
        //   type: 'accunulative', 
        //   color: "#d9afd9",
        //   colorBlend: 2,
        //   opacity: 2
        // }}
        adjustCamera={2}
      >
        {/* <PointLight /> */}
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
