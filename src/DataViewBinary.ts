import type { BinaryAdapter, BinaryPayload } from 'nengi'
import { DataViewReader } from './DataViewReader'
import { DataViewWriter } from './DataViewWriter'

const dataViewBinary: BinaryAdapter<BinaryPayload, ArrayBuffer> = {
    createWriter(byteLength: number) {
        return DataViewWriter.create(byteLength)
    },
    createReader(payload: BinaryPayload) {
        return new DataViewReader(payload)
    }
}

export { dataViewBinary }
