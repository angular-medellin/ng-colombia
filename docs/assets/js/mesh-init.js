var MESH, renderer, container, renderer, scene, light, material, mesh, now, start;

    function initialise() {
      scene.add(mesh);
      scene.add(light);
      container.appendChild(renderer.element);
      window.addEventListener('resize', resize);
    }

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      createMesh();
    }

    function animate() {
      now = Date.now() - start;
      update();
      light.setPosition(300 * Math.sin(now * 0.001), 200 * Math.cos(now * 0.0005), 60);
      renderer.render(scene);
      requestAnimationFrame(animate);
    }

    function createMesh() {
      scene.remove(mesh);
      renderer.clear();
      geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
      material = new FSS.Material(MESH.ambient, MESH.diffuse);
      mesh = new FSS.Mesh(geometry, material);
      scene.add(mesh);

      // Augment vertices for animation
      var v, vertex;
      for (v = geometry.vertices.length - 1; v >= 0; v--) {
        vertex = geometry.vertices[v];
        vertex.anchor = FSS.Vector3.clone(vertex.position);
        vertex.step = FSS.Vector3.create(
          Math.randomInRange(0.2, 1.0),
          Math.randomInRange(0.2, 1.0),
          Math.randomInRange(0.2, 1.0)
        );
        vertex.time = Math.randomInRange(0, Math.PIM2);
      }
    }

    function update() {
      var ox, oy, oz, l, light, v, vertex, offset = MESH.depth / 2;

      // Animate Vertices
      for (v = geometry.vertices.length - 1; v >= 0; v--) {
        vertex = geometry.vertices[v];
        ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
        oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
        oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);
        FSS.Vector3.set(vertex.position,
          MESH.xRange * geometry.segmentWidth * ox,
          MESH.yRange * geometry.sliceHeight * oy,
          MESH.zRange * offset * oz - offset);
        FSS.Vector3.add(vertex.position, vertex.anchor);
      }

      // Set the Geometry to dirty
      geometry.dirty = true;
    }
    function showMesh() {
      MESH = {
        width: 1.2,
        height: 1.2,
        depth: 10,
        segments: 16,
        slices: 8,
        xRange: 0.3,
        yRange: 0.2,
        zRange: 1.0,
        ambient: '#555555',
        diffuse: '#FFFFFF',
        speed: 0.0005
      };
      renderer = new FSS.CanvasRenderer();
      container = document.getElementById('fss-container');
      renderer = new FSS.CanvasRenderer();
      scene = new FSS.Scene();
      light = new FSS.Light('#2F0521', '#7B0D57');
      geometry = new FSS.Plane(1800, 300, 16, 6);
      material = new FSS.Material('#555555', '#FFFFFF');
      mesh = new FSS.Mesh(geometry, material);
      now, start = Date.now();
      initialise();
      resize();
      animate();
    }