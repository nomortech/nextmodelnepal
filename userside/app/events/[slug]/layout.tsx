export default function Layout(props: {
  children: React.ReactNode;
  event: React.ReactNode;
  timeline: React.ReactNode;
}) {
  return (
    <div className="">
      {props.children}
      <div className="flex w-[90vw] m-auto min-h-[60vh] ">
        <div className="timeline box flex-[2]">
          {props.timeline}
          <div id="gradient"></div>
        </div>
        <div className="flex-[3] hidden md:block">{props.event}</div>
        {/* <div>{props.eventmodal}</div> */}
      </div>
    </div>
  );
}
