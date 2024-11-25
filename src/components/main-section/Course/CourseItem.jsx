import CourseAnnotation from "./CourseAnnotation";
import CourseDuration from "./CourseDuration";
import CourseTitle from "./CourseTitle";

function CourseItem({ title, description, courseLink, notebookLink, duration }) {
  return (
    <div class="flex justify-between ml-6  w-11/12 py-2 h-18 mt-4 bg-[#101010] border-[1px] border-white rounded-lg shadow-xl shadow-zinc-950 items-center px-6 gap-4 hover:translate-y-1 duration-200">

      <CourseTitle title={title} description={description} courseLink={courseLink}></CourseTitle>
      <div class="h-8 w-[2px] bg-gray-300"></div>

      <CourseAnnotation notebookLink={notebookLink}></CourseAnnotation>
      <div class="h-8 w-[2px] bg-gray-300"></div>

      <CourseDuration duration={duration}></CourseDuration>

    </div>
  )
}

export default CourseItem;