import mathLogo from "../../../img/math-logo.png";

function LearningPathItem({ subject }) {
  return (
    <div class="flex items-center w-10/12 h-14 gap-4 mt-4 px-4 py-4 shadow-xl shadow-zinc-950 rounded-md border-[1px] border-[#b00b69] hover:translate-y-1 duration-200">
      <img src={mathLogo} class="w-8 h-8" alt="" />
      <a href={subject}>
        <h2 class="uppercase tracking-widest text-lg lato-light text-white lato-light">
          {subject}
        </h2>
      </a>
    </div>
  );
}

export default LearningPathItem;
