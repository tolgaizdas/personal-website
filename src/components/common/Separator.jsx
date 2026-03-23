const Separator = ({ className = "" }) => {
  return (
    <div
      className={`h-6 min-h-[1.5rem] w-px flex-shrink-0 bg-neutral-300 dark:bg-neutral-700 ${className}`.trim()}
    ></div>
  );
};

export default Separator;
