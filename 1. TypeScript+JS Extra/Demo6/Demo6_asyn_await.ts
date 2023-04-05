// 1 Check Email
async function checkEmail() {
  // Call API
  // Ajax
  let resutl = true;
  return resutl;
}

// 2. Check Username
async function checkUsername() {
  // Call API
  // Ajax
  let resutl = true;
  return resutl;
}

// 3. Create Accont
async function createAccount() {
  // Call API
  // Ajax
  let resutl = true;
  return resutl;
}

// Sử dụng các hàm
async function creeateNewAccount() {
  let resutlCheckEmail = await checkEmail();

  if (resutlCheckEmail) {
    return;
  }
  let resutlCheckUsername = await checkUsername();
  if (resutlCheckUsername) {
    return;
  }
  let resultCreate = await createAccount();
  if (resultCreate) {
    console.log("Tạo mới thành công!");
  } else {
    console.log("Tạo mới không thành công!");
  }
}

creeateNewAccount();
