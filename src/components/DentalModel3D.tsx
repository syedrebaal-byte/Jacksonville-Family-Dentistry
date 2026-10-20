import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Layers, Eye, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

type ViewModel = 'natural' | 'cerec' | 'structural';

export const DentalModel3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<ViewModel>('cerec');
  const [isRotating, setIsRotating] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>('crown');
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const toothGroupRef = useRef<THREE.Group | null>(null);
  const crownMeshRef = useRef<THREE.Mesh | null>(null);
  const rootMesh1Ref = useRef<THREE.Mesh | null>(null);
  const rootMesh2Ref = useRef<THREE.Mesh | null>(null);
  const pulpMeshRef = useRef<THREE.Mesh | null>(null);
  const marginRingRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 420;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 4.6);
    cameraRef.current = camera;

    // 3. Renderer with antialias and alpha
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.replaceChildren(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff8ee, 2.2);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xdbeafe, 1.4);
    dirLight2.position.set(-4, -2, -3);
    scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.0);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // 5. Build Anatomical Tooth Group
    const toothGroup = new THREE.Group();
    toothGroupRef.current = toothGroup;

    // A. Crown - Anatomical Sculpt using Lathe / Parametric Cylinder
    const crownPoints: THREE.Vector2[] = [];
    crownPoints.push(new THREE.Vector2(0, 0.95)); // top center cusp depression
    crownPoints.push(new THREE.Vector2(0.35, 1.05)); // cusp ridge high
    crownPoints.push(new THREE.Vector2(0.68, 0.92)); // buccal cusp
    crownPoints.push(new THREE.Vector2(0.82, 0.7)); // maximum contour
    crownPoints.push(new THREE.Vector2(0.85, 0.35)); // mid crown
    crownPoints.push(new THREE.Vector2(0.78, 0.05)); // supragingival
    crownPoints.push(new THREE.Vector2(0.72, -0.05)); // cervical line / margin
    crownPoints.push(new THREE.Vector2(0.68, -0.15)); // prep margin base

    const crownGeo = new THREE.LatheGeometry(crownPoints, 32);
    // Deform slightly to mimic molar quad-cusp shape
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const angle = Math.atan2(z, x);
      // Quad-cusp undulating wave
      const wave = 1 + 0.12 * Math.cos(angle * 4) * (y > 0.4 ? 1 : 0.3);
      pos.setX(i, x * wave);
      pos.setZ(i, z * wave);
    }
    crownGeo.computeVertexNormals();

    const crownMat = new THREE.MeshPhysicalMaterial({
      color: 0xfbfbf7,
      roughness: 0.18,
      metalness: 0.05,
      transmission: 0.15,
      ior: 1.52,
      reflectivity: 0.7,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1
    });

    const crownMesh = new THREE.Mesh(crownGeo, crownMat);
    crownMeshRef.current = crownMesh;
    toothGroup.add(crownMesh);

    // B. CEREC Margin Ring (Golden/titanium precision margin indicator)
    const marginRingGeo = new THREE.TorusGeometry(0.73, 0.02, 16, 48);
    marginRingGeo.rotateX(Math.PI / 2);
    marginRingGeo.translate(0, -0.08, 0);
    const marginRingMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25,
      visible: true
    });
    const marginRing = new THREE.Mesh(marginRingGeo, marginRingMat);
    marginRingRef.current = marginRing;
    toothGroup.add(marginRing);

    // C. Roots (Mesial & Distal Bifurcation)
    const rootPoints1: THREE.Vector2[] = [];
    rootPoints1.push(new THREE.Vector2(0.38, -0.12));
    rootPoints1.push(new THREE.Vector2(0.32, -0.5));
    rootPoints1.push(new THREE.Vector2(0.24, -0.9));
    rootPoints1.push(new THREE.Vector2(0.14, -1.3));
    rootPoints1.push(new THREE.Vector2(0.04, -1.55)); // root apex
    rootPoints1.push(new THREE.Vector2(0, -1.6));

    const rootGeo1 = new THREE.LatheGeometry(rootPoints1, 24);
    rootGeo1.translate(0.28, 0, 0);

    const rootPoints2: THREE.Vector2[] = [];
    rootPoints2.push(new THREE.Vector2(0.38, -0.12));
    rootPoints2.push(new THREE.Vector2(0.30, -0.5));
    rootPoints2.push(new THREE.Vector2(0.22, -0.9));
    rootPoints2.push(new THREE.Vector2(0.12, -1.25));
    rootPoints2.push(new THREE.Vector2(0.04, -1.5));
    rootPoints2.push(new THREE.Vector2(0, -1.55));

    const rootGeo2 = new THREE.LatheGeometry(rootPoints2, 24);
    rootGeo2.translate(-0.28, 0, 0);

    const rootMat = new THREE.MeshStandardMaterial({
      color: 0xeddcc8,
      roughness: 0.55,
      metalness: 0.05
    });

    const rootMesh1 = new THREE.Mesh(rootGeo1, rootMat);
    const rootMesh2 = new THREE.Mesh(rootGeo2, rootMat);
    rootMesh1Ref.current = rootMesh1;
    rootMesh2Ref.current = rootMesh2;
    toothGroup.add(rootMesh1);
    toothGroup.add(rootMesh2);

    // D. Pulp Chamber & Canal (Visible in structural view)
    const pulpCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.6, 0),
      new THREE.Vector3(0.18, 0.2, 0),
      new THREE.Vector3(0.25, -0.4, 0),
      new THREE.Vector3(0.28, -1.2, 0)
    ]);
    const pulpGeo = new THREE.TubeGeometry(pulpCurve, 20, 0.07, 8, false);
    const pulpMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0x991b1b,
      roughness: 0.3,
      transparent: true,
      opacity: 0.85,
      visible: false
    });
    const pulpMesh = new THREE.Mesh(pulpGeo, pulpMat);
    pulpMeshRef.current = pulpMesh;
    toothGroup.add(pulpMesh);

    scene.add(toothGroup);

    // Drag-to-rotate interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !toothGroupRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      toothGroupRef.current.rotation.y += deltaX * 0.01;
      toothGroupRef.current.rotation.x += deltaY * 0.01;
      // Clamp x rotation so tooth doesn't flip upside down
      toothGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, toothGroupRef.current.rotation.x));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !toothGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      toothGroupRef.current.rotation.y += deltaX * 0.012;
      toothGroupRef.current.rotation.x += deltaY * 0.012;
      toothGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, toothGroupRef.current.rotation.x));
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (toothGroupRef.current && isRotating && !isDragging) {
        toothGroupRef.current.rotation.y += delta * 0.45;
        // Subtle floating bob
        toothGroupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 420;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, [isRotating]);

  // Update materials when activeView changes
  useEffect(() => {
    if (!crownMeshRef.current || !rootMesh1Ref.current || !rootMesh2Ref.current || !marginRingRef.current || !pulpMeshRef.current) {
      return;
    }

    const crownMat = crownMeshRef.current.material as THREE.MeshPhysicalMaterial;
    const rootMat1 = rootMesh1Ref.current.material as THREE.MeshStandardMaterial;
    const rootMat2 = rootMesh2Ref.current.material as THREE.MeshStandardMaterial;
    const marginRing = marginRingRef.current;
    const pulpMesh = pulpMeshRef.current;

    if (activeView === 'cerec') {
      // High-gloss CAD/CAM ceramic crown + gold precision margin + healthy root core
      crownMat.color.set(0xffffff);
      crownMat.roughness = 0.08;
      crownMat.metalness = 0.0;
      crownMat.clearcoat = 1.0;
      crownMat.clearcoatRoughness = 0.04;
      crownMat.transmission = 0.22;
      crownMat.transparent = false;
      crownMat.opacity = 1.0;

      marginRing.visible = true;
      pulpMesh.visible = false;

      rootMat1.color.set(0xeddcc8);
      rootMat1.transparent = false;
      rootMat1.opacity = 1.0;
      rootMat2.color.set(0xeddcc8);
      rootMat2.transparent = false;
      rootMat2.opacity = 1.0;
    } else if (activeView === 'natural') {
      // Natural organic enamel & dentin
      crownMat.color.set(0xfaf6eb);
      crownMat.roughness = 0.3;
      crownMat.metalness = 0.0;
      crownMat.clearcoat = 0.4;
      crownMat.transmission = 0.1;
      crownMat.transparent = false;
      crownMat.opacity = 1.0;

      marginRing.visible = false;
      pulpMesh.visible = false;

      rootMat1.color.set(0xeddcc8);
      rootMat1.transparent = false;
      rootMat1.opacity = 1.0;
      rootMat2.color.set(0xeddcc8);
      rootMat2.transparent = false;
      rootMat2.opacity = 1.0;
    } else if (activeView === 'structural') {
      // Translucent x-ray / diagnostic view highlighting inner pulp & canals
      crownMat.color.set(0x93c5fd);
      crownMat.roughness = 0.1;
      crownMat.transparent = true;
      crownMat.opacity = 0.35;

      rootMat1.color.set(0x93c5fd);
      rootMat1.transparent = true;
      rootMat1.opacity = 0.35;

      rootMat2.color.set(0x93c5fd);
      rootMat2.transparent = true;
      rootMat2.opacity = 0.35;

      marginRing.visible = true;
      pulpMesh.visible = true;
    }
  }, [activeView]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const factor = direction === 'in' ? -0.5 : 0.5;
    cameraRef.current.position.z = Math.max(2.8, Math.min(6.5, cameraRef.current.position.z + factor));
  };

  const handleResetRotation = () => {
    if (!toothGroupRef.current) return;
    toothGroupRef.current.rotation.set(0, 0, 0);
  };

  return (
    <div className="relative w-full h-[460px] md:h-[500px] rounded-2xl bg-gradient-to-b from-[#FAF8F3] via-[#F4F1EA] to-[#EBE7DD] border border-amber-900/10 shadow-xl overflow-hidden flex flex-col">
      {/* Top Bar: Viewport controls and mode toggles */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 p-4 border-b border-amber-900/10 bg-white/60 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-700">
            Interactive 3D CEREC® CAD/CAM Viewer
          </span>
        </div>

        {/* Segmented Mode Selector */}
        <div className="flex items-center gap-1 p-1 bg-amber-950/5 rounded-lg">
          <button
            type="button"
            onClick={() => setActiveView('cerec')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              activeView === 'cerec'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            CEREC® Crown
          </button>
          <button
            type="button"
            onClick={() => setActiveView('natural')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              activeView === 'natural'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            Natural Enamel
          </button>
          <button
            type="button"
            onClick={() => setActiveView('structural')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              activeView === 'structural'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            Pulp & Canal
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="relative flex-1 w-full cursor-grab active:cursor-grabbing focus:outline-none"
        title="Click and drag to rotate the tooth 360°"
      />

      {/* Overlay: Interactive Hotspot Callouts */}
      <div className="absolute top-18 left-4 z-10 max-w-xs space-y-2 pointer-events-none">
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-amber-900/10 shadow-sm text-xs text-slate-700">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-slate-900">
              {activeView === 'cerec' && 'CAD/CAM Biocompatible Ceramic'}
              {activeView === 'natural' && 'Natural Tooth Enamel Structure'}
              {activeView === 'structural' && 'Endodontic Canal & Pulp Anatomy'}
            </span>
            <span className="text-[10px] text-amber-800 font-mono">3D Mesh</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            {activeView === 'cerec' &&
              'Designed digitally with micron-level edge adaptation. Milled in-office in 15 minutes and permanently bonded in a single visit.'}
            {activeView === 'natural' &&
              'Preserved natural tooth structure with conservative preparation performed by Dr. Nixon and Dr. McCann.'}
            {activeView === 'structural' &&
              'Comprehensive diagnostic precision protecting internal vital nerve canals and structural integrity.'}
          </p>
        </div>
      </div>

      {/* Bottom Controls: Rotation toggle, Reset, Zoom */}
      <div className="relative z-10 flex items-center justify-between p-3.5 border-t border-amber-900/10 bg-white/60 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Click & drag to rotate 360°</span>
          <span aria-hidden="true">·</span>
          <span>Scroll or buttons to zoom</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsRotating(!isRotating)}
            aria-label={isRotating ? 'Pause auto-rotation' : 'Play auto-rotation'}
            className={`p-2 rounded-lg border transition-colors ${
              isRotating
                ? 'bg-amber-100/60 border-amber-200 text-amber-900'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          </button>
          <button
            type="button"
            onClick={handleResetRotation}
            aria-label="Reset orientation"
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => handleZoom('in')}
            aria-label="Zoom in"
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => handleZoom('out')}
            aria-label="Zoom out"
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
