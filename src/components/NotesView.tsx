import { NoteType } from "../redux/addNoteSlice";
import { MdEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { deleteNote, modifyNote} from "../redux/addNoteSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";

export default function NotesView() {
    const notes = useSelector((state: RootState) => state.notes)
    const [editNoteId, setEditNoteId] = useState<number | null>(null)
    const [updatedNote, setUpdatedNote] = useState<string>("")
    const dispatch = useDispatch()

    const handleDeleteNotes = (id: number) => {
      dispatch(deleteNote({id}))
    }

    const handleModifyInput = (id: number) => {
      setEditNoteId((prevId) => prevId === id ? null : id)
    }

    const onChangeNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setUpdatedNote(event.target.value)
    }

    const handleModifyNote = (id: number, newContent: string) => {
      dispatch(modifyNote({id, newContent}))
      setEditNoteId(null)
      setUpdatedNote("")
    }

    const handleCancelEditNote = () => {
      setEditNoteId(null)
      setUpdatedNote("")
    }

    
  return (
     <>
     <div className=" flex flex-row flex-wrap justify-center bg-violet-200 md:w-3/4 h-screen absolute md:top-[0%] md:left-[25%] p-10 gap-10 overflow-auto min-[360px]:w-full  top-[30%] left-[0%]">
      {notes.length > 0 && notes.map((note: NoteType ) =>(
          <div className= {`${note.color} w-[300px] h-[240px] rounded rounded-br-[50px] break-words whitespace-normal overflow-y-auto overflow-x-hidden brightness-110`} key={note.id}>
            <div className={`p-0 m-0 w-full h-8 relative top-0 ${note.color} brightness-50`}></div>
            <div className="flex flex-row justify-between m-2">
              <MdEdit className="bg-slate-300 rounded cursor-pointer opacity-0 hover:opacity-100 transition-opacity" onClick={() => handleModifyInput(note.id)}/>
              <IoClose className="bg-slate-300 rounded cursor-pointer opacity-0 hover:opacity-100 transition-opacity" onClick={() =>handleDeleteNotes(note.id)}/>
            </div>
            <div className="flex flex-row justify-center w-full">
            {editNoteId === note.id ? (
              <div className="flex flex-col">
                <textarea className="w-[100%] p-2 rounded rounded-br-[30px] text-black outline-none" rows={4} cols={25} value={updatedNote} onChange={onChangeNote}/>
                <div className="flex flex-row justify-around m-3">
                  <button className="bg-zinc-200 text-black pt-1 pb-1 pr-2 pl-2 rounded" onClick={() => handleModifyNote(note.id, updatedNote)}>Save</button>
                  <button className="bg-zinc-200 text-black pt-1 pb-1 pr-2 pl-2 rounded" onClick={handleCancelEditNote}>Cancel</button>
                </div>
              </div>)
              :
              (<p className="pt-2 pb-2 pr-5 pl-5 text-justify text-lg">{note.content}</p>)}
            </div>
        </div>
      ))}
     </div>
     </>
  )
}