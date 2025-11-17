# 📸 How to Add Your Profile Photo

## 🚨 Your photo is currently missing - here's how to fix it:

### **Quick Fix Steps:**

1. **Find your photo file** (should be named `IMG_1935.jpeg` or any professional photo)
2. **Copy it** to this folder: `/Users/ujwaladindi/Desktop/Ujwala Project/images/`
3. **Rename it** to `IMG_1935.jpeg` (if it has a different name)
4. **Deploy the changes** by running: `./deploy.sh "Add profile photo"`

### **Accepted Image Formats:**
- ✅ JPG/JPEG (recommended)  
- ✅ PNG
- ✅ WebP

### **Image Requirements:**
- **Size:** 300x300px to 800x800px (square is best)
- **Quality:** High resolution, professional headshot
- **Background:** Clean, professional background preferred
- **File size:** Under 1MB for fast loading

### **Alternative: Use a Different Image**

If you want to use a different image file, you can:

1. **Place your image** in the `images/` folder
2. **Edit** `index.html` and change this line:
   ```html
   <img src="images/IMG_1935.jpeg" alt="...">
   ```
   to:
   ```html
   <img src="images/YOUR_IMAGE_NAME.jpg" alt="...">
   ```
3. **Deploy** the changes

### **Current Status:**
- ✅ Images folder created
- ❌ Profile photo missing (IMG_1935.jpeg)
- ✅ Fallback avatar working (showing "UD" initials)

### **Testing:**
After adding your photo, test it by:
1. Opening `index.html` in your browser locally
2. Checking the live site: https://ujwalad-1912.github.io/portfolio/

---
**💡 Tip:** Keep a backup of your photo file in case you need to replace it later!