// Old way
let user = {
    profile: {
        address: {
            street: 'Main St' // Nested object structure with a street property
        }
    }
};

// Lots of && checks to avoid errors
let street = user && user.profile && user.profile.address && user.profile.address.street;
// Using logical AND (&&) operators to check if each nested property exists before accessing 'street'.
// This prevents runtime errors if any property in the chain is undefined or null.

// Or multiple if checks
if (user) { // Check if 'user' exists.
    if (user.profile) { // Check if 'profile' exists within 'user'.
        if (user.profile.address) { // Check if 'address' exists within 'profile'.
            if (user.profile.address.street) { // Check if 'street' exists within 'address'.
                street = user.profile.address.street; // Assign the value of 'street' if all checks pass.
            }
        }
    }
}

// Modern way using optional chaining
street = user?.profile?.address?.street;
// Optional chaining (?.) allows safe access to nested properties.
// If any part of the chain is undefined or null, it returns undefined instead of throwing an error.

// If any part is undefined or null, returns undefined instead of throwing an error.
const nonExistent = user?.profile?.nonExistent?.whatever;
// Accessing a non-existent property using optional chaining.
// Returns undefined instead of throwing an error.
console.log(nonExistent); // undefined

// Example with a method
user = {
    name: 'John', // User object with a name property.
    getAddress() {
        return '123 Main St'; // Method that returns a string.
    }
};

// No error if method doesn't exist
console.log(user.getAddress?.()); // "123 Main St"
// Calls the 'getAddress' method safely using optional chaining.
// If the method exists, it executes and returns the result.

console.log(user.getNonExistent?.()); // undefined
// Safely attempts to call a non-existent method.
// Returns undefined instead of throwing an error.

// Example with an array
const users = [
    { name: 'John', age: 30 }, // First user object.
    { name: 'Jane', age: 25 }  // Second user object.
];

// Safe array access
console.log(users?.[0]?.name); // "John"
// Accesses the first element of the array and its 'name' property safely.
// If the array or the element doesn't exist, it returns undefined.

console.log(users?.[9]?.name); // undefined (no error)
// Attempts to access the 10th element (index 9) of the array and its 'name' property.
// Returns undefined since the element doesn't exist, avoiding an error.

// The problem with || (Logical OR operator)
let count = 0 || 5;  // 5
// Explanation: The logical OR operator (||) returns the first truthy value it encounters.
// Since 0 is a falsy value in JavaScript, the expression evaluates to 5.
// However, this might not be the desired behavior if we actually want to keep 0 as a valid value.

let text = "" || "default";  // "default"
// Explanation: Similarly, an empty string ("") is a falsy value in JavaScript.
// The logical OR operator skips it and returns "default" instead.
// This might not be ideal if we want to preserve the empty string as a valid value.

// ?? (Nullish Coalescing Operator) only uses the default for null or undefined
count = 0 ?? 5;  // 0
// Explanation: The nullish coalescing operator (??) only considers null or undefined as invalid values.
// Since 0 is neither null nor undefined, it is preserved as the result.

text = "" ?? "default";  // ""
// Explanation: The empty string ("") is also not null or undefined, so it is preserved as the result.
// This behavior is more desirable when we want to allow falsy values like 0 or "".

const missing = null ?? "default";  // "default"
// Explanation: Since null is considered invalid by the nullish coalescing operator,
// it falls back to the default value, which is "default".

const missing2 = undefined ?? "default";  // "default"
// Explanation: Similarly, undefined is treated as invalid by the nullish coalescing operator,
// so it falls back to the default value, "default".

const userSettings = {
    theme: 'dark', // User's theme preference.
    notification: {
        email: false, // Email notifications are disabled.
        sms: null, // SMS notifications are not set (null).
        push: undefined // Push notifications are not defined (undefined).
    }
};

// Get settings with good defaults
const theme = userSettings?.theme ?? 'light'; // Use the user's theme or default to 'light'.
const emailNotifications = userSettings?.notification?.email ?? true; // Use the user's email setting or default to true.
const smsNotifications = userSettings?.notification?.sms ?? true; // Use the user's SMS setting or default to true.
const pushNotifications = userSettings?.notification?.push ?? true; // Use the user's push setting or default to true.

console.log(theme); // "dark" (uses existing value)
console.log(emailNotifications); // false (uses existing value)
console.log(smsNotifications); // true (null triggered default)
console.log(pushNotifications); // true (undefined triggered default)

const api = {
    getUser(id) {
        // Simulate API call
        if (id === 1) {
            return {
                name: 'John', // User's name.
                address: {
                    city: 'New York' // User's city.
                }
            };
        }
        return null; // Return null if the user is not found.
    }
};

function getUserInfo(id) {
    const user = api.getUser(id); // Fetch user data from the API.
    return {
        name: user?.name ?? 'Anonymous', // Use the user's name or default to 'Anonymous'.
        city: user?.address?.city ?? 'Unknown' // Use the user's city or default to 'Unknown'.
    };
}

console.log(getUserInfo(1));  // { name: "John", city: "New York" }
// Fetches user with ID 1 and returns their name and city.

console.log(getUserInfo(2));  // { name: "Anonymous", city: "Unknown" }
// Fetches user with ID 2 (not found) and returns default values.

function createUser(name, options) {
    const defaultOptions = {
        age: 20, // Default age.
        country: 'Unknown', // Default country.
        notifications: {
            email: true, // Default email notification setting.
            sms: false // Default SMS notification setting.
        }
    };

    return {
        name, // User's name.
        age: options?.age ?? defaultOptions.age, // Use provided age or default.
        country: options?.country ?? defaultOptions.country, // Use provided country or default.
        notifications: {
            email: options?.notifications?.email ?? defaultOptions.notifications.email, // Use provided email setting or default.
            sms: options?.notifications?.sms ?? defaultOptions.notifications.sms // Use provided SMS setting or default.
        }
    };
}

const user1 = createUser('John', {
    age: 30, // Provided age.
    notifications: {
        email: false // Provided email notification setting.
    }
});

console.log(user1);
/* Output:
{
    name: "John",
    age: 30,
    country: "Unknown",
    notifications: {
        email: false,
        sms: false
    }
}
*/

let title = document?.meta?.title ?? 'Untitled';
// Safely access the document's meta title or default to 'Untitled'.

// Instead of:
title = document && document.meta && document.meta.title || 'Untitled';
// The old way of safely accessing the document's meta title with logical operators.

const firstName = user?.profile?.name?.first ?? 'Anonymous';
// Safely access the user's first name or default to 'Anonymous'.

const definitelyExists = obj.property ?? 'default';
// Use normal access if you're sure the property exists.

count = 0 ?? 5;        // 0
// Nullish coalescing operator preserves 0 as a valid value.

const count2 = 0 || 5;      // 5
// Logical OR operator treats 0 as falsy and returns 5.

const empty = "" ?? "text";  // ""
// Nullish coalescing operator preserves an empty string as a valid value.

const empty2 = "" || "text"; // "text"
// Logical OR operator treats an empty string as falsy and returns "text".
