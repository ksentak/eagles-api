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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var _ = require("lodash");
var fs = require("fs");
var path = require("path");
var grabUpdatedRoster = function () { return __awaiter(void 0, void 0, void 0, function () {
    var url, res, data, athletes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/21/roster';
                return [4 /*yield*/, axios_1["default"].get(url)];
            case 1:
                res = _a.sent();
                data = res.data;
                athletes = data.athletes;
                return [2 /*return*/, athletes];
        }
    });
}); };
var organizeRoster = function (roster) {
    var combinedRoster = _.reduce(roster, function (acc, curr) {
        return acc.concat(curr.items);
    }, []);
    var officialRoster = _.map(combinedRoster, function (player) {
        var _a, _b, _c;
        return ({
            id: player === null || player === void 0 ? void 0 : player.id,
            number: player === null || player === void 0 ? void 0 : player.jersey,
            first_name: player === null || player === void 0 ? void 0 : player.firstName,
            last_name: player === null || player === void 0 ? void 0 : player.lastName,
            position: _.lowerCase((_a = player === null || player === void 0 ? void 0 : player.position) === null || _a === void 0 ? void 0 : _a.abbreviation),
            height: player === null || player === void 0 ? void 0 : player.displayHeight,
            weight: _.toString(player === null || player === void 0 ? void 0 : player.weight),
            age: _.toString(player === null || player === void 0 ? void 0 : player.age),
            years_pro: _.toString((_b = player === null || player === void 0 ? void 0 : player.experience) === null || _b === void 0 ? void 0 : _b.years),
            college: (_c = player === null || player === void 0 ? void 0 : player.college) === null || _c === void 0 ? void 0 : _c.shortName
        });
    });
    return officialRoster;
};
var createRosterJson = function (jsonObj) {
    var filePath = path.join(__dirname, '..', '/src/officialRoster.json');
    fs.writeFile(filePath, JSON.stringify(jsonObj), function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Roster data has been written to officialRoster.json');
    });
};
var updateRoster = function () { return __awaiter(void 0, void 0, void 0, function () {
    var rawRoster, officialRoster;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, grabUpdatedRoster()];
            case 1:
                rawRoster = _a.sent();
                return [4 /*yield*/, organizeRoster(rawRoster)];
            case 2:
                officialRoster = _a.sent();
                createRosterJson(officialRoster);
                return [2 /*return*/];
        }
    });
}); };
updateRoster();
