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

