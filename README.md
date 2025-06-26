🛒 Shopping List Server
שרת API לניהול רשימת קניות: קטגוריות, פריטים, עדכון ומחיקה. בנוי עם TypeScript, Express ו־TypeORM מול SQL Server.

📦 דרישות מוקדמות
Node.js (מומלץ: v16+)

Git

SQL Server פעיל (לוקאלי או בענן)

🚀 התקנה והרצה
שכפול הריפוזיטורי:

bash
Copy
Edit
git clone https://github.com/your-username/shopping-list-server.git
cd shopping-list-server
התקנת תלויות:

bash
Copy
Edit
npm install
הגדרת קובץ סביבה:
צרי קובץ בשם .env בתיקיית הפרויקט עם הערכים הבאים:

env
Copy
Edit
DB_HOST=your-sql-host
DB_PORT=1433
DB_USERNAME=your-user
DB_PASSWORD=your-password
DB_NAME=your-database
(אם את משתמשת ב־Azure למשל, שימי את ההוסט והפרטים משם)

הרצת הפרויקט:

bash
Copy
Edit
npm run dev
📁 מבנה תיקיות
css
Copy
Edit
src/
├── categories/
│   ├── category.controller.ts
│   ├── category.entity.ts
│   ├── category.service.ts
│   └── category.routes.ts
├── shopping_items/
│   ├── shoppingItem.controller.ts
│   ├── shoppingItem.entity.ts
│   ├── shoppingItem.service.ts
│   └── shoppingItem.routes.ts
├── types/
├── data-source.ts
├── index.ts
└── ...
📬 מסלולים עיקריים (Endpoints)
קטגוריות
GET /categories – קבלת כל הקטגוריות

POST /categories – יצירת קטגוריה חדשה

פריטים
GET /shopping-items – כל המוצרים

POST /shopping-items – הוספת מוצר

PUT /shopping-items/:id – עדכון מוצר

DELETE /shopping-items/:id – מחיקת מוצר

✅ טיפים
הקוד תומך ב־DTO ו־Validation עם class-validator

הגדרות TypeORM נמצאות ב־data-source.ts

ניתן לשנות את ההתחברות ל־DB לפי צורך

📌 TODO (אם רלוונטי)
[] התחברות משתמשים

[] לוגים ואבטחה

[] Docker support

אם תרצי – אני יכול גם לנסח לך גרסה בעברית מלאה או לשלב עברית ואנגלית.
רוצה שאכתוב לך את הקובץ בפורמט markdown מלא ותוכלי להעתיק?# shoppingList
