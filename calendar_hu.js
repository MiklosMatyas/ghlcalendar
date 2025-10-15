
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
      
      const firstNameLabel = document.querySelector('#form-first_name label');
      if (firstNameLabel) firstNameLabel.textContent = "Keresztnév";

      const lastNameLabel = document.querySelector('#form-last_name label');
      if (lastNameLabel) lastNameLabel.textContent = "Vezetéknév";

      const phoneLabel = document.querySelector('#form-phone label');
      if (phoneLabel) phoneLabel.textContent = "Telefonszám";

      const notesLabel = document.querySelector('.calendar_notes label');
      if (notesLabel) notesLabel.textContent = "További információk";

      const notesTextarea = document.querySelector('.calendar_notes textarea');
      if (notesTextarea) notesTextarea.placeholder = "Megjegyzés a kezeléssel kapcsolatban";

      const termsText = document.querySelector('.terms-text-container');
      if (termsText) termsText.placeholder = "Megerősítem, hogy az általam megadott elérhetőségeken szeretnék tartalmat kapni ettől a vállalkozástól.";
      
      const termsError = document.querySelector('.terms-and-conditions .error');
      if (termsError) termsError.placeholder = "Kérjük, fogadd el a feltételeket.";
            
    }, 100);
  }
  
  const conf = event.target.closest('.confirmation-message');
  if (conf) {
    setTimeout(() => {
        conf.textContent = "Az időpontfoglalásod elküldve";
    }, 100);
  }
  
});



