document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById('enrollmentForm');
  var clearBtn = document.getElementById('clearBtn');
  var outputDetails = document.getElementById('outputDetails');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    var gender = document.querySelector('input[name="gender"]:checked');
    var genderValue = gender? gender.value : '';
    
    var skills = document.querySelectorAll('input[name="skills"]:checked');
    var skillsValues = [];
    skills.forEach(function(item) {
      skillsValues.push(item.value);
    });
    
    var image = document.getElementById('image').files[0];
    
    outputDetails.innerHTML = `
      <p>Name: <span>${name}</span></p>
      <p>Email: <span>${email}</span></p>
      <p>Gender: <span>${genderValue}</span></p>
      <p>Skills: <span>${skillsValues.join(', ')}</span></p>
      <p>Image: <img src="${URL.createObjectURL(image)}" width="150" alt="Student Image"></p>
    `;
    
    form.querySelectorAll('input, textarea, select').forEach(function(field) {
      field.disabled = true;
    });
  });

  clearBtn.addEventListener('click', function() {
    form.reset();
    outputDetails.innerHTML = '';
    form.querySelectorAll('input, textarea, select').forEach(function(field) {
      field.disabled = false;
    });
  });
});