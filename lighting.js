console.log("")
const mustang = {
    color: "red" ,
    year: 2025 ,
    model: "Ford Mustang"
}
console.log(mustang);

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

console.log(animalNames)

const familyMemberNumber1 = {
    name: "Grace"
};

const familyMemeberNumber2 = {
    name: "Joy"
};

const familyMemberNumber3 = {
    name: "Sam"
};
const familyMemberNumber4 = {
    name: "Andy"
};
const familyMembers = [familyMemberNumber1, familyMemeberNumber2, familyMemberNumber3, familyMemberNumber4];
console.log(familyMembers)

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(wardrobe);

 console.log(`The height of the wardrobe is ${wardrobe.height}inches`)
 console.log(`The manufacturer is ${wardrobe.manufacturer}`)
 console.log(`The content in the wardrobe is ${wardrobe.contents}`)
 console.log(`The depth of the wardrobe is ${wardrobe.depth}`)
 console.log(`The width of the wardrobe is ${wardrobe.width}`)

 wardrobe.material = "Cedar"
 console.log(wardrobe);

 const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(`The dimensions of the Empire State Building ${empireStateBuilding.height} height, ${empireStateBuilding.squarefeet} square feet, ${empireStateBuilding.eastWestLength} east west length, and ${empireStateBuilding.northSouthLength} north south length`)
console.log(empireStateBuilding["stories"])
console.log(empireStateBuilding["address"])
console.log(empireStateBuilding["constructionDate"])
console.log(empireStateBuilding["cost"])
console.log(empireStateBuilding["owner"])
console.log(empireStateBuilding["architect"])

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

for(let i = 0; i < partTimeInstructors.length; i++){
    console.log(partTimeInstructors[i])
}
const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

for(let i = 0; i < fullTimeInstructors.length; i++){
    console.log(fullTimeInstructors[i])
}

console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
console.log(`${beatles.members[1].name} was in the Beatles from 1960 to 1970. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)












