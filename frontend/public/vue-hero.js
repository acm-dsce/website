// Vue + Three.js Hero Scene
(function(){
  if (!window.Vue || !window.THREE) return;

  const { createApp, onMounted, onBeforeUnmount, ref } = Vue;

  createApp({
    setup() {
      const containerRef = ref(null);
      let renderer, scene, camera, animationId, ico, particles;

      const sizes = { width: 0, height: 0 };

      const init = () => {
        const container = containerRef.value;
        if (!container) return;

        sizes.width = container.clientWidth;
        sizes.height = container.clientHeight;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 0.1, 100);
        camera.position.set(0, 0, 5);

        const light = new THREE.DirectionalLight(0xd9efff, 1);
        light.position.set(5, 8, 5);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0x6faed6, 0.6));

        // Icosahedron (ACM blue wireframe + subtle fill)
        const geo = new THREE.IcosahedronGeometry(1.2, 1);
        const matWire = new THREE.MeshBasicMaterial({ color: 0x1b75bb, wireframe: true, transparent: true, opacity: 0.9 });
        const matFill = new THREE.MeshStandardMaterial({ color: 0x2a98dd, metalness: 0.2, roughness: 0.5, transparent: true, opacity: 0.15 });

        const meshWire = new THREE.Mesh(geo, matWire);
        const meshFill = new THREE.Mesh(geo, matFill);
        ico = new THREE.Group();
        ico.add(meshFill);
        ico.add(meshWire);
        ico.position.z = -1.2;
        scene.add(ico);

        // Particles ring
        const particleCount = 1200;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          const r = 2.6 + Math.random() * 0.2;
          const a = Math.random() * Math.PI * 2;
          const y = (Math.random() - 0.5) * 0.6;
          positions[i * 3] = Math.cos(a) * r;
          positions[i * 3 + 1] = y;
          positions[i * 3 + 2] = Math.sin(a) * r - 1.2;
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const pMat = new THREE.PointsMaterial({ color: 0x8fd1f3, size: 0.02, depthWrite: false, transparent: true, opacity: 0.9 });
        particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        const animate = () => {
          animationId = requestAnimationFrame(animate);
          const t = performance.now() * 0.0003;
          ico.rotation.y += 0.003;
          ico.rotation.x = Math.sin(t) * 0.15;
          particles.rotation.y += 0.0015;
          renderer.render(scene, camera);
        };
        animate();

        const onResize = () => {
          if (!container) return;
          sizes.width = container.clientWidth;
          sizes.height = container.clientHeight;
          renderer.setSize(sizes.width, sizes.height);
          camera.aspect = sizes.width / sizes.height;
          camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', onResize);
        container.__onResize = onResize;
      };

      onMounted(() => init());
      onBeforeUnmount(() => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', containerRef.value?.__onResize);
        renderer?.dispose?.();
      });

      return { containerRef };
    },
    template: `<div ref="containerRef" style="width:100%;height:100%;"></div>`
  }).mount('#vue-hero');
})();
