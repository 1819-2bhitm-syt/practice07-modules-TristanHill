const crypto = require('crypto');

let decrypting = function(plaintext,password) {
    const decipher = crypto.createDecipher('aes192', password);
    const encrypted =plaintext;
    let decrypted;
    try {
        decrypted = decipher.update(encrypted, 'hex', 'utf8');
    }catch(err){
        console.error('HASH-Code invalis!');
    }
    try {
        decrypted += decipher.final('utf8');
    }catch (err) {
        console.error('Authentication failed!');
    }
    return decrypted;
};

module.exports=decrypting;