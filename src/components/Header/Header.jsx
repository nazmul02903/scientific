export default function Header() {
  return (
    <div className="bg-[#333333]  ">
      <div className="flex justify-between items-center py-1  default-container">
        <div>
          <img
            src="https://openlibrary.org/static/images/ia-logo.svg"
            alt=""
            className="w-[160px]"
          />
        </div>
        <div className="flex gap-2 items-center text-white">
          <button className="border border-[#999] rounded-md p-[3.2px_6.4px] mr-[20px]">Donate</button>
          <img
            src="https://openlibrary.org/static/images/language-icon.svg"
            className="h-[21px] w-[21px] language-icon relative"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
