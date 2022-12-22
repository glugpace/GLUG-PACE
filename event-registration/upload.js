
var form = document.getElementById('sheetdb-form');
// let url = "https://script.google.com/macros/s/AKfycbxaKqaq29ZiTz7Hpo5LAJTOUG3bP0FR7eyGGOMJAKkvZfTd2QFjVxCvoAuIM4fSOxkzWQ/exec";
// let url = "https://script.google.com/macros/s/AKfycbycueg95dXr4uMkHAAGUOCQBdjeAqFck2qWiqiD9X2l3mbvL2MBlMzpGMlRGC7XlU93mg/exec";
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   // Swal.fire({
//   //   title: 'Loading...',
//   //   allowEscapeKey: false,
//   //   allowOutsideClick: false,
//   //   showConfirmButton: false,
//   //   didOpen: () => {
//   //     Swal.showLoading();
//   //   }
//   // });
//   let data = {
//     name:document.getElementById('name').value,
//     email:document.getElementById('email').value,
//     phone:document.getElementById('phone').value,
//     usn:document.getElementById('usn').value,
//     sem:document.getElementById('Sem').value,
//     dep:document.getElementById('Department').value,
//     event:document.getElementById('Event').value,
//     transid:document.getElementById('transid').value,
//     img:obj
//   }
//   console.log(data);
//   Swal.fire('Uploading please wait for a moment')
//   fetch(url, {
//       method : "POST",
//       body:JSON.stringify(data)
//       // body: new FormData(document.getElementById("sheetdb-form")),

//   }).then(
//       response => response.text()
//   ).then((html) => {
//     Swal.fire(
//       'Thank you for registoring',
//       'your information is successfully stored',
//       'success'
//     )
//     // fetch(url,{
//     //   method:"POST",
//     //   body:JSON.stringify(obj)
//     // })
//     // .then(r => r.text())
//     // .then(data => {
//     //   form.reset();
//     //   window.open('success.html','_self')
//     // })
//   });
//   document.getElementById("sheetdb-form").reset();
// });


let file = document.getElementById('picture');
let obj;
let res,spt;
file.addEventListener('change',()=>{
  let fr = new FileReader;
  fr.addEventListener('loadend',()=>{
    res = fr.result;
    spt = res.split("base64,")[1];
    obj = {
      base64:spt,
      type:file.files[0].type,
      name:file.files[0].name
    }
    // let a = JSON.stringify(obj);
    // let b = JSON.parse(a);
    // console.log(b.type)
  })
  fr.readAsDataURL(file.files[0]);
})



console.log("hiii")
