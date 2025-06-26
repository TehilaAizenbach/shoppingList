# 🛒 שרת רשימת קניות – Shopping List Server

<p dir="rtl">
שרת API לניהול רשימת קניות עם קטגוריות ופריטים. השרת בנוי עם TypeScript, Express ו-TypeORM מול מסד נתונים SQL Server.
</p>

---

## 📦 Requirements  
- Node.js v16+
- Git
- SQL Server (local / cloud)

---

## 📁 מבנה תיקיות
```
src/
├── categories/
│   ├── category.controller.ts
│   ├── category.entity.ts
│   ├── category.routes.ts
│   ├── category.service.ts
│   ├── category.repository.ts
├── shopping_items/
│   ├── shoppingItem.controller.ts
│   ├── shoppingItem.entity.ts
│   ├── shoppingItem.routes.ts
│   ├── shoppingItem.service.ts
│   ├── shoppingItem.repository.ts
├── middleware/
│   ├── validate.dto.ts
├── utils/
│   ├── asyncHandler.ts
├── types/
│   ├── category.ts
│   ├── shopping_item.ts
├── data-source.ts
├── index.ts
```





---


---

## 🧪 כיצד להפעיל את הפרויקט / How to Run the Project

### 1. שכפול הפרויקט / Clone the project

```bash
git clone <repository-url>
cd shopping-list-server
###2. התקנת תלויות / Install dependencies
npm install
3. יצירת קובץ הגדרות סביבה / Create .env file
בקובץ .env בתיקיית השורש, הוסיפו את ההגדרות הבאות:
Add the following variables to the .env file in the root folder:
DB_HOST=your-host
DB_USERNAME=your-username
DB_PASSWORD=your-password
# הוסיפו משתני סביבה נוספים במידת הצורך / Add additional env variables as needed
4. הרצת השרת / Run the server
bash
Copy
Edit
npm run dev
בהצלחה! / Good luck!

yaml
Copy
Edit

---

רוצה שאעזור ללטש עוד משהו?  
אני לא רואה פה שום בעיה — כל מה שחסר זה הקישור לריפו ב-git, אבל את יודעת להוסיף את זה לבד.
