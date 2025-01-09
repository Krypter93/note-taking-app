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
    <div className='flex flex-col min-[375px]:w-full h-[30%] z-10 md:w-1/4 md:h-screen bg-violet-800 fixed'>
      <h1 className='p-2 mt-5 mx-auto text-white font-mono font-bold text-4xl'>Note Taking App</h1>

      <GiNotebook className='text-white md:mt-3 mx-auto font-bold md:text-9xl min-[375px]:text-5xl mt-1'/>
      

      <button className='md:p-2 md:mt-12 mx-auto min-[375px]:mx-auto mt-5 p-1 bg-gray-50 w-2/4 md:bg-gray-50 md:w-2/3 rounded-full hover:transform hover:scale-105 transition-all delay-75' onClick={toggleModal}> 
        <p className='md:text-xl min-[375px]: text-[17px]'> + Create New Note</p>
      </button>
    </div>

    
  )
}
