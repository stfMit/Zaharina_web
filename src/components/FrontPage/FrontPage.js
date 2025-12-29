import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Oven from "../Oven";

export default function FrontPage() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas
                camera={{ position: [2.2, 1.4, 3.2], fov: 45 }}
                shadows
            >
                {/* Lights */}
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[5, 6, 5]}
                    intensity={1.0}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />

                {/* Nice reflections */}
                <Environment preset="warehouse" />

                {/* Ground so you see shadows */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial roughness={0.9} />
                </mesh>

                <Suspense fallback={null}>
                    <Oven />
                </Suspense>

                {/* Camera control for dev/testing */}
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    target={[0, 0.8, 0]}
                />
            </Canvas>
        </div>
    );
}
