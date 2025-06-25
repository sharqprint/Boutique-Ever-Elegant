// script.js
function copyPhoneNumber() {
  const phone = "+963 956 880 515";
  navigator.clipboard.writeText(phone).then(() => {
    alert("تم نسخ الرقم: " + phone);
  }, () => {
    prompt("فشل النسخ تلقائيًا، يرجى نسخ الرقم يدويًا:", phone);
  });
}