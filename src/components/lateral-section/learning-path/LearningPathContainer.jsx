import LearningPathItem from "./LearningPathItem";
import pageContent from "../../../page-content";

function LearningPathContainer() {
  const learningPath = pageContent["learning-path"];

  return (
    <div className="flex  flex-col w-11/12 h-full items-center bg-[#202020] mb-6 rounded-tl-lg rounded-r-3xl rounded-b-3xl overflow-y-scroll">


      {learningPath.map((contentItem) => {
        return (
          <>
          {console.log(contentItem["course"])}
            <LearningPathItem subject={contentItem["course"]} ></LearningPathItem>
          </>
        );
      })}
    </div>
  );
}

export default LearningPathContainer;
