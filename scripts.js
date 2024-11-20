const translations = {
    "en": {
        itemNameLabel: "Item Name",
        quantityLabel: "Quantity",
        unitPriceLabel: "Unit Price",
        totalPriceLabel: "Total Price",
        sellingPriceLabel: "Selling Price",
        profitLabel: "Profit",
        totalProfitLabel: "Total Profit",
        addButton: "Add Table",
        exportExcelButton: "Export to Excel",
        exportPdfButton: "Export to PDF",
        itemNameHeader: "Item Name",
        quantityHeader: "Quantity",
        unitPriceHeader: "Unit Price",
        totalPriceHeader: "Total Price",
        sellingPriceHeader: "Selling Price",
        profitHeader: "Profit",
        totalProfitHeader: "Total Profit",
        actionsHeader: "Actions",
        editButton: "Edit",
        deleteButton: "Delete",
        direction: "ltr",
        pageTitle: "Control Panel"
    },
    "ar": {
        itemNameLabel: "اسم المادة",
        quantityLabel: "الكمية",
        unitPriceLabel: "سعر المفرد",
        totalPriceLabel: "السعر الكلي",
        sellingPriceLabel: "سعر البيع",
        profitLabel: "الربح",
        totalProfitLabel: "الربح الكلي",
        addButton: "إضافة جدول",
        exportExcelButton: "تصدير إلى Excel",
        exportPdfButton: "تصدير إلى PDF",
        itemNameHeader: "اسم المادة",
        quantityHeader: "الكمية",
        unitPriceHeader: "سعر المفرد",
        totalPriceHeader: "السعر الكلي",
        sellingPriceHeader: "سعر البيع",
        profitHeader: "الربح",
        totalProfitHeader: "الربح الكلي",
        actionsHeader: "الإجراءات",
        editButton: "تعديل",
        deleteButton: "حذف",
        direction: "rtl",
        pageTitle: "لوحة التحكم"
    },
    "fr": {
        itemNameLabel: "Nom de l'article",
        quantityLabel: "Quantité",
        unitPriceLabel: "Prix unitaire",
        totalPriceLabel: "Prix total",
        sellingPriceLabel: "Prix de vente",
        profitLabel: "Profit",
        totalProfitLabel: "Profit total",
        addButton: "Ajouter un tableau",
        exportExcelButton: "Exporter en Excel",
        exportPdfButton: "Exporter en PDF",
        itemNameHeader: "Nom de l'article",
        quantityHeader: "Quantité",
        unitPriceHeader: "Prix unitaire",
        totalPriceHeader: "Prix total",
        sellingPriceHeader: "Prix de vente",
        profitHeader: "Profit",
        totalProfitHeader: "Profit total",
        actionsHeader: "Actions",
        editButton: "Éditer",
        deleteButton: "Supprimer",
        direction: "ltr",
        pageTitle: "Panneau de contrôle"
    }
};

// Function to toggle language
function toggleLanguage() {
    var languageSelect = document.getElementById("language");
    var selectedLanguage = languageSelect.value;

    document.dir = translations[selectedLanguage].direction;
    document.title = translations[selectedLanguage].pageTitle;
    updateTextContent(selectedLanguage);
}

