class Timer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    // const startTime = Date.now();
    setInterval(() => {
      const currentTime = this.targetDate.getTime();
      const timeDelta = currentTime - Date.now();
      const timeComponents = this.getTimeComponents(timeDelta);
      this.updateInterface(timeComponents);
      //   console.log(timeComponents);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }

  updateInterface({ days, hours, mins, secs }) {
    const CountdownTimer = document.querySelector(this.selector).children;

    CountdownTimer[0].childNodes[1].innerText = days < 10 ? `0${days}` : days;
    CountdownTimer[1].childNodes[1].innerText =
      hours < 10 ? `0${hours}` : hours;
    CountdownTimer[2].childNodes[1].innerText = mins < 10 ? `0${mins}` : mins;
    CountdownTimer[3].childNodes[1].innerText = secs < 10 ? `0${secs}` : secs;
  }
}
const timer = new Timer({
  selector: "#timer-1",
  targetDate: new Date("Aug 19, 2021"),
});
// timer.start();
