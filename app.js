const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
  timerFace: document.getElementById("timer-1"),
};

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
      this.timeFinish(time);
      //   console.log(timeComponents);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  timeFinish(time) {
    if (time < 0) {
      clearInterval(this.start);
      refs.timerFace.textContent = "Finish";
    }
  }
}
const timer = new Timer({
  selector: "#timer-1",
  targetDate: new Date("Sep 1, 2021"),
});
timer.start();
