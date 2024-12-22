const CompanySection = () => {
  return (
    <section className="py-20 px-24 max-md:px-5">
      <div className="text-center">
        <h3 className="text-2xl font-medium text-neutral-800">
          <span className="text-primary">30,000+</span> Company Stream Manage
          Their Business
        </h3>
      </div>
      {/* Restrict width and hide overflow */}
      <div className="relative overflow-hidden mt-14 max-w-6xl mx-auto">
        {/* Infinite animation container */}
        <div className="flex items-center gap-20 animate-scroll whitespace-nowrap">
          {/* Repeat images for seamless looping */}
          <img src="./images/company1.png" alt="company 1" className="h-12" />
          <img src="./images/company2.png" alt="company 2" className="h-12" />
          <img src="./images/company3.png" alt="company 3" className="h-12" />
          <img src="./images/company4.png" alt="company 4" className="h-12" />
          <img src="./images/company5.png" alt="company 5" className="h-12" />
          {/* Repeat the same set of images to create a looping effect */}
          <img src="./images/company1.png" alt="company 1" className="h-12" />
          <img src="./images/company2.png" alt="company 2" className="h-12" />
          <img src="./images/company3.png" alt="company 3" className="h-12" />
          <img src="./images/company4.png" alt="company 4" className="h-12" />
          <img src="./images/company5.png" alt="company 5" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
