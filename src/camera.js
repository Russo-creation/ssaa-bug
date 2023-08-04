import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

const Camera = () => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        near={2}
        far={15000}
        position={[10, 3, 10]}
        fov={50}
      />

      <OrbitControls
        enableDamping
        enableZoom={true}
        enablePan={true}
        dampingFactor={0.05}
        rotateSpeed={1.1}
        target={[0, 0, 0]}
      />
    </>
  );
};

export default Camera;
