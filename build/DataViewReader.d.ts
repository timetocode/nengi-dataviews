import { IBinaryReader } from 'nengi';
declare class DataViewReader implements IBinaryReader {
    view: DataView;
    offset: number;
    constructor(arrayBuffer: ArrayBuffer, offset: number);
    get byteLength(): number;
    readUInt8(): number;
    readInt8(): number;
    readUInt16(): number;
    readInt16(): number;
    readUInt32(): number;
    readInt32(): number;
    readFloat32(): number;
    readFloat64(): number;
    readString(): string;
    readUInt8Array(): Uint8Array;
}
export { DataViewReader };
