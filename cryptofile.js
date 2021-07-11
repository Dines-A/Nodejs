const crypto1 = require("crypto")
const hash1= crypto1.createHash("sha256").update("Man oh man do I love node!").digest("hex");
console.log(hash1);

// const encrypt = require('crypto');
// const txt = encrypt.createHmac("Dinesh").update("i like node js").digest("hex");
// console.log(txt);
// idk why its not working...