# Salary Tax Calculator

A comprehensive salary tax calculator inspired by befiler.com, designed for Pakistani tax calculations with support for multiple tax years.

## 🌟 Features

### Core Functionality
- **Multi-Year Support**: Calculate taxes for current year (2024-25) and previous two years (2023-24, 2022-23)
- **Real-time Calculations**: Instant tax calculations as you switch between years
- **Comprehensive Results**: Shows both monthly and yearly breakdowns
- **Detailed Breakdown**: Complete tax slab breakdown with amounts

### User Interface
- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations and hover effects
- **Easy Navigation**: Simple year selection buttons and intuitive form controls

### Tax Calculations
- **Accurate Tax Rates**: Based on official Pakistani tax brackets for salaried individuals
- **Progressive Tax System**: Correctly implements progressive tax calculation
- **Multiple Display Formats**: Shows amounts in both monthly and yearly formats
- **Detailed Breakdown Table**: Shows tax calculation for each income slab

## 📊 Tax Year Support

### 2024-25 Tax Brackets (Current Year)
- Rs 0 - Rs 600,000: 0%
- Rs 600,001 - Rs 1,200,000: 5%
- Rs 1,200,001 - Rs 2,200,000: 15%
- Rs 2,200,001 - Rs 3,200,000: 25%
- Rs 3,200,001 - Rs 4,100,000: 30%
- Above Rs 4,100,000: 35%

### 2023-24 Tax Brackets
- Same as 2024-25 (rates remained consistent)

### 2022-23 Tax Brackets
- Rs 0 - Rs 600,000: 0%
- Rs 600,001 - Rs 1,200,000: 2.5%
- Rs 1,200,001 - Rs 2,400,000: 12.5%
- Rs 2,400,001 - Rs 3,600,000: 20%
- Rs 3,600,001 - Rs 6,000,000: 25%
- Above Rs 6,000,000: 35%

## 🚀 Quick Start

### Option 1: Direct Integration
1. Download the `salary-tax-calculator.html` file
2. Upload it to your website directory
3. Link to it from your main website or embed it in an iframe

### Option 2: Embed in Existing Page
Extract the HTML content between `<div class="container">` and `</div>` and integrate it into your existing page structure.

### Option 3: Iframe Integration
```html
<iframe src="salary-tax-calculator.html" width="100%" height="800px" frameborder="0"></iframe>
```

## 💻 Integration Examples

### WordPress Integration
1. Create a new page in WordPress
2. Switch to HTML editor
3. Paste the entire HTML content
4. Publish the page

### React Integration
Convert the vanilla JavaScript to React components by:
1. Converting HTML to JSX
2. Moving CSS to styled-components or CSS modules
3. Converting JavaScript functions to React hooks

### PHP Integration
Include the calculator in your PHP pages:
```php
<?php include 'salary-tax-calculator.html'; ?>
```

## 🎨 Customization

### Color Scheme
Modify the CSS variables in the `<style>` section:
- Primary gradient: `#4f46e5` to `#7c3aed`
- Background gradient: `#667eea` to `#764ba2`
- Card backgrounds: `#f8fafc`

### Branding
1. Update the header title and description
2. Add your logo to the header section
3. Modify the color scheme to match your brand

### Currency
Currently set to Pakistani Rupees (Rs). To change:
1. Update the `input-prefix` content
2. Modify the JavaScript to use your currency format
3. Update the display strings

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Technical Details

### Dependencies
- **None!** Pure HTML, CSS, and JavaScript
- No external libraries required
- No server-side processing needed

### Performance
- Lightweight (< 50KB total)
- Fast loading
- Client-side calculations
- No external API calls

### Security
- All calculations performed client-side
- No data transmission to external servers
- Input validation and sanitization

## 📋 Usage Instructions

1. **Select Tax Year**: Choose from 2024-25, 2023-24, or 2022-23
2. **Enter Salary**: Input your monthly salary in the text field
3. **Calculate**: Click "Calculate Tax" or press Enter
4. **View Results**: See monthly/yearly tax and take-home amounts
5. **Review Breakdown**: Check the detailed tax calculation table

## 🔍 Features Comparison with Befiler.com

| Feature | This Calculator | Befiler.com |
|---------|----------------|-------------|
| Year Selection | ✅ 3 Years | ✅ Multiple Years |
| Mobile Responsive | ✅ Yes | ✅ Yes |
| Detailed Breakdown | ✅ Yes | ❌ Limited |
| Modern UI | ✅ Yes | ❌ Basic |
| No Registration | ✅ Yes | ❌ Requires Signup |
| Offline Usage | ✅ Yes | ❌ No |

## 🚨 Important Notes

- This calculator is designed for **salaried individuals** in Pakistan
- Calculations are based on standard tax brackets and may not include:
  - Special deductions (insurance, investments, etc.)
  - Professional allowances
  - Other complex tax scenarios
- For detailed tax planning, consult a tax professional
- Tax rates are subject to change by government policies

## 📞 Support

For questions about integration or customization:
1. Check the code comments for implementation details
2. Test thoroughly with known tax scenarios
3. Validate calculations against official tax resources

## 📄 License

This calculator is provided as-is for educational and general use purposes. Users are responsible for verifying tax calculations against official sources.

---

**Ready to integrate?** Simply download the HTML file and you're good to go! 🎉