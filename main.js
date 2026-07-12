const files = ['file1.bin', 'file2.bin', 'file3.bin', 'file4.bin', 'file5.bin'];
async function init() {
    try {
        await Promise.all(files.map(f => fetch(f)));
        window.location.href = "info.html";
    } catch (e) {
        document.getElementById('msg').innerText = "เฮ้ย เพื่อน เน็ตไม่มีหรือไฟล์มีปัญหา!";
    }
}
init();
