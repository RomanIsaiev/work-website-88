// ****************************************************************

function getTimeRemaining(endtime) {
  const t = endtime - new Date().getTime();
  const milliseconds = Math.floor((t % 1000) / 10);
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    total: t,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };
}

function initializeClocks(endtime) {
  const clocks = document.querySelectorAll('.countdown');

  function updateClocks() {
    const t = getTimeRemaining(endtime);

    clocks.forEach(clock => {
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');
      const millisecondsSpan = clock.querySelector('.milliseconds');

      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      millisecondsSpan.innerHTML = ('0' + t.milliseconds).slice(-2);
    });

    if (t.total <= 0) {
      clearInterval(timeinterval);
      clocks.forEach(clock => {
        clock.querySelector('.minutes').innerHTML = '00';
        clock.querySelector('.seconds').innerHTML = '00';
        clock.querySelector('.milliseconds').innerHTML = '00';
      });
    }
  }

  updateClocks();
  const timeinterval = setInterval(updateClocks, 10);
}

const deadline = new Date(Date.parse(new Date()) + 3 * 60 * 1000); // 5 минут
initializeClocks(deadline);

// ************************************************************************
