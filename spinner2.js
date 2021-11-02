const spin = '|/-/-|\n';

const spinner = function(sentence, timeout) {
  let newTime = 0

  for (const char of sentence) {
    newTime += timeout

    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, newTime);
  }

}

spinner(spin, 300)