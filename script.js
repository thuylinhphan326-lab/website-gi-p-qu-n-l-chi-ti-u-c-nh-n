// ==========================================
// Budget Planner - Script
// ==========================================

// ====== DOM ======
const userType = document.getElementById("userType");
const dynamicFields = document.getElementById("dynamicFields");
const budgetInput = document.getElementById("budget");
const generateBtn = document.getElementById("generateBtn");
const resultSection = document.getElementById("resultSection");

// ==============================
// Hiển thị các trường động
// ==============================

userType.addEventListener("change", loadDynamicFields);

function loadDynamicFields() {

    dynamicFields.innerHTML = "";

    const type = userType.value;

    // =====================
    // Sinh viên
    // =====================

    if (type === "college") {

        dynamicFields.innerHTML = `

        <div class="form-group">

            <label>Hình thức sinh sống</label>

            <select id="livingType">

                <option value="home">Ở cùng gia đình</option>

                <option value="dorm">Ký túc xá</option>

                <option value="rent">Thuê trọ</option>

            </select>

        </div>

        `;

    }

    // =====================
    // Người đi làm
    // =====================

    if (type === "worker") {

        dynamicFields.innerHTML = `

        <div class="form-group">

            <label>Mức thu nhập</label>

            <select id="incomeLevel">

                <option value="low">Dưới 5 triệu</option>

                <option value="medium">5 - 10 triệu</option>

                <option value="high">10 - 20 triệu</option>

                <option value="veryHigh">20 - 35 triệu</option>

                <option value="rich">Trên 35 triệu</option>

            </select>

        </div>

        <div class="form-group">

            <label>Tình trạng</label>

            <select id="familyStatus">

                <option value="single">Độc thân</option>

                <option value="married">Đã kết hôn</option>

                <option value="children">Có con</option>

            </select>

        </div>

        `;

    }

}

// ==============================
// Nút lập kế hoạch
// ==============================

generateBtn.addEventListener("click", generateBudget);

// ==============================

function generateBudget() {

    const budget = Number(budgetInput.value);

    if (!userType.value) {

        alert("Vui lòng chọn đối tượng.");

        return;

    }

    if (budget <= 0) {

        alert("Vui lòng nhập ngân sách.");

        return;

    }

    let data;

    // ======================
    // Học sinh
    // ======================

    if (userType.value === "student") {

        data = budgetData.student;

    }

    // ======================
    // Sinh viên
    // ======================

    else if (userType.value === "college") {

        const living = document.getElementById("livingType").value;

        data = budgetData.university[living];

    }

    // ======================
    // Người đi làm
    // ======================

    else {

        const income = document.getElementById("incomeLevel").value;

        const family = document.getElementById("familyStatus").value;

        data = budgetData.worker[income][family];

    }

    showResult(data, budget);

}

// ==============================
// Hiển thị kết quả
// ==============================

function showResult(data, budget) {

    let html = "";

    html += `

    <div class="card">

        <h2>${data.title}</h2>

        <p>${data.description}</p>

        <br>

        <div class="note">

            <strong>💡 Gợi ý</strong>

            <p>${data.recommendation}</p>

        </div>

    </div>

    `;

    html += `<div class="card">`;

    html += `<h2>📊 Phân bổ ngân sách</h2>`;

    data.categories.forEach(category => {

        const money = Math.round(budget * category.percent / 100);

        html += `

        <div class="category-card">

            <div class="category-title">

                <h3>

                    ${category.icon}

                    ${category.name}

                </h3>

                <span class="money">

                    ${money.toLocaleString("vi-VN")} VNĐ

                </span>

            </div>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${category.percent}%;">
                </div>

            </div>

            <p>${category.percent}% ngân sách</p>

            <ul class="item-list">

        `;

        category.items.forEach(item => {

            html += `<li>${item}</li>`;

        });

        html += `

            </ul>

        </div>

        `;

    });

    html += `</div>`;

    resultSection.innerHTML = html;

    resultSection.scrollIntoView({

        behavior: "smooth"

    });

}
