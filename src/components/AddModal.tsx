import { IoClose } from "react-icons/io5";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddModal } from "../redux/addModalSlice";

export default function AddModal() {
  const addModalState = useSelector((state:RootState) => state.addModal.value)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(toggleAddModal())
  }
  return (
    <div className='flex flex-col w-[550px] h-72 bg-violet-800 absolute top-[30%] left-[45%] rounded  text-white'>
      <IoClose className="mt-3 ml-[93%] text-2xl cursor-pointer" onClick={handleCloseModal}/>
      <p className="p-1 text-center text-lg">Add your new note</p>
      <textarea name="note" cols={10} rows={10} className="w-4/5 h-32 mx-auto rounded"></textarea>
    </div>
  )
}
