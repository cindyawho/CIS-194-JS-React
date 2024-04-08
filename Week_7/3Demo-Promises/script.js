const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}

const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...');
    setTimeout(() => {
      resolve({ name: "Joe" });
    }, 2000);
  });
};

// checkAuth() returns a promise object, which invokes the "then" method that 
// fetches the returned value (true) from its resolve() to trigger the fetchUser()
// next ...
button.addEventListener("click", () => {
  checkAuth()
     .then(
        isAuth => {
          if (isAuth) {
            return fetchUser()
          }
        }
      )
      .then(
        user => {
          setText(user.name)
        }
      )
});
