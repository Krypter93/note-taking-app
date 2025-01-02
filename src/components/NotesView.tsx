/* import { NoteType } from "../redux/addNoteSlice"; */

export default function NotesView() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")
    console.log(notes);
    
  return (
     <>
     <div className="bg-slate-900 w-screen h-screen absolute top-full mx-auto">
      {/* {notes.length > 0 && notes.map((note: NoteType ) =>(
          <div className= {`${note.color} w-10 h-10`} key={note.id}>
          <p>{note.content}</p>
        </div>
      ))} */}
     </div>
     </>
  )
}