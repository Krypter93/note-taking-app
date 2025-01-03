import { GiNotebook } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddModal } from "../redux/addModalSlice";
import { RootState } from "../redux/store";

export default function Sidebar() {
  const addModalState = useSelector((state: RootState) => (state.addModal.value))

  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(toggleAddModal())
    console.log(addModalState);
  }

  return (
    <div className='flex flex-col w-1/4 h-screen bg-violet-800'>
      <h1 className='p-2 mt-5 mx-auto text-white font-mono font-bold text-4xl'>Note Taking App</h1>

      <GiNotebook className='text-white mt-3 mx-auto font-bold text-9xl'/>

      <button className='p-2 mt-12 mx-auto bg-gray-50 w-2/3 rounded-full hover:transform hover:scale-105 transition-all delay-75' onClick={toggleModal}> 
        <p className='text-xl'> + Create New Note</p>
      </button>
    </div>
  )
}
