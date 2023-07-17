/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 public/models/Table.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Table(props) {
  const { nodes, materials } = useGLTF('./models/Table.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Plate.geometry} material={materials.Plate} />
      <mesh castShadow geometry={nodes.Legs01Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
      <mesh castShadow geometry={nodes.Legs01Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
      <mesh castShadow geometry={nodes.Legs02Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
      <mesh castShadow geometry={nodes.Legs02Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
      <mesh castShadow geometry={nodes.Legs03Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
      <mesh castShadow geometry={nodes.Legs03Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/Table.gltf')
