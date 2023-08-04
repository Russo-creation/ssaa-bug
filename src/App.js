import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Environment } from '@react-three/drei';
import './styles.css';
import PostProcessing from './postProccesing';
import Camera from './camera';

const Scene = () => {
  return (
    <group>
      <Box position={[0, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="white" />
      </Box>
      <Box position={[1, 1, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="red" />
      </Box>
      <Box position={[1, 0, 0]} args={[10, 0.1, 10]}>
        <meshStandardMaterial color="white" />
      </Box>
    </group>
  );
};

export default function App() {
  return (
    <Canvas>
      <Environment
        files={
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/clarens_midday_2k.hdr'
        }
        resolution={256}
        background
        blur={0.8}
      />
      <directionalLight intensity={1} />
      <hemisphereLight
        position={[0, 0, 0]}
        intensity={0.2}
        skyColor={'white'}
        groundColor="black"
      />
      <Camera />
      <Scene />
      <PostProcessing />
    </Canvas>
  );
}
