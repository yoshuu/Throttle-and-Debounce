console.log("test0");
const throttle = (callback, time = 1000) => {
  //閉包存起來
  let timer;

  return () => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      callback();

      timer = null;
    }, time);
  };
};

const scroll = () => {
  let clientHeight = document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;

  console.log("clientHeight", clientHeight);
  console.log("scrollTop", scrollTop);
  console.log("scrollHeight", scrollHeight);

  if ((scrollTop + clientHeight) / scrollHeight >= 0.9) {
    for (let i = 0; i <= 5; i++) {
      let p = document.createElement("p");
      p.textContent = "新增新增新增";
      main.appendChild(p);
    }
  }
};

console.log("test");

const main = document.querySelector(".main");

// let c = document.documentElement.clientHeight;
// console.log(c);

document.addEventListener("scroll", throttle(scroll));
