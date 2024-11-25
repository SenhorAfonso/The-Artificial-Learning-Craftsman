import logo from "../../../img/logo.png";

function LogoContainer() {
  return (
    <div className="flex items-center justify-center gap-4 w-11/12 h-36 bg-[#202020] rounded-3xl mt-6">
      <img src={logo} className="w-14 h-14" alt="" srcset="" />
      <div className="flex flex-col text-white">
        <h3 className="text-lg lato-light">The Artificial Learning</h3>
        <h3 className="text-xl -mt-2 lekton-bold">Craftsman</h3>
      </div>
    </div>
  );
}

export default LogoContainer;
