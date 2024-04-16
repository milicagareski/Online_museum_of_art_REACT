interface ShowHideTextButtonProps {
  toggleTextVisibility: () => void;
  showText: boolean;
}

export const ShowHideTextButton = ({
  toggleTextVisibility,
  showText,
}: ShowHideTextButtonProps) => {
  return (
    <>
      <button className="btn" onClick={toggleTextVisibility}>
        {!showText ? "Read more" : "Show less"}
      </button>
    </>
  );
};
