import { MdArrowDropDown } from "react-icons/md";
export default function Filter() {
  return (
    <div className="">
      <button className="align-middle text-center  border rounded-lg h-6 w-20">
        Filter
        <MdArrowDropDown className="relative -top-5 left-14"/>
      </button>
    </div>
  );
}
