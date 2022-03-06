"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = require("../../schemas/user");
const crypto_js_1 = require("crypto-js");
const router = express_1.default.Router();
router.use("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: "sqlite",
            database: ":memory:",
            dropSchema: true,
            entities: [user_1.User],
            synchronize: true,
            logging: false,
        });
        checkData(req.body);
        yield (0, typeorm_1.getRepository)(user_1.User).insert({
            username: req.body.username,
            password: (0, crypto_js_1.SHA256)(req.body.password),
        });
        let conn = (0, typeorm_1.getConnection)();
        conn.close();
        res.json({ message: "El usuario se creó correctamente" });
    }
    catch (err) {
        res.status(err.status).json(err.body);
    }
}));
exports.default = router;
function checkData(data) {
    if (typeof data.username !== "string")
        throw error(`username must be string but found ${typeof data.username}`);
    if (typeof data.password !== "string")
        throw error(`password must be string but found ${typeof data.password}`);
}
function error(msg) {
    return { status: 400, body: { message: "Bad Request", hint: msg } };
}
//# sourceMappingURL=index.js.map