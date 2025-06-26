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
src/
├── categories/
│   ├── category.controller.ts
│   ├── category.entity.ts
│   ├── category.routes.ts
│   ├── category.service.ts
│   └── ...
├── shopping_items/
│   ├── shoppingItem.controller.ts
│   ├── shoppingItem.entity.ts
│   ├── shoppingItem.routes.ts
│   ├── shoppingItem.service.ts
│   └── ...
├── types/
│   ├── category.ts
│   ├── shopping_item.ts
│   └── ...
├── data-source.ts
├── index.ts



---

## 🧪 כיצד מריצים את הפרויקט

1. Clone the project  
```bash
git clone ...
cd shopping-list-server

