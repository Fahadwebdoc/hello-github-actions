// Tax rates data for different years
const taxRates = {
    '2025-26': {
        rental: {
            filer: [
                { min: 0, max: 300000, rate: 0, description: 'Tax-exempt' },
                { min: 300000, max: 600000, rate: 5, description: '5% on amount exceeding 300,000' },
                { min: 600000, max: 2000000, rate: 10, description: '15,000 + 10% on amount exceeding 600,000' },
                { min: 2000000, max: Infinity, rate: 25, description: '155,000 + 25% on amount exceeding 2,000,000' }
            ],
            nonFiler: [
                { min: 0, max: 300000, rate: 0, description: 'Tax-exempt' },
                { min: 300000, max: 600000, rate: 10, description: '10% on amount exceeding 300,000' },
                { min: 600000, max: 2000000, rate: 20, description: '30,000 + 20% on amount exceeding 600,000' },
                { min: 2000000, max: Infinity, rate: 35, description: '310,000 + 35% on amount exceeding 2,000,000' }
            ]
        },
        property: {
            sale: {
                filer: [
                    { min: 0, max: 50000000, rate: 3, description: '3% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 3.5, description: '3.5% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 4, description: '4% for properties above 100 million' }
                ],
                lateFiler: [
                    { min: 0, max: 50000000, rate: 6, description: '6% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 7, description: '7% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 8, description: '8% for properties above 100 million' }
                ],
                nonFiler: [
                    { min: 0, max: 50000000, rate: 10, description: '10% for all property values' },
                    { min: 50000000, max: 100000000, rate: 10, description: '10% for all property values' },
                    { min: 100000000, max: Infinity, rate: 10, description: '10% for all property values' }
                ]
            },
            purchase: {
                filer: [
                    { min: 0, max: 50000000, rate: 3, description: '3% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 3.5, description: '3.5% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 4, description: '4% for properties above 100 million' }
                ],
                lateFiler: [
                    { min: 0, max: 50000000, rate: 6, description: '6% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 7, description: '7% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 8, description: '8% for properties above 100 million' }
                ],
                nonFiler: [
                    { min: 0, max: 50000000, rate: 12, description: '12% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 16, description: '16% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 20, description: '20% for properties above 100 million' }
                ]
            }
        }
    },
    '2024-25': {
        rental: {
            filer: [
                { min: 0, max: 300000, rate: 0, description: 'Tax-exempt' },
                { min: 300000, max: 600000, rate: 5, description: '5% on amount exceeding 300,000' },
                { min: 600000, max: 2000000, rate: 10, description: '15,000 + 10% on amount exceeding 600,000' },
                { min: 2000000, max: Infinity, rate: 25, description: '155,000 + 25% on amount exceeding 2,000,000' }
            ],
            nonFiler: [
                { min: 0, max: 300000, rate: 0, description: 'Tax-exempt' },
                { min: 300000, max: 600000, rate: 10, description: '10% on amount exceeding 300,000' },
                { min: 600000, max: 2000000, rate: 20, description: '30,000 + 20% on amount exceeding 600,000' },
                { min: 2000000, max: Infinity, rate: 35, description: '310,000 + 35% on amount exceeding 2,000,000' }
            ]
        },
        property: {
            sale: {
                filer: [
                    { min: 0, max: 50000000, rate: 3, description: '3% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 3.5, description: '3.5% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 4, description: '4% for properties above 100 million' }
                ],
                lateFiler: [
                    { min: 0, max: 50000000, rate: 6, description: '6% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 7, description: '7% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 8, description: '8% for properties above 100 million' }
                ],
                nonFiler: [
                    { min: 0, max: 50000000, rate: 10, description: '10% for all property values' },
                    { min: 50000000, max: 100000000, rate: 10, description: '10% for all property values' },
                    { min: 100000000, max: Infinity, rate: 10, description: '10% for all property values' }
                ]
            },
            purchase: {
                filer: [
                    { min: 0, max: 50000000, rate: 3, description: '3% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 3.5, description: '3.5% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 4, description: '4% for properties above 100 million' }
                ],
                lateFiler: [
                    { min: 0, max: 50000000, rate: 6, description: '6% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 7, description: '7% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 8, description: '8% for properties above 100 million' }
                ],
                nonFiler: [
                    { min: 0, max: 50000000, rate: 12, description: '12% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 16, description: '16% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 20, description: '20% for properties above 100 million' }
                ]
            }
        }
    },
    '2023-24': {
        rental: {
            filer: [
                { min: 0, max: 300000, rate: 0, description: 'Tax-exempt' },
                { min: 300000, max: 600000, rate: 5, description: '5% on amount exceeding 300,000' },
                { min: 600000, max: 2000000, rate: 10, description: '15,000 + 10% on amount exceeding 600,000' },
                { min: 2000000, max: Infinity, rate: 25, description: '155,000 + 25% on amount exceeding 2,000,000' }
            ],
            nonFiler: [
                { min: 0, max: 300000, rate: 0, description: 'Tax-exempt' },
                { min: 300000, max: 600000, rate: 10, description: '10% on amount exceeding 300,000' },
                { min: 600000, max: 2000000, rate: 20, description: '30,000 + 20% on amount exceeding 600,000' },
                { min: 2000000, max: Infinity, rate: 35, description: '310,000 + 35% on amount exceeding 2,000,000' }
            ]
        },
        property: {
            sale: {
                filer: [
                    { min: 0, max: 50000000, rate: 3, description: '3% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 3.5, description: '3.5% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 4, description: '4% for properties above 100 million' }
                ],
                lateFiler: [
                    { min: 0, max: 50000000, rate: 6, description: '6% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 7, description: '7% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 8, description: '8% for properties above 100 million' }
                ],
                nonFiler: [
                    { min: 0, max: 50000000, rate: 10, description: '10% for all property values' },
                    { min: 50000000, max: 100000000, rate: 10, description: '10% for all property values' },
                    { min: 100000000, max: Infinity, rate: 10, description: '10% for all property values' }
                ]
            },
            purchase: {
                filer: [
                    { min: 0, max: 50000000, rate: 3, description: '3% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 3.5, description: '3.5% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 4, description: '4% for properties above 100 million' }
                ],
                lateFiler: [
                    { min: 0, max: 50000000, rate: 6, description: '6% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 7, description: '7% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 8, description: '8% for properties above 100 million' }
                ],
                nonFiler: [
                    { min: 0, max: 50000000, rate: 12, description: '12% for properties up to 50 million' },
                    { min: 50000000, max: 100000000, rate: 16, description: '16% for properties 50-100 million' },
                    { min: 100000000, max: Infinity, rate: 20, description: '20% for properties above 100 million' }
                ]
            }
        }
    }
};

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount).replace('PKR', 'PKR ');
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-PK').format(num);
}

