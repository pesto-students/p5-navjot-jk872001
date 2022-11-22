// Call Apply Bind

const generalFunc= function (studio,universe)
{
   console.log(this.name + " has "+ this.strength + " and is from " + studio + " " + universe)
}

const hulkDetails={
    name:"Hulk",
    strength:"Anger"
}
const thorDetails={
    name:"Thor",
    strength:"Hammer"
}

// Call
// generalFunc.call(hulkDetails,"Marvel","Universe");
// generalFunc.call(thorDetails,"Marvel","Universe");

// Apply
// generalFunc.call(hulkDetails,["Marvel","Universe"]);

// Bind
const store=generalFunc.call(hulkDetails,"Marvel","Universe");
store();
