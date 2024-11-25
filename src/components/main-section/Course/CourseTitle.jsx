import mathLogo from "../../../img/math-logo.png";

function CourseTitle({ title, description, courseLink }) {
  return (
    <a href={courseLink} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center w-[480px] gap-4">
        <img src={mathLogo} className="w-10 h-10" alt="" />

        <div className="flex flex-col gap-1 text-white">
          <p className="ledger-regular font-bold lowercase text-ellipsis overflow-hidden whitespace-nowrap w-full">
            {title}
          </p>
          <p className="text-ellipsis lowercase overflow-hidden whitespace-nowrap w-full -mt-1 lato-light">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default CourseTitle;
