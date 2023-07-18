import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Stage, Center, AccumulativeShadows, RandomizedLight, Environment, OrbitControls } from '@react-three/drei'
// import { useControls, button } from 'leva'
function App() {
  return (
    <>
    <Canvas 
      gl={{ antialias: false, preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [4, 6, -12], fov: 50 }}
     >
      <group position={[0, -0.75, 0]}>
        <Center top> 
          <Experience />
        </Center>
      </group>
    </Canvas>
    {/* <Interface /> */}
    </>
  );
}

export default App;
