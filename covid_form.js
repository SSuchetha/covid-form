(function()
{
  const form = document.querySelector('#form');
  const checkboxes = form.querySelectorAll('input[type=checkbox]');
  const checkboxLength = checkboxes.length;
  const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

  function init() 
  {
      if (firstCheckbox) 
      {
          for (let i = 0; i < checkboxLength; i++) 
          {
              checkboxes[i].addEventListener('change', checkValidity);
          }
          checkValidity();
      }
  }

  function isChecked() 
  {
      for (let i = 0; i < checkboxLength; i++) 
      {
          if (checkboxes[i].checked) 
            return true;
      }
      return false;
  }

  function checkValidity() 
  {
      const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
      firstCheckbox.setCustomValidity(errorMessage);
  }

  init();

  const radio = form.querySelectorAll('input[type=radio]');
  const radioLength = radio.length;
  const firstradio = radioLength > 0 ? radio[0] : null;

  function init1() 
  {
      if (firstradio) 
      {
          for (let i = 0; i < radioLength; i++) 
          {
              radio[i].addEventListener('change', checkValidity1);
          }
          checkValidity1();
      }
  }

  function isChecked1() 
  {
      for (let i = 0; i < radioLength; i++) 
      {
          if (radio[i].checked) 
            return true;
      }
      return false;
  }

  function checkValidity1() 
  {
      const errorMessage1 = !isChecked1() ? 'At least one radio button must be selected.' : '';
      firstradio.setCustomValidity(errorMessage1);
  }

  init1();
  return true;

})();