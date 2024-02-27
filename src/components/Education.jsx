const Education = () => {
  return (
    <div className="border-2 border-blue px-8">
      <h3 className="font-semibold text-2xl mt-12 mb-5">Education</h3>
      <div className="flex flex-wrap gap-12 mb-12 ">
        <div>
          <p className="text-sm">Aug 2022 - Sep 2023</p>
          <h4 className="font-semibold text-xl mb-3">Frontend Web Developer </h4>
          <p className="text-sm">
            Tel-Ran International Technological School, Berlin
          </p>
        </div>
        <div>
          <p className="text-sm">2008 - 2009</p>
          <h4 className="font-semibold text-xl mb-3">
            Masters's degree in International Economic
          </h4>
          <p className="text-sm">Kyiv National Economic University</p>
        </div>
        <div>
          <p className="text-sm">2004 - 2008</p> 
          <h4 className="font-semibold text-xl mb-3">Bachelor's degree in
          International Economic</h4>
          <p className="text-sm">Kyiv National Economic University</p>
        </div>
      </div>
    </div>
  );
};
export default Education;
