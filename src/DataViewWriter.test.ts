import { DataViewWriter } from './DataViewWriter'

test('constructs from buffer', () => {
    const buf = new ArrayBuffer(1)
    const br = new DataViewWriter(buf, 0)
    expect(br.buffer).toBe(buf)
})

test('constructs from buffer at an offset', () => {
    const value = 123

    // fill with 0
    const buf = new ArrayBuffer(2)
    const view = new DataView(buf)
    // construct at an offset
    const bw = new DataViewWriter(buf, 1)
    // write (to the second byte)
    bw.writeInt8(value)

    // expect first byte to be zero and second byte to be the value we wrote
    expect(view.getUint8(0)).toBe(0)
    expect(view.getUint8(1)).toBe(value)
})

test('writeUInt8', () => {
    const value = 222
    const buf = new ArrayBuffer(1)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeUInt8(value)
    expect(view.getUint8(0)).toBe(value)
    expect(bw.offset).toBe(1)
})

test('writeInt8', () => {
    const value = 123
    const buf = new ArrayBuffer(1)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeInt8(value)
    expect(view.getInt8(0)).toBe(value)
    expect(bw.offset).toBe(1)
})


test('writeUInt16', () => {
    const value = 12345
    const buf = new ArrayBuffer(2)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeUInt16(value)
    expect(view.getUint16(0)).toBe(value)
    expect(bw.offset).toBe(2)
})

test('writeInt16', () => {
    const value = 12345
    const buf = new ArrayBuffer(2)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeInt16(value)
    expect(view.getInt16(0)).toBe(value)
    expect(bw.offset).toBe(2)
})

test('writeUInt32', () => {
    const value = 12345678
    const buf = new ArrayBuffer(4)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeUInt32(value)
    expect(view.getUint32(0)).toBe(value)
    expect(bw.offset).toBe(4)
})

test('writeInt32', () => {
    const value = 12345678
    const buf = new ArrayBuffer(4)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeInt32(value)
    expect(view.getInt32(0)).toBe(value)
    expect(bw.offset).toBe(4)
})



test('writeFloat32', () => {
    const value = 1.23456789 // this is past 32 bits btw
    const buf = new ArrayBuffer(4)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeFloat32(value)
    expect(view.getFloat32(0)).toBeCloseTo(value)
    expect(bw.offset).toBe(4)
})

test('writeFloat64', () => {
    const value = 1.23456789
    const buf = new ArrayBuffer(8)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeFloat64(value)
    expect(view.getFloat64(0)).toBeCloseTo(value)
    expect(bw.offset).toBe(8)
})

test('writeUInt8Array', () => {
    const value = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    const buf = new ArrayBuffer(14)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeUInt8Array(value)
    // first 4 bytes contain the array length
    expect(view.getUint32(0)).toBe(value.length)
    // subsequent bytes contain the array values
    expect(view.getUint8(4)).toBe(value[0])
    expect(view.getUint8(5)).toBe(value[1])
    expect(view.getUint8(6)).toBe(value[2])
    expect(view.getUint8(7)).toBe(value[3])
    expect(view.getUint8(8)).toBe(value[4])
    expect(view.getUint8(9)).toBe(value[5])
    expect(view.getUint8(10)).toBe(value[6])
    expect(view.getUint8(11)).toBe(value[7])
    expect(view.getUint8(12)).toBe(value[8])
    expect(view.getUint8(13)).toBe(value[9])
})

test('writeInt8Array', () => {
    const value = new Int8Array([0, 1, 2, 3, -4, -5, 6, 7, 8, 9])
    const buf = new ArrayBuffer(14)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeInt8Array(value)
    // first 4 bytes contain the array length
    expect(view.getUint32(0)).toBe(value.length)
    // subsequent bytes contain the array values
    expect(view.getInt8(4)).toBe(value[0])
    expect(view.getInt8(5)).toBe(value[1])
    expect(view.getInt8(6)).toBe(value[2])
    expect(view.getInt8(7)).toBe(value[3])
    expect(view.getInt8(8)).toBe(value[4])
    expect(view.getInt8(9)).toBe(value[5])
    expect(view.getInt8(10)).toBe(value[6])
    expect(view.getInt8(11)).toBe(value[7])
    expect(view.getInt8(12)).toBe(value[8])
    expect(view.getInt8(13)).toBe(value[9])
})

test('writeUInt16Array', () => {
    const value = new Uint16Array([0, 1, 333, 444, 1200, 5555, 2345, 1231, 9999, 65535])
    const buf = new ArrayBuffer(24)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeUInt16Array(value)
    // first 4 bytes contain the array length
    expect(view.getUint32(0)).toBe(value.length)
    // subsequent bytes contain the array values
    expect(view.getUint16(4)).toBe(value[0])
    expect(view.getUint16(6)).toBe(value[1])
    expect(view.getUint16(8)).toBe(value[2])
    expect(view.getUint16(10)).toBe(value[3])
    expect(view.getUint16(12)).toBe(value[4])
    expect(view.getUint16(14)).toBe(value[5])
    expect(view.getUint16(16)).toBe(value[6])
    expect(view.getUint16(18)).toBe(value[7])
    expect(view.getUint16(20)).toBe(value[8])
    expect(view.getUint16(22)).toBe(value[9])
})

