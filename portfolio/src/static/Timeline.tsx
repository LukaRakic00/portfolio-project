import timelineData from "../../public/data/timeline.json"
import Tag from "./Tag";

function Timeline (){

  return (<div className="text-xl">
    
    {timelineData.data.map((item, index) => <div key={"W" + index} className="flex">
      <div>
        <div className="flex justify-center items-center text-white rounded-full w-20 h-20 bg-slate-600">
          <div className="flex h-[72px] w-[72px] bg-slate-800 font-bold rounded-full justify-center items-center">{item.year.toString()}</div>
        </div>
        {index < timelineData.data.length - 1 ? <div className=" w-1 bg-slate-600 m-auto h-full"></div> : <div className="h-16"></div>}
      </div>
      <div className="flex flex-col justify-start h-max mt-5 px-6 text-white">
        <div className="font-bold">{item.title + " @ "}<span className="text-teal-400 font-bold">{item.company}</span></div>
        <div>{item.tasks}</div>
        <ul className="mt-1 flex flex-wrap" aria-label="Technologies used:">
          {item.tags.map((tag, index) =>
            <li key={"L" + index} className="mr-1.5 mt-2"><Tag title={tag} /></li>
          )}
        </ul>
      </div>
    </div>)}
  </div>);
}

export default Timeline;