export class Vector3 {
    x: number
    y: number
    z: number

    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    applyMatrix4(m: Matrix4) {
        const x = this.x, y = this.y, z = this.z;
        const e = m.elements;
        const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
        this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
        this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
        this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
        return this;
    }

    multiplyScalar(scalar: number ) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}
}

export class Matrix4 {
    elements = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];

    constructor() {
        if (arguments.length > 0) {
            console.error('THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.');
        }
    }

    makePerspective(left: number, right: number, top: number, bottom: number, near: number, far: number) {
        if (far === undefined) {
            console.warn('THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.');
        }
        const te = this.elements;
        const x = 2 * near / (right - left);
        const y = 2 * near / (top - bottom);
        const a = (right + left) / (right - left);
        const b = (top + bottom) / (top - bottom);
        const c = - (far + near) / (far - near);
        const d = - 2 * far * near / (far - near);
        te[0] = x; te[4] = 0; te[8] = a; te[12] = 0;
        te[1] = 0; te[5] = y; te[9] = b; te[13] = 0;
        te[2] = 0; te[6] = 0; te[10] = c; te[14] = d;
        te[3] = 0; te[7] = 0; te[11] = - 1; te[15] = 0;
        return this;
    }

    makeOrthographic( left:number, right:number, top:number, bottom:number, near:number, far:number ) {
		const te = this.elements;
		const w = 1.0 / ( right - left );
		const h = 1.0 / ( top - bottom );
		const p = 1.0 / ( far - near );
		const x = ( right + left ) * w;
		const y = ( top + bottom ) * h;
		const z = ( far + near ) * p;
		te[ 0 ] = 2 * w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
		te[ 1 ] = 0;	te[ 5 ] = 2 * h;	te[ 9 ] = 0;	te[ 13 ] = - y;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 * p;	te[ 14 ] = - z;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;
		return this;
	}
}

export class OrthographicCamera {
    private type: string
    private zoom: number
    private left: number
    private right: number 
    private top: number 
    private bottom: number 
    private near: number 
    private far: number 
    public projectionMatrix: Matrix4 
    constructor( left = - 1, right = 1, top = 1, bottom = - 1, near = 0.1, far = 2000 ) {
		this.type = 'OrthographicCamera';
		this.left = left;
		this.right = right;
		this.top = top;
		this.bottom = bottom;
		this.near = near;
		this.far = far;
        this.zoom = 1;
        this.projectionMatrix = new Matrix4()
		this.updateProjectionMatrix();
	}

    updateProjectionMatrix() {

		const dx = ( this.right - this.left ) / ( 2 * this.zoom );
		const dy = ( this.top - this.bottom ) / ( 2 * this.zoom );
		const cx = ( this.right + this.left ) / 2;
		const cy = ( this.top + this.bottom ) / 2;
		let left = cx - dx;
		let right = cx + dx;
		let top = cy + dy;
		let bottom = cy - dy;
		this.projectionMatrix.makeOrthographic( left, right, top, bottom, this.near, this.far );
	}
}