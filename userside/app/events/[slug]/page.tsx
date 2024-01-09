export default function Page() {
  const data: string[] = ["Next model nepal", "miss nepal", "model hunt nepal"];

  return (
    <div className="py-[5rem]">
      <div className=" grid grid-cols-3 place-content-center justify-items-center gap-[3rem]">
        {data.map((_, index) => (
          <div>
            <button className="text-3xl capitalize ">{_}</button>
          </div>
        ))}
        {Array.from({ length: 3 }).map((_, index) => (
          <div>
            <div key={index}>
              {Array(3)
                .fill(new Date().getFullYear())
                .map((year, index) => (
                  <div key={index}>
                    <button className="text-3xl capitalize ">
                      {year - index}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
