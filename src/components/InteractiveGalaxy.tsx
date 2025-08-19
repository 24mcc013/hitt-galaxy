import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Sphere, Ring } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

interface GalaxyItemProps {
  position: [number, number, number];
  type: 'project' | 'research' | 'credential';
  title: string;
  slug: string;
  color: string;
}

function GalaxyItem({ position, type, title, slug, color }: GalaxyItemProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  
  const { camera } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const handleClick = () => {
    const routes = {
      project: `/works/${slug}`,
      research: `/research/${slug}`,
      credential: `/credentials/${slug}`
    };
    navigate(routes[type]);
  };

  const getSize = () => {
    switch (type) {
      case 'project': return 0.15;
      case 'research': return 0.12;
      case 'credential': return 0.1;
      default: return 0.1;
    }
  };

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[getSize(), 16, 16]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {type === 'project' && (
        <Ring args={[getSize() + 0.05, getSize() + 0.07, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </Ring>
      )}
      
      {hovered && (
        <Text
          position={[0, getSize() + 0.3, 0]}
          fontSize={0.1}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Regular.woff"
        >
          {title}
        </Text>
      )}
    </group>
  );
}

function CameraController() {
  const { camera, gl } = useThree();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    camera.position.x = Math.cos(t * 0.1) * 3;
    camera.position.y = Math.sin(t * 0.05) * 2;
    camera.position.z = Math.sin(t * 0.1) * 3 + 5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

const InteractiveGalaxy = () => {
  const galaxyItems = useMemo(() => [
    // Projects (larger, brighter)
    { type: 'project' as const, title: 'E-Commerce Platform', slug: 'ecommerce-platform', color: '#8b5cf6', position: [2, 1, -1] as [number, number, number] },
    { type: 'project' as const, title: 'AI Chat Application', slug: 'ai-chat-app', color: '#06b6d4', position: [-2, -1, 1] as [number, number, number] },
    { type: 'project' as const, title: 'Data Visualization Tool', slug: 'data-viz-tool', color: '#10b981', position: [1, -2, 0] as [number, number, number] },
    { type: 'project' as const, title: 'Mobile Banking App', slug: 'mobile-banking', color: '#f59e0b', position: [-1, 2, -2] as [number, number, number] },
    
    // Research Papers (medium)
    { type: 'research' as const, title: 'Machine Learning in Web Dev', slug: 'ml-web-dev', color: '#ec4899', position: [3, 0, 1] as [number, number, number] },
    { type: 'research' as const, title: 'Blockchain Security', slug: 'blockchain-security', color: '#6366f1', position: [-3, 1, -1] as [number, number, number] },
    { type: 'research' as const, title: 'Cloud Computing Trends', slug: 'cloud-trends', color: '#8b5cf6', position: [0, 3, 0] as [number, number, number] },
    
    // Credentials (smaller)
    { type: 'credential' as const, title: 'AWS Certified', slug: 'aws-certified', color: '#f97316', position: [1.5, 0.5, 2] as [number, number, number] },
    { type: 'credential' as const, title: 'Google Cloud Professional', slug: 'gcp-professional', color: '#06b6d4', position: [-1.5, -0.5, -2] as [number, number, number] },
    { type: 'credential' as const, title: 'Microsoft Azure Expert', slug: 'azure-expert', color: '#3b82f6', position: [0, -3, 1] as [number, number, number] },
    { type: 'credential' as const, title: 'Kubernetes Certified', slug: 'k8s-certified', color: '#10b981', position: [2.5, -1.5, 0] as [number, number, number] },
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full h-screen"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        <CameraController />
        
        {galaxyItems.map((item, index) => (
          <GalaxyItem
            key={index}
            position={item.position}
            type={item.type}
            title={item.title}
            slug={item.slug}
            color={item.color}
          />
        ))}
      </Canvas>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-muted-foreground text-sm"
        >
          Click on any celestial object to explore
        </motion.p>
      </div>
    </motion.div>
  );
};

export default InteractiveGalaxy;