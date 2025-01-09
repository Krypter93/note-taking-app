import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddModal } from "../redux/addModalSlice";
import { newNote, NoteType } from "../redux/addNoteSlice";
import { setText, clearText } from "../redux/noteContent";
import { ChangeEvent } from "react";
import { RootState } from "../redux/store";
import { setNoteColor, clearNoteColor } from "../redux/noteColorSlice";

export default function AddModal() {
  const dispatch = useDispatch()
  const noteContentState= useSelector((state: RootState) => state.noteContent.text)
  const noteColor = useSelector((state:RootState) => state.noteColor.value)

  const handleCloseModal = () => {
    dispatch(toggleAddModal())
    dispatch(clearText())
  }

  const handleNoteContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setText(event.target.value))
  }

  const handleNoteColor = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setNoteColor(event.target.value))
  }

  const handleSaveNote = () => {
    const note: NoteType = {
      id: Date.now(),
      content: noteContentState,
      createdAt: new Date().toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"}),
      color: noteColor
    } 

    if (note.content === "") {
      alert("Please write something first!")
      return
    }

    if (noteColor === "") {
      alert("Please pick a note color!")
      return
    }
    
    dispatch(newNote(note))
    dispatch(clearText())
    dispatch(clearNoteColor())
    dispatch(toggleAddModal())
  }

  return (
    <div className='flex flex-col md:w-[550px] md:h-96 md:bg-violet-800 md:absolute md:top-[30%] md:left-[45%] rounded  text-white md:z-10 min-[360px]: bg-violet-800 z-30 absolute w-[90%] h-96 top-[28%] left-[5%]'>
      <IoClose className="md:mt-3 md:ml-[93%] text-2xl cursor-pointer min-[360px]: mt-8 ml-[90%]" onClick={handleCloseModal}/>
      <p className="p-1 text-center text-lg min-[360px]: mt-2">Add your new note</p>
      <textarea name="note" cols={10} rows={10} className="w-4/5 h-32 md:mx-auto rounded text-black p-2 m-2 outline-none min-[360px]: mt-5 mx-auto" onChange={handleNoteContent} value={noteContentState}></textarea>

      <select className="md:m-5 w-fit md:mx-auto outline-none text-black min-[360px]:mt-3 mx-auto" value={noteColor} onChange={handleNoteColor}>
        <option selected>Pick your note color</option>
        <option className="text-yellow-400" value="bg-yellow-400">{'\u{1F7E1}'} Yellow</option>
        <option className="text-green-900" value="bg-green-900">{'\u{1F7E2}'} Green</option>
        <option className="text-red-700" value="bg-red-700">{'\u{1F534}'} Red</option>
        <option className="text-blue-700" value="bg-blue-700">{'\u{1F535}'} Blue</option>
        <option className="text-purple-900" value="bg-purple-900">{'\u{1F7E3}'} Purple</option>
        <option className="text-orange-500" value="bg-orange-500">{'\u{1F7E0}'} Orange</option>
        <option className="text-amber-900" value="bg-amber-900">{'\u{1F7E4}'} Brown</option>
      </select>

      <div className="flex flex-row justify-evenly gap-x-24 bg-yellow md:mt-0 min-[360px]:mt-2">
        <button className="md:pt-2 pb-2 pr-5 pl-5 mt-5 bg-green-800 w-fit rounded outline-none" onClick={handleSaveNote}>Save</button>
        <button className="md:pt-2 pb-2 pr-5 pl-5 mt-5 bg-red-700 rounded outline-none" onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  )
}
