import InputButton from "./InputButton";

export default function Header() {
  return (
    <div className="bg-blue-900/75">
      <div className="container py-8 mx-auto">
        <h1 className="text-2xl text-center text-slate-50 font-thin">
          Dictionary Tutorial
        </h1>
        <p className=" text-sm text-center text-slate-200 font-thin mt-1 mb-5">
          find defisions for word
        </p>

        <InputButton/>
      </div>
    </div>
  );
}
