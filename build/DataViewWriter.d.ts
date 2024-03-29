import { IBinaryWriter } from 'nengi';
declare class DataViewWriter implements IBinaryWriter {
    view: DataView;
    offset: number;
    constructor(arrayBuffer: ArrayBuffer, offset?: number);
    get buffer(): ArrayBuffer;
    static create(byteLength: number): DataViewWriter;
    writeUInt8(value: number): void;
    writeInt8(value: number): void;
    writeUInt16(value: number): void;
    writeInt16(value: number): void;
    writeUInt32(value: number): void;
    writeInt32(value: number): void;
    writeFloat32(value: number): void;
    writeFloat64(value: number): void;
    writeString(value: string): void;
    writeUInt8Array(value: Uint8Array): void;
    writeInt8Array(value: Int8Array): void;
    writeUInt16Array(value: Uint16Array): void;
    writeInt16Array(value: Int16Array): void;
    writeUInt32Array(value: Uint32Array): void;
    writeInt32Array(value: Int32Array): void;
    writeFloat32Array(value: Float32Array): void;
    writeFloat64Array(value: Float64Array): void;
}
export { DataViewWriter };
