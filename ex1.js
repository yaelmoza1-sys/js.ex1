// חלק 1

// 1 
// מדפיס Hellow js
console.log('Hellow js')

// 2
// מדפיס Yael
console.log('Yael')
// מדפיס Netivot
console.log('Netivot')
// מדפיס 2026
console.log('2026')

// 3
const city='netivot'
// מדפיס my city is netivot
console.log(`my city is: ${city}`)

// 4
let score=0
// מדפיס 0
console.log(`${score}`)
score=10
// מדפיס 10
console.log(`${score}`)

// 5
const myName='yael'
// const age=23
// מדפיס yael 23
// console.log( myName, age)

// חלק 2

// 7
// const pi=3.14
// pi=3
// TypeError: Assignment to constant variable.  

// 8
let color='blue'
color='red'
// עובד כי את let ניתן לשנות

// 9
// let a=1
// let a=2
// SyntaxError: Identifier 'a' has already been declared

// 10
var b=1
var b=2
console.log(b)
// הדפיס את 2 כי זה דרס

// 11
// let total
// console.log(total)
// מודפס undefined
let total=5
console.log(total)

// 12
const date_of_birth='11.03.2003'
let point=5
let lastName='moza'
let count=10

// חלק 3

// 13
// let my var - no
// 2fast - no
// userName - yes
// class - no
// Total - yes
// totalPrice - yes
// first-name - no
// let - yes
// $price - yes
// _count - yes

// בדיקה
// let my var='12'
// let 2fast='5'
// let userName='yael'
// let class=8
// let Total=90
// let totalPrice=89
// let first-name='yael'
// let let=7
// let $price=56
// let _count='45'

// 14
let my_var=''
let twoFast=''
let Class=''
let first_name=''

// 15
let age=20
let Age=30
// אלו שני משתנים שונים
console.log(age)
console.log(Age)

// 16
// priceProdac connect numOfkids
// כאשר השם מסביר בברור למה התכונתי

// חלק 4

// 17
let bool='true'
let str='yaelMoza'
let num=23

console.log(bool)
console.log(str)
console.log(num)

// 18
let strA='yael'
let strB="YAEL"
let strC=`yaelmoza`

console.log(strA)
console.log(strB)
console.log(strC)

// 19
let strD="It's me"
console.log(strD)

let strE=`It's me`
console.log(strE)

// 20
const numA=7
const numB=7.5

console.log(typeof numA)
console.log(typeof numB)

// 21
console.log(5+10)
console.log(10-5)
console.log(10*2)
console.log(10/5)
console.log(10%4)
// מחזיר שארית

// 22
const isStudent=true
const isVegan=false
console.log(isStudent)
console.log(isVegan)

// 23

console.log(5>3)
console.log(5<3)
console.log(5===3)
// boolean

// 24
const strF=''
console.log(strF)
// כן, שניהם מדפיסים שורה ריקה

// חלק 5

// 25
let u
console.log(u)
// undefined

// 26
const middleName = null
console.log(middleName)
// יש תשובה בבוחן

// 27
console.log(null == undefined)
console.log(null === undefined)
// הראשון נכון והשני לא כי הערך של שניהם שווה אבל בשני כשבודקים גם סוג הסוג שונה לכן יוצא לא נכון

// 28
// string='yael'
// number='4'
// boolean=true
// null=null
// undefined-אין ערך

// חלק6

// 29
console.log(typeof 42)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof 'hello')

// 30
// object
// לא ציפיתי לזה, זה מפתיע כי חשבתי שזה יביא NULL

// 31
console.log(typeof NaN)
// number  כי זה לא אמור להיות מסוג מספר

// 32
console.log(typeof typeof 42)
// string

// 33
const strG='abc'
const numC=5
const boolA=true
const n=null
const un=undefined

console.log('strG:', typeof strG)
console.log('numC:', typeof numC)
console.log('boolA:', typeof boolA)
console.log('n:', typeof n)
console.log('un:', typeof un)

// 34
let value='5'
console.log(typeof value)
// משתנה אינו מוגבל לטיפוס נתונים קבוע, וסוג הנתונים שלו משתנה אוטומטית בהתאם לערך שמוצב בו בזמן ריצה

// 35
const ageA=2
const nameA='Adi'
console.log( `My name is ${nameA} and I am ${ageA} years old`)

// 36
console.log("My name is " + nameA + " and I am " + ageA + " years old")

// 37
console.log( `The sum of 3 and 4 is ${3 + 4} `)

// 38
const price = 80
const quantity = 3
console.log(`Total: ${price * quantity}`);

// 39
console.log(`שורה ראשונה
שורה שניה`)
console.log("שורה ראשונה\nשורה שנייה")

// 40
const IsVegan = true
const numberOfKids = 2
console.log(`vegan: ${IsVegan}, kids:${numberOfKids}`)

// חלק 8

