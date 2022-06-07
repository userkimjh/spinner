let time = 100;
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']

spinner.forEach((spinnerIcon) => {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerIcon}   `)
  }, time)
  time += 300
});
