# Withholding Tax Calculator for Property Income - Pakistan

A comprehensive, responsive web calculator for calculating withholding tax on property income in Pakistan for tax years 2023-24, 2024-25, and 2025-26.

## 🌟 Features

### 📊 **Multi-Year Support**
- Tax calculations for 2023-24, 2024-25, and 2025-26
- Consistent calculation criteria across all three years
- Easy year selection with tabbed interface

### 🏠 **Property Income Types**
- **Rental Income**: Calculate withholding tax on annual rental income
- **Property Sale**: Calculate advance tax on property sales
- **Property Purchase**: Calculate advance tax on property purchases

### 👥 **Taxpayer Categories**
- **Filer**: Taxpayers on Active Taxpayer List (ATL) - Lower tax rates
- **Late Filer**: Taxpayers who file returns after due date - Moderate tax rates
- **Non-Filer**: Taxpayers not on ATL - Higher tax rates to encourage compliance

### 💰 **Tax Rate Structure**

#### Rental Income Tax Rates
| Annual Rental Income (PKR) | Filer Rate | Non-Filer Rate |
|---------------------------|------------|----------------|
| Up to 300,000 | 0% (Tax-exempt) | 0% (Tax-exempt) |
| 300,001 - 600,000 | 5% | 10% |
| 600,001 - 2,000,000 | 10% | 20% |
| Above 2,000,000 | 25% | 35% |

#### Property Transaction Tax Rates
| Property Value (PKR) | Transaction | Filer Rate | Non-Filer Rate |
|---------------------|-------------|------------|----------------|
| Up to 50 million | Sale | 3% | 10% |
| Up to 50 million | Purchase | 3% | 12% |
| 50-100 million | Sale | 3.5% | 10% |
| 50-100 million | Purchase | 3.5% | 16% |
| Above 100 million | Sale | 4% | 10% |
| Above 100 million | Purchase | 4% | 20% |

## 🚀 **Getting Started**

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for fonts and icons

### Installation
1. Download or clone the repository
2. Open `index.html` in your web browser
3. Start calculating taxes immediately!

### Usage
1. **Select Tax Year**: Choose from 2023-24, 2024-25, or 2025-26
2. **Choose Taxpayer Status**: Select Filer, Late Filer, or Non-Filer
3. **Select Income Type**: Choose Rental Income, Property Sale, or Property Purchase
4. **Enter Amount**: Input the property value or annual rental income in PKR
5. **Calculate**: Click the "Calculate Tax" button to get instant results

## 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading and smooth animations

## 🎨 **Design Features**
- Modern gradient backgrounds
- Clean, professional interface
- Intuitive navigation
- Interactive elements with hover effects
- Smooth animations and transitions

## 📋 **Calculator Sections**

### 1. **Tax Calculator**
- Interactive form with real-time validation
- Instant tax calculations
- Detailed breakdown of calculations
- Professional results display

### 2. **Tax Rates Tables**
- Comprehensive rate tables for all years
- Easy comparison between filer and non-filer rates
- Organized by income type and transaction type

### 3. **Tax Guide**
- Educational content about Pakistani tax system
- Explanation of filer vs non-filer status
- Property tax compliance information

### 4. **FAQ Section**
- Common questions and answers
- Expandable/collapsible format
- Helpful tips for taxpayers

## 🔧 **Technical Details**

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: ES6+ features for calculations
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance
- Lightweight codebase
- Optimized images and assets
- Fast calculation algorithms
- Smooth user experience

## 🧮 **Calculation Logic**

### Rental Income Tax Calculation
```javascript
// Progressive tax calculation
if (income <= 300000) {
    tax = 0; // Tax-exempt
} else if (income <= 600000) {
    tax = (income - 300000) * rate/100;
} else if (income <= 2000000) {
    tax = baseAmount + (income - 600000) * rate/100;
} else {
    tax = higherBaseAmount + (income - 2000000) * rate/100;
}
```

### Property Transaction Tax Calculation
```javascript
// Flat rate calculation based on property value
tax = propertyValue * (rate/100);
```

## 📊 **Key Features**

### ✅ **Accurate Calculations**
- Based on official FBR rates
- Updated for current tax years
- Precise mathematical calculations

### ✅ **User-Friendly Interface**
- Clean, intuitive design
- Step-by-step guidance
- Clear result presentation

### ✅ **Comprehensive Information**
- Detailed tax rate tables
- Educational content
- FAQ section

### ✅ **Mobile Responsive**
- Works on all devices
- Touch-friendly controls
- Optimized for mobile use

## 📈 **Benefits for Users**

1. **Save Time**: Instant tax calculations without manual computation
2. **Avoid Errors**: Automated calculations reduce human error
3. **Stay Informed**: Up-to-date tax rates and regulations
4. **Plan Better**: Calculate taxes before transactions
5. **Compare Options**: See difference between filer and non-filer rates

## 🎯 **Target Audience**
- Property owners and investors
- Real estate professionals
- Tax consultants and advisors
- Financial planners
- Individual taxpayers

## 📞 **Support**
For questions or issues:
- Check the FAQ section
- Consult with a tax professional
- Refer to FBR official website

## ⚖️ **Legal Disclaimer**
This calculator is for informational purposes only. Tax calculations are based on publicly available information and may not reflect all applicable taxes, deductions, or circumstances. Always consult with a qualified tax professional for official tax advice.

## 🔄 **Updates**
- Regular updates with new tax rates
- Feature enhancements based on user feedback
- Bug fixes and performance improvements

## 📝 **License**
This project is open source and available under the MIT License.

---

**Made with ❤️ for Pakistani taxpayers**

*Stay compliant, stay informed!*