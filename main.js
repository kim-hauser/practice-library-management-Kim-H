/* Scenario:

You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:

Books have an author and a genre.
DVDs have a director and duration.
Magazines have an issueNumber and publisher.
  
Tasks
1. Step 1: Create a Base Class
Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
  
2. Step 2: Extend the Base Class
Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
  
3. Step 3: Instantiate Objects
Create instances of each class and test the shared and unique
methods.
  
4. Step 4: Test the Inheritance
Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
Test accessing and displaying unique properties of each child
class.

*/

// Create base class:

class LibraryItem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }

    // Shared Method 1
    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`"${this.title}" has been checked out.`);
            return true;
        } else {
            console.log(`"${this.title}" is already checked out.`);
            return false;
        }
    }

    // Shared Method 2
    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`"${this.title}" has been returned.`);
            return true;
        } else {
            console.log(`"${this.title}" is already available.`);
            return false;
        }
    }
}

// Child Class: Book
class Book extends LibraryItem {
  constructor (title, id, author, genre) {
    super(title, id); // Call the parent constructor
    this.author = author;
    this.genre = genre;
  }

  displayBookInfo() {
    console.log(`Author: ${this.author}, Genre: ${this.genre}`);
  }
}

// Child Class: DVD
class DVD extends LibraryItem {
  constructor(title, id, director, duration) {
    super(title, id); // Call the parent constructor
    this.director = director;
    this.duration = duration; // Duration in minutes
  }

  play() {
    console.log(`Now playing DVD: ${this.title} (Director: ${this.director})`);
  }
}

// Child Class: Magazine
class Magazine extends LibraryItem {
  constructor(title, id, issueNumber, publisher) {
    super(title, id); // Call the parent constructor
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }

  displayMagazineInfo() {
    console.log(`Magazine Title: ${this.title}, ID: ${this.id}, Issue: ${this.issueNumber}, Publisher: ${this.publisher}`);
  }
}

// Create instances of each class
console.log("--- Creating Instances ---");
const myBook = new Book("The Hitchhiker's Guide to the Galaxy", "B123", "Douglas Adams", "Sci-Fi");
const myDVD = new DVD("Inception", "D456", "Christopher Nolan", 148);
const myMagazine = new Magazine("National Geographic", "M789", 350, "National Geographic Partners");

console.log("\n--- Testing Book Instance ---");
console.log(`Initial Availability: ${myBook.isAvailable}`);

// Test shared methods (inherited from LibraryItem)
myBook.checkOut();
console.log(`Availability after first checkout: ${myBook.isAvailable}`);
myBook.checkOut(); // Test checking out when already out
myBook.returnItem();
console.log(`Availability after return: ${myBook.isAvailable}`);
myBook.returnItem(); // Test returning when already in

// Test unique method
myBook.displayBookInfo();

console.log("\n--- Testing DVD Instance ---");

// Test shared method
myDVD.checkOut();

// Test unique method
myDVD.play();
myDVD.returnItem();

console.log("\n--- Testing Magazine Instance ---");

// Test shared method
myMagazine.checkOut();

// Test unique method
myMagazine.displayMagazineInfo();
myMagazine.returnItem();