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
}
export { DataViewWriter };
