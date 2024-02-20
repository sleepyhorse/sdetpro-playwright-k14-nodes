const readline = require('readline');

// Bank Account Object
const bankAccountTemplate = {
    accountNumber: "",
    routingNumber: "",
    balance: 0
};

// Array to store bank accounts
let bankAccounts = [];

// Function to create a new bank account object by cloning the template and updating accountNumber
function createBankAccount(accountNumber, routingNumber, balance) {
    let newAccount = Object.assign({}, bankAccountTemplate); // Clone the template
    newAccount.accountNumber = accountNumber; // Update accountNumber
    newAccount.routingNumber = routingNumber;
    newAccount.balance = balance;
    bankAccounts.push(newAccount);
}

// Function to find an account by account number
function findAccount(accountNumber) {
    for (let account of bankAccounts) {
        if (account.accountNumber === accountNumber) {
            return account;
        }
    }
    return null;
}

// Function to print account info
function printAccountInfo(account) {
    console.log(`Account Number: ${account.accountNumber}`);
    console.log(`Balance: $${account.balance}`);
}

// Function to withdraw money from an account
function withdrawMoney(accountNumber, amount) {
    let account = findAccount(accountNumber);
    if (account) {
        if (amount <= account.balance) {
            account.balance -= amount;
            console.log(`Withdrawal successful. Updated balance: $${account.balance}`);
        } else {
            console.log("Insufficient funds. Withdrawal not allowed.");
        }
    } else {
        console.log("Account not found.");
    }
}

// Console interface
function startConsoleInterface() {
    console.log("Welcome to the Banking Application!");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt('Enter your choice:\n1. Find an account\n2. Update balance\n0. Exit the program\n');

    rl.prompt();

    rl.on('line', function(choice) {
        switch (choice.trim()) {
            case "1":
                rl.question('Enter account number: ', function(accountNumber) {
                    let account = findAccount(accountNumber.trim());
                    if (account) {
                        printAccountInfo(account);
                    } else {
                        console.log("Account not found.");
                    }
                    rl.prompt();
                });
                break;
            case "2":
                rl.question('Enter account number to withdraw money from: ', function(accountNumberToUpdate) {
                    rl.question('Enter amount to withdraw: ', function(amountStr) {
                        let amount = parseFloat(amountStr.trim());
                        withdrawMoney(accountNumberToUpdate.trim(), amount);
                        rl.prompt();
                    });
                });
                break;
            case "0":
                console.log("Exiting the program. Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please enter a valid option.");
                rl.prompt();
        }
    }).on('close', function() {
        process.exit(0);
    });
}

// Example usage
createBankAccount("123456789", "987654321", 1000);
createBankAccount("987654321", "123456789", 500);

startConsoleInterface();
