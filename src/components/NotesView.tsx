import { NoteType } from "../redux/addNoteSlice";
import { MdEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function NotesView() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")
    console.log(notes);
    
  return (
     <>
     <div className=" flex flex-row flex-wrap justify-center bg-violet-200 w-3/4 h-screen absolute top-[0%] left-[25%] p-10 gap-x-9 overflow-hidden">
      {notes.length > 0 && notes.map((note: NoteType ) =>(
          <div className= {`${note.color} w-[300px] h-[200px] rounded rounded-br-[50px] break-words whitespace-normal overflow-y-auto`} key={note.id}>
            <div className={`p-0 m-0 w-full h-8 relative top-0 ${note.color} brightness-50`}></div>
            <div className="flex flex-row justify-between m-2">
              <MdEdit className="bg-slate-300 rounded cursor-pointer"/>
              <IoClose className="bg-slate-300 rounded cursor-pointer"/>
            </div>
            <p className="p-2 text-justify">{note.content}</p>
        </div>
      ))}
     </div>
     </>
  )
}