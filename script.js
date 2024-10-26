// 添加简单的交互效果 - 点击卡片展示更多信息（示例）
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

// 设置当前年份到页脚的 #year 元素
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});

function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById("datetime").textContent = formattedDateTime;
}

// 每秒更新一次时间
setInterval(updateDateTime, 1000);

// 初始化加载当前时间
updateDateTime();
