const summaryCategoryClasses = {
  reaction: "bg-red-50 text-[#F55]",
  memory: "bg-yellow-50 text-[#FFB21E]",
  verbal: "bg-green-50 text-[#00BB8F]",
  visual: "bg-violet-50 text-[#1125D6]",
};

const fetchSummary = async () => {
  try {
    const res = await fetch("../data.json");
    if (!res.ok) throw new Error("could not fetch the data");
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const renderSummary = (data) => {
  document.getElementById("summary-list").innerHTML = data
    .map(
      (item) =>
        `
      <div class="flex items-center justify-between gap-3 min-h-[50px] p-4 rounded-lg ${
        summaryCategoryClasses[item.category.toLowerCase()]
      }">
        <div class="flex items-center gap-x-3">
          <img src="/src/assets/images/${item.icon}" class="w-5" />
          <p>${item.category}</p>
        </div>
        <div class="flex items-center gap-x-1.5">
          <span class="font-bold text-slate-900">${item.score}</span>
          <span class="leading-none text-slate-400">&sol;</span>
          <span class="text-slate-400 -ml-1">100</span>
        </div>
      </div>
    `
    )
    .join("");
};

fetchSummary().then((data) => {
  renderSummary(data);
});
