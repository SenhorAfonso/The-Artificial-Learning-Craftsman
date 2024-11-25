function CourseSection({ children }) {
  return (
    <section className="ml-24 mb-20">
      <div className="flex items-center gap-2 text-white">
        <div className="w-4 h-[1px] bg-gray-300"></div>
        <h3 className="text-2xl lato-light">linear algebra</h3>
      </div>
      {children}
    </section>
  );
}

export default CourseSection;
