import React from "react";
import { useGLTF } from "@react-three/drei";

/**
 * If you have a GLB at: public/models/oven.glb
 * it will load.
 * If not, it will render a placeholder oven box.
 */
export default function Oven(props) {
    let gltf = null;

    gltf = useGLTF("/models/oven.glb");

    if (gltf?.scene) {
        return (
            <primitive
                object={gltf.scene}
                position={[0, 0, 0]}
                scale={1}
                castShadow
                {...props}
            />
        );
    }

    // Placeholder oven (so you can confirm ThreeJS renders)
    return (
        <group {...props} position={[0, 0.75, 0]}>
            {/* Body */}
            <mesh castShadow receiveShadow>
                <boxGeometry args={[1.6, 1.5, 1.2]} />
                <meshStandardMaterial metalness={0.2} roughness={0.6} />
            </mesh>

            {/* Door */}
            <mesh position={[0, -0.05, 0.61]} castShadow receiveShadow>
                <boxGeometry args={[1.35, 0.9, 0.05]} />
                <meshStandardMaterial metalness={0.1} roughness={0.3} />
            </mesh>

            {/* “Glass” window */}
            <mesh position={[0, -0.05, 0.635]}>
                <boxGeometry args={[1.0, 0.55, 0.02]} />
                <meshStandardMaterial transparent opacity={0.25} roughness={0.1} />
            </mesh>

            {/* Top panel */}
            <mesh position={[0, 0.55, 0.58]} castShadow receiveShadow>
                <boxGeometry args={[1.4, 0.25, 0.08]} />
                <meshStandardMaterial metalness={0.15} roughness={0.5} />
            </mesh>
        </group>
    );
}

// If you DO have the model, this helps caching/preload:
useGLTF.preload("/models/oven.glb");
