#  📃 Table
พัฒนาตารางแสดงข้อมูลโดยใช้ Next.js เป็น Fullstack และ PostgreSQL เป็นฐานข้อมูลหลัก สามารถใช้ Tanstack Table สำหรับการเก็บแคชข้อมูลในหน่วยความจำเพื่อเพิ่มความเร็วในการโหลดข้อมูลได้อย่างมีประสิทธิภาพ การเก็บข้อมูลแคชไว้สำหรับแต่ละหน้า (pagination) จะช่วยลดเวลาในการดึงข้อมูลใหม่ทุกครั้งที่ผู้ใช้เปลี่ยนหน้า ข้อมูลที่แคชไว้จะช่วยให้การเปลี่ยนหน้าทำได้รวดเร็วและไม่ต้องรอโหลดข้อมูลจากเซิร์ฟเวอร์ใหม่

การสร้างคอมโพเนนต์ของตารางใน Next.js สามารถทำได้โดยการสร้างคอมโพเนนต์ที่สามารถนำกลับมาใช้ซ้ำได้ ซึ่งหมายความว่าสามารถสร้างคอมโพเนนต์ตารางที่ใช้ได้ในหลายจุดของแอปพลิเคชันโดยไม่ต้องสร้างใหม่ทุกครั้ง การใช้ pnpm สำหรับการจัดการแพ็กเกจจะช่วยให้การติดตั้งและอัปเดตแพ็กเกจมีประสิทธิภาพมากขึ้น ช่วยให้การพัฒนาและบำรุงรักษาโค้ดสะดวกยิ่งขึ้น
ตัวอย่างเรียกใช้ Table

```javascript
// src\features\articles\components\ArticlesList.tsx
<DataTable
 columns={columns}
 data={data.data}
 pagination={data.pagination}
 setPagination={setPagination}
/>
```

## 🔧 Tools

| Favicon  | Package | Version  |
| :------------: | :------------: | :------------: |
| <img src="https://nextjs.org/favicon.ico" width="24vh" > | NextJS  | 14.2.6 |
| <img src="https://pnpm.io/img/favicon.png" width="24vh" > | Pnpm  | 9.6.0  |
| <img src="https://tanstack.com/favicon.ico" width="24vh" >  | Tanstack  | 5.55.0 |
| <img src="https://tailwindcss.com/favicons/favicon-32x32.png?v=3" width="24vh" > | Tailwind  | 3.4.10 |
| <img src="https://ui.shadcn.com/favicon-16x16.png" width="24vh" >  | Shadcn | 2.0.4 |
| <img src="https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae" width="24vh" >  | Typescript  | 5 |
| <img src="https://lodash.com/icons/favicon-32x32.png" width="24vh" >  | Lodash  | 4.17.7 |
| <img src="https://opencollective.com/static/images/favicon.ico.png" width="24vh" >  | Faker  | 8.4.1 |
| <img src="https://eslint.org/favicon.ico" width="24vh" >  | Eslint  | 8 |
| <img src="https://www.prisma.io/images/favicon-32x32.png" width="24vh" >  | Prisma  | 5.18.0 |
| <img src="https://www.postgresql.org/favicon.ico" width="24vh" >  | PostgreSQL  | 17 |
| <img src="https://www.docker.com/wp-content/uploads/2024/02/cropped-docker-logo-favicon-32x32.png" width="24vh" >  | Docker  | 4.33.1 |
| <img src="https://www.postman.com/_ar-assets/images/favicon-1-32.png" width="24vh" >  | Postman  | 11.11.1 |

## 🚀 Example
|  DataTable version 1.0.0 |
| :------------: |
|  <img src="https://media.discordapp.net/attachments/1283511064272834613/1283511351393910844/image.png?ex=66e34298&is=66e1f118&hm=aa86cbc355808782f749136f56a4d6579c7ba40f5753e36993f03d4dcbb526a7&=&format=webp&quality=lossless&width=1376&height=671"> |

|  API |
| :------------: |
|  <img src="https://cdn.discordapp.com/attachments/1283515240994046033/1283515284732510300/image.png?ex=66e34642&is=66e1f4c2&hm=f8dc3c7b6b894a22e728122cd4048b01fc8c1dc99bf9f38ee9842174cc4040ef&"> |
