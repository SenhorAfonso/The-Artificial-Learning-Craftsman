import notebookIcon from "../../../img/notebook-icon.png";

function CourseAnnotation({ notebookLink }) {
  return (
    <a href={notebookLink} target="_blank" rel="noopener noreferrer">
      <div class="flex items-center gap-4 w-36">
        <img src={notebookIcon} class="w-10 h-10 invert" alt="" />

        <div class="flex flex-col gap-1 text-white">
          <p class="ledger-regular font-bold">notebook</p>
        </div>

      </div>
    </a>
  );
}

export default CourseAnnotation;
