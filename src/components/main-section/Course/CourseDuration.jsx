import clockIcon from "../../../img/clock-icon.png";

function CourseDuration({ duration }) {
  return (
    <div class="flex items-center gap-4 min-w-32">
      <img src={clockIcon} class="w-8 h-8 invert" alt="" />

      <div class="flex flex-col gap-1 text-white">
        <p class="ledger-regular font-bold">{duration}</p>
      </div>
    </div>
  );
}

export default CourseDuration;
