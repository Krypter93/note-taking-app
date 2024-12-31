import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleAddModal } from "../redux/addModalSlice";

export default function AddModal() {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(toggleAddModal())
  }
  return (
    <div className='flex flex-col w-[550px] h-80 bg-violet-800 absolute top-[30%] left-[45%] rounded  text-white'>
      <IoClose className="mt-3 ml-[93%] text-2xl cursor-pointer" onClick={handleCloseModal}/>
      <p className="p-1 text-center text-lg">Add your new note</p>
      <textarea name="note" cols={10} rows={10} className="w-4/5 h-32 mx-auto rounded text-black p-2 m-2 outline-none"></textarea>

      <select className="m-1 w-fit mx-auto outline-none text-black">
        <option selected>Pick your note color</option>
        <option className="text-yellow-400" value="yellow">{'\u{1F7E1}'} Yellow</option>
        <option className="text-green-900" value="green">{'\u{1F7E2}'} Green</option>
        <option className="text-red-700" value="red">{'\u{1F534}'} Red</option>
        <option className="text-blue-700" value="blue">{'\u{1F535}'} Blue</option>
        <option className="text-purple-900" value="purple">{'\u{1F7E3}'} Purple</option>
        <option className="text-orange-500" value="orange">{'\u{1F7E0}'} Orange</option>
        <option className="text-amber-900" value="brown">{'\u{1F7E4}'} Brown</option>
      </select>

      <div className="flex flex-row justify-evenly gap-x-24">
        <button className="pt-2 pb-2 pr-5 pl-5 mt-5 bg-green-800 w-fit rounded outline-none">Save</button>
        <button className="pt-2 pb-2 pr-5 pl-5 mt-5 bg-red-700 rounded outline-none" onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  )
}
