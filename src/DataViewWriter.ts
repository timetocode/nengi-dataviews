import { IBinaryWriter } from 'nengi'

class DataViewWriter implements IBinaryWriter {
    view: DataView
    offset: number

    constructor(arrayBuffer: ArrayBuffer, offset?: number) {
        this.view = new DataView(arrayBuffer)
        this.offset = offset || 0
    }

    get buffer() {
        return this.view.buffer
    }

    static create(byteLength: number) {
        return new DataViewWriter(new ArrayBuffer(byteLength))
    }

    writeUInt8(value: number) {
        this.view.setUint8(this.offset, value)
        this.offset += 1
    }

    writeInt8(value: number) {
        this.view.setInt8(this.offset, value)
        this.offset += 1
    }

    writeUInt16(value: number) {
        this.view.setUint16(this.offset, value)
        this.offset += 2
    }

    writeInt16(value: number) {
        this.view.setInt16(this.offset, value)
        this.offset += 2
    }

    writeUInt32(value: number) {
        this.view.setUint32(this.offset, value)
        this.offset += 4
    }

    writeInt32(value: number) {
        this.view.setInt32(this.offset, value)
        this.offset += 4
    }

    writeFloat32(value: number) {
        this.view.setFloat32(this.offset, value)
        this.offset += 4
    }

    writeFloat64(value: number) {
        this.view.setFloat64(this.offset, value)
        this.offset += 8
    }

    writeString(value: string) {
        const uint8arr = new TextEncoder().encode(value)
        this.writeUInt32(uint8arr.byteLength)
        uint8arr.forEach(byte => {
            this.writeUInt8(byte)
        })
    }

    writeUInt8Array(value: Uint8Array) {
        const length = value.byteLength
        this.writeUInt32(length)
        for (let i = 0; i < value.length; i++) {
            this.writeUInt8(value[i])
        }
    }

    writeInt8Array(value: Int8Array) {
        const length = value.length
        this.writeUInt32(length)
        for (let i = 0; i < value.length; i++) {
            this.writeInt8(value[i])
        }
    }

    writeUInt16Array(value: Uint16Array) {
        const length = value.length
        this.writeUInt32(length)
        for (let i = 0; i < value.length; i++) {
            this.writeUInt16(value[i])
        }
    }

    writeInt16Array(value: Int16Array) {
        const length = value.length
        this.writeUInt32(length)
        for (let i = 0; i < value.length; i++) {
            this.writeInt16(value[i])
        }
    }

    writeUInt32Array(value: Uint32Array) {
        const length = value.length
        this.writeUInt32(length)
        for (let i = 0; i < value.length; i++) {
            this.writeUInt32(value[i])
        }
    }

    writeInt32Array(value: Int32Array) {
        const length = value.length
        this.writeUInt32(length)
        for (let i = 0; i < value.length; i++) {
            this.writeInt32(value[i])
        }
    }

    writeFloat32Array(value: Float32Array) {
        const length = value.length
        this.writeUInt32(length)
        for (let i = 0; i < value.length; i++) {
            this.writeFloat32(value[i])
        }
    }

    writeFloat64Array(value: Float64Array) {
        const length = value.length
        this.writeUInt32(length)
        for (let i = 0; i < value.length; i++) {
            this.writeFloat64(value[i])
        }
    }
}

export { DataViewWriter }
