import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';
import * as Three from 'three';

export function Table(props) {
  const { nodes, materials } = useGLTF('./models/Table.gltf')
  const {legs, legsColor, tableWidth} = useConfigurator();

  useEffect(() => {
    materials.Metal.color = new Three.Color(legsColor);
  }, [legsColor])

  const TableWidthScale = tableWidth / 100
  return (
    <group {...props} dispose={null}>
      <mesh scale={[TableWidthScale, 1, 1]} castShadow geometry={nodes.Plate.geometry} material={materials.Plate} />
      {legs === 0 ?
        <>
          <mesh castShadow geometry={nodes.Legs01Left.geometry} material={materials.Metal} position={[-1.5 * TableWidthScale, 0, 0]} />
          <mesh castShadow geometry={nodes.Legs01Right.geometry} material={materials.Metal} position={[1.5 * TableWidthScale, 0, 0]} />
        </>
        : legs === 1 ?
        <>
        <mesh castShadow geometry={nodes.Legs02Left.geometry} material={materials.Metal} position={[-1.5 * TableWidthScale, 0, 0]} />
        <mesh castShadow geometry={nodes.Legs02Right.geometry} material={materials.Metal} position={[1.5 * TableWidthScale, 0, 0]} />
        </>
        : legs === 2 &&
        <>
        <mesh castShadow geometry={nodes.Legs03Left.geometry} material={materials.Metal} position={[-1.5 * TableWidthScale, 0, 0]} />
        <mesh castShadow geometry={nodes.Legs03Right.geometry} material={materials.Metal} position={[1.5 * TableWidthScale, 0, 0]} />
        </>
      }
    </group>
  )
}

useGLTF.preload('./models/Table.gltf')