// 41
console.log(Number('42'))
console.log(typeof Number('42'))

// 42
console.log( String(123) )
console.log(typeof String(123) )

// 43
console.log(Number('12px'))
// NaN type: number

// 44
console.log(Number(true), Number(false), Number(null), Number(undefined), Number(''))
// 1 0 0 NaN 0

// 45
console.log(String(true), String(null), String(undefined))
// true null undefined

// 46
const input = '25'
console.log(input + 5) //255 הוסיף כמחרוזת
console.log(Number(input) + 5) //30 הוסיף כמספר

// 47
console.log('5' + 1, '5' - 1, '5' * 2, '10' / 2)

// חלק 9 

// 48
console.log('5'+5)

// שאלה 49
console.log('5' - 2)

// שאלה 50
console.log('5' + true)

// שאלה 51
console.log(true + 1)

// שאלה 52
console.log(typeof (5 + '5'))

// שאלה 53
console.log(typeof null, typeof undefined)

// שאלה 54
let x;
console.log(x, typeof x)

// שאלה 55
console.log(Number('abc'), typeof Number('abc'))

// שאלה 56
console.log(true === 'true')

// שאלה 57
const nA = 5
An = 6;
console.log(nA)

// חלק 10

// 58
let name = "יעל"
let ageB = 23
let cityA = "נתיבות"
let is_student = true
let likes_coffee = false

console.log("== כרטיס זהות ==")
console.log(`שם: ${name}`)
console.log(`גיל: ${ageB}`)
console.log(`עיר מגורים: ${cityA}`)
console.log(`סטודנט/ית: ${is_student}`)
console.log(`אוהב/ת קפה: ${likes_coffee}`)

console.log("\n=== טיפוסי הנתונים ===")
console.log(`הטיפוס של name הוא: ${typeof name}`)
console.log(`הטיפוס של ageB הוא: ${typeof ageB}`)
console.log(`הטיפוס של cityA הוא: ${typeof cityA}`)
console.log(`הטיפוס של is_student הוא: ${typeof is_student}`)
console.log(`הטיפוס של likes_coffee הוא: ${typeof likes_coffee}`)

// 59

let product1Name = "חלב"
let product1Price = 6.5
let product1Quantity = 2

let product2Name = "לחם אחיד"
let product2Price = 8
let product2Quantity = 1

let product3Name = "גבינה לבנה"
let product3Price = 5.9
let product3Quantity = 3

let total1 = product1Price * product1Quantity
let total2 = product2Price * product2Quantity
let total3 = product3Price * product3Quantity

let grandTotal = total1 + total2 + total3

console.log(
`מוצר 1: ${product1Name} {} כמות: ${product1Quantity} | מחיר ליחידה: ₪${product1Price}  סכום: ₪${total1}
מוצר 2: ${product2Name} {} כמות: ${product2Quantity} | מחיר ליחידה: ₪${product2Price}  סכום: ₪${total2}
מוצר 3: ${product3Name} {} כמות: ${product3Quantity} | מחיר ליחידה: ₪${product3Price}  סכום: ₪${total3}
סה"כ לתשלום: ₪${grandTotal}`
)

// 60
const celsius = 25
const fahrenheit = (celsius * 9) / 5 + 32
console.log(`${celsius}C = ${fahrenheit}F`)
console.log('Fahrenheit type:', typeof fahrenheit) 

// 61
const ageInput = '30'
const heightInput = '1.75'
console.log('לפני המרה:')
console.log(`ageInput: ערך = ${ageInput}, טיפוס = ${typeof ageInput}`)
console.log(`heightInput: ערך = ${heightInput}, טיפוס = ${typeof heightInput}`)
const agee = Number(ageInput)
const height = Number(heightInput)
console.log('\nאחרי המרה:')
console.log(`age: ערך = ${agee}, טיפוס = ${typeof agee}`)
console.log(`height: ערך = ${height}, טיפוס = ${typeof height}`)

// 62
const val1 = "ישראל"
const val2 = "תל אביב"
const val3 = 100
const val4 = 0.5
const val5 = true
const val6 = false
const val7 = undefined
let val8
const val9 = null
const val10 = null

console.log(`Value: ${val1}, Type: ${typeof val1}`)
console.log(`Value: ${val2}, Type: ${typeof val2}`)
console.log(`Value: ${val3}, Type: ${typeof val3}`)
console.log(`Value: ${val4}, Type: ${typeof val4}`)
console.log(`Value: ${val5}, Type: ${typeof val5}`)
console.log(`Value: ${val6}, Type: ${typeof val6}`)
console.log(`Value: ${val7}, Type: ${typeof val7}`)
console.log(`Value: ${val8}, Type: ${typeof val8}`)
console.log(`Value: ${val9}, Type: ${typeof val9}`)
console.log(`Value: ${val10}, Type: ${typeof val10}`)