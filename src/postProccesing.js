import { extend, useFrame, useThree } from '@react-three/fiber';
import { UnrealBloomPass, SSAARenderPass } from 'three-stdlib';
import { Effects } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

extend({
  UnrealBloomPass,
  SSAARenderPass,
});

const PostProcessing = () => {
  const { gl, camera, size, scene } = useThree();
  const refSSAA = useRef();

  useEffect(() => {
    refSSAA.current.sampleLevel = 2;
  }, []);

  useFrame(() => {
    refSSAA.current.sampleLevel = 2;
    refSSAA.current.unbiased = false;
  });

  return (
    <Effects disableGamma>
      <sSAARenderPass
        ref={refSSAA}
        attachArray="passes"
        args={[scene, camera, 0x000000, 0x000000]}
      />

      {/* <unrealBloomPass
        attachArray="passes"
        threshold={1}
        strength={1.5}
        radius={1}
      /> */}
    </Effects>
  );
};

export default PostProcessing;