// Function to update text content based on selected language
function updateTextContent(language) {
    var translation = translations[language];

    document.getElementById("itemNameLabel").textContent = translation.itemNameLabel;
    document.getElementById("quantityLabel").textContent = translation.quantityLabel;
    document.getElementById("unitPriceLabel").textContent = translation.unitPriceLabel;
    document.getElementById("totalPriceLabel").textContent = translation.totalPriceLabel;
    document.getElementById("sellingPriceLabel").textContent = translation.sellingPriceLabel;
    document.getElementById("profitLabel").textContent = translation.profitLabel;
    document.getElementById("totalProfitLabel").textContent = translation.totalProfitLabel;
    document.getElementById("addButton").textContent = translation.addButton;
    document.getElementById("exportExcelButton").textContent = translation.exportExcelButton;
    document.getElementById("exportPdfButton").textContent = translation.exportPdfButton;

    document.getElementById("itemNameHeader").textContent = translation.itemNameHeader;
    document.getElementById("quantityHeader").textContent = translation.quantityHeader;
    document.getElementById("unitPriceHeader").textContent = translation.unitPriceHeader;
    document.getElementById("totalPriceHeader").textContent = translation.totalPriceHeader;
    document.getElementById("sellingPriceHeader").textContent = translation.sellingPriceHeader;
    document.getElementById("profitHeader").textContent = translation.profitHeader;
    document.getElementById("totalProfitHeader").textContent = translation.totalProfitHeader;
    document.getElementById("actionsHeader").textContent = translation.actionsHeader;

    document.getElementById("pageTitle").textContent = translation.pageTitle;

    // Update buttons inside the table
    updateTableButtons();
}

// Function to update buttons inside the table based on selected language
function updateTableButtons() {
    var languageSelect = document.getElementById("language");
    var selectedLanguage = languageSelect.value;

    var table = document.getElementById("itemsTable").getElementsByTagName('tbody')[0];
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var editButton = row.getElementsByTagName('button')[0];
        var deleteButton = row.getElementsByTagName('button')[1];

        editButton.textContent = translations[selectedLanguage].editButton;
        deleteButton.textContent = translations[selectedLanguage].deleteButton;
    }
}

// Toggle dark mode function
function toggleDarkMode() {
    var bodyElement = document.body;
    var toggleModeButton = document.getElementById("toggleMode");
    if (bodyElement.classList.contains("dark-mode")) {
        bodyElement.classList.remove("dark-mode");
        toggleModeButton.innerText = "🌙";
    } else {
        bodyElement.classList.add("dark-mode");
        toggleModeButton.innerText = "🌞";
    }
}

// Calculate total price function
function calculateTotalPrice() {
    var quantity = parseFloat(document.getElementById("quantity").value) || 0;
    var unitPrice = parseFloat(document.getElementById("unitPrice").value) || 0;
    var totalPrice = quantity * unitPrice;
    document.getElementById("totalPrice").value = totalPrice.toFixed(2);
}

// Calculate profit function
function calculateProfit() {
    var unitPrice = parseFloat(document.getElementById("unitPrice").value) || 0;
    var sellingPrice = parseFloat(document.getElementById("sellingPrice").value) || 0;
    var profit = sellingPrice - unitPrice;
    document.getElementById("profit").value = profit.toFixed(2);

    calculateTotalProfit();
}

// Calculate total profit function
function calculateTotalProfit() {
    var quantity = parseFloat(document.getElementById("quantity").value) || 0;
    var profit = parseFloat(document.getElementById("profit").value) || 0;
    var totalProfit = quantity * profit;
    document.getElementById("totalProfit").value = totalProfit.toFixed(2);
}

// Add a new row to the table function
function addTable() {
    var itemName = document.getElementById("itemName").value;
    var quantity = parseFloat(document.getElementById("quantity").value) || 0;
    var unitPrice = parseFloat(document.getElementById("unitPrice").value) || 0;
    var sellingPrice = parseFloat(document.getElementById("sellingPrice").value) || 0;

    var totalPrice = quantity * unitPrice;
    var profit = sellingPrice - unitPrice;
    var totalProfit = profit * quantity;

    var table = document.getElementById("itemsTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = itemName;
    cell2.innerHTML = quantity;
    cell3.innerHTML = unitPrice.toFixed(2);
    cell4.innerHTML = totalPrice.toFixed(2);
    cell5.innerHTML = sellingPrice.toFixed(2);
    cell6.innerHTML = profit.toFixed(2);
    cell7.innerHTML = totalProfit.toFixed(2);
    cell8.innerHTML = `<button class="btn btn-success" onclick="editRow(this)">${translations['en'].editButton}</button>` +
        `<button class="btn btn-danger" onclick="deleteRow(this)">${translations['en'].deleteButton}</button>`;

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("unitPrice").value = "";
    document.getElementById("sellingPrice").value = "";

    saveTableDataToLocalStorage();
}

// Delete a row from the table function
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    saveTableDataToLocalStorage();
}

