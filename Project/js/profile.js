// Get elements from the DOM
const nameInput = document.getElementById("name");
const guardianInput = document.getElementById("guardian");
const genderSelect = document.getElementById("gender");
const dobInput = document.getElementById("dob");
const ageInput = document.getElementById("age");
const bloodGroupInput = document.getElementById("blood-group");
const mailIdInput = document.getElementById("mail-id");
const altMailInput = document.getElementById("alt-mail");
const mobileNoInput = document.getElementById("mobile-no");
const altMobileNoInput = document.getElementById("alt-mobile-no");
const presentAddressInput = document.getElementById("present-address");
const permanentAddressInput = document.getElementById("permanent-address");
const sameAddressCheckbox = document.getElementById("same-address");
const saveBtn = document.getElementById("save-btn");
const updateBtn = document.getElementById("update-btn");

// Load profile data from local storage
let profile = JSON.parse(localStorage.getItem("profile")) || {};

// Set initial values of form inputs
nameInput.value = profile.name || "";
guardianInput.value = profile.guardian || "";
genderSelect.value = profile.gender || "";
dobInput.value = profile.dob || "";
ageInput.value = profile.age || "";
bloodGroupInput.value = profile.bloodGroup || "";
mailIdInput.value = profile.mailId || "";
altMailInput.value = profile.altMail || "";
mobileNoInput.value = profile.mobileNo || "";
altMobileNoInput.value = profile.altMobileNo || "";
presentAddressInput.value = profile.presentAddress || "";
permanentAddressInput.value = profile.permanentAddress || "";
sameAddressCheckbox.checked = profile.sameAddress || false;

// Calculate age from date of birth
function calculateAge(dateStr) {
  const today = new Date();
  const birthDate = new Date(dateStr);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Update age value when dob input changes
dobInput.addEventListener("change", () => {
  ageInput.value = calculateAge(dobInput.value);
});

// Set permanent address to present address when same address checkbox is checked
sameAddressCheckbox.addEventListener("change", () => {
  if (sameAddressCheckbox.checked) {
    permanentAddressInput.value = presentAddressInput.value;
  } else {
    permanentAddressInput.value = "";
  }
});

// Save profile data to local storage
function saveProfile() {
  const newProfile = {
    name: nameInput.value,
    guardian: guardianInput.value,
    gender: genderSelect.value,
    dob: dobInput.value,
    age: calculateAge(dobInput.value),
    bloodGroup: bloodGroupInput.value,
    mailId: mailIdInput.value,
    altMail: altMailInput.value,
    mobileNo: mobileNoInput.value,
    altMobileNo: altMobileNoInput.value,
    presentAddress: presentAddressInput.value,
    permanentAddress: permanentAddressInput.value,
    sameAddress: sameAddressCheckbox.checked,
  };
  localStorage.setItem("profile", JSON.stringify(newProfile));
  profile = newProfile;
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  saveProfile();
  alert("Profile saved successfully!");
}

// Handle update button click
function handleUpdate() {
  saveProfile();
  alert("Profile updated successfully!");
}

// Attach event listeners
saveBtn.addEventListener("click", handleSubmit);
updateBtn.addEventListener("click", handleUpdate);
