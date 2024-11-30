const products = [
  {
    picture: "https://i.imgur.com/8S7o2hi.png",
    id: 10001,
    code: 1234567000,
    category: "เครื่องใช้ไฟฟ้า",
    type: "โทรทัศน์",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque eligendi, at atque ipsa culpa recusandae modi vitae ipsam, enim voluptatibus distinctio? Magnam sunt repudiandae consectetur labore perferendis possimus tempora.",
    name: "ทีวี 65DU7700 สมาร์ททีวี 65 นิ้ว 4K Crystal UHD LED รุ่น UA65DU7700KXXT ปี 2024",
    serialnumber: 987654321,
    warranty: null,
    row: 1,
    floor: 1,
    blog: 1,
    quantity: 1,
  },
  {
    picture: "/__Warehouse/products/20001.jpg",
    id: 20001,
    code: 2234567800,
    category: "เครื่องใช้ไฟฟ้า",
    type: "ตู้เย็น",
    details:
      "ตู้เย็น 2 ประตู ความจุ 18 คิว ระบบอินเวอร์เตอร์ ประหยัดพลังงาน พร้อมระบบ No Frost",
    name: "ตู้เย็น Samsung RT50K6000BS/ST 18.2 คิว รุ่นใหม่ ปี 2024",
    serialnumber: 123450987,
    warranty: "15-03-2026",
    row: 2,
    floor: 1,
    blog: 2,
    quantity: 5,
  },
  {
    picture: "/_Warehouse/products/20002.jpg",
    id: 20002,
    code: 2234567801,
    category: "เครื่องภายในครัว",
    type: "ไมโครเวฟ",
    details:
      "ไมโครเวฟ 20 ลิตร ระบบย่างและอบ ใช้งานง่าย ปรับความร้อนได้ 10 ระดับ",
    name: "ไมโครเวฟ Sharp R-60J 20 ลิตร พร้อมระบบย่าง",
    serialnumber: 123450988,
    warranty: "20-07-2025",
    row: 1,
    floor: 2,
    blog: 3,
    quantity: 3,
  },
  {
    picture: "/_Warehouse/products/20003.jpg",
    id: 20003,
    code: 2234567802,
    category: "เครื่องใช้ไฟฟ้า",
    type: "ไดร์เป่าผม",
    details: "ไดร์เป่าผมแบบพับได้ พลังลมแรง 2000 วัตต์ มีฟังก์ชั่นไอออนิค",
    name: "ไดร์เป่าผม Panasonic EH-NE83",
    serialnumber: 123450989,
    warranty: "11-05-2026",
    row: 3,
    floor: 1,
    blog: 1,
    quantity: 8,
  },
  {
    picture: "/_Warehouse/products/20004.jpg",
    id: 20004,
    code: 2234567803,
    category: "เครื่องเสียง",
    type: "ลำโพง",
    details: "ลำโพงบลูทูธ กันน้ำระดับ IPX7 เบสหนัก พร้อมไฟ LED เปลี่ยนสี",
    name: "ลำโพง JBL Flip 6 Portable Waterproof",
    serialnumber: 123450990,
    warranty: null,
    row: 1,
    floor: 3,
    blog: 2,
    quantity: 2,
  },
  {
    picture: "/_Warehouse/products/20005.jpg",
    id: 20005,
    code: 2234567804,
    category: "อุปกรณ์เพื่อสุขภาพ",
    type: "ลู่วิ่ง",
    details:
      "ลู่วิ่งไฟฟ้า 2 แรงม้า มีหน้าจอ LCD แสดงผลการวิ่ง พร้อมระบบช็อคแอบซอร์บ",
    name: "ลู่วิ่ง Johnson 8.1T Treadmill",
    serialnumber: 123450991,
    warranty: "30-12-2025",
    row: 2,
    floor: 2,
    blog: 4,
    quantity: 1,
  },
  {
    picture: "/_Warehouse/products/20006.jpg",
    id: 20006,
    code: 2234567805,
    category: "อุปกรณ์สำนักงาน",
    type: "ปริ้นเตอร์",
    details:
      "ปริ้นเตอร์เลเซอร์สี พร้อมระบบ Wi-Fi และการพิมพ์แบบสองหน้าอัตโนมัติ",
    name: "ปริ้นเตอร์ HP LaserJet Pro MFP M479fdw",
    serialnumber: 123450992,
    warranty: "25-01-2026",
    row: 4,
    floor: 1,
    blog: 1,
    quantity: 4,
  },
  {
    picture: "/_Warehouse/products/20007.jpg",
    id: 20007,
    code: 2234567806,
    category: "อุปกรณ์คอมพิวเตอร์-แลปท็อป",
    type: "แล็ปท็อป",
    details:
      "แล็ปท็อปหน้าจอ 15.6 นิ้ว ระบบปฏิบัติการ Windows 11 พร้อม Intel Core i7 Gen 12",
    name: "Dell Inspiron 15 7000 Series",
    serialnumber: 123450993,
    warranty: "15-06-2026",
    row: 2,
    floor: 3,
    blog: 2,
    quantity: 3,
  },
  {
    picture: "/_Warehouse/products/20008.jpg",
    id: 20008,
    code: 2234567807,
    category: "อุปกรณ์ทำความสะอาด",
    type: "เครื่องดูดฝุ่น",
    details: "เครื่องดูดฝุ่นไร้สาย น้ำหนักเบา พร้อมระบบกรอง HEPA",
    name: "Dyson V12 Detect Slim",
    serialnumber: 123450994,
    warranty: "20-02-2026",
    row: 3,
    floor: 2,
    blog: 3,
    quantity: 2,
  },
  {
    picture: "/_Warehouse/products/20009.jpg",
    id: 20009,
    code: 2234567808,
    category: "อุปกรณ์เครื่องเขียน",
    type: "ปากกา",
    details: "ปากกาเจลสีดำ เขียนลื่น น้ำหมึกแห้งเร็ว",
    name: "Pentel EnerGel 0.7mm",
    serialnumber: null,
    warranty: null,
    row: 1,
    floor: 4,
    blog: 4,
    quantity: 20,
  },
  {
    picture: "/_Warehouse/products/20010.jpg",
    id: 20010,
    code: 2234567809,
    category: "เฟอร์นิเจอร์",
    type: "เก้าอี้สำนักงาน",
    details: "เก้าอี้สำนักงานปรับระดับได้ มีพนักพิงตาข่ายและล้อหมุน",
    name: "เก้าอี้สำนักงาน IKEA MARKUS",
    serialnumber: 123450995,
    warranty: "12-11-2025",
    row: 2,
    floor: 4,
    blog: 1,
    quantity: 10,
  },
  {
    picture: "/_Warehouse/products/20011.jpg",
    id: 20011,
    code: 2234567810,
    category: "อุปกรณ์กีฬา",
    type: "จักรยาน",
    details: "จักรยานเสือหมอบเฟรมคาร์บอน เกียร์ Shimano 21 สปีด",
    name: "จักรยาน Giant TCR Advanced",
    serialnumber: 123450996,
    warranty: "10-09-2025",
    row: 4,
    floor: 2,
    blog: 3,
    quantity: 2,
  },
  {
    picture: "/_Warehouse/products/20012.jpg",
    id: 20012,
    code: 2234567811,
    category: "อุปกรณ์เดินทาง",
    type: "กระเป๋าเดินทาง",
    details: "กระเป๋าเดินทางขนาด 28 นิ้ว ล้อลาก 4 ล้อ หมุนได้ 360 องศา",
    name: "กระเป๋าเดินทาง Samsonite Magnum",
    serialnumber: 123450997,
    warranty: "05-04-2026",
    row: 1,
    floor: 5,
    blog: 2,
    quantity: 5,
  },
  {
    picture: "/_Warehouse/products/20013.jpg",
    id: 20013,
    code: 2234567812,
    category: "ของตกแต่งบ้าน",
    type: "โคมไฟตั้งโต๊ะ",
    details: "โคมไฟ LED ปรับความสว่างได้ 3 ระดับ ดีไซน์โมเดิร์น",
    name: "โคมไฟ Xiaomi Mi LED Desk Lamp 1S",
    serialnumber: 123450998,
    warranty: null,
    row: 3,
    floor: 3,
    blog: 1,
    quantity: 6,
  },
  {
    picture: "/_Warehouse/products/20014.jpg",
    id: 20014,
    code: 2234567813,
    category: "เครื่องใช้ภายในครัว",
    type: "เครื่องปั่นน้ำผลไม้",
    details: "เครื่องปั่นน้ำผลไม้ 1000 วัตต์ ปรับความเร็วได้ 5 ระดับ",
    name: "เครื่องปั่น Philips HR3573/90",
    serialnumber: 123450999,
    warranty: "30-07-2025",
    row: 2,
    floor: 5,
    blog: 4,
    quantity: 4,
  },
  {
    picture: "/_Warehouse/products/20015.jpg",
    id: 20016,
    code: 2234567815,
    category: "อุปกรณ์ถ่ายภาพ",
    type: "กล้องถ่ายรูป",
    details:
      "กล้องดิจิตอลมิเรอร์เลส ความละเอียด 24.2 ล้านพิกเซล พร้อมเลนส์ Kit",
    name: "กล้อง Sony Alpha A6400",
    serialnumber: 123451001,
    warranty: "14-02-2026",
    row: 2,
    floor: 1,
    blog: 3,
    quantity: 2,
  },
  {
    picture: "/_Warehouse/products/20016.jpg",
    id: 20015,
    code: 2234567814,
    category: "ของใช้ส่วนตัว",
    type: "เครื่องโกนหนวดไฟฟ้า",
    details: "เครื่องโกนหนวดแบบไร้สาย มีระบบ Wet & Dry ใช้งานในห้องน้ำได้",
    name: "เครื่องโกนหนวด Philips AquaTouch",
    serialnumber: 123451000,
    warranty: "22-10-2025",
    row: 4,
    floor: 4,
    blog: 3,
    quantity: 7,
  },
  {
    picture: "/_Warehouse/products/20017.jpg",
    id: 20017,
    code: 2234567816,
    category: "อุปกรณ์อิเล็กทรอนิกส์",
    type: "นาฬิกาสมาร์ทวอทช์",
    details: "สมาร์ทวอทช์หน้าจอ AMOLED รองรับการวัดค่า SpO2 และการติดตามการนอน",
    name: "สมาร์ทวอทช์ Huawei Watch GT 4",
    serialnumber: 123451002,
    warranty: "05-12-2025",
    row: 1,
    floor: 5,
    blog: 2,
    quantity: 10,
  },
  {
    picture: "/_Warehouse/products/20018.jpg",
    id: 20018,
    code: 2234567817,
    category: "อุปกรณ์เครื่องดนตรี",
    type: "กีตาร์ไฟฟ้า",
    details: "กีตาร์ไฟฟ้ารุ่นยอดนิยม มี 6 สาย พร้อมปิ๊กอัพฮัมบัคเกอร์",
    name: "กีตาร์ Fender Stratocaster Player Series",
    serialnumber: 123451003,
    warranty: "18-08-2025",
    row: 3,
    floor: 2,
    blog: 1,
    quantity: 1,
  },
  {
    picture: "/_Warehouse/products/20019.jpg",
    id: 20019,
    code: 2234567818,
    category: "อุปกรณ์-เครื่องมือช่าง",
    type: "สว่านไร้สาย",
    details: "สว่านไร้สาย 18V แรงบิดสูง 60 นิวตันเมตร พร้อมแบตเตอรี่ 2 ก้อน",
    name: "สว่านไร้สาย Bosch GSR 180-LI",
    serialnumber: 123451004,
    warranty: "16-01-2026",
    row: 4,
    floor: 3,
    blog: 4,
    quantity: 5,
  },
  {
    picture: "/_Warehouse/products/20020.jpg",
    id: 20020,
    code: 2234567819,
    category: "วัสดุก่อสร้าง",
    type: "ท่อประปา",
    details:
      "ท่อ PVC 20 นิ้ว ชนิดปลายเรียบ ตราท่อน้ำไทย รุ่น WS PE500 TP เส้นผ่านศูนย์กลาง ขนาด 500 มม. ความยาวท่อ 4 เมตร",
    name: "ท่อ PVC 20 นิ้ว (500 มม.) ชนิดปลายเรียบ ตราท่อน้ำไทย รุ่น WS PE500 TP Class 5",
    serialnumber: null,
    warranty: null,
    row: 1,
    floor: 5,
    blog: 2,
    quantity: 1,
  },
  {
    picture: "/_Warehouse/products/20021.jpg",
    id: 20021,
    code: 2234567820,
    category: "มือถือ-แท็บเล็ต",
    type: "มือถือ",
    details: "Apple iPhone 16 Pro Max 256GB",
    name: "iPhone 16 Pro Max",
    serialnumber: 123451005,
    warranty: "18-08-2025",
    row: 3,
    floor: 2,
    blog: 1,
    quantity: 1,
  },
  {
    picture: "/_Warehouse/products/20022.jpg",
    id: 20022,
    code: 2234567821,
    category: "เฟอร์นิเจอร์",
    type: "โต๊ะ",
    details:
      "หน้าโต๊ะ ทำจาก  Hight  Density Polyethylene ขาโต๊ะเป็นเหล็กสีดำเกร็ดเงิน",
    name: "โต๊ะพับเอนกประสงค์",
    serialnumber: 123451006,
    warranty: "18-08-2025",
    row: 3,
    floor: 2,
    blog: 1,
    quantity: 1,
  },
  {
    picture: "/_Warehouse/products/20023.png",
    id: 20023,
    code: 2234567822,
    category: "ของตกแต่งบ้าน",
    type: "นาฬิกาแขวนผนัง",
    details:
      "นาฬิกาใช้ถ่านอัลคาไลน์ AA 1 ก้อน ถ่านแยกจำหน่าย เราขอแนะนำแบตเตอรีชาร์จไฟได้ LADDA/ลัดด้า",
    name: "PLUTTIS พลุททีส",
    serialnumber: 123451007,
    warranty: "18-08-2025",
    row: 3,
    floor: 2,
    blog: 1,
    quantity: 1,
  },
  {
    picture: "/_Warehouse/products/20024.jpg",
    id: 20024,
    code: 2234567823,
    category: "มือถือ-แท็บเล็ต",
    type: "มือถือ",
    details: "Samsung Galaxy S24 Ultra",
    name: "S24 Ultra",
    serialnumber: null,
    warranty: null,
    row: 1,
    floor: 4,
    blog: 4,
    quantity: 1,
  },
];

export function fetchProducts() {
  return products;
}