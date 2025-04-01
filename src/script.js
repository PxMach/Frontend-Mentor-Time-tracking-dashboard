fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    const buttons = document.querySelectorAll("button");
    const sections = document.querySelectorAll("section");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const timeframe = button.textContent.toLowerCase();
        sections.forEach((section, index) => {
          const activity = data[index];
          const current = activity.timeframes[timeframe].current;
          const previous = activity.timeframes[timeframe].previous;
          section.querySelector("h2").textContent = `${current}hrs`;
          section.querySelector("span").textContent = `Last ${
            timeframe === "daily"
              ? "Day"
              : timeframe === "weekly"
              ? "Week"
              : "Month"
          } - ${previous}hrs`;
        });
      });
    });
  });
