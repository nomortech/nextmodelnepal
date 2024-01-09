export default function TextDetails({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-[90%]  md:max-w-[50%] m-auto py-[5rem] text-center  flex flex-col gap-2 ">
      <h2 className="text-4xl md:text-5xl font-bold  ">
        {title || "Crafting Unforgotable Moment across nepal"}
      </h2>
      <p className="text-balance text-[1.2rem] text-tertiary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, debitis
        accusantium excepturi a minus dolore expedita quibusda.
      </p>
    </div>
  );
}
