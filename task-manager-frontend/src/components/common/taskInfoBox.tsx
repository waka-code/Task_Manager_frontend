type Props = {
 icons: JSX.Element | undefined,
 status: string,
 taskAmount: string,
}

export function TaskInfoBox(props: Props) {
 return (
  <div className="w-96 h-56 max-h-80 max-w-full bg-white rounded-2xl p-6">
   <div className="flex justify-between items-center ">
    <div className="flex items-center gap-4">
     <div>
      {props.icons}
     </div>
     <p className="text-lg text-slate-400">{props.status}</p>
    </div>
    <p className="text-lg text-slate-800 font-bold">{props.taskAmount}</p>
   </div>
   <hr className="my-4" />
   <div className="flex gap-3 items-center">
    <div className="w-96 h-32 max-w-full bg-slate-800 max-h-80">
     img
    </div>
    <p className="flex">{props.taskAmount}+ more from last week</p>
   </div>
  </div>
 )
}