test('writeInt16Array', () => {
    const value = new Int16Array([0, 1, 333, 444, -1200, -5555, 2345, 1231, 9999, 65535])
    const buf = new ArrayBuffer(24)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeInt16Array(value)
    // first 4 bytes contain the array length
    expect(view.getUint32(0)).toBe(value.length)
    // subsequent bytes contain the array values
    expect(view.getInt16(4)).toBe(value[0])
    expect(view.getInt16(6)).toBe(value[1])
    expect(view.getInt16(8)).toBe(value[2])
    expect(view.getInt16(10)).toBe(value[3])
    expect(view.getInt16(12)).toBe(value[4])
    expect(view.getInt16(14)).toBe(value[5])
    expect(view.getInt16(16)).toBe(value[6])
    expect(view.getInt16(18)).toBe(value[7])
    expect(view.getInt16(20)).toBe(value[8])
    expect(view.getInt16(22)).toBe(value[9])
})

test('writeUInt32Array', () => {
    const value = new Uint32Array([0, 1, 333, 444, 1200, 5555, 2345, 1231, 9999, 12365535])
    const buf = new ArrayBuffer(44)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeUInt32Array(value)
    // first 4 bytes contain the array length
    expect(view.getUint32(0)).toBe(value.length)
    // subsequent bytes contain the array values
    expect(view.getUint32(4)).toBe(value[0])
    expect(view.getUint32(8)).toBe(value[1])
    expect(view.getUint32(12)).toBe(value[2])
    expect(view.getUint32(16)).toBe(value[3])
    expect(view.getUint32(20)).toBe(value[4])
    expect(view.getUint32(24)).toBe(value[5])
    expect(view.getUint32(28)).toBe(value[6])
    expect(view.getUint32(32)).toBe(value[7])
    expect(view.getUint32(36)).toBe(value[8])
    expect(view.getUint32(40)).toBe(value[9])
})

test('writeInt32Array', () => {
    const value = new Int32Array([0, 1, 333, 444, -1200, -5555, 2345, 1231, 9999, 12365535])
    const buf = new ArrayBuffer(44)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeInt32Array(value)
    // first 4 bytes contain the array length
    expect(view.getUint32(0)).toBe(value.length)
    // subsequent bytes contain the array values
    expect(view.getInt32(4)).toBe(value[0])
    expect(view.getInt32(8)).toBe(value[1])
    expect(view.getInt32(12)).toBe(value[2])
    expect(view.getInt32(16)).toBe(value[3])
    expect(view.getInt32(20)).toBe(value[4])
    expect(view.getInt32(24)).toBe(value[5])
    expect(view.getInt32(28)).toBe(value[6])
    expect(view.getInt32(32)).toBe(value[7])
    expect(view.getInt32(36)).toBe(value[8])
    expect(view.getInt32(40)).toBe(value[9])
})

test('writeFloat32Array', () => {
    const value = new Float32Array([0, 1, 33.3, 44.4, -1.200, -5.555, 2.345, 1231, 9999, 1236.5535])
    const buf = new ArrayBuffer(44)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeFloat32Array(value)
    // first 4 bytes contain the array length
    expect(view.getUint32(0)).toBe(value.length)
    // subsequent bytes contain the array values
    expect(view.getFloat32(4)).toBe(value[0])
    expect(view.getFloat32(8)).toBe(value[1])
    expect(view.getFloat32(12)).toBe(value[2])
    expect(view.getFloat32(16)).toBe(value[3])
    expect(view.getFloat32(20)).toBe(value[4])
    expect(view.getFloat32(24)).toBe(value[5])
    expect(view.getFloat32(28)).toBe(value[6])
    expect(view.getFloat32(32)).toBe(value[7])
    expect(view.getFloat32(36)).toBe(value[8])
    expect(view.getFloat32(40)).toBe(value[9])
})

test('writeFloat64Array', () => {
    const value = new Float64Array([0, 1, 33.3, 44.4, -1.200, -5.555, 2.345, 1231, 9999, 1236.5535])
    const buf = new ArrayBuffer(84)
    const view = new DataView(buf)
    const bw = new DataViewWriter(buf, 0)
    bw.writeFloat64Array(value)
    // first 4 bytes contain the array length
    expect(view.getUint32(0)).toBe(value.length)
    // subsequent bytes contain the array values
    expect(view.getFloat64(4)).toBe(value[0])
    expect(view.getFloat64(12)).toBe(value[1])
    expect(view.getFloat64(20)).toBe(value[2])
    expect(view.getFloat64(28)).toBe(value[3])
    expect(view.getFloat64(36)).toBe(value[4])
    expect(view.getFloat64(44)).toBe(value[5])
    expect(view.getFloat64(52)).toBe(value[6])
    expect(view.getFloat64(60)).toBe(value[7])
    expect(view.getFloat64(68)).toBe(value[8])
    expect(view.getFloat64(76)).toBe(value[9])
})