// Edit a row in the table function
function editRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    var itemName = prompt("Edit Item Name:", cells[0].innerText);
    if (itemName !== null) cells[0].innerText = itemName;

    var quantity = prompt("Edit Quantity:", cells[1].innerText);
    if (quantity !== null) cells[1].innerText = quantity;

    var unitPrice = prompt("Edit Unit Price:", cells[2].innerText);
    if (unitPrice !== null) cells[2].innerText = unitPrice;

    var sellingPrice = prompt("Edit Selling Price:", cells[4].innerText);
    if (sellingPrice !== null) cells[4].innerText = sellingPrice;

    cells[3].innerText = (parseFloat(quantity) * parseFloat(unitPrice)).toFixed(2);
    cells[5].innerText = (parseFloat(sellingPrice) - parseFloat(unitPrice)).toFixed(2);
    cells[6].innerText = (parseFloat(cells[5].innerText) * parseFloat(quantity)).toFixed(2);

    saveTableDataToLocalStorage();
}

// Save table data to Local Storage function
function saveTableDataToLocalStorage() {
    var tableData = [];
    var table = document.getElementById("itemsTable").getElementsByTagName('tbody')[0];
    for (var i = 0, row; row = table.rows[i]; i++) {
        var rowData = {
            itemName: row.cells[0].innerText,
            quantity: parseFloat(row.cells[1].innerText),
            unitPrice: parseFloat(row.cells[2].innerText),
            totalPrice: parseFloat(row.cells[3].innerText),
            sellingPrice: parseFloat(row.cells[4].innerText),
            profit: parseFloat(row.cells[5].innerText),
            totalProfit: parseFloat(row.cells[6].innerText)
        };
        tableData.push(rowData);
    }
    localStorage.setItem("tableData", JSON.stringify(tableData));
}

// Load table data from Local Storage function
function loadTableDataFromLocalStorage() {
    var tableData = JSON.parse(localStorage.getItem("tableData")) || [];
    for (var i = 0; i < tableData.length; i++) {
        var rowData = tableData[i];
        var table = document.getElementById("itemsTable").getElementsByTagName('tbody')[0];
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = rowData.itemName;
        cell2.innerHTML = rowData.quantity;
        cell3.innerHTML = rowData.unitPrice.toFixed(2);
        cell4.innerHTML = rowData.totalPrice.toFixed(2);
        cell5.innerHTML = rowData.sellingPrice.toFixed(2);
        cell6.innerHTML = rowData.profit.toFixed(2);
        cell7.innerHTML = rowData.totalProfit.toFixed(2);
        cell8.innerHTML = `<button class="btn btn-success" onclick="editRow(this)">${translations['en'].editButton}</button>` +
            `<button class="btn btn-danger" onclick="deleteRow(this)">${translations['en'].deleteButton}</button>`;
    }
    updateTableButtons();
}

// Export table data to Excel function
function exportToExcel() {
    var table = document.getElementById("itemsTable");
    var cloneTable = table.cloneNode(true);

    var rows = cloneTable.rows;
    for (var i=0; i<rows.length; i++) {
        rows[i].deleteCell(7);
    }

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.table_to_sheet(cloneTable);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "table_data.xlsx");
}

// Export table data to PDF function
async function exportTableToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');

    // Add logo
    const img = new Image();
    img.src = 'logo.jpg'; // Make sure the path is correct
    img.onload = function() {
        doc.addImage(img, 'JPEG', 20, 20, 50, 50);

        // Add title
        doc.setFontSize(18);
        doc.text(document.title, 100, 40);

        // Add table
        html2canvas(document.getElementById('itemsTable')).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 500;
            const pageHeight = 700;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 80;

            doc.addImage(imgData, 'PNG', 20, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 20, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            doc.save('table_data.pdf');
        });
    };
}

// Load table data from Local Storage on page load
window.onload = loadTableDataFromLocalStorage;
