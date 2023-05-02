import Group from "./Components/Group/group";
import GroupJoin from "./Components/GroupJoin/groupJoin";
import GroupCreate from "./Components/GroupCreate/groupCreate";
import Traffic from "./Components/Traffic/traffic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import NotFound from "./Components/NotFound/notFound";
import MyPage from "Components/MyPage/MyPage";
import SignupForm from "Components/Signup/SignUp";
import GroupRanking from "Components/GroupRanking/GroupRanking";

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
          <Route path="/rank" element={<GroupRanking />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
