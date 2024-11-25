import LearningPathContainer from "../components/lateral-section/learning-path/LearningPathContainer";
import LogoContainer from "../components/lateral-section/logo/LogoContainer";
import CourseItem from "../components/main-section/Course/CourseItem";
import CourseSection from "../components/main-section/CourseSection/CourseSection";
import FirstGraph from "../components/right-section/FirstGraph";
import SecondGraph from "../components/right-section/SecondGraph";

function MainPage() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="flex flex-col gap-24 h-full w-1/5 ml-4">
          <LogoContainer />
          <LearningPathContainer />
        </div>

        <div className="w-3/5 h-full py-6">
          <div className="flex flex-col w-full h-full  rounded-lg bg-[#202020]">
            <h1 className="ml-12 mt-10 mb-24 text-4xl text-white lato-bold">
              MATHEMATICS
            </h1>

            <div className="h-4/5 overflow-y-scroll">
              <CourseSection>
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  courseLink={"https://www.udemy.com/course/java-curso-completo/?couponCode=BFCPSALE24"}
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
              </CourseSection>

              <CourseSection>
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
              </CourseSection>

              <CourseSection>
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
                <CourseItem
                  title={"Linear Algebra"}
                  description={
                    "Probability, events, data distributions, z-scores and more"
                  }
                  duration={"15h00m"}
                  notebookLink={
                    "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4"
                  }
                />
              </CourseSection>
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