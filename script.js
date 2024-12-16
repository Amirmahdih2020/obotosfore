// script.js
document.getElementById('obfuscateBtn').addEventListener('click', function() {
    // گرفتن کد وارد شده توسط کاربر
    const inputCode = document.getElementById('inputCode').value;

    if (inputCode.trim() === "") {
        alert("لطفاً کد جاوا اسکریپت را وارد کنید.");
        return;
    }

    // انجام عملیات محو کردن کد با استفاده از کتابخانه javascript-obfuscator
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(inputCode).getObfuscatedCode();

    // نمایش کد محو شده در جعبه متن
    document.getElementById('outputCode').value = obfuscatedCode;
});