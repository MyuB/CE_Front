import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CertificationPage() {
    const history = useHistory();

    // 사용자 입력을 관리하는 상태 변수
    const [groupName, setGroupName] = useState(''); // 실제 그룹 이름으로 변경하기
    const [groupPeriod, setGroupPeriod] = useState('2023/04/01 - 2023/04/01'); // 그룹 기간으로 변경하기
    const [userName, setUserName] = useState(''); // 유저네임으로 변경하기
    const [userPhoto, setUserPhoto] = useState(null); // 선택한 인증 사진을 저장하는 상태 변수
    const [userDate, setUserDate] = useState(''); // 사진 업로드 날짜를 저장하는 상태 변수

    const [showDatePicker, setShowDatePicker] = useState(false); // 날짜 선택 보이기/ 숨기기
    const [selectedDate, setSelectedDate] = useState(null); // 날짜 선택

    // 사진 선택 처리 함수
    function handlePhotoSelection(event) {
        const file = event.target.files[0];
        setUserPhoto(file);
        setUserDate(new Date().toLocaleDateString()); // 업로드 날짜를 현재 날짜로 설정!!
    }

    // 사진이랑 날짜 저장 함수
    function handleSave() {
        if (userPhoto && selectedDate) {
            setUserDate(selectedDate);
            history.push('/확인'); // 
        } else {
            alert('사진과 날짜를 선택하세요.');
        }
    }

    return (
        <div>
            {/* Header */}
            <header>
                <button>Back Arrow Button</button>
                <h1>{userName} 인증</h1>
            </header>

            {/* 그룹 정보 */}
            <div>
                <p>일일 인증 최소 1번 이상</p>
                <p>{groupPeriod}</p>
                <div className="date-picker-container">
                    <div className="toggle" onClick={() => setShowDatePicker(!showDatePicker)}>
                        <span>날짜 선택</span>
                        {showDatePicker ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                    </div>
                    {showDatePicker && (
                        <div className="date-picker">
                            {/* 날짜 선택 라이브러리 */}
                            <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
                        </div>
                    )}
                </div>
            </div>

            {/* 사용자 정보 */}
            <div>
                <h2>{userName}</h2>
                <input type="file" onChange={handlePhotoSelection} />
                {userPhoto && <img src={URL.createObjectURL(userPhoto)} alt="Authentication" />}
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}

export default CertificationPage;
