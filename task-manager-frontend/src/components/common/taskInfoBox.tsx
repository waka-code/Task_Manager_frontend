import { ResponsiveLine } from "@nivo/line"

type Props = {
 icons: JSX.Element | undefined,
 status: string,
 taskAmount: number | undefined;
}

type PropsStatus = {
 status: Props | undefined;
}

export function TaskInfoBox(props: PropsStatus) {

 const fakeData = [
  {
   id: 'Task A',
   color: 'hsl(205, 70%, 50%)',
   data: [
    { x: 'Monday', y: 12 },
    { x: 'Tuesday', y: 19 },
    { x: 'Wednesday', y: 3 },
    { x: 'Thursday', y: 5 },
    { x: 'Friday', y: 2 },
    { x: 'Saturday', y: 3 },
    { x: 'Sunday', y: 7 },
   ],
  },
 ];


 return (
  <div className="max-h-80 max-w-full bg-white rounded-2xl p-6" style={{
   height: "fit-content",
   width: "fit-content"
  }}>
   
   <div className="flex justify-between items-center">
    <div className="flex items-center gap-4">
     <div>
      {props.status?.icons}
     </div>
     <p className="text-lg text-slate-400">{props.status?.status}</p>
    </div>
    <p className="text-lg text-slate-800 font-bold">{props.status?.taskAmount}</p>
   </div>
   <hr className="my-3" />
   <div >
    <div className="max-w-full max-h-80">
     <ResponsiveLine
      data={fakeData}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      enableGridX={false}
      enableGridY={false}
     />
    </div>
    <div style={{
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     marginTop: "0.4rem"
    }}>
     <p className="text-xs cursor-pointer">{props.status?.taskAmount}+ more from last week</p>
    </div>
   </div>
  </div>
 )
}
