
// GHL naptár magyarítás

document.querySelector('.widgets-step-1-container h4').textContent = "Válassz időpontot";

document.addEventListener('click', (event) => {
  const clickedSlot = event.target.closest('.widgets-time-slot');
  if (clickedSlot) {
    document.querySelectorAll('.btn.selected-slot > div').forEach(elem => {
      elem.textContent = "Kiválaszt";
    });
  }

  const slotBtn = event.target.closest('.btn.selected-slot');
  if (slotBtn) {
    setTimeout(() => {
      const infoElem = document.querySelector('h4.text-info');
      if (infoElem) {
        infoElem.textContent = "Kérlek add meg az adataidat";
      }
    }, 100);
  }
  
  const conf = event.target.closest('.confirmation-message');
  if (conf) {
    setTimeout(() => {
        conf.textContent = "Az időpontfoglalásod elküldve";
    }, 100);
  }
  
});

document.querySelector('#form-first_name label').textContent = "Keresztnév";
document.querySelector('#form-last_name label').textContent = "Vezetéknév";
document.querySelector('#form-phone label').textContent = "Telefonszám";
document.querySelector('.calendar_notes label').textContent = "További információk";
document.querySelector('.calendar_notes textarea').placeholder = "Megjegyzés a kezeléssel kapcsolatban";


