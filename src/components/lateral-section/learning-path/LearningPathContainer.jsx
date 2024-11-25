import LearningPathItem from "./LearningPathItem";

function LearningPathContainer() {
  return (
    <div className="flex flex-col w-11/12 h-full items-center bg-[#202020] mb-6 rounded-tl-lg rounded-r-3xl rounded-b-3xl overflow-y-scroll">
      <div className="flex justify-start items-center w-full h-24">
        <h2 className="absolute -mt-12 text-3xl text-white lekton-regular">Learning Path</h2>
      </div>

      <LearningPathItem subject={"Mathematics"}></LearningPathItem>
      <LearningPathItem subject={"pre-processing"}></LearningPathItem>
      <LearningPathItem subject={"neural networks"}></LearningPathItem>
      <LearningPathItem subject={"pytorch"}></LearningPathItem>
    </div>
  );
}

export default LearningPathContainer;
