import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';
import * as Three from 'three';
import { Vector3 } from "three";
import { useFrame } from '@react-three/fiber';

const ANIM_SPEED = 12;
export function Table(props) {
  const plateRef = useRef(null);
  const leftLegsRef = useRef(null);
  const rightLegsRef = useRef(null);

  const { nodes, materials } = useGLTF('./models/Table.gltf')
  const {legs, legsColor, tableWidth} = useConfigurator();

  useEffect(() => {
    materials.Metal.color = new Three.Color(legsColor);
  }, [legsColor])

  const TableWidthScale = tableWidth / 100;

  useFrame((state, delta) => {
    const targetScale = new Vector3(TableWidthScale, 1, 1);
    plateRef.current.scale.lerp(targetScale, delta * ANIM_SPEED);
    
    const targetLeftPosition = new Vector3(-1.5 * TableWidthScale, 0, 0);
    leftLegsRef.current.position.lerp(targetLeftPosition, delta * ANIM_SPEED);

    const targetRightPosition = new Vector3(1.5 * TableWidthScale, 0, 0);
    rightLegsRef.current.position.lerp(targetRightPosition, delta * ANIM_SPEED);

    // plate.current.scale.lerp(targetScale, delta * ANIM_SPEED);

    // const targetLeftPosition = new Vector3(-1.5 * tableWidthScale, 0, 0);
    // leftLegs.current.position.lerp(targetLeftPosition, delta * ANIM_SPEED);

    // const targetRightPosition = new Vector3(1.5 * tableWidthScale, 0, 0);
    // rightLegs.current.position.lerp(targetRightPosition, delta * ANIM_SPEED);
  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={plateRef} scale={[1, 1, 1]} castShadow geometry={nodes.Plate.geometry} material={materials.Plate} />
      {legs === 0 ?
        <>
          <mesh ref={leftLegsRef} castShadow geometry={nodes.Legs01Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
          <mesh ref={rightLegsRef} castShadow geometry={nodes.Legs01Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
        </>
        : legs === 1 ?
        <>
        <mesh ref={leftLegsRef} castShadow geometry={nodes.Legs02Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
        <mesh ref={rightLegsRef} castShadow geometry={nodes.Legs02Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
        </>
        : legs === 2 &&
        <>
        <mesh ref={leftLegsRef} castShadow geometry={nodes.Legs03Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
        <mesh ref={rightLegsRef} castShadow geometry={nodes.Legs03Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
        </>
      }
    </group>
  )
}

useGLTF.preload('./models/Table.gltf')
