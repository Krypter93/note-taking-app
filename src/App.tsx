import Sidebar from "./components/Sidebar"
import AddModal from "./components/AddModal"
import { RootState } from "./redux/store"
import { useSelector } from "react-redux"
import NotesView from "./components/NotesView"
function App() {
  const addModalState = useSelector((state: RootState) => state.addModal.value)

  return (
    <>
     <Sidebar />
     {addModalState && <AddModal />}
     <NotesView />
    </>
  )
}

export default App
