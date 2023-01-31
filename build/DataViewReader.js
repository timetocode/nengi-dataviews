"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataViewReader = void 0;
class DataViewReader {
    constructor(arrayBuffer, offset) {
        this.view = new DataView(arrayBuffer);
        this.offset = offset;
    }
    get byteLength() {
        return this.view.buffer.byteLength;
    }
    readUInt8() {
        const value = this.view.getUint8(this.offset);
        this.offset += 1;
        return value;
    }
    readInt8() {
        const value = this.view.getInt8(this.offset);
        this.offset += 1;
        return value;
    }
    readUInt16() {
        const value = this.view.getUint16(this.offset);
        this.offset += 2;
        return value;
    }
    readInt16() {
        const value = this.view.getInt16(this.offset);
        this.offset += 2;
        return value;
    }
    readUInt32() {
        const value = this.view.getUint32(this.offset);
        this.offset += 4;
        return value;
    }
    readInt32() {
        const value = this.view.getInt32(this.offset);
        this.offset += 4;
        return value;
    }
    readFloat32() {
        const value = this.view.getFloat32(this.offset);
        this.offset += 4;
        return value;
    }
    readFloat64() {
        const value = this.view.getFloat64(this.offset);
        this.offset += 8;
        return value;
    }
    readString() {
        const length = this.readUInt32();
        const value = new TextDecoder().decode(this.view.buffer.slice(this.offset, this.offset + length));
        //const value = this.buffer.toString('utf8', this.offset, this.offset + length)
        this.offset += length;
        return value;
    }
    readUInt8Array() {
        const length = this.readUInt32();
        const arr = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            arr[i] = this.readUInt8();
        }
        return arr;
    }
}
exports.DataViewReader = DataViewReader;
