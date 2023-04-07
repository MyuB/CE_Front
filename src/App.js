import Group from "./Components/Group/group";
import GroupJoin from "./Components/GroupJoin/groupJoin";
import GroupCreate from "./Components/GroupCreate/groupCreate";
import Traffic from "./Components/Traffic/traffic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import NotFound from "./Components/NotFound/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/group" element={<Group />} />
          <Route path="/groupjoin" element={<GroupJoin />} />
          <Route path="/groupcreate" element={<GroupCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
