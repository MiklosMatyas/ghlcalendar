
// GHL naptár magyarítás

document.querySelector('.widgets-step-1-container h4').textContent = "Válassz időpontot";

// Összes .widgets-time-slot elem kiválasztása
document.querySelectorAll('.widgets-time-slot').forEach(slot => {
  slot.addEventListener('click', () => {
    // Minden .btn .selected-slot > div elem szövegének átírása
    document.querySelectorAll('.btn .selected-slot > div').forEach(elem => {
      elem.textContent = "Kiválaszt";
    });
  });
});


document.querySelector('h4.text-info').textContent = "Kérlek add meg az adataidat";
document.querySelector('#form-first_name label').textContent = "Keresztnév";
document.querySelector('#form-last_name label').textContent = "Vezetéknév";
document.querySelector('#form-phone label').textContent = "Telefonszám";
document.querySelector('.calendar_notes label').textContent = "További információk";
document.querySelector('.calendar_notes textarea').placeholder = "Megjegyzés a kezeléssel kapcsolatban";


