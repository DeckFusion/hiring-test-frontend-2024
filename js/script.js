// step 1
function step1SaveAllValues() {
  const step1Fields = document.querySelectorAll('#form-step-1 input');
  step1Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  const step2Fields = document.querySelectorAll('#form-step-2 input[type="color"]');
  step2Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  const step3Fields = document.querySelectorAll('#form-step-3 select');
  step3Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  const step4Fields = document.querySelectorAll('#form-step-4 textarea');
  step4Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });
}

function step1LoadAllValues() {
  const step1Fields = document.querySelectorAll('#form-step-1 input');
  step1Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });
}

function step1ValidateForm() {
  const form = document.getElementById('form-step-1');
  const companyName = form.querySelector('#companyName').value;
  const companySlogan = form.querySelector('#companySlogan').value;
  const errorMessage = document.getElementById('error-message');

  if (!companyName) {
      errorMessage.textContent = 'Please enter your company name.';
      errorMessage.style.display = 'block';
      return false;
  }

  if (!companySlogan) {
      errorMessage.textContent = 'Please enter your company slogan.';
      errorMessage.style.display = 'block';
      return false;
  }

  errorMessage.style.display = 'none';
  return true;
}

function step1HandleNextClick(event) {
  if (step1ValidateForm()) {
      step1SaveAllValues();
      htmx.ajax('GET', 'html/step2.html', '#form-container');
  }
}


// Step 2
function step2SaveLogo() {
  const fileInput = document.getElementById('logo');
  const file = fileInput.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          localStorage.setItem('logo', e.target.result);
          imgShow(e.target.result)
      };
      reader.readAsDataURL(file);
  }
}

function step2SaveAllValues() {
  // Save step 1 values
  const step1Fields = document.querySelectorAll('#form-step-1 input');
  step1Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 2 values
  const step2Fields = document.querySelectorAll('#form-step-2 input[type="color"]');
  step2Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 3 values if any
  const step3Fields = document.querySelectorAll('#form-step-3 select');
  step3Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 4 values if any
  const step4Fields = document.querySelectorAll('#form-step-4 textarea');
  step4Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });
}

function step2LoadAllValues() {
  // Load step 1 values
  const step1Fields = document.querySelectorAll('#form-step-1 input');
  step1Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });

  // Load step 2 values
  const step2Fields = document.querySelectorAll('#form-step-2 input[type="color"]');
  step2Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });

  // Load logo
  const logoData = localStorage.getItem('logo');
  if (logoData) {
      imgShow(logoData)
  }
}

function imgShow(img){
  const logoImage = document.createElement('img');
  logoImage.src = img;
  logoImage.style.width = '200px';
  logoImage.style.height = '200px';
  document.getElementById('logo').insertAdjacentElement('afterend', logoImage);
}

function step2ValidateForm() {
  const form = document.getElementById('form-step-2');
  const logo = form.querySelector('#logo').value[0];
  const brandColor1 = form.querySelector('#brandColor1').value;
  const brandColor2 = form.querySelector('#brandColor2').value;
  const errorMessage = document.getElementById('error-message');

  if (!localStorage.getItem('logo') && !logo) {
      errorMessage.textContent = 'Please upload your company logo.';
      errorMessage.style.display = 'block';
      return false;
  }

  if (!brandColor1) {
      errorMessage.textContent = 'Please enter your company brand color 1';
      errorMessage.style.display = 'block';
      return false;
  }

  if (!brandColor2) {
      errorMessage.textContent = 'Please enter your company brand color 2';
      errorMessage.style.display = 'block';
      return false;
  }

  errorMessage.style.display = 'none';
  return true;
}

function step2HandleNextClick(event) {
  if (step2ValidateForm()) {
      step2SaveAllValues();
      htmx.ajax('GET', 'html/step3.html', '#form-container');
  }
}



// Step 3

function step3SaveAllValues() {
  // Save step 1 values
  const step1Fields = document.querySelectorAll('#form-step-1 input');
  step1Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 2 values
  const step2Fields = document.querySelectorAll('#form-step-2 input[type="color"]');
  step2Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 3 values
  const step3Fields = document.querySelectorAll('#form-step-3 select');
  step3Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 4 values if any
  const step4Fields = document.querySelectorAll('#form-step-4 textarea');
  step4Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });
}