// Calculate rental income tax
function calculateRentalTax(amount, taxpayerStatus, taxYear) {
    const rates = taxRates[taxYear].rental;
    const rateStructure = taxpayerStatus === 'non-filer' ? rates.nonFiler : rates.filer;
    
    let tax = 0;
    let applicableRate = 0;
    let description = '';
    
    for (const bracket of rateStructure) {
        if (amount > bracket.min && amount <= bracket.max) {
            applicableRate = bracket.rate;
            description = bracket.description;
            
            if (bracket.min === 0 && bracket.max === 300000) {
                tax = 0;
            } else if (bracket.min === 300000 && bracket.max === 600000) {
                tax = (amount - 300000) * (bracket.rate / 100);
            } else if (bracket.min === 600000 && bracket.max === 2000000) {
                tax = 15000 + (amount - 600000) * (bracket.rate / 100);
                if (taxpayerStatus === 'non-filer') {
                    tax = 30000 + (amount - 600000) * (bracket.rate / 100);
                }
            } else if (bracket.min === 2000000) {
                tax = 155000 + (amount - 2000000) * (bracket.rate / 100);
                if (taxpayerStatus === 'non-filer') {
                    tax = 310000 + (amount - 2000000) * (bracket.rate / 100);
                }
            }
            break;
        }
    }
    
    return { tax, rate: applicableRate, description };
}

// Calculate property transaction tax
function calculatePropertyTax(amount, taxpayerStatus, transactionType, taxYear) {
    const rates = taxRates[taxYear].property[transactionType];
    const rateStructure = rates[taxpayerStatus] || rates.filer;
    
    let tax = 0;
    let applicableRate = 0;
    let description = '';
    
    for (const bracket of rateStructure) {
        if (amount > bracket.min && amount <= bracket.max) {
            applicableRate = bracket.rate;
            description = bracket.description;
            tax = amount * (bracket.rate / 100);
            break;
        }
    }
    
    return { tax, rate: applicableRate, description };
}

