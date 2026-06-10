"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataViewBinary = void 0;
const DataViewReader_1 = require("./DataViewReader");
const DataViewWriter_1 = require("./DataViewWriter");
const dataViewBinary = {
    createWriter(byteLength) {
        return DataViewWriter_1.DataViewWriter.create(byteLength);
    },
    createReader(payload) {
        return new DataViewReader_1.DataViewReader(payload);
    }
};
exports.dataViewBinary = dataViewBinary;
