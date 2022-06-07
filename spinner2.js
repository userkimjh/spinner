const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']

spinner.forEach((spinnerIcon, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerIcon}   `)
  }, 100 + 200 * index)
});
