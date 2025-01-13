"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["NOT_STARTED"] = 0] = "NOT_STARTED";
    Status[Status["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    Status[Status["COMPLETED"] = 2] = "COMPLETED";
    Status[Status["CANCELLED"] = 3] = "CANCELLED";
})(Status || (exports.Status = Status = {}));
