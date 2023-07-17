import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Stage, Center, AccumulativeShadows, RandomizedLight, Environment, OrbitControls } from '@react-three/drei'
// import { useControls, button } from 'leva'
function App() {
  return (
    <>
    {/* <Canvas shadows>
      <Stage 
      // shadows="accumulative"
      >
        <mesh castShadows position={[-1.5, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </Stage>
    </Canvas> */}
    <Canvas 
    // gl={{ antialias: false, preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [4, 4, -12], fov: 35 }}
     >
      <group position={[0, -0.75, 0]}>
        <Center top> 
          <Experience />
        </Center>
        {/* // <AccumulativeShadows>
        //  <RandomizedLight position={[2, 5, 5]} />
        // </AccumulativeShadows>  */}
      </group>
     {/* // <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      // <Environment preset="dawn" background blur={1} />  */}
    </Canvas>
    
    </>
  );
}

export default App;
