

// Basic Destructuring JSON Object
const user = 
    {
        'name' : 'Alex',
        'address' : 'Park Avenue',
        'age' : 43,
        'last_name' : 'Alex',
        'first_name' : 'Doe',
    }
;

// Array of Basic Destructuring JSON Object 
const heroes = [
    {
        'name' : 'Alex',
        'address' : 'Park Avenue',
        'age' : 43,

    },
    {
        'name' : 'Max',
    },
    {
        'name' : 'James',
    }
];

// Nested Destructuring JSON Object
const nestedData = {
    innerData: {
        name: "John Doe",
        age: 32,
        addresses: [
            {
                street: "123 Main St",
                city: "San Francisco",
                state: "CA"
            },
            {
                street: "456 Second Ave",
                city: "Los Angeles",
                state: "CA"
            },
            {
                street: "789 Third St",
                city: "San Diego",
                state: "CA"
            },
            {
                street: "111 Fourth Ave",
                city: "Sacramento",
                state: "CA"
            },
            {
                street: "222 Fifth St",
                city: "San Jose",
                state: "CA"
            },
            {
                street: "333 Sixth Ave",
                city: "Fresno",
                state: "CA"
            },
            {
                street: "444 Seventh St",
                city: "Long Beach",
                state: "CA"
            },
            {
                street: "555 Eighth Ave",
                city: "Oakland",
                state: "CA"
            }
        ]
    },
    status: "active"
};


// More Complex of Nested Destructuring JSON Object
const complexObject = {
    "data_obj": {
        "diningTables": {
            "data": [
                {
                    "id": "1",
                    "attributes": {
                        "sku": "bilibala_ocean",
                        "description": [
                            {
                                "type": "paragraph",
                                "children": [
                                    {
                                        "text": "Dining Table Ocean series",
                                        "type": "text"
                                    }
                                ]
                            }
                        ],
                        "images": {
                            "data": [
                                {
                                    "attributes": {
                                        "url": "/uploads/Screenshot_2024_08_11_at_18_24_38_ee99805c61.png"
                                    }
                                }
                            ]
                        }
                    }
                },

                {
                    "id": "2",
                    "attributes": {
                        "sku": "valavili_dessert",
                        "description": [
                        {
                            "type": "paragraph",
                            "children": [
                                {
                                    "text": "Dessert series of Dining Table",
                                    "type": "text"
                                }
                            ]
                        }
                        ],
                        "images": {
                            "data": [
                            {
                                "attributes": {
                                    "url": "/uploads/Screenshot_2024_08_11_at_18_31_20_6194fd4ce2.png"
                                }
                            }
                            ]
                        }
                    }
                }
            ]
        }
    }
}




export default function DestructuringJson(){

// Basic Destructuring JSON Object
    // Traditional Method - a
    let nameT = user.name;
    let ageT = user.age;
    console.log(nameT, ageT);

    // Destructuring Method - a
    const { name, age } = user;
    /*  { name  } = user // Uncaught SyntaxError: Unexpected token '=' 
        Caused by no variable declare in advance.
    */
    console.log(name, age);

    // Existing Variable Declaration - Destructuring Method
    let newName;
    ({ name : newName } = user);
    console.log(newName);

    // Assign Aliases to existing data of user object, Add New Variable & Default Value with Destructuring Method
    const { name : nameNew, age : ageNew, NewVariable='Added Value' } = user;
    console.log(nameNew, ageNew, NewVariable);

    const { last_name, first_name, FullName = `Full name is ${first_name} ${last_name}`} = user;
    console.log(FullName);

// Array of Basic Destructuring JSON Object 
    // for...of loop on Destructuring Method
    for (const { name } of heroes){
        console.log('Loop for...of Heroes ' + name);
    }

    // n-th element
    const {
        [2]: { name: nthName }
    }  = heroes;
    console.log(`n-th Name is ${nthName}`);

    // Comma sign the Skipping element get n-th element
        // Use commas to skip elements and destructure the 'name' of the third element
    const [, , { name: nth_Name }] = heroes;
    console.log(`n_th Name is ${nth_Name}`);

    // Find the object where name is 'Alex' and destructure it
    const { name : findName } = heroes.find(hero => hero.name === 'Alex') || {};
    console.log(`Find Name: ${findName}`);


// Nested Destructuring JSON Object
    // a Comma sign , means SKIP once (Skipping elements of Array)
    // addresses property is with square brackets, which is containing array.
    const {
        innerData: { name: nameN, age: ageN, addresses: [, , , , { street: fifthAddressStreet }] },
        status
    } = nestedData;

    console.log('Nested Name is : ' + nameN); // "John Doe"
    console.log('Nested Age is : ' + ageN); // 32
    console.log('Nested Street is : ' + fifthAddressStreet); // "222 Fifth St"
    console.log('Nested status is ' + status); // "active"


// More Complex of Nested Destructuring JSON Object
    // Destructure the path complexObject.data_obj.diningTables.data
    const {
        data_obj: {
            diningTables: {
                data
            }
        }
    } = complexObject;

    // Now you can use the destructured 'data' in the find() method
    const targetItem = data.find(item => item.id === "2");

    // Nested destructuring to extract the specific values
        // target "id, sku, text, url"
    if (targetItem) {
        const {
            id,
            attributes: {
                sku,
                description: [
                    {
                        children: [
                            { text }
                        ]
                    }
                ],
                images: {
                    data: [
                        {
                            attributes: { url }
                        }
                    ]
                }
            }
        } = targetItem;

        console.log(`
            More Complex of Nested Destructuring on complexObject -> 
            ID: ${id}, SKU: ${sku}, Text: ${text}, URL: ${url}
        `);
    }


}


