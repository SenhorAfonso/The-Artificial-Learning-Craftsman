import LearningPathContainer from "../components/lateral-section/learning-path/LearningPathContainer";
import LogoContainer from "../components/lateral-section/logo/LogoContainer";
import CourseItem from "../components/main-section/Course/CourseItem";
import CourseSection from "../components/main-section/CourseSection/CourseSection";
import FirstGraph from "../components/right-section/FirstGraph";
import SecondGraph from "../components/right-section/SecondGraph";
import pageContent from "../page-content";

function MainPage() {
  let learningPath = pageContent["learning-path"];

  const url = window.location.href.split("/");
  const topic = url[3].replace("%20", " ");

  if (topic) {
    learningPath = learningPath.filter((item) => {
      return item["course"] === topic;
    });
  }

  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="flex flex-col h-full w-1/5 ml-4">
          <LogoContainer />

          <div className="flex justify-start mt-20 mr-36 items-center h-24">
            <h2 className="text-3xl text-white lekton-regular">
              Learning Path
            </h2>
          </div>

          <LearningPathContainer />
        </div>

        <div className="w-3/5 h-full py-6">
          <div className="flex flex-col w-full h-full  rounded-lg bg-[#202020]">
            <h1 className="ml-12 mt-10 mb-24 text-4xl uppercase text-white lato-bold">
              {topic}
            </h1>

            <div className="h-4/5 overflow-y-scroll">
              {learningPath.map((course) => {
                return course["topics"].map((item) => {
                  return (
                    <CourseSection key={item["title"]} topic={item["title"]}>
                      {item["lessons"].map((course) => {
                        return (
                          <CourseItem
                            title={course["title"]}
                            description={course["description"]}
                            courseLink={course["courseLink"]}
                            notebookLink={course["notebook"]}
                            duration={course["duration"]}
                          ></CourseItem>
                        );
                      })}
                    </CourseSection>
                  );
                });
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full gap-8 w-1/5 items-center justify-center">
          <FirstGraph></FirstGraph>
          <SecondGraph></SecondGraph>
        </div>
      </div>
    </>
  );
}

export default MainPage;
