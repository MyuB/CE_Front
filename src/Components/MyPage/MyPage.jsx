// 첫 번째 페이지
import { useState } from "react";

function MyPage() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === "username") {
      setUsername(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 수정 버튼을 클릭할 때 사용자 정보 업데이트를 처리하는 로직 추가
  };
  return (
    <div>
      <h1>MY</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>사용자 이름:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>전화번호:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>이메일:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}

export default MyPage;
