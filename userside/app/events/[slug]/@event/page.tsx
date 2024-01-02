import { GridTileImage } from "@/components/ui/GridImage";

export async function generateStaticParams({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `https://65939c9c1493b0116068c69d.mockapi.io/api/events`
  );
  const events = await res.json();
  console.log(events);

  return events.map((event) => ({
    slug: event.id,
  }));
}

async function getData(id: string) {
  const res = await fetch(
    `https://65939c9c1493b0116068c69d.mockapi.io/api/events/events/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  console.log(data);

  return (
    <div className=" w-[80%] flex bg-[#AE9775] flex-col gap-4 px-[6rem] py-[7rem] text-black rounded-xl">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p>{data.description}</p>
      <p> Venue : {data.location}</p>
      <p> No of models : 10</p>

      {/* <p>{data.startdate}</p> */}
      {/* <p>{data.enddate}</p> */}

      <div className="gallery flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Event Gallery</h1>

        <div className="grid grid-cols-3 w-[450px] gap-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <GridTileImage
              className=" m-auto object-center border-[1px] object-cover "
              key={index}
              src={data.image}
              alt={data.title}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>

      <div className="gallery flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Models in {data.title}</h1>
        <div className="grid grid-cols-3 w-[450px] gap-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <GridTileImage
              className=" m-auto object-center border-[1px] object-cover "
              key={index}
              src={data.image}
              alt={data.title}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
