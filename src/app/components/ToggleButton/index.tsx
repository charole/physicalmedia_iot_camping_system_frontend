interface ToggleButtonProps {
  onChangeHandler: (isToggled: boolean) => void;
  isToggled?: boolean;
  id: string;
}

const ToggleButton = ({
  id,
  isToggled,
  onChangeHandler,
}: ToggleButtonProps) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          className="sr-only"
          onChange={() => onChangeHandler(!isToggled)}
        />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            isToggled ? "transform translate-x-full bg-blue-500" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleButton;