// Main calculation function
function calculateTax() {
    const taxYear = document.getElementById('taxYear').value;
    const taxpayerStatus = document.getElementById('taxpayerStatus').value;
    const incomeType = document.getElementById('incomeType').value;
    const propertyValue = parseFloat(document.getElementById('propertyValue').value) || 0;
    
    if (propertyValue <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    let result;
    
    if (incomeType === 'rental') {
        result = calculateRentalTax(propertyValue, taxpayerStatus, taxYear);
    } else {
        const transactionType = incomeType === 'property-sale' ? 'sale' : 'purchase';
        result = calculatePropertyTax(propertyValue, taxpayerStatus, transactionType, taxYear);
    }
    
    // Display results
    displayResults(propertyValue, result, incomeType, taxpayerStatus, taxYear);
}

// Display calculation results
function displayResults(amount, result, incomeType, taxpayerStatus, taxYear) {
    const resultsSection = document.getElementById('results');
    const taxableAmountEl = document.getElementById('taxableAmount');
    const taxRateEl = document.getElementById('taxRate');
    const withholdingTaxEl = document.getElementById('withholdingTax');
    const netAmountEl = document.getElementById('netAmount');
    const breakdownEl = document.getElementById('breakdownDetails');
    
    // Calculate net amount
    const netAmount = incomeType === 'rental' ? amount - result.tax : amount - result.tax;
    
    // Update result cards
    taxableAmountEl.textContent = formatCurrency(amount);
    taxRateEl.textContent = result.rate + '%';
    withholdingTaxEl.textContent = formatCurrency(result.tax);
    netAmountEl.textContent = formatCurrency(netAmount);
    
    // Create breakdown
    const breakdown = `
        <div class="breakdown-item">
            <strong>Tax Year:</strong> ${taxYear}
        </div>
        <div class="breakdown-item">
            <strong>Taxpayer Status:</strong> ${taxpayerStatus.charAt(0).toUpperCase() + taxpayerStatus.slice(1).replace('-', ' ')}
        </div>
        <div class="breakdown-item">
            <strong>Income Type:</strong> ${incomeType.charAt(0).toUpperCase() + incomeType.slice(1).replace('-', ' ')}
        </div>
        <div class="breakdown-item">
            <strong>Calculation Method:</strong> ${result.description}
        </div>
        <div class="breakdown-item">
            <strong>Gross Amount:</strong> ${formatCurrency(amount)}
        </div>
        <div class="breakdown-item">
            <strong>Tax Rate Applied:</strong> ${result.rate}%
        </div>
        <div class="breakdown-item">
            <strong>Withholding Tax:</strong> ${formatCurrency(result.tax)}
        </div>
        <div class="breakdown-item">
            <strong>Net Amount:</strong> ${formatCurrency(netAmount)}
        </div>
    `;
    
    breakdownEl.innerHTML = breakdown;
    
    // Show results section with animation
    resultsSection.style.display = 'block';
    resultsSection.classList.add('fade-in');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Populate tax rate tables
function populateRateTables(year) {
    const rentalTable = document.getElementById('rentalRatesTable');
    const propertyTable = document.getElementById('propertyRatesTable');
    
    const yearData = taxRates[year];
    
    // Populate rental rates table
    let rentalHTML = '';
    yearData.rental.filer.forEach((bracket, index) => {
        const nonFilerRate = yearData.rental.nonFiler[index];
        const rangeText = bracket.max === Infinity ? 
            `Above ${formatNumber(bracket.min)}` : 
            `${formatNumber(bracket.min)} - ${formatNumber(bracket.max)}`;
        
        rentalHTML += `
            <tr>
                <td>${rangeText}</td>
                <td>${bracket.rate}%</td>
                <td>${nonFilerRate.rate}%</td>
            </tr>
        `;
    });
    rentalTable.innerHTML = rentalHTML;
    
    // Populate property rates table
    let propertyHTML = '';
    yearData.property.sale.filer.forEach((bracket, index) => {
        const rangeText = bracket.max === Infinity ? 
            `Above ${formatNumber(bracket.min)}` : 
            `${formatNumber(bracket.min)} - ${formatNumber(bracket.max)}`;
        
        // Sale rates
        propertyHTML += `
            <tr>
                <td>${rangeText}</td>
                <td>Sale</td>
                <td>${bracket.rate}%</td>
                <td>${yearData.property.sale.nonFiler[index].rate}%</td>
            </tr>
        `;
        
        // Purchase rates
        propertyHTML += `
            <tr>
                <td>${rangeText}</td>
                <td>Purchase</td>
                <td>${yearData.property.purchase.filer[index].rate}%</td>
                <td>${yearData.property.purchase.nonFiler[index].rate}%</td>
            </tr>
        `;
    });
    propertyTable.innerHTML = propertyHTML;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with default year
    populateRateTables('2025-26');
    
    // Calculate button
    document.getElementById('calculateBtn').addEventListener('click', function() {
        this.classList.add('loading');
        setTimeout(() => {
            calculateTax();
            this.classList.remove('loading');
        }, 500);
    });
    
    // Income type change handler
    document.getElementById('incomeType').addEventListener('change', function() {
        const propertySaleFields = document.querySelector('.property-sale-fields');
        if (this.value === 'property-sale' || this.value === 'property-purchase') {
            propertySaleFields.style.display = 'block';
        } else {
            propertySaleFields.style.display = 'none';
        }
    });
    
    // Tax year tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            // Update tables
            populateRateTables(this.dataset.year);
        });
    });
    
    // FAQ toggle
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Input validation
    document.getElementById('propertyValue').addEventListener('input', function() {
        const value = this.value;
        if (value && value < 0) {
            this.value = 0;
        }
    });
    
    // Format number input on blur
    document.getElementById('propertyValue').addEventListener('blur', function() {
        const value = parseFloat(this.value);
        if (value) {
            this.value = value.toLocaleString('en-PK');
        }
    });
    
    // Clear formatting on focus
    document.getElementById('propertyValue').addEventListener('focus', function() {
        this.value = this.value.replace(/,/g, '');
    });
});

// Additional utility functions
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.textContent = message;
    document.querySelector('.calculator-form').insertBefore(errorDiv, document.querySelector('.calculator-form').firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.textContent = message;
    document.querySelector('.calculator-form').insertBefore(successDiv, document.querySelector('.calculator-form').firstChild);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateRentalTax,
        calculatePropertyTax,
        formatCurrency,
        formatNumber,
        taxRates
    };
}