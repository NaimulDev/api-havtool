"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAge = void 0;
const calculateAge = (req, res) => {
    const { birthDate } = req.body;
    if (!birthDate) {
        return res.status(400).json({ error: "Birth date is required" });
    }
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    res.json({ age });
};
exports.calculateAge = calculateAge;