function step3LoadAllValues() {
  // Load step 1 values
  const step1Fields = document.querySelectorAll('#form-step-1 input');
  step1Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });

  // Load step 2 values
  const step2Fields = document.querySelectorAll('#form-step-2 input[type="color"]');
  step2Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });

  // Load step 3 values
  const step3Fields = document.querySelectorAll('#form-step-3 select');
  step3Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });
}

function step3ValidateForm() {
  const form = document.getElementById('form-step-3');
  const headingFont = form.querySelector('#headingFont').value;
  const bodyFont = form.querySelector('#bodyFont').value;
  const errorMessage = document.getElementById('error-message');

  if (!headingFont) {
      errorMessage.textContent = 'Please select a heading font.';
      errorMessage.style.display = 'block';
      return false;
  }

  if (!bodyFont) {
      errorMessage.textContent = 'Please select a body font.';
      errorMessage.style.display = 'block';
      return false;
  }

  errorMessage.style.display = 'none';
  return true;
}

function step3HandleNextClick() {
  if (step3ValidateForm()) {
      step3SaveAllValues();
      htmx.ajax('GET', 'html/step4.html', '#form-container');
  }
}

// step 4

function step4SaveAllValues() {
  // Save step 1 values
  const step1Fields = document.querySelectorAll('#form-step-1 input');
  step1Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 2 values
  const step2Fields = document.querySelectorAll('#form-step-2 input[type="color"]');
  step2Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 3 values
  const step3Fields = document.querySelectorAll('#form-step-3 select');
  step3Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });

  // Save step 4 values
  const step4Fields = document.querySelectorAll('#form-step-4 textarea');
  step4Fields.forEach(field => {
      localStorage.setItem(field.id, field.value);
  });
}

function step4LoadAllValues() {
  // Load step 1 values
  const step1Fields = document.querySelectorAll('#form-step-1 input');
  step1Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });

  // Load step 2 values
  const step2Fields = document.querySelectorAll('#form-step-2 input[type="color"]');
  step2Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });

  // Load step 3 values
  const step3Fields = document.querySelectorAll('#form-step-3 select');
  step3Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });

  // Load step 4 values
  const step4Fields = document.querySelectorAll('#form-step-4 textarea');
  step4Fields.forEach(field => {
      if (localStorage.getItem(field.id)) {
          document.getElementById(field.id).value = localStorage.getItem(field.id);
      }
  });
}
function step4ValidateForm() {
  const form = document.getElementById('form-step-4');
  const additionalNotes = form.querySelector('#additionalNotes').value.trim();
  const errorMessage = document.getElementById('error-message');

  if (!additionalNotes) {
      errorMessage.textContent = 'Please provide additional notes.';
      errorMessage.style.display = 'block';
      return false;
  }

  errorMessage.style.display = 'none';
  return true;
}

function step4HandleNextClick() {
  if (step4ValidateForm()) {
      step4SaveAllValues();
      htmx.ajax('GET', 'html/result.html', '#form-container');
  }
}


// summary
function loadSummaryValues() {
  document.getElementById('companyNameSummary').textContent = localStorage.getItem('companyName');
  document.getElementById('companySloganSummary').textContent = localStorage.getItem('companySlogan');
  document.getElementById('headingFontSummary').textContent = localStorage.getItem('headingFont');
  document.getElementById('bodyFontSummary').textContent = localStorage.getItem('bodyFont');
  document.getElementById('additionalNotesSummary').textContent = localStorage.getItem('additionalNotes');

  // Display brand colors
  document.getElementById('brandColor1Summary').style.backgroundColor = localStorage.getItem('brandColor1');
  document.getElementById('brandColor2Summary').style.backgroundColor = localStorage.getItem('brandColor2');

  // Display logo
  const logoData = localStorage.getItem('logo');
  if (logoData) {
      document.getElementById('logoSummary').src = logoData;
  }
}

function finishAndRestart() {
  localStorage.clear();
}
