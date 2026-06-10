"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataViewCodec = void 0;
const DataViewReader_1 = require("./DataViewReader");
const DataViewWriter_1 = require("./DataViewWriter");
const dataViewCodec = {
    createWriter(byteLength) {
        return DataViewWriter_1.DataViewWriter.create(byteLength);
    },
    createReader(payload) {
        return new DataViewReader_1.DataViewReader(payload, 0);
    }
};
exports.dataViewCodec = dataViewCodec;
