import Sidebar from "./components/Sidebar"
import AddModal from "./components/AddModal"
import { RootState } from "./redux/store"
import { useSelector } from "react-redux"
function App() {
  const addModalState = useSelector((state: RootState) => state.addModal.value)

  return (
    <>
     <Sidebar />
     {addModalState && <AddModal />}
    </>
  )
}

export default App
