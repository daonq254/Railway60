// 1 Check Email
function checkEmail() {
  let promiseCheckEmail = new Promise((resolve, reject) => {
    // Call API
    // Ajax
    let resutl = true;

    if (resutl) {
      reject("Email đã tồn tại");
    } else {
      resolve("Email chưa tồn tại");
    }
  });

  return promiseCheckEmail;
}

// 2. Check Username
function checkUsername() {
  let promiseCheckUsername = new Promise((resolve, reject) => {
    // Call API
    // Ajax
    let resutl = false;

    if (resutl) {
      reject("Username đã tồn tại");
    } else {
      resolve("Username chưa tồn tại");
    }
  });

  return promiseCheckUsername;
}

// 3. Create Accont
function createAccount() {
  let promiseAccount = new Promise((resolve, reject) => {
    // Call API
    // Ajax
    let resutl = false;

    if (resutl) {
      resolve("Tạo mới thành công");
    } else {
      reject("Tạo mới không thành công");
    }
  });

  return promiseAccount;
}

checkEmail()
  .then((msgResolve) => {
    console.log(msgResolve);
    return checkUsername();
  })
  .then((msgResolve) => {
    console.log(msgResolve);
    return createAccount();
  })
  .then((msgResolve) => {
    console.log(msgResolve);
  })
  .catch((msg) => {
    console.log(msg);
  });
