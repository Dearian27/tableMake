import { OrbitControls } from "@react-three/drei";
import { Table } from "./Table";
export const Experience = () => {
  return (
    <>
      {/* <Stage 
        intensity={1.5}
        environment="city"
        shadows={{type: 'accunulative', color: "d9afd9", colorBlend: 2, opacity: 2}}
        adjustCamera={0.9}
      > */}
        <Table />
      {/* </Stage> */}
        <OrbitControls 
        makeDefault
        // minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        />
    </>
  );
};
