document.getElementById('applicationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // ป้องกันการ reload หน้า

  // ตรวจสอบข้อมูลเบื้องต้น
  const fullName = document.getElementById('fullName').value;
  const idCard = document.getElementById('idCard').value;

  if (idCard.length !== 13 || isNaN(idCard)) {
    alert('กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง (13 หลัก)');
    return;
  }

  // แสดงข้อความยืนยัน
  document.getElementById('applicationForm').style.display = 'none';
  document.getElementById('confirmation').style.display = 'block';
});
