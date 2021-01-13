function printTime() {
  const time = new Date();
  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  return `${hours}:${min}:${sec}`;
}

module.exports = { printTime };
