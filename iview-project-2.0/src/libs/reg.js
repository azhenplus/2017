/*
* @desc  判断是否为6位字母图片的验证码
* @param */

function isVerification(str) {
    return /^[a-zA-Z]{6}$/.test(str)
}

/*
* @desc  判断是否为6位字母的短信验证码
* @param */

function isSMSVerificantion(str) {
    return /^[0-9]{6}$/.test(str)
}

/*
* @desc  判断是否为6位字母的短信验证码
* @param */

function isPassword(str) {
    return /^[\w\?%&=\-_]{6,18}$/.test(str)
}
module.exports = {
    isVerification: isVerification,
    isSMSVerificantion:isSMSVerificantion,
    isPassword:isPassword
};