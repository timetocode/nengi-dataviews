"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataViewReader_1 = require("./DataViewReader");
test('constructs from buffer', () => {
    const buf = new ArrayBuffer(1);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.view.buffer).toBe(buf);
});
test('constructs from buffer at an offset', () => {
    const buf = new ArrayBuffer(2);
    const view = new DataView(buf);
    // write a number at the second byte
    view.setUint8(0, 16);
    view.setUint8(1, 32);
    // construct at an offset
    const br = new DataViewReader_1.DataViewReader(buf, 1);
    // expect value to be the second byte
    expect(br.readUInt8()).toBe(32);
});
test('readUInt8', () => {
    const value = 123;
    const buf = new ArrayBuffer(1);
    const view = new DataView(buf);
    view.setUint8(0, value);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readUInt8()).toBe(value);
    expect(br.offset).toBe(1);
});
test('readInt8', () => {
    const value = 123;
    const buf = new ArrayBuffer(1);
    const view = new DataView(buf);
    view.setInt8(0, value);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readInt8()).toBe(value);
    expect(br.offset).toBe(1);
});
test('readUInt16', () => {
    const value = 12345;
    const buf = new ArrayBuffer(2);
    const view = new DataView(buf);
    view.setUint16(0, value);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readUInt16()).toBe(value);
    expect(br.offset).toBe(2);
});
test('readInt16', () => {
    const value = 12345;
    const buf = new ArrayBuffer(2);
    const view = new DataView(buf);
    view.setInt16(0, value);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readInt16()).toBe(value);
    expect(br.offset).toBe(2);
});
test('readUInt32', () => {
    const value = 123456789;
    const buf = new ArrayBuffer(4);
    const view = new DataView(buf);
    view.setUint32(0, value);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readUInt32()).toBe(value);
    expect(br.offset).toBe(4);
});
test('readInt32', () => {
    const value = 123456789;
    const buf = new ArrayBuffer(4);
    const view = new DataView(buf);
    view.setInt32(0, value);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readInt32()).toBe(value);
    expect(br.offset).toBe(4);
});
test('readFloat32', () => {
    const value = 1.23456789; // this is past 32 bits btw
    const buf = new ArrayBuffer(4);
    const view = new DataView(buf);
    view.setFloat32(0, value);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readFloat32()).toBeCloseTo(value); // checks to 2 decimal places
    expect(br.offset).toBe(4);
});
test('readFloat64', () => {
    const value = 1.23456789;
    const buf = new ArrayBuffer(8);
    const view = new DataView(buf);
    view.setFloat64(0, value);
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readFloat64()).toBeCloseTo(value); // checks to 2 decimal places
    expect(br.offset).toBe(8);
});
test('readUInt8Array', () => {
    const value = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const buf = new ArrayBuffer(14);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, value.length);
    offset += 4;
    value.forEach(byte => {
        view.setUint8(offset, byte);
        offset += 1;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readUInt8Array()).toEqual(value);
});
test('readInt8Array', () => {
    const value = new Int8Array([0, 1, 2, 3, -4, -5, 6, 7, 8, 9]);
    const buf = new ArrayBuffer(14);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, value.length);
    offset += 4;
    value.forEach(byte => {
        view.setInt8(offset, byte);
        offset += 1;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readInt8Array()).toEqual(value);
});
test('readUInt16Array', () => {
    const value = new Uint16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 65535]);
    const buf = new ArrayBuffer(24);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, value.length);
    offset += 4;
    value.forEach(byte => {
        view.setUint16(offset, byte);
        offset += 2;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readUInt16Array()).toEqual(value);
});
test('readInt16Array', () => {
    const value = new Int16Array([0, 1, 2, 3, -4, -5, 6, 7, 8, 32767]);
    const buf = new ArrayBuffer(24);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, value.length);
    offset += 4;
    value.forEach(byte => {
        view.setInt16(offset, byte);
        offset += 2;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readInt16Array()).toEqual(value);
});
test('readUInt32Array', () => {
    const value = new Uint32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 12365535]);
    const buf = new ArrayBuffer(44);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, value.length);
    offset += 4;
    value.forEach(byte => {
        view.setUint32(offset, byte);
        offset += 4;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readUInt32Array()).toEqual(value);
});
test('readInt32Array', () => {
    const value = new Int32Array([0, 1, 2, 3, -4, -5, 6, 7, 8, 12332767]);
    const buf = new ArrayBuffer(44);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, value.length);
    offset += 4;
    value.forEach(byte => {
        view.setInt32(offset, byte);
        offset += 4;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readInt32Array()).toEqual(value);
});
test('readFloat32Array', () => {
    const value = new Float32Array([0, 1.123, 2, 3, -4.123, -5, 6, 7, 8, 12332.767]);
    const buf = new ArrayBuffer(44);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, value.length);
    offset += 4;
    value.forEach(byte => {
        view.setFloat32(offset, byte);
        offset += 4;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readFloat32Array()).toEqual(value);
});
test('readFloat64Array', () => {
    const value = new Float64Array([0, 1.123, 2, 3, -4.123, -5, 6, 7, 8, 12332.767]);
    const buf = new ArrayBuffer(84);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, value.length);
    offset += 4;
    value.forEach(byte => {
        view.setFloat64(offset, byte);
        offset += 8;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readFloat64Array()).toEqual(value);
});
test('readString', () => {
    const value = 'hello world';
    // @ts-ignore
    const uint8array = new TextEncoder("utf-8").encode(value);
    const buf = new ArrayBuffer(4 + uint8array.length);
    const view = new DataView(buf);
    let offset = 0;
    view.setUint32(offset, uint8array.length);
    offset += 4;
    uint8array.forEach(b => {
        view.setUint8(offset, b);
        offset += 1;
    });
    const br = new DataViewReader_1.DataViewReader(buf, 0);
    expect(br.readString()).toBe(value);
});
