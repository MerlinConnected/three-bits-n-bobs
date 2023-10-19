import * as THREE from 'three'
import Experience from './Experience.js'
import Camera from './Camera.js'

export default class World {
	constructor(_options) {
		this.experience = new Experience()
		this.config = this.experience.config
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		this.resources.on('groupEnd', (_group) => {
			if (_group.name === 'base') {
				this.setScene()
			}
		})
	}

	setScene() {
		const ambiant = new THREE.AmbientLight(0xffffff, 1)
		const directional = new THREE.DirectionalLight(0xffffff, 1)
		directional.position.set(1, 1, 1)
		directional.castShadow = true
		const lights = new THREE.Group()
		lights.add(directional)
		lights.add(ambiant)
		this.scene.add(lights)

		const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 'hotpink' }))
		this.scene.add(cube)
		cube.position.y = 0.5

		console.log(Camera)

		const axesHelper = new THREE.AxesHelper(2)
		this.scene.add(axesHelper)
	}

	resize() {}

	update() {}

	destroy() {}
}
