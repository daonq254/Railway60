// Có 1 yêu càu Call API để làm gì đấy
// Khai báo
let callAPIDoSth = new Promise((resolve, reject) => {
    // Call API
    // Ajax
    //   result = true: Email tồn tại, false Email chưa tồn tại.
    let resutl = false;
    if (resutl) {
        reject("Email đã tồn tại");
    }
    else {
        resolve("Email chưa tồn tại");
    }
});
// Thực hiện
callAPIDoSth.then((msgResolve) => {
    console.log(msgResolve);
}, // Thực thi trong trường hợp resolve
(msgReject) => {
    console.log(msgReject);
    // Dừng chương trình
} // Thực thi trong trường hợp reject
);
