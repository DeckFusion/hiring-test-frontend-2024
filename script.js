document.addEventListener('DOMContentLoaded', function() {
  let currentStep = 1;
  const form = document.getElementById('brand-form');
  const steps = document.querySelectorAll('.step');
  const nextButtons = document.querySelectorAll('.next-step');
  const prevButtons = document.querySelectorAll('.prev-step');
  const progressBar = document.getElementById('progress');

  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        steps[currentStep - 1].classList.add('hidden');
        currentStep++;
        if (currentStep <= steps.length) {
          steps[currentStep - 1].classList.remove('hidden');
        }
        updateProgressBar();
      }
    });
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      steps[currentStep - 1].classList.add('hidden');
      currentStep--;
      if (currentStep > 0) {
        steps[currentStep - 1].classList.remove('hidden');
      }
      updateProgressBar();
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      saveFormValues();
      Toastify({
        text: 'Brand created successfully!',
        duration: 3000,
        gravity: 'top',
        close: true,
        className: 'toastify-success'
      }).showToast();
      form.reset();
      currentStep = 1;
      steps.forEach(step => step.classList.add('hidden'));
      steps[currentStep - 1].classList.remove('hidden');
      clearImagePreviews();
      updateProgressBar();
    }
  });

  function validateStep(step) {
    let valid = true;
    const inputs = steps[step - 1].querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const errorMessage = input.nextElementSibling;
      if (!input.value.trim()) {
        valid = false;
        input.classList.add('border-red-500');
        if (errorMessage) {
          errorMessage.textContent = 'This field is required.';
          errorMessage.classList.remove('hidden');
        }
      } else {
        if (input.id === 'brand-fonts' && !input.validity.valid) {
          valid = false;
          input.classList.add('border-red-500');
          if (errorMessage) {
            errorMessage.textContent = 'Please enter numeric digits only.';
            errorMessage.classList.remove('hidden');
          }
        } else {
          input.classList.remove('border-red-500');
          if (errorMessage) {
            errorMessage.textContent = '';
            errorMessage.classList.add('hidden');
          }
        }
      }
    });
    return valid;
  }

  steps.forEach(step => {
    const inputs = step.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('border-red-500');
        const errorMessage = input.nextElementSibling;
        if (errorMessage) {
          errorMessage.textContent = '';
          errorMessage.classList.add('hidden');
        }
      });
    });
  });

  function saveFormValues() {
    const formData = {
      companyName: document.getElementById('company-name').value,
      companyLogo: document.getElementById('company-logo').files[0]?.name,
      brandColors: document.getElementById('brand-colors').value,
      brandFonts: document.getElementById('brand-fonts').value,
      tagline: document.getElementById('tagline').value,
      brandDescription: document.getElementById('brand-description').value,
      campaignPlatform: document.getElementById('campaign-platform').value,
      socialMedia: document.getElementById('social-media').value,
      missionStatement: document.getElementById('mission-statement').value,
      targetAudience: document.getElementById('target-audience').value,
      brandVoice: document.getElementById('brand-voice').value,
      brandGuidelines: document.getElementById('brand-guidelines').files[0]?.name
    };
    localStorage.setItem('brandFormData', JSON.stringify(formData));
  }

  const companyLogoInput = document.getElementById('company-logo');
  companyLogoInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const errorMessage = companyLogoInput.nextElementSibling;

    if (file) {
      if (errorMessage) {
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
      }
      const reader = new FileReader();
      reader.onload = function(e) {
        const existingPreview = document.getElementById('company-logo-preview');
        if (existingPreview) {
          existingPreview.src = e.target.result;
        } else {
          const img = document.createElement('img');
          img.id = 'company-logo-preview';
          img.src = e.target.result;
          img.classList.add('mt-2', 'w-32', 'h-32', 'object-cover', 'border', 'border-gray-300', 'rounded-md');
          companyLogoInput.parentNode.appendChild(img);
        }
      };
      reader.readAsDataURL(file);
    }
  });

  function clearImagePreviews() {
    const preview = document.getElementById('company-logo-preview');
    if (preview) {
      preview.remove();
    }
  }

  const brandColorsInput = document.getElementById('brand-colors');
  brandColorsInput.addEventListener('change', function(event) {
    const colorCode = event.target.value;
    const errorMessage = brandColorsInput.nextElementSibling;
    if (errorMessage) {
      errorMessage.textContent = '';
      errorMessage.classList.add('hidden');
    }
    updateColorPicker(colorCode);
  });

  function updateColorPicker(colorCode) {
    const colorPreview = document.getElementById('brand-color-preview');
    if (colorPreview) {
      colorPreview.style.backgroundColor = colorCode;
    } else {
      const div = document.createElement('div');
      div.id = 'brand-color-preview';
      div.style.backgroundColor = colorCode;
      div.classList.add('mt-2', 'w-16', 'h-16', 'border', 'border-gray-300', 'rounded-md');
      brandColorsInput.parentNode.appendChild(div);
    }
  }

  function updateProgressBar() {
    // const percentage = (currentStep / steps.length) * 100;
    const percentage = (currentStep - 1) * (100 / (steps.length - 1));
    progressBar.style.width = `${percentage}%`;
  }
});


