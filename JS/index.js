let register = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user, "here is dara");
    })
    .catch((err) => {
      alert(err.message);
    });
};

let login = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      console.log(user.email);
    })
    .catch((err) => {
      alert(err.message);
    });
};
