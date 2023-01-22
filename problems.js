/* 
    Problem:1  radianToDegree

ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
*/

function radianToDegree(radian) {
    const one_radian = 57.2958;
    const degree = one_radian * radian;
    return degree;
};

const degree = radianToDegree(10);
// console.log(degree);

/* 
    Problem:2  isJavaScriptFile 

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
*/


function isJavaScriptFile(str) {
    return /\.js$/.test(str)
}

const res = isJavaScriptFile('index.png.js.png');
// console.log(res);


/* function isJavaScriptFile1(str) {
    const text = str.endsWith('.js');
    return text;
}

const result = isJavaScriptFile1('index.png.js');
console.log(result); */

/* 
    Problem 3: oilPrice
ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
*/

function oilPrice(diesel, petrol, octane) {
    const diesel_price = 114;
    const petrol_price = 130;
    const octane_price = 135;

    const total_diesel_price = 114 * diesel;
    const total_petrol_price = 130 * petrol;
    const total_octane_price = 135 * octane;

    const total_price = total_diesel_price + total_petrol_price + total_octane_price;
    return total_price;
};

const total = oilPrice(0, 2, 3);
// console.log(total);



/* 
    Problem 4: publicBusFare

একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

উদাহরণ১ঃ
 যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

উদাহরণ২ঃ
 যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
*/


function publicBusFare(peoples) {
    if (peoples % 50 === 0) {
        let bus_need = peoples / 50;
        return bus_need;
    }
    if (peoples === 11) {
        let new_micro = peoples / 11;
        return new_micro;
    }
    if ((peoples % 50) % 11 !== 0) {
        let rest_peoples = peoples % 50;
        let bus_seat = peoples - rest_peoples;
        let bus_quantity = bus_seat / 50;
        let micro = rest_peoples % 11;
        let micro_need = rest_peoples - micro;
        let micro_quantity = micro_need / 11;
        let extra_people = micro * 250;
        return extra_people;
    }
}

const value = 55;
const bus_fare = publicBusFare(value);
console.log(bus_fare);


/* 

*/






/*    
Problem 5: isBestFriend

তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
*/

const first_obj = {
    name: 'abdul',
    friend: 'babul'
};

const second_obj = {
    name: 'babul',
    friend: 'abdul'
};

function isBestFriend(first, second) {
    if (first.name == second.friend && first.friend == second.name) {
        return true;
    } else {
        return false;
    }
}

const resu = isBestFriend(first_obj, second_obj);
console.log(resu);