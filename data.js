// ============================================
// BUDGET PLANNER DATA
// ============================================

const budgetData = {

    // =========================================
    // HỌC SINH (11 - 17 TUỔI)
    // =========================================

    student: {

        title: "Học sinh (11–17 tuổi)",

        description:
            "Đây là độ tuổi phần lớn các khoản chi thiết yếu đã được gia đình hỗ trợ. Người dùng chủ yếu quản lý tiền tiêu vặt, hình thành thói quen tiết kiệm và chi tiêu hợp lý.",

        recommendation:
            "Không nên tiêu hết tiền tiêu vặt mỗi tháng. Hãy dành ít nhất 15% để tiết kiệm.",

        categories: [

            {
                id: "food",
                name: "Ăn uống",
                icon: "🍔",
                percent: 32,

                items: [
                    "Ăn sáng",
                    "Ăn vặt",
                    "Nước uống",
                    "Trà sữa",
                    "Đi ăn cùng bạn"
                ]
            },

            {
                id: "study",
                name: "Học tập",
                icon: "📚",
                percent: 24,

                items: [
                    "Vở",
                    "Bút",
                    "Sách",
                    "Photo tài liệu",
                    "Dụng cụ học tập"
                ]
            },

            {
                id: "saving",
                name: "Tiết kiệm",
                icon: "💰",
                percent: 16,

                items: [
                    "Ống heo",
                    "Quỹ dự phòng nhỏ"
                ]
            },

            {
                id: "entertainment",
                name: "Giải trí",
                icon: "🎮",
                percent: 11,

                items: [
                    "Game",
                    "Xem phim",
                    "Cafe",
                    "Đi chơi"
                ]
            },

            {
                id: "gift",
                name: "Quà tặng",
                icon: "🎁",
                percent: 9,

                items: [
                    "Sinh nhật bạn",
                    "Hoạt động lớp"
                ]
            },

            {
                id: "other",
                name: "Dự phòng",
                icon: "🛡",
                percent: 8,

                items: [
                    "Chi phí phát sinh"
                ]
            }

        ]

    },

    // =========================================
    // SINH VIÊN
    // =========================================

    university: {

        // ==========================
        // Ở CÙNG GIA ĐÌNH
        // ==========================

        home: {

            title: "Sinh viên ở cùng gia đình",

            description:
                "Không mất chi phí thuê nhà nên có thể tập trung cho học tập và tiết kiệm.",

            recommendation:
                "Nên tận dụng thời gian này để xây dựng quỹ tiết kiệm cá nhân.",

            categories: [

                {
                    id:"food",
                    name:"Ăn uống",
                    icon:"🍜",
                    percent:28,
                    items:[
                        "Ăn sáng",
                        "Ăn ngoài",
                        "Cafe",
                        "Đồ uống"
                    ]
                },

                {
                    id:"study",
                    name:"Học tập",
                    icon:"📖",
                    percent:24,
                    items:[
                        "Học phí",
                        "Giáo trình",
                        "Khóa học",
                        "Photo"
                    ]
                },

                {
                    id:"transport",
                    name:"Đi lại",
                    icon:"🛵",
                    percent:12,
                    items:[
                        "Xăng",
                        "Gửi xe",
                        "Xe buýt"
                    ]
                },

                {
                    id:"saving",
                    name:"Tiết kiệm",
                    icon:"💰",
                    percent:18,
                    items:[
                        "Quỹ khẩn cấp",
                        "Tiết kiệm"
                    ]
                },

                {
                    id:"shopping",
                    name:"Mua sắm",
                    icon:"🛍",
                    percent:10,
                    items:[
                        "Quần áo",
                        "Mỹ phẩm",
                        "Phụ kiện"
                    ]
                },

                {
                    id:"fun",
                    name:"Giải trí",
                    icon:"🎬",
                    percent:8,
                    items:[
                        "Du lịch",
                        "Cafe",
                        "Xem phim"
                    ]
                }

            ]

        },

        // ==========================
        // KÝ TÚC XÁ
        // ==========================

        dorm: {

            title:"Sinh viên ở ký túc xá",

            description:
                "Chi phí chỗ ở thấp nhưng vẫn cần cân đối điện nước và sinh hoạt.",

            recommendation:
                "Ưu tiên ăn uống và học tập trước khi dành tiền cho giải trí.",

            categories:[

                {
                    name:"Tiền phòng",
                    icon:"🏠",
                    percent:18,
                    items:[
                        "Ký túc xá"
                    ]
                },

                {
                    name:"Ăn uống",
                    icon:"🍱",
                    percent:30,
                    items:[
                        "Cơm",
                        "Đồ ăn",
                        "Đồ uống"
                    ]
                },

                {
                    name:"Học tập",
                    icon:"📚",
                    percent:18,
                    items:[
                        "Giáo trình",
                        "Học phí",
                        "Photo"
                    ]
                },

                {
                    name:"Đi lại",
                    icon:"🛵",
                    percent:10,
                    items:[
                        "Xe buýt",
                        "Xăng"
                    ]
                },

                {
                    name:"Tiết kiệm",
                    icon:"💰",
                    percent:14,
                    items:[
                        "Quỹ khẩn cấp"
                    ]
                },

                {
                    name:"Giải trí",
                    icon:"🎮",
                    percent:10,
                    items:[
                        "Cafe",
                        "Phim",
                        "Đi chơi"
                    ]
                }

            ]

        },

        // ==========================
        // THUÊ TRỌ
        // ==========================

        rent:{

            title:"Sinh viên thuê trọ",

            description:
                "Tiền thuê phòng là khoản chi lớn nhất, cần ưu tiên trước các nhu cầu khác.",

            recommendation:
                "Nên dành ít nhất 10% thu nhập để dự phòng các khoản phát sinh.",

            categories:[

                {
                    name:"Tiền trọ",
                    icon:"🏠",
                    percent:25,
                    items:[
                        "Tiền phòng"
                    ]
                },

                {
                    name:"Điện nước",
                    icon:"💡",
                    percent:8,
                    items:[
                        "Điện",
                        "Nước",
                        "Internet"
                    ]
                },

                {
                    name:"Ăn uống",
                    icon:"🍚",
                    percent:27,
                    items:[
                        "Nấu ăn",
                        "Ăn ngoài"
                    ]
                },

                {
                    name:"Học tập",
                    icon:"📚",
                    percent:15,
                    items:[
                        "Giáo trình",
                        "Khóa học"
                    ]
                },

                {
                    name:"Đi lại",
                    icon:"🛵",
                    percent:10,
                    items:[
                        "Xăng",
                        "Xe buýt"
                    ]
                },

                {
                    name:"Tiết kiệm",
                    icon:"💰",
                    percent:10,
                    items:[
                        "Quỹ dự phòng"
                    ]
                },

                {
                    name:"Giải trí",
                    icon:"🎬",
                    percent:5,
                    items:[
                        "Cafe",
                        "Phim"
                    ]
                }

            ]

        }

    },

    // Người đi làm sẽ bổ sung ở phần tiếp theo.
};
