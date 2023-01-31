"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataViewWriter = void 0;
class DataViewWriter {
    constructor(arrayBuffer, offset) {
        this.view = new DataView(arrayBuffer);
        this.offset = offset || 0;
    }
    get buffer() {
        return this.view.buffer;
    }
    static create(byteLength) {
        return new DataViewWriter(new ArrayBuffer(byteLength));
    }
    writeUInt8(value) {
        this.view.setUint8(this.offset, value);
        this.offset += 1;
    }
    writeInt8(value) {
        this.view.setInt8(this.offset, value);
        this.offset += 1;
    }
    writeUInt16(value) {
        this.view.setUint16(this.offset, value);
        this.offset += 2;
    }
    writeInt16(value) {
        this.view.setInt16(this.offset, value);
        this.offset += 2;
    }
    writeUInt32(value) {
        this.view.setUint32(this.offset, value);
        this.offset += 4;
    }
    writeInt32(value) {
        this.view.setInt32(this.offset, value);
        this.offset += 4;
    }
    writeFloat32(value) {
        this.view.setFloat32(this.offset, value);
        this.offset += 4;
    }
    writeFloat64(value) {
        this.view.setFloat64(this.offset, value);
        this.offset += 8;
    }
    writeString(value) {
        const uint8arr = new TextEncoder().encode(value);
        this.writeUInt32(uint8arr.byteLength);
        uint8arr.forEach(byte => {
            this.writeUInt8(byte);
        });
    }
    writeUInt8Array(value) {
        const length = value.byteLength;
        this.writeUInt32(length);
        for (let i = 0; i < value.length; i++) {
            this.writeUInt8(value[i]);
        }
    }
}
exports.DataViewWriter = DataViewWriter;
