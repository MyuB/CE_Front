// 두 번째 페이지
import React from 'react';

function ReportPage() {
    const carbonUsageData = [
        { day: '1일 전', amount: 10 },
        { day: '2일 전', amount: 20 },
        { day: '3일 전', amount: 15 },
        { day: '4일 전', amount: 18 },
        { day: '5일 전', amount: 12 },
    ];

    const totalCarbonUsage = carbonUsageData.reduce(
        (total, data) => total + data.amount,
        0
    );
    const averageCarbonUsage = totalCarbonUsage / carbonUsageData.length;

    return (
        <div>
            <h1>Report</h1>
            <div>
                <h2>일일 탄소 소비량</h2>
                {carbonUsageData.map((data) => (
                    <div key={data.day}>
                        <div>{data.day}</div>
                        <div>막대 그래프: {data.amount}</div>
                    </div>
                ))}
            </div>
            <div>
                <h2>5일간 평균 탄소 소비량</h2>
                <div>평균 탄소 소비량: {averageCarbonUsage}</div>
            </div>
        </div>
    );
}

export default ReportPage;