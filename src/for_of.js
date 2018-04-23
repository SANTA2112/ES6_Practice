let browsers = ["Chrome", "FireFox", "Edge", "Safari", "Opera"];

for (let browser in browsers) {
  console.log(browser);
}

for (let index in browsers) {
  console.log(browsers[index]);
}

for (let index of browsers) {
  console.log(index);
}


console.log(browsers);
